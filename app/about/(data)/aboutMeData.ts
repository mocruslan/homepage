import {v4 as uuidv4} from 'uuid';

interface BioInformation {
    id: string,
    bio: string
}

const aboutMeData: BioInformation[] = [
    {
        id: uuidv4(),
        bio: 'I am a skilled and versatile developer with expertise in web development, Micro Controller' +
            ' Development, AWS infrastructure design, and E-Commerce logistics software. With a strong ' +
            'foundation in IT and a drive for continuous improvement, I approach every project with a blend ' +
            'of technical prowess and a keen eye for detail.',
    },
    {
        id: uuidv4(),
        bio: 'My goal is to create seamless digital experiences that not only meet client objectives but also' +
            ' exceed user expectations. I thrive on the challenges that come with crafting elegant and user-friendly ' +
            'solutions, leveraging my knowledge across different domains to deliver results that truly make a' +
            ' difference. Whether it\'s building responsive websites, optimizing supply chain processes, or ' +
            'designing scalable systems, I am committed to pushing boundaries and finding innovative ways to ' +
            'enhance efficiency, functionality, and overall user satisfaction.',
    },
    {
        id: uuidv4(),
        bio: 'I am always seeking opportunities to further expand my skill set and explore emerging trends and ' +
            'advancements in the field. Let\'s collaborate to transform your ideas into reality, leveraging the ' +
            'power of technology to create remarkable outcomes that leave a lasting impact. Together, we can ' +
            'build a future where innovation and excellence thrive.',
    },
];

export type {BioInformation};
export {aboutMeData};