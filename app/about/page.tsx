import AboutMeBio from "./(components)/AboutMeBio";
import AboutClients from "./(components)/AboutClients";

export default function About() {
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