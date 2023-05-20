import { v4 as uuidv4 } from 'uuid';

const relatedProjectsData = {
	title: 'Related Projects',
	Projects: [
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

export {relatedProjectsData};