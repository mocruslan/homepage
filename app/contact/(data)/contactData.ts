import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { IconType } from "react-icons";

const contactData: { id: number; name: string; icon: IconType }[] = [
  {
    id: 1,
    name: "Graz, Austria",
    icon: FiMapPin,
  },
  {
    id: 2,
    name: "business@mochulskyy.com",
    icon: FiMail,
  },
  {
    id: 3,
    name: "(+43) 699 81460431",
    icon: FiPhone,
  },
];

export {contactData};