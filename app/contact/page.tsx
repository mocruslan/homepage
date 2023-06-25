import React from "react";
import ContactDetails from "./(components)/ContactDetails";
import ContactForm from "./(components)/ContactForm";
import PageTransition from "@/components/animation/PageTransition";

export default function Contact(): React.JSX.Element {
    return (
        <PageTransition>
            <main>
                <div className="container mx-auto flex flex-col-reverse lg:flex-row py-5 lg:py-10 lg:mt-5">
                    <ContactForm/>

                    <ContactDetails/>
                </div>
            </main>
        </PageTransition>
    );
}