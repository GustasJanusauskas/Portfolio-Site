import { Experience, ExpDate } from "./experience";

export const EXPERIENCE_DATA: Experience[] = [
    {
        id:1,
        title:'Software Engineer',
        company:'UVS Group',
        location:'Vilnius, Lithuania',
        responsibilities: [
            'Maintained and extended card authorization system',
            'Modernised old database procedures, implemented ORM into functions'
        ],
        date: new ExpDate(new Date(2025,7),new Date())
    },
    {
        id:1,
        title:'Junior Software Engineer',
        company:'UAB „Higso Bozonas“',
        location:'Vilnius, Lithuania',
        responsibilities: [
            'Designed new features for and maintained several .NET WPF applications',
            'Wrote an inventorization system, integrated with SQL database',
            'Worked with accountants to improve debt tracking system',
            'Taught interns and new employees',
            'Maintained and optimised MS SQL Server procedures'
        ],
        date: new ExpDate(new Date(2023,6),new Date(2025,6)) //new Date(2023,6)
    }
];