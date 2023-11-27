import { Experience, ExpDate } from "./experience";

export const EXPERIENCE_DATA: Experience[] = [
    {
        id:0,
        title:'.NET Developer',
        company:'UAB „Higso Bozonas“',
        location:'Vilnius, Lithuania',
        responsibilities: [
            'Designed new features for and maintained several .NET WPF applications',
            'Wrote an inventorization system, integrated with SQL database',
            'Worked with accountants to improve debt tracking system',
            'Created prepaid invoice system, improved PDF forming feature',
            'Maintained and optimised MS SQL Server procedures'
        ],
        date: new ExpDate(new Date(2023,6),new Date())
    }
];