import React from "react";
import {
    FaSkype,
    FaGithub,
    FaWhatsapp,
    FaLinkedin,
} from "react-icons/fa";    
import { TfiWorld } from "react-icons/tfi";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <div className="socialIcons">
                    <a href="https://harshgajera.in" target="_blank" className="icon">
                        <TfiWorld />
                    </a>
                    <a href="https://in.linkedin.com/in/harsh-gajera-829825224" target="_blank" className="icon">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/Harshgajera1" target="_blank" className="icon">
                        <FaGithub />
                    </a>
                    <a href="https://wa.me/8469366603" target="_blank" className="icon">
                        <FaWhatsapp />
                    </a>
                    <a href="https://join.skype.com/invite/peLI2QM6EnCW" target="_blank" className="icon">
                        <FaSkype />
                    </a>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
