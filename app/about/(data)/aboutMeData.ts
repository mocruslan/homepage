import {v4 as uuidv4} from 'uuid';

interface BioInformation {
    id: string,
    bio: string
}

const aboutMeData: BioInformation[] = [
    {
        id: uuidv4(),
        bio: 'Elit reprehenderit voluptate eiusmod ea nisi velit quis. Nostrud exercitation labore laborum excepteur ' +
            'do do laboris. Culpa cillum ex dolor velit ad duis sunt voluptate minim nostrud. Labore mollit ea ' +
            'consectetur id. Velit minim ad ea duis est reprehenderit nisi consequat aliquip culpa ex anim ullamco.' +
            ' Irure labore et irure id in nostrud commodo. Est consequat elit qui amet deserunt id culpa excepteur ' +
            'voluptate ut pariatur dolor officia. Amet Lorem adipisicing sit dolor sunt duis eiusmod.',
    },
    {
        id: uuidv4(),
        bio: 'Et ea consequat ea nisi cupidatat eiusmod esse laboris id eu in. Nulla dolore nostrud consequat. Sit' +
            ' veniam quis quis eu excepteur consequat occaecat aliqua officia quis. Aute voluptate nisi culpa commodo ' +
            'culpa velit incididunt qui esse velit mollit do. Sit amet veniam laboris. Sit sunt et ipsum nulla nulla' +
            ' fugiat amet irure aute dolor sint occaecat mollit non. Fugiat culpa ex reprehenderit est. Et ullamco' +
            ' eiusmod reprehenderit adipisicing pariatur culpa cillum est ut exercitation enim aliqua officia amet' +
            ' mollit.',
    },
    {
        id: uuidv4(),
        bio: 'Tempor adipisicing quis velit ut esse commodo velit dolor sit proident. Sint culpa voluptate' +
            ' laboris irure commodo aute laborum nisi tempor esse. Occaecat do velit proident minim consectetur' +
            ' laborum nostrud dolore magna ullamco Lorem. Elit do eiusmod velit qui tempor Lorem. Ullamco irure' +
            ' eiusmod minim eu occaecat incididunt.',
    },
];

export type {BioInformation};
export {aboutMeData};