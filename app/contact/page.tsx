import React from "react";
import ContactDetails from "./(components)/ContactDetails";
import ContactForm from "./(components)/ContactForm";

export default function Contact(): React.JSX.Element {
    return (
        <div>
            <div className="container mx-auto flex flex-col-reverse lg:flex-row py-5 lg:py-10 lg:mt-5">
                <ContactForm/>

                <ContactDetails/>
            </div>
        </div>
    );
}