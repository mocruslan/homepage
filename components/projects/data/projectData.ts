import {v4 as uuidv4} from 'uuid';
import {IconType} from "react-icons";
import {FiLinkedin, FiTwitter,} from 'react-icons/fi';

interface ProjectDetail {
    id: string;
    details: string;
}

interface ProjectImage {
    id: string;
    title: string;
    img: string;
}

interface CompanyInfo {
    id: string;
    title: string;
    details: string;
}

interface ProjectHeader {
    title: string;
    publishDate: string;
    tags: string;
}

interface ProjectInfo {
    ClientHeading: string;
    CompanyInfo: CompanyInfo[];
    ObjectivesHeading: string;
    ObjectivesDetails: string;
    Technologies: {
        title: string;
        techs: string[];
    };
    ProjectDetailsHeading: string;
    SocialSharingHeading?: string;
    SocialSharing?: {
        id: string;
        name: string;
        icon: IconType;
        url: string;
    }[];
    ArrProjectDetail: ProjectDetail[];
}

interface Project {
    id: number;
    title: string;
    url: string;
    category: string;
    img: string;
    ProjectHeader: ProjectHeader;
    ArrProjectImage: ProjectImage[];
    ProjectInfo: ProjectInfo;
}

const arrProjectData: Project[] = [
    {
        id: 1,
        title: 'Google Health Platform',
        url: 'google-health-platform',
        category: 'Web Application',
        img: '/images/web-project-2.jpg',
        ProjectHeader: {
            title: 'Google Health Platform',
            publishDate: 'Jul 26, 2021',
            tags: 'UI / Frontend',
        },
        ArrProjectImage: [
            {
                id: uuidv4(),
                title: 'Google Health Platform',
                img: '/images/ui-project-1.jpg',
            },
            {
                id: uuidv4(),
                title: 'Google Health Platform',
                img: '/images/web-project-2.jpg',
            },
            {
                id: uuidv4(),
                title: 'Google Health Platform',
                img: '/images/mobile-project-2.jpg',
            },
        ],
        ProjectInfo: {
            ClientHeading: 'About Client',
            CompanyInfo: [
                {
                    id: uuidv4(),
                    title: 'Name',
                    details: 'Company Ltd',
                },
                {
                    id: uuidv4(),
                    title: 'Services',
                    details: 'Web Development',
                },
                {
                    id: uuidv4(),
                    title: 'Website',
                    details: 'https://company.com',
                },
                {
                    id: uuidv4(),
                    title: 'Phone',
                    details: '555 8888 888',
                },
            ],
            ObjectivesHeading: 'Objective',
            ObjectivesDetails:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
            Technologies:
                {
                    title: 'Tools & Technologies',
                    techs: [
                        'HTML',
                        'CSS',
                        'JavaScript',
                        'Vue.js',
                        'TailwindCSS',
                        'AdobeXD',
                    ],
                },
            ProjectDetailsHeading: 'Challenge',
            ArrProjectDetail: [
                {
                    id: uuidv4(),
                    details:
                        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
                },
                {
                    id: uuidv4(),
                    details:
                        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
                },
                {
                    id: uuidv4(),
                    details:
                        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
                },
                {
                    id: uuidv4(),
                    details:
                        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
                },
            ],
            SocialSharingHeading: 'Share This',
            SocialSharing: [
                {
                    id: uuidv4(),
                    name: 'Twitter',
                    icon: FiTwitter,
                    url: 'https://twitter.com/rumoc_official',
                },
                {
                    id: uuidv4(),
                    name: 'LinkedIn',
                    icon: FiLinkedin,
                    url: 'https://www.linkedin.com/in/ruslan-mochulskyy',
                },
            ],
        },
    },
    {
        id: 2,
        title: 'Phoenix Digital Agency',
        url: 'phoenix-digital-agency',
        category: 'Mobile Application',
        img: '/images/mobile-project-2.jpg',
        ProjectHeader: {
            title: 'Phoenix Digital Agency',
            publishDate: 'Jul 26, 2021',
            tags: 'Mobile Application',
        },
        ArrProjectImage: [
            {
                id: uuidv4(),
                title: 'Phoenix Digital Agency',
                img: '/images/ui-project-1.jpg',
            },
            {
                id: uuidv4(),
                title: 'Phoenix Digital Agency',
                img: '/images/web-project-2.jpg',
            },
            {
                id: uuidv4(),
                title: 'Phoenix Digital Agency',
                img: '/images/mobile-project-2.jpg',
            },
        ],
        ProjectInfo: {
            ClientHeading: 'About Client',
            CompanyInfo: [
                {
                    id: uuidv4(),
                    title: 'Name',
                    details: 'Company Ltd',
                },
                {
                    id: uuidv4(),
                    title: 'Services',
                    details: 'UI Design & Frontend Development',
                },
                {
                    id: uuidv4(),
                    title: 'Website',
                    details: 'https://company.com',
                },
                {
                    id: uuidv4(),
                    title: 'Phone',
                    details: '555 8888 888',
                },
            ],
            ObjectivesHeading: 'Objective',
            ObjectivesDetails:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
            Technologies:
                {
                    title: 'Tools & Technologies',
                    techs: [
                        'HTML',
                        'CSS',
                        'JavaScript',
                        'Vue.js',
                        'TailwindCSS',
                        'AdobeXD',
                    ],
                },
            ProjectDetailsHeading: 'Challenge',
            ArrProjectDetail: [
                {
                    id: uuidv4(),
                    details:
                        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
                },
                {
                    id: uuidv4(),
                    details:
                        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
                },
                {
                    id: uuidv4(),
                    details:
                        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
                },
                {
                    id: uuidv4(),
                    details:
                        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
                },
            ],
            SocialSharingHeading: 'Share This',
            SocialSharing: [
                {
                    id: uuidv4(),
                    name: 'Twitter',
                    icon: FiTwitter,
                    url: 'https://twitter.com/rumoc_official',
                },
                {
                    id: uuidv4(),
                    name: 'LinkedIn',
                    icon: FiLinkedin,
                    url: 'https://www.linkedin.com/in/ruslan-mochulskyy',
                },
            ],
        },
    },
];

function filterProjectsByURL(url: string): Project | undefined {
    return arrProjectData.find((project: Project): boolean => project.url === url);
}

export type {Project, ProjectHeader, ProjectImage, ProjectDetail, ProjectInfo, CompanyInfo};
export type {filterProjectsByURL};
export {arrProjectData};
