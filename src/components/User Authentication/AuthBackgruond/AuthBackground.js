import React from "react";
import LoginImg from '../../../assets/images/login_image1.png';

export const AuthBackground = ({children}) => {
    return (    
        // <section style={{background : `url(${LoginImg})`, height: '100vh'}} className="bg-cover bg-center bg-no-repeat container-fluid bg-dark login-section">
        <section className="container-fluid bg-dark login-section">
            {children}
        </section>
    )
}