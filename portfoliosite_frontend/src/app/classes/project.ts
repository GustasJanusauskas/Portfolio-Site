import { Image } from './image';

export interface Project {
    id: number;

    title: string;
    description: string;
    tools: string;

    link: string;
    projectType?: string;

    images:Image[];
    carouselSpeed?:number;
}