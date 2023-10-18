import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AUTH_TOKEN, BASE_URL } from "../../constants/reduxContants";
import axios from "axios";
import { axiosInstance } from "../../../constants/axiosInstance";
const initialState = {
  msg: "",
  companies: [],
  company: {},
  token: "",
  loading: false,
  error: "",
};

export const createCompany = createAsyncThunk("createCompany", async ({data, formData}) => {
    console.log("entered in create data collections action", data);
    // const { selectedDataPoints, TemplateName, TemplateDescription } = data;
  
  try {
    console.log(formData, 'formData')

    const dataQueryString = new URLSearchParams(data).toString();
    
    const res = await fetch(`${BASE_URL}/api/v1/company/createcompany?${dataQueryString}`, {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
        "auth-token": AUTH_TOKEN
      },
      body: formData  // Include the formData as the request body
    });
    
    return await res.json();

    } catch (error) {
      console.log("error in createData collection");
    }
  }
);

export const updateCompany = createAsyncThunk( "updateCompany", async ({data, updateId}) => {
    console.log("entered in create data collections action", data);
    // const { selectedDataPoints, TemplateName, TemplateDescription } = data;

    try {
      const res = await fetch(
        `${BASE_URL}/api/v1/company/updatecompany/${updateId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            "auth-token": `${AUTH_TOKEN}`,
          },
          body: JSON.stringify(data),
          // body:
        }
      );

      return await res.json();
    } catch (error) {
      console.log("error in createData collection");
    }
  }
);

export const getCompanies = createAsyncThunk(
  "getCompanies",
  async () => {
    console.log("entered in get data collections action");

    try {
      const response = await axios.get(
        `${BASE_URL}/api/v1/company/getallcompanies`,
        {
          headers: {
            "Content-Type": "application/json",
            "auth-token": `${AUTH_TOKEN}`,
          },
        }
      );

      return response.data.data;
    } catch (error) {
      console.log("error in fetching get data collections", error);
    }
  }
);
export const getCompany = createAsyncThunk(
  "getCompany",
  async ({id}) => {
    console.log("entered in get data collections action");

    try {
      const response = await axios.get(
        `${BASE_URL}/api/v1/company/getcompany/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            "auth-token": `${AUTH_TOKEN}`,
          },
        }
      );

      return response.data.data;
    } catch (error) {
      console.log("error in fetching get data collections", error);
    }
  }
);

export const deleteCompanies = createAsyncThunk( "deleteCompanies", async (ids) => {
    console.log("entered in Delete data collections action");

    try {
      const response = await axios.delete(
        `${BASE_URL}/api/v1/company/deletecompanies`,
        {
          headers: {
            "Content-Type": "application/json",
            "auth-token": `${AUTH_TOKEN}`,
          },
          params: {
            IDS : ids
          }
        }
      );

      return response.data.data;
    } catch (error) {
      console.log("error in fetching get data collections", error);
    }
  }
);

const createCompanySlice = createSlice({
  name: "Company",
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    builder
    // .addCase(createCompany.pending, (state) => {
    //   state.loading = true;
    // })
    // .addCase(createCompany.rejected, (state, action) => {
    //   state.loading = false;
    //   state.company = {};
    //   state.error = action.payload;
    // })
    .addCase(createCompany.fulfilled, (state, action) => {
      state.loading = false;
      state.company = action.payload;
      state.error = "";
    })
      
    .addCase(updateCompany.pending, (state) => {
      state.loading = true;
    })
    .addCase(updateCompany.rejected, (state, action) => {
      state.loading = false;
      state.companies = [];
      state.error = action.payload;
    })
    .addCase(updateCompany.fulfilled, (state, action) => {
      state.loading = false;
      state.companies = action.payload;
      state.error = "";
    })
      
    .addCase(getCompanies.pending, (state) => {
      state.loading = true;
    })
    .addCase(getCompanies.rejected, (state, action) => {
      state.loading = false;
      state.companies = [];
      state.error = action.payload;
    })
    .addCase(getCompanies.fulfilled, (state, action) => {
      state.loading = false;
      state.companies = action.payload;
      state.error = "";
    })
      
      
    .addCase(getCompany.pending, (state) => {
      state.loading = true;
    })
    .addCase(getCompany.rejected, (state, action) => {
      state.loading = false;
      state.company = {};
      state.error = action.payload;
    })
    .addCase(getCompany.fulfilled, (state, action) => {
      state.loading = false;
      state.company = action.payload;
      state.error = "";
    })
      
      
    .addCase(deleteCompanies.pending, (state) => {
      state.loading = true;
    })
    .addCase(deleteCompanies.rejected, (state, action) => {
      state.loading = false;
      state.companies = [];
      state.error = action.payload;
    })
    .addCase(deleteCompanies.fulfilled, (state, action) => {
      state.loading = false;
      state.companies = action.payload;
      state.error = "";
    });
    
  },
});

export default createCompanySlice.reducer;
