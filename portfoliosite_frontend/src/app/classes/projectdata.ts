import { Project } from "./project";

export const PROJECT_DATA: Project[] = [
    {
        id:0,
        title:'Social Media Site Mockup',
        description:'Created a fully functional social media site from the ground up, including a back-end powered by NodeJS and PostgreSQL, and a front-end powered by Angular, using Material components.\n\nThe website features a working account, profile, post, messaging and search system, packaged within a modern and responsive UX.',
        images:[
            {path:'assets/project_socialmediasite_1.jpg'},
            {path:'assets/project_socialmediasite_2.jpg'},
            {path:'assets/project_socialmediasite_3.jpg'}
        ],
        tools:'Angular • Material • NodeJS • PostgreSQL',
        link:'https://github.com/GustasJanusauskas/Social-Media-Site'
    },
    {
        id:1,
        title:'Library Catalogue Mockup',
        description:'A fictional library book catalogue, with account, borrowing and reserving functionality, as well as an in-depth search system and a dedicated admin panel.',
        images:[
            {path:'assets/project_bookcatalogue_1.jpg'},
            {path:'assets/project_bookcatalogue_2.jpg'},
            {path:'assets/project_bookcatalogue_3.jpg'}
        ],
        tools:'Angular • Bootstrap • Material • ASP.NET • PostgreSQL',
        link:'https://github.com/GustasJanusauskas/Book-Catalog-Service'
    },
    {
        id:2,
        title:'Portfolio Website',
        description:'A modern and easily expandable portfolio website, built using Angular and Bootstrap. Optimised for easy static hosting.',
        images:[
            {path:'assets/project_portfolio_1.jpg'},
            {path:'assets/project_portfolio_2.jpg'}
        ],
        tools:'Angular • Bootstrap',
        link:''
    },
];