import {v4 as uuidv4} from 'uuid';

const clientsHeading: string = 'Some of the brands I worked with';

const clientsData = [
    {
        id: uuidv4(),
        title: 'Amazon',
        img: '/images/brands/amazon_gray.png',
    },
    {
        id: uuidv4(),
        title: 'Sony',
        img: '/images/brands/sony_gray.png',
    },
    {
        id: uuidv4(),
        title: 'Adidas',
        img: '/images/brands/adidas_gray.png',
    },
    {
        id: uuidv4(),
        title: 'FILA',
        img: '/images/brands/fila_gray.png',
    },
    {
        id: uuidv4(),
        title: 'NB',
        img: '/images/brands/nb_gray.png',
    },
    {
        id: uuidv4(),
        title: 'SAMSUNG',
        img: '/images/brands/samsung_gray.png',
    },
    {
        id: uuidv4(),
        title: 'CANON',
        img: '/images/brands/canon_gray.png',
    },
    {
        id: uuidv4(),
        title: 'PUMA',
        img: '/images/brands/puma_gray.png',
    },
];

export {clientsHeading};
export {clientsData};

