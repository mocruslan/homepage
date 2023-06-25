import React from "react";
import AboutMeBio from "./(components)/AboutMeBio";
import AboutClients from "./(components)/AboutClients";
import PageTransition from "@/components/animation/PageTransition";

export default function About(): React.JSX.Element {
    return (
        <PageTransition>
            <main>
                <div className="container mx-auto">
                    <AboutMeBio/>
                </div>
                <div className="container mx-auto">
                    <AboutClients/>
                </div>
            </main>
        </PageTransition>
    );
}