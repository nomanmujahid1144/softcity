import React from "react";
import LoginImg from '../../../assets/images/login_image1.png';

export const AuthBannerImage = () => {
    return (
        <div className="col p-0">
            <img src={LoginImg} class="img-fluid" alt="" style={{ width: "100vw", height: "100vh" }} />
        </div>
    )
}