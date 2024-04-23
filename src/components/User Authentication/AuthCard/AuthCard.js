import React from "react";

export const AuthCard = ({children}) => {
    return (
        
        <div className="d-flex flex-column px-5 py-3 w-24rem bg-white rounded-5 border translate-form login-left-inner align-items-center gap-4 ">
            {children}
        </div>
    )
}