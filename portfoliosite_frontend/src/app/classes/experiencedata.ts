import { Experience, ExpDate } from "./experience";

export const EXPERIENCE_DATA: Experience[] = [
    {
        id:0,
        title:'.NET Developer',
        company:'UAB „Higso Bozonas“',
        location:'Vilnius, Lithuania',
        responsibilities: [
            'Developed and maintained several .NET applications using C# and WPF',
            'Maintained and extended MS SQL Server databases with a combined >5000 stored procedures',
            'Closely worked with clients to negotiate and implement new features'
        ],
        date: new ExpDate(new Date(2023,6),new Date())
    }
];