import {v4 as uuidv4} from 'uuid';
import {Project} from "@/components/projects/data/projectData";

interface RelatedProjectsData {
	title: string,
	projects: {
		id: string,
		title: string,
		img: string,
	}[],
}

const relatedProjectsData: RelatedProjectsData = {
	title: 'Related Projects',
	projects: [
		{
			id: uuidv4(),
			title: 'Mobile UI',
			img: '/images/ui-project-2.jpg',
		},
		{
			id: uuidv4(),
			title: 'Web Application',
			img: '/images/mobile-project-1.jpg',
		},
		{
			id: uuidv4(),
			title: 'UI Design',
			img: '/images/web-project-1.jpg',
		},
		{
			id: uuidv4(),
			title: 'Kabul Mobile App UI',
			img: '/images/mobile-project-2.jpg',
		},
	],
};

export type {RelatedProjectsData};
export {relatedProjectsData};