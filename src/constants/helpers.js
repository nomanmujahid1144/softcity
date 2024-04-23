export const getUserRole = (userGroups) => {
    let isAdmin = false;
    let isCompanyUser = false;
  
    for (const group of userGroups) {
      if (group.userGroup.roles.administrators) {
        isAdmin = true;
      }else if (group.userGroup.roles.dataCollectors || group.userGroup.roles.dashboardViewers) {
        isCompanyUser = true;
      } else {
        isAdmin = true;
      }
    }
  
    if (isAdmin && isCompanyUser) {
      return { userRole: "both", isAdmin: true , isCompanyUser: true };
    } else if (isAdmin) {
      return { userRole: "admin", isAdmin: true, isCompanyUser: false };
    } else if (isCompanyUser) {
      return { userRole: "companyUser", isAdmin: false, isCompanyUser: true };
    } else {
      return { userRole: "unknown", isAdmin: false, isCompanyUser: false };
    }
}


export const handleApiError = (error) => {
    const errorMessages = {
        400: "Bad Request - The request is malformed or invalid.",
        401: "Authentication Failed. Please try again",
        403: "Forbidden - You do not have permission to access this resource.",
        404: "Not Found - The requested resource does not exist.",
        409: "account with this email already exists.",
      };
    
      const errors = [];
    
      if (error.response) {
        const status = error.response.status;
        const message = errorMessages[status] || "An error occurred";
    
        errors.push({ code: status, message });
      } else if (error.request) {
        errors.push({ code: -1, message: "No response received from the server" });
      } else {
        errors.push({ code: -1, message: "An error occurred" });
      }
    
      return errors;
}

export const getRoleDescription = (role) => {
  if (role === "admin") {
      return "Admin";
  } else if (role === "superAdmin") {
      return "Super Admin";
  } else if (role === "companyUser") {
      return "Company User";
  } else if (role === "both") {
      return "Both";
  } else {
      return "Unknown Role"; // Handle any other input
  }
}


export const getStatusCodes = (object) => {
  // Helper function to calculate the status code recursively
  function getStatus(obj, depth) {
    if (!obj || !obj.subGroup) {
      return depth;
    } else {
      return getStatus(obj.subGroup, depth + 1);
    }
  }

  // Map each object in the array to its status code
  return getStatus(object, 1);
}