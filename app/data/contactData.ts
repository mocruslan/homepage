import {FiMail, FiMapPin, FiPhone} from "react-icons/fi";
import {IconType} from "react-icons";

const contactData: { id: number, name: string, icon: IconType }[] = [
    {
        id: 1,
        name: 'Your Address, Your City, Your Country',
        icon: FiMapPin,
    },
    {
        id: 2,
        name: 'email@domain.com',
        icon: FiMail,
    },
    {
        id: 3,
        name: '555 8888 888',
        icon: FiPhone,
    },
];

export {contactData};