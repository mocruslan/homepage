interface ClientInformation {
    id: string,
    title: string,
    img: string,
}

const clientsHeading: string = 'Some of the brands I worked with';
const clientsData: ClientInformation[] = [];

export type {ClientInformation};
export {clientsHeading, clientsData};