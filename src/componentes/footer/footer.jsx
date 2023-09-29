import React from "react"
import '../footer/style.css';
import images from '../../images/images'

function Footer() {
    return (
        <>
            <div className="social">
                <img src={images.insta} alt="redes sociais" />
                <img src={images.discord} alt="redes sociais" />
                <img src={images.twitter} alt="redes sociais" />
            </div>
            <div className="footer">
                <a href="/">
                    <img src={images.logoBranco} alt="logo" />
                </a>
                <p>Copyright © 2023 bmiz | All Rights Reserved </p>
            </div>
        </>
    )

}

export default Footer