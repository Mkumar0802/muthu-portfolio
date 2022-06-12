import React from "react";
import SocialLinks from "../components/SocialLinks";


function Footer() {


    return (
        <div className="relative">
            <div className="bg-cyan-500 text-white py-20 text-center">
                <h2 className="text-3xl md:text-5xl mb-3">Want to connect?</h2>
                <div className="my-5 md:text-xl  ">
                    <p>
                        Drop me an email at<a href="mailto:https://mkumar0802@gmail.com" target="_blank" rel="noreferrer"> <span className="underline underline-offset-4">mkumar0802@gmail.com</span></a> and let's talk some more!
                    </p>
                    <p>
                        You can also find me on social media, where we can talk and discuss development some more!
                    </p>


                </div>
                <SocialLinks alignment="center" />
                <div className="p-3">
                    <p className="py-2">
                        Made by Muthukumar
                    </p>
                    <p className="py-2">
                        Using React,Tailwind CSS
                    </p>
                    <p className="py-2">
                        All right reserved@{(new Date().getFullYear())}
                    </p>
                </div>

            </div>
        </div>
    )
}




export default Footer;