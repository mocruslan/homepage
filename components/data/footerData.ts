import {FiGithub, FiGlobe, FiLinkedin, FiTwitter} from 'react-icons/fi';

interface SocialLink {
    id: number;
    icon: any;
    url: string;
}

const arrSocialLink: SocialLink[] = [
    {
        id: 1,
        icon: FiGlobe,
        url: 'https://www.mochulskyy.me/',
    },
    {
        id: 2,
        icon: FiGithub,
        url: 'https://github.com/mocruslan',
    },
    {
        id: 3,
        icon: FiTwitter,
        url: 'https://twitter.com/rumoc_official',
    },
    {
        id: 4,
        icon: FiLinkedin,
        url: 'https://www.linkedin.com/in/ruslan-mochulskyy',
    },
];

export type {SocialLink};
export {arrSocialLink};
