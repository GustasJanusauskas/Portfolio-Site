import { Experience, ExpDate } from "./experience";

export const EXPERIENCE_DATA: Experience[] = [
    {
        id:1,
        title:'Software Engineer',
        company:'UVS Group',
        location:'Vilnius, Lithuania',
        responsibilities: [
            'Engineered and maintained Point-of-Sale (POS) solutions, focusing on reliability, extensibility, and multi-client support',
            'Integrated modern .NET applications with legacy systems, enabling seamless interoperability and progressive modernization',
            'Migrated legacy SQL infrastructure to Entity Framework, improving data access efficiency, maintainability, and enabling better integration with modern .NET applications',
            'Designed and implemented scalable microservices to support business growth, improving system performance and resource efficiency under increased load'
        ],
        date: new ExpDate(new Date(2025,5),new Date()) //month is base-0
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
        date: new ExpDate(new Date(2023,6),new Date(2025,5))
    }
];