import React from 'react';
import Logo from "./Logo.jsx";
import Copyright from "./Copyright.jsx";
import FooterMenu from "./FooterMenu.jsx";
import FooterIcon from "./FooterIcon.jsx";
import FooterText from "./FooterText.jsx";

const Footer = () => {
    return (
        <footer className="bg-neutral-800 pb-8 pt-20 text-white sm:pt-24">
            <div className="container mx-auto">
                <div className="xl:grid xl:grid-cols-12 xl:gap-8">
                    <div
                        className="grid grid-cols-2 gap-8 md:grid md:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:col-span-7 xl:grid-cols-5"
                    >
                        <Logo/>
                        <FooterMenu/>
                        <FooterIcon/>
                    </div>
                    <FooterText/>
                </div>
            </div>
            <Copyright/>
        </footer>
    );
};

export default Footer;
