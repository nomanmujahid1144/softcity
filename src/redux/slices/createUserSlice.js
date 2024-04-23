import { createSlice, createAsyncThunk  } from "@reduxjs/toolkit";
import { axiosInstance } from "../../constants/axiosInstance";
import { handleApiError } from "../../constants/helpers";
import { AUTH_TOKEN } from "../constants/reduxContants";
import { setUserAuth } from "./authSlice";

const initialState = {
  msg: "",
  user: {},
  singleUser: {},
  users: [],
  token: "",
  loading: false,
  error: "",
};

export const createUser = createAsyncThunk("createuser", async (params) => {
  const { data, profilePhoto, alert } = params;
  console.log("entered in create user action", data);
  
  try {
    const formData = new FormData();
    formData.append('profilePhoto', profilePhoto);
  
    const res = await axiosInstance.post('/api/v1/auth/signup', formData , {
      params: {
        values: data
      }
    })
    if (res.data.success) { 
      alert.success('User create Successfully');
      return await res.data;
    } else {
      alert.success(res.data.message);
    }
  } catch (error) {
    console.log(error);
    alert.success(error.response.data.message);
  }
});


export const updateUser = createAsyncThunk("updateUser", async (params) => {
  const { data, profilePhoto,userId, alert } = params;
  console.log("entered in update user action", data);
  try {
    const formData = new FormData();
    formData.append('profilePhoto', profilePhoto);

    const res = await axiosInstance.patch('/api/v1/auth/updateuser', formData , {
      params: {
        values: data,
        id:userId
      }
    })
    if (res.data.success) {
      alert.success('User update Successfully');
      return await res.data;
    } else {
        alert.success(res.data.message);
    }
  } catch (error) {
    console.log(error);
    alert.success(error.response.data.message);
  }
});

export const userLogin = ({ data, navigate, alert, location}) => {

  return async (dispatch) => {
    console.log("entered in create user action", { data });
    try {
      const res = await axiosInstance.post("/api/v1/auth/login", data);
      
      console.log(res.data?.data, 'Login User')

      if (res.data?.token) {
        const administrativeRoles = res.data?.data?.administrativeRole;
        const role = res.data?.data?.role;
        const newToken = res.data?.token;
        const id = res.data?.data._id;
        
        // Update the AUTH_TOKEN in localStorage
        localStorage.setItem("AUTH_TOKEN", newToken);
        localStorage.setItem("role", role);
        localStorage.setItem("id", id);
        localStorage.setItem("roles", administrativeRoles !== null ? JSON.stringify(administrativeRoles.roles) : null);
        console.log(administrativeRoles, 'administrativeRoles')
        
        // Dispatch the token to Redux if needed
        dispatch(setUserAuth({
          authToken: newToken,
          userRole: role === 'companyUser' ? 'companyUser' :
                    role === 'admin' ? 'admin' :
                    role === 'superAdmin' ? 'superAdmin' : 
                    'both',
          id: id,
          roles: administrativeRoles !== null ? administrativeRoles?.roles : null
        }));

        alert.show("Logged In Successfully");
        navigate(`${role === 'companyUser' ? '/' : '/admin'}`);

      } else {
        // Handle the case where the API response does not contain a token
        alert.error("Login failed. Please check your credentials.");
      }
    } catch (err) {
      const error = handleApiError(err);
      console.log(error,'this is the error message')
      alert.error(error.length > 0 ? error[0].message : "Something went wrong");
    }
  };
};

// export const userLogin = createAsyncThunk("userLogin", async ({ data, navigate, alert }) => {
//   console.log('HERE')
//   console.log("entered in create user action", data);
//   await axiosInstance.post('/api/v1/auth/login', JSON.stringify(data), {
//     headers: {
//       "Content-Type": "application/json",
//     }
//   }).then(async (res) => {
//     console.log(res.data.token, 'response')

//     const newToken = res.data?.token;

//     // Update the AUTH_TOKEN in the store
//     // dispatch(updateAuthToken(newToken));

//     // Update the AUTH_TOKEN in localStorage
//     localStorage.setItem("AUTH_TOKEN", newToken);

//   //   setTimeout(() => {
//   //     localStorage.setItem("token", res.data.data?.token);
//   //     alert.show(res.data.message.toString());
//   //     if (targetUrl) {
//   //       navigate(targetUrl);
//   //     } else {
//   //       navigate("/");
//   //     }
//   // },500)
//   }).catch((err) => {
//     const error = handleApiError(err);
//     console.log(error)
//     alert.error(error.length > 0 ? error[0].message : "Something went Wrong");
//   })
// });

export const getAllUsers = createAsyncThunk("getAllUsers", async () => {
  try {
    const res = await axiosInstance.get(`/api/v1/auth/get-all-company-users`, {
      headers: {
        "Content-Type": "application/json",
      }
    });

    return res.data.data;
  } catch (error){
    console.log("error in fetching get data point", error);
  }
  
});

export const getUser = createAsyncThunk("getUser", async ({id}) => {
  try {
    console.log(id, 'ID')
    const response = await axiosInstance.get(`/api/v1/auth/getsingleuser/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
          "auth-token": `${AUTH_TOKEN}`,
        },
      }
    );

    console.log("response", response.data.data)
    return response.data.data;
  } catch (error) {
    console.log("error in fetching get data point", error);
  }
});

export const deleteUser = createAsyncThunk("deleteUser", async (ids) => {
  console.log("entered in Delete User action");

  try {
    const response = await axiosInstance.delete(`/api/v1/auth/deleteuser`,{
        headers: {
          "Content-Type": "application/json"
        },
        params: {
          IDS : ids
        }
      });

    return response.data.data;
  } catch (error) {
    console.log("error in fetching get data collections", error);
  }
}
);


const createUserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(createUser.rejected, (state, action) => {
        console.log(action, 'action rejected')
        state.loading = false;
        state.user = [];
        state.msg = "Failed"
        state.error = action.payload;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        console.log(action, 'action Fultilled')
        state.loading = false;
        state.user = action.payload;
        state.error = "";
      })

      // .addCase(userLogin.pending, (state) => {
      //   state.loading = true;
      // })
      // .addCase(userLogin.rejected, (state, action) => {
      //   state.loading = false;
      //   state.user = {};
      //   state.msg = "Failed"
      //   state.error = action.payload;
      // })
      // .addCase(userLogin.fulfilled, (state, action) => {
      //   state.loading = false;
      //   state.token = action.payload;
      //   state.user = action.payload;
      //   state.error = "";
      // })
    
      .addCase(getAllUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        state.loading = false;
        state.users = [];
        state.error = action.payload;
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
        state.error = "";
      })
      
      .addCase(getUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.loading = false;
        state.singleUser = {};
        state.error = action.payload;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.loading = false;
        state.singleUser = action.payload;
        state.error = "";
      })


      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.loading = false;
        state.users = [];
        state.error = action.payload;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
        state.error = "";
      })
    

      .addCase(updateUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.users = [];
        state.msg = "Failed"
        state.error = action.payload;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
        state.error = "";
      });

  },
});

export default createUserSlice.reducer;
