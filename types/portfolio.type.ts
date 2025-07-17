export interface ProjectType {
	title: string;
	description: string;
	image: string;
	technologies: string[];
	liveUrl?: string;
	githubUrl?: string;
	category: string;
}

export interface onGoingProject {
	image: string;
	languages: string;
	title: string;
	description: string;
	progress: string;
	live?: string;
}
