import { Project } from "./project";

export const PROJECT_DATA: Project[] = [
    {
        id:0,
        title:'Social Media Site Mockup',
        description:'Created a fully functional social media site from the ground up, including a back-end powered by NodeJS and PostgreSQL, and a front-end powered by Angular, using Material components.\n\nThe website features a working account, profile, post, messaging and search system, packaged with a modern and responsive UX.',
        images:[
            {path:'assets/project_socialmediasite_1.png'},
            {path:'assets/project_socialmediasite_2.png'},
            {path:'assets/project_socialmediasite_3.png'}
        ],
        tools:'Angular • Material • NodeJS • PostgreSQL',
        link:'https://github.com/GustasJanusauskas/Social-Media-Site'
    },

    {
        id:1,
        title:'Library Catalogue Mockup',
        description:'A fictional library book catalogue, with account, borrowing and reserving functionality, as well as an in-depth search system and a dedicated admin panel.',
        images:[
            {path:'assets/project_bookcatalogue_1.png'},
            {path:'assets/project_bookcatalogue_2.png'},
            {path:'assets/project_bookcatalogue_3.png'}
        ],
        tools:'Angular • Bootstrap • Material • ASP.NET • PostgreSQL',
        link:'https://github.com/GustasJanusauskas/Book-Catalog-Service'
    },
];