import {v4 as uuidv4} from 'uuid';
import AmazonImage from '/images/brands/amazon_gray.png';
import SonyImage from '/images/brands/sony_gray.png';
import AdidasImage from '/images/brands/adidas_gray.png';
import FilaImage from '/images/brands/fila_gray.png';
import NBImage from '/images/brands/nb_gray.png';
import SamsungImage from '/images/brands/samsung_gray.png';
import CanonImage from '/images/brands/canon_gray.png';
import PumaImage from '/images/brands/puma_gray.png';

const clientsHeading: string = 'Some of the brands I worked with';

const clientsData = [
    {
        id: uuidv4(),
        title: 'Amazon',
        img: AmazonImage,
    },
    {
        id: uuidv4(),
        title: 'Sony',
        img: SonyImage,
    },
    {
        id: uuidv4(),
        title: 'Adidas',
        img: AdidasImage,
    },
    {
        id: uuidv4(),
        title: 'FILA',
        img: FilaImage,
    },
    {
        id: uuidv4(),
        title: 'NB',
        img: NBImage,
    },
    {
        id: uuidv4(),
        title: 'SAMSUNG',
        img: SamsungImage,
    },
    {
        id: uuidv4(),
        title: 'CANON',
        img: CanonImage,
    },
    {
        id: uuidv4(),
        title: 'PUMA',
        img: PumaImage,
    },
];

export {clientsHeading};
export {clientsData};

