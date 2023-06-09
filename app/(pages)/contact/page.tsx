import Details from "./(components)/Details";

export default function Contact() {
    return (
        <div>
            <div className="container mx-auto flex flex-col-reverse lg:flex-row py-5 lg:py-10 lg:mt-5">
                <ContactForm/>

                <Details/>
            </div>
        </div>
    );
}