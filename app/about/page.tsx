import React from "react";
import AboutMeBio from "./(components)/AboutMeBio";
import AboutClients from "./(components)/AboutClients";

export default function About(): React.JSX.Element {
    return (
        <div>
            <div className="container mx-auto">
                <AboutMeBio/>
            </div>
            <div
                className="container mx-auto"
            >
                <AboutClients/>
            </div>
        </div>
    );
}