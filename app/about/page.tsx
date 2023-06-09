import AboutMeBio from "./(components)/AboutMeBio";
import AboutClients from "./(components)/AboutClients";

export default function About() {
    return (
        <div>
            <div
                // initial={{opacity: 0}}
                // animate={{opacity: 1}}
                // exit={{opacity: 0}}
                className="container mx-auto"
            >
                <AboutMeBio/>
            </div>

            {/** Counter without paddings */}
            <div
                // initial={{opacity: 0}}
                // animate={{opacity: 1}}
                // exit={{opacity: 0}}
            >
                {/*<AboutCounter/>*/}
            </div>

            <div
                // initial={{opacity: 0}}
                // animate={{opacity: 1}}
                // exit={{opacity: 0}}
                className="container mx-auto"
            >
                <AboutClients/>
            </div>
        </div>
    );
}