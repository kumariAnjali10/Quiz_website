const questions = [
        {
            question: "What is a variable in programming?",
            answers: [
                { text: "A container for storing data values", correct: true },
                { text: "A function that performs a specific task", correct: false },
                { text: "A type of loop", correct: false },
                { text: "A way to define constants", correct: false }
            ]
        },
        {
            question: "What does 'DOM' stand for in web development?",
            answers: [
                { text: "Data Object Model", correct: false },
                { text: "Document Object Model", correct: true },
                { text: "Data Object Manipulation", correct: false },
                { text: "Document Object Manipulation", correct: false }
            ]
        },
        {
            question: "What does 'HTTP' stand for?",
            answers: [
                { text: "HyperText Transfer Protocol", correct: true },
                { text: "HyperText Transfer Program", correct: false },
                { text: "HyperText Transition Protocol", correct: false },
                { text: "HyperText Transmission Protocol", correct: false }
            ]
        },
        {
            question: "What is the purpose of 'console.log()' in JavaScript?",
            answers: [
                { text: "To display data in the browser's console", correct: true },
                { text: "To print text on the web page", correct: false },
                { text: "To log errors in the console", correct: false },
                { text: "To execute a function", correct: false }
            ]
        },
        {
            question: "What is an 'array' in JavaScript?",
            answers: [
                { text: "A data type that stores a collection of elements", correct: true },
                { text: "A way to loop through code", correct: false },
                { text: "A conditional statement", correct: false },
                { text: "A type of variable", correct: false }
            ]
        },
    {
        question: "What is a function in programming?",
        answers: [
            { text: "A reusable block of code that performs a specific task", correct: true },
            { text: "A way to define variables", correct: false },
            { text: "A data structure", correct: false },
            { text: "A type of loop", correct: false }
        ]
    },
    {
        question: "What is the purpose of 'if' statements in programming?",
        answers: [
            { text: "To execute code repeatedly", correct: false },
            { text: "To perform actions based on conditions", correct: true },
            { text: "To define functions", correct: false },
            { text: "To declare variables", correct: false }
        ]
    },
    {
        question: "What is the difference between '== ' and '===' in JavaScript?",
        answers: [
            { text: "They are the same", correct: false },
            { text: "=== compares both value and type, == compares only value", correct: true },
            { text: "== compares both value and type, === compares only value", correct: false },
            { text: "=== is used for assignment, == is used for comparison", correct: false }
        ]
    },
    {
        question: "What is a 'method' in programming?",
        answers: [
            { text: "A way to declare variables", correct: false },
            { text: "A data type", correct: false },
            { text: "A function that belongs to an object", correct: true },
            { text: "A type of loop", correct: false }
        ]
    },
    {
        question: "What does 'API' stand for?",
        answers: [
            { text: "Application Programming Interface", correct: true },
            { text: "Application Protocol Interface", correct: false },
            { text: "Automated Programming Interface", correct: false },
            { text: "Automated Protocol Interface", correct: false }
        ]
    },
    {
        question: "What is the purpose of 'git' in software development?",
        answers: [
            { text: "To write code", correct: false },
            { text: "To debug code", correct: false },
            { text: "To manage version control", correct: true },
            { text: "To deploy applications", correct: false }
        ]
    },
    {
        question: "What is the purpose of 'npm' in JavaScript development?",
        answers: [
            { text: "To write code", correct: false },
            { text: "To manage dependencies", correct: true },
            { text: "To debug code", correct: false },
            { text: "To deploy applications", correct: false }
        ]
    },
    {
        question: "What does 'SQL' stand for?",
        answers: [
            { text: "Structured Question Language", correct: false },
            { text: "Structured Query Language", correct: true },
            { text: "Sequential Query Language", correct: false },
            { text: "Sequential Question Language", correct: false }
        ]
    },
    {
        question: "What is 'AJAX' in web development?",
        answers: [
            { text: "A programming language", correct: false },
            { text: "A web framework", correct: false },
            { text: "A technique for asynchronous communication between client and server", correct: true },
            { text: "A data structure", correct: false }
        ]
    },
    {
        question: "What does 'URL' stand for?",
        answers: [
            { text: "Universal Resource Locator", correct: true },
            { text: "Uniform Resource Locator", correct: false },
            { text: "Unified Resource Locator", correct: false },
            { text: "Unique Resource Locator", correct: false }
        ]
    },
    {
        question: "What is 'JSON' in web development?",
        answers: [
            { text: "A programming language", correct: false },
            { text: "A data format for exchanging data", correct: true },
            { text: "A web framework", correct: false },
            { text: "A method for styling web pages", correct: false }
        ]
    },
    {
        question: "What does 'DOM' stand for in web development?",
        answers: [
            { text: "Data Object Model", correct: false },
            { text: "Document Object Model", correct: true },
            { text: "Data Object Manipulation", correct: false },
            { text: "Document Object Manipulation", correct: false }
        ]
    },
    {
        question: "What is a 'parameter' in programming?",
        answers: [
            { text: "A variable used to store data", correct: false },
            { text: "A function that performs a specific task", correct: false },
            { text: "A value passed to a function", correct: true },
            { text: "A type of loop", correct: false }
        ]
    },
    {
        question: "What does 'IDE' stand for in software development?",
        answers: [
            { text: "Integrated Development Environment", correct: true },
            { text: "Integrated Design Environment", correct: false },
            { text: "Interactive Development Environment", correct: false },
            { text: "Integrated Deployment Environment", correct: false }
        ]
    },
    {
        question: "What is 'Object-Oriented Programming'?",
        answers: [
            { text: "A programming paradigm based on objects", correct: true },
            { text: "A type of loop", correct: false },
            { text: "A data structure", correct: false },
            { text: "A way to declare variables", correct: false }
        ]
    },
    {
        question: "What is 'HTTP' in web development?",
        answers: [
            { text: "Hypertext Transfer Protocol", correct: true },
            { text: "Hypertext Transfer Program", correct: false },
            { text: "Hypertext Transition Protocol", correct: false },
            { text: "Hypertext Transmission Protocol", correct: false }
        ]
    },
    {
        question: "What is 'HTTPS' in web development?",
        answers: [
            { text: "Hypertext Transfer Program Security", correct: false },
            { text: "Hypertext Transfer Protocol Secure", correct: true },
            { text: "Hypertext Transition Protocol Secure", correct: false },
            { text: "Hypertext Transmission Protocol Secure", correct: false }
        ]
    },
    {
        question: "What does 'API' stand for in web development?",
        answers: [
            { text: "Application Programming Interface", correct: true },
            { text: "Application Protocol Interface", correct: false },
            { text: "Automated Programming Interface", correct: false },
            { text: "Automated Protocol Interface", correct: false }
        ]
    },
    {
        question: "What is 'AJAX' in web development?",
        answers: [
            { text: "Asynchronous JavaScript and XML", correct: true },
            { text: "Asynchronous JavaScript and XHTML", correct: false },
           

 { text: "Automated JavaScript and XML", correct: false },
            { text: "Automated JavaScript and XHTML", correct: false }
        ]
    },
    {
        question: "What is 'Bootstrap' in web development?",
        answers: [
            { text: "A programming language", correct: false },
            { text: "A web framework", correct: true },
            { text: "A data format for exchanging data", correct: false },
            { text: "A method for styling web pages", correct: false }
        ]
    },
    {
        question: "What is 'React' in web development?",
        answers: [
            { text: "A programming language", correct: false },
            { text: "A web framework", correct: false },
            { text: "A JavaScript library for building user interfaces", correct: true },
            { text: "A method for styling web pages", correct: false }
        ]
    },
    {
        question: "What is 'Angular' in web development?",
        answers: [
            { text: "A programming language", correct: false },
            { text: "A web framework", correct: false },
            { text: "A JavaScript framework for building web applications", correct: true },
            { text: "A method for styling web pages", correct: false }
        ]
    },
    {
        question: "What is 'Vue.js' in web development?",
        answers: [
            { text: "A programming language", correct: false },
            { text: "A web framework", correct: false },
            { text: "A JavaScript framework for building user interfaces", correct: true },
            { text: "A method for styling web pages", correct: false }
        ]
    },
    {
        question: "What is 'Node.js' in web development?",
        answers: [
            { text: "A programming language", correct: false },
            { text: "A web framework", correct: false },
            { text: "A JavaScript runtime environment", correct: true },
            { text: "A method for styling web pages", correct: false }
        ]
    },
    {
        question: "What is 'MongoDB' in web development?",
        answers: [
            { text: "A programming language", correct: false },
            { text: "A web framework", correct: false },
            { text: "A NoSQL database", correct: true },
            { text: "A method for styling web pages", correct: false }
        ]
    },
    {
        question: "What is 'SQL' in web development?",
        answers: [
            { text: "Structured Question Language", correct: false },
            { text: "Structured Query Language", correct: true },
            { text: "Sequential Query Language", correct: false },
            { text: "Sequential Question Language", correct: false }
        ]
    },
    {
        question: "What is 'MySQL' in web development?",
        answers: [
            { text: "A programming language", correct: false },
            { text: "A web framework", correct: false },
            { text: "A relational database management system", correct: true },
            { text: "A method for styling web pages", correct: false }
        ]
    },
    {
        question: "What is 'SQLite' in web development?",
        answers: [
            { text: "A programming language", correct: false },
            { text: "A web framework", correct: false },
            { text: "A lightweight relational database management system", correct: true },
            { text: "A method for styling web pages", correct: false }
        ]
    },
    {
        question: "What is 'REST' in web development?",
        answers: [
            { text: "Representational State Transfer", correct: true },
            { text: "Relational State Transfer", correct: false },
            { text: "Resource State Transfer", correct: false },
            { text: "Remote State Transfer", correct: false }
        ]
    },
    {
        question: "What is 'JSON' in web development?",
        answers: [
            { text: "JavaScript Object Notation", correct: true },
            { text: "JavaScript Object Network", correct: false },
            { text: "JavaScript Object Number", correct: false },
            { text: "JavaScript Object Navigator", correct: false }
        ]
    },
    {
        question: "What does 'DOM' stand for in web development?",
        answers: [
            { text: "Data Object Model", correct: false },
            { text: "Document Object Model", correct: true },
            { text: "Data Object Manipulation", correct: false },
            { text: "Document Object Manipulation", correct: false }
        ]
    },
    {
        question: "What is 'XML' in web development?",
        answers: [
            { text: "Extensible Markup Language", correct: true },
            { text: "Extensible Mode Language", correct: false },
            { text: "Extended Markup Language", correct: false },
            { text: "Extended Mode Language", correct: false }
        ]
    },
    {
        question: "What is 'XHTML' in web development?",
        answers: [
            { text: "Extensible HyperText Markup Language", correct: true },
            { text: "Extended HyperText Markup Language", correct: false },
            { text: "Extensible Mode Markup Language", correct: false },
            { text: "Extended Mode Markup Language", correct: false }
        ]
    },
    {
        question: "What is 'AJAX' in web development?",
        answers: [
            { text: "Asynchronous JavaScript and XML", correct: true },
            { text: "Asynchronous JavaScript and XHTML", correct: false },
            { text: "Automated JavaScript and XML", correct: false },
            { text: "Automated JavaScript and XHTML", correct: false }
        ]
    },
    {
        question: "What is 'API' in web development?",
        answers: [
            { text: "Application Programming Interface", correct: true },
            { text: "Application Protocol Interface", correct: false },
            { text: "Automated Programming Interface", correct: false },
            { text: "Automated Protocol Interface", correct: false }
        ]
    },
    {
        question: "What is 'SVG' in web development?",
        answers: [
            { text: "Scalable Vector Graphics", correct: true },
            { text: "Scalable View Graphics", correct: false },
            { text: "Scalable Visual Graphics", correct: false },
            { text: "Scalable Value Graphics", correct: false }
        ]
    },
    {
        question: "What is 'Canvas' in web development?",
        answers: [
            { text: "A programming language", correct: false },
            { text: "A web framework", correct: false },
            { text: "A HTML element used for drawing graphics", correct: true },
            { text: "A method for styling web pages", correct: false }
        ]
    },
    {
        question: "What is 'Webpack' in web development?",
        answers: [
            { text: "A module bundler", correct: true },
            { text: "A JavaScript framework", correct: false },
            { text: "A build tool", correct: false },
           

 { text: "A testing library", correct: false }
        ]
    },
    {
        question: "What is 'Babel' in web development?",
        answers: [
            { text: "A module bundler", correct: false },
            { text: "A JavaScript framework", correct: false },
            { text: "A transpiler", correct: true },
            { text: "A testing library", correct: false }
        ]
    },
    {
        question: "What is 'TypeScript' in web development?",
        answers: [
            { text: "A programming language", correct: false },
            { text: "A JavaScript library", correct: false },
            { text: "A superset of JavaScript", correct: true },
            { text: "A testing library", correct: false }
        ]
    },
    {
        question: "What is 'Redux' in web development?",
        answers: [
            { text: "A programming language", correct: false },
            { text: "A JavaScript framework", correct: false },
            { text: "A state management library for JavaScript apps", correct: true },
            { text: "A testing library", correct: false }
        ]
    },
    {
        question: "What is 'GraphQL' in web development?",
        answers: [
            { text: "A programming language", correct: false },
            { text: "A JavaScript framework", correct: false },
            { text: "A query language for APIs", correct: true },
            { text: "A testing library", correct: false }
        ]
    },
    {
        question: "What is 'JWT' in web development?",
        answers: [
            { text: "JavaScript Web Tokens", correct: false },
            { text: "Java Web Tokens", correct: false },
            { text: "JSON Web Tokens", correct: true },
            { text: "Java Web Tokens", correct: false }
        ]
    },
    {
        question: "What is 'OAuth' in web development?",
        answers: [
            { text: "Open Authorization", correct: true },
            { text: "Open Authentication", correct: false },
            { text: "Open Access", correct: false },
            { text: "Open Authority", correct: false }
        ]
    },
    {
        question: "What is 'SSL' in web development?",
        answers: [
            { text: "Secure Socket Layer", correct: true },
            { text: "Secure System Layer", correct: false },
            { text: "Secure Software Layer", correct: false },
            { text: "Secure Scripting Layer", correct: false }
        ]
    },
    {
        question: "What is 'TLS' in web development?",
        answers: [
            { text: "Transport Layer Security", correct: true },
            { text: "Transfer Layer Security", correct: false },
            { text: "Transmission Layer Security", correct: false },
            { text: "Transportation Layer Security", correct: false }
        ]
    },
    {
        question: "What is 'SSH' in web development?",
        answers: [
            { text: "Secure Socket Host", correct: false },
            { text: "Secure Shell", correct: true },
            { text: "Secure Socket Host", correct: false },
            { text: "Secure Scripting Host", correct: false }
        ]
    },
    {
        question: "What is 'DNS' in web development?",
        answers: [
            { text: "Domain Name Server", correct: true },
            { text: "Domain Name System", correct: false },
            { text: "Domain Networking System", correct: false },
            { text: "Domain Networking Server", correct: false }
        ]
    },
    {
        question: "What is 'CI/CD' in web development?",
        answers: [
            { text: "Continuous Integration/Continuous Deployment", correct: true },
            { text: "Continuous Improvement/Continuous Development", correct: false },
            { text: "Continuous Iteration/Continuous Deployment", correct: false },
            { text: "Continuous Integration/Continuous Distribution", correct: false }
        ]
    },
    {
        question: "What is 'Docker' in web development?",
        answers: [
            { text: "A containerization platform", correct: true },
            { text: "A JavaScript library", correct: false },
            { text: "A version control system", correct: false },
            { text: "A testing library", correct: false }
        ]
    },
    {
        question: "What is 'Kubernetes' in web development?",
        answers: [
            { text: "A container orchestration platform", correct: true },
            { text: "A JavaScript library", correct: false },
            { text: "A version control system", correct: false },
            { text: "A testing library", correct: false }
        ]
    },
    {
        question: "What is 'AWS' in web development?",
        answers: [
            { text: "Amazon Web Services", correct: true },
            { text: "Advanced Web Services", correct: false },
            { text: "Automated Web Services", correct: false },
            { text: "Application Web Services", correct: false }
        ]
    },
    {
        question: "What is 'Azure' in web development?",
        answers: [
            { text: "Microsoft Azure", correct: true },
            { text: "Amazon Azure", correct: false },
            { text: "Apple Azure", correct: false },
            { text: "Android Azure", correct: false }
        ]
    },

    {
        question: "What is 'SEO' in web development?",
        answers: [
            { text: "Search Engine Optimization", correct: true },
            { text: "Search Engine Operation", correct: false },
            { text: "Search Engine Online", correct: false },
            { text: "Search Engine Organizer", correct: false }
        ]
    },
    {
        question: "What is 'CMS' in web development?",
        answers: [
            { text: "Content Management System", correct: true },
            { text: "Customer Management System", correct: false },
            { text: "Control Management System", correct: false },
            { text: "Code Management System", correct: false }
        ]
    },
    {
        question: "What is 'SQL Injection'?",
        answers: [
            { text: "A technique to inject SQL code into a database query", correct: true },
            { text: "A type of error in SQL syntax", correct: false },
            { text: "A method to secure databases", correct: false },
            { text: "A database management tool", correct: false }
        ]
    },
    {
        question: "What is 'XSS' in web development?",
        answers: [
            { text: "Cross-Site Scripting", correct: true },
            { text: "Extended Server Side", correct: false },
            { text: "External Style Sheet", correct: false },
            { text: "XML Security Standards", correct: false }
        ]
    },
    {
        question: "What is 'CSRF' in web development?",
        answers: [
            { text: "Cross-Site Request Forgery", correct: true },
            { text: "Cross-Site Reference Forgery", correct: false },
            { text: "Cross-Site Resource Forgery", correct: false },
            { text: "Cross-Site Request Falsification", correct: false }
        ]
    },
    {
        question: "What is 'JWT' in web development?",
        answers: [
            { text: "JSON Web Token", correct: true },
            { text: "Java Web Token", correct: false },
            { text: "JavaScript Web Token", correct: false },
            { text: "JavaScript Web Technology", correct: false }
        ]
    },
    {
        question: "What is 'SaaS' in web development?",
        answers: [
            { text: "Software as a Service", correct: true },
            { text: "Storage as a Service", correct: false },
            { text: "Security as a Service", correct: false },
            { text: "Server as a Service", correct: false }
        ]
    },
    {
        question: "What is 'PaaS' in web development?",
        answers: [
            { text: "Platform as a Service", correct: true },
            { text: "Programming as a Service", correct: false },
            { text: "Process as a Service", correct: false },
            { text: "Product as a Service", correct: false }
        ]
    },
    {
        question: "What is 'IaaS' in web development?",
        answers: [
            { text: "Infrastructure as a Service", correct: true },
            { text: "Internet as a Service", correct: false },
            { text: "Innovation as a Service", correct: false },
            { text: "Identity as a Service", correct: false }
        ]
    },
    {
        question: "What is 'DevOps' in web development?",
        answers: [
            { text: "Development and Operations", correct: true },
            { text: "Developer Options", correct: false },
            { text: "Development Opportunities", correct: false },
            { text: "Development Operations", correct: false }
        ]
    },
    {
        question: "What is 'Agile' in software development?",
        answers: [
            { text: "A software development methodology", correct: true },
            { text: "A programming language", correct: false },
            { text: "A version control system", correct: false },
            { text: "A web framework", correct: false }
        ]
    },
    {
        question: "What is 'Scrum' in software development?",
        answers: [
            { text: "A framework for managing and organizing work", correct: true },
            { text: "A programming language", correct: false },
            { text: "A version control system", correct: false },
            { text: "A web framework", correct: false }
        ]
    },
    {
        question: "What is 'Kanban' in software development?",
        answers: [
            { text: "A method for managing knowledge work", correct: true },
            { text: "A programming language", correct: false },
            { text: "A version control system", correct: false },
            { text: "A web framework", correct: false }
        ]
    },
    {
        question: "What is 'Git' in software development?",
        answers: [
            { text: "A distributed version control system", correct: true },
            { text: "A programming language", correct: false },
            { text: "A web framework", correct: false },
            { text: "A database management system", correct: false }
        ]
    },
    {
        question: "What is 'GitHub' in software development?",
        answers: [
            { text: "A web-based hosting service for version control using Git", correct: true },
            { text: "A programming language", correct: false },
            { text: "A version control system", correct: false },
            { text: "A database management system", correct: false }
        ]
    },
    {
        question: "What is 'Bitbucket' in software development?",
        answers: [
            { text: "A web-based hosting service for version control using Git and Mercurial", correct: true },
            { text: "A programming language", correct: false },
            { text: "A version control system", correct: false },
            { text: "A database management system", correct: false }
        ]
    },
    {
        question: "What is 'Mercurial' in software development?",
        answers: [
            { text: "A distributed version control system", correct: true },
            { text: "A programming language", correct: false },
            { text: "A web framework", correct: false },
            { text: "A database management system", correct: false }
        ]
    },
    {
        question: "What is 'JIRA' in software development?",
        answers: [
            { text: "A project management tool", correct: true },
            { text: "A programming language", correct: false },
            { text: "A version control system", correct: false },
            { text: "A web framework", correct: false }
        ]
    },
    {
        question: "What is 'Trello' in software development?",
        answers: [
            { text: "A project management tool", correct: true },
            { text: "A programming language", correct: false },
            { text: "A version control system", correct: false },
            { text: "A web framework", correct: false }
        ]
    },
   

 {
        question: "What is 'Slack' in software development?",
        answers: [
            { text: "A communication platform for teams", correct: true },
            { text: "A programming language", correct: false },
            { text: "A version control system", correct: false },
            { text: "A web framework", correct: false }
        ]
    },
    {
        question: "What is 'Confluence' in software development?",
        answers: [
            { text: "A collaboration software", correct: true },
            { text: "A programming language", correct: false },
            { text: "A version control system", correct: false },
            { text: "A web framework", correct: false }
        ]
    },
    {
        question: "What is 'Continuous Integration' in software development?",
        answers: [
            { text: "A software development practice where members of a team integrate their work frequently", correct: true },
            { text: "A programming language", correct: false },
            { text: "A version control system", correct: false },
            { text: "A web framework", correct: false }
        ]
    },
    {
        question: "What is 'Continuous Deployment' in software development?",
        answers: [
            { text: "A software development practice where code changes are automatically built, tested, and deployed to production", correct: true },
            { text: "A programming language", correct: false },
            { text: "A version control system", correct: false },
            { text: "A web framework", correct: false }
        ]
    },
    {
        question: "What is 'Docker' in software development?",
        answers: [
            { text: "A platform for developing, shipping, and running applications in containers", correct: true },
            { text: "A programming language", correct: false },
            { text: "A version control system", correct: false },
            { text: "A web framework", correct: false }
        ]
    },
    {
        question: "What does 'SEO' stand for?",
        answers: [
            { text: "Search Engine Optimization", correct: true },
            { text: "Search Engine Operation", correct: false },
            { text: "Search Engine Online", correct: false },
            { text: "Search Engine Organizer", correct: false }
        ]
    },
    {
        question: "What does 'CMS' stand for?",
        answers: [
            { text: "Content Management System", correct: true },
            { text: "Customer Management System", correct: false },
            { text: "Control Management System", correct: false },
            { text: "Code Management System", correct: false }
        ]
    },
    {
        question: "What is 'SQL Injection'?",
        answers: [
            { text: "A technique to inject SQL code into a database query", correct: true },
            { text: "A type of error in SQL syntax", correct: false },
            { text: "A method to secure databases", correct: false },
            { text: "A database management tool", correct: false }
        ]
    },
    {
        question: "What is 'XSS'?",
        answers: [
            { text: "Cross-Site Scripting", correct: true },
            { text: "Extended Server Side", correct: false },
            { text: "External Style Sheet", correct: false },
            { text: "XML Security Standards", correct: false }
        ]
    },
    {
        question: "What is 'CSRF'?",
        answers: [
            { text: "Cross-Site Request Forgery", correct: true },
            { text: "Cross-Site Reference Forgery", correct: false },
            { text: "Cross-Site Resource Forgery", correct: false },
            { text: "Cross-Site Request Falsification", correct: false }
        ]
    },
    {
        question: "What does 'JWT' stand for?",
        answers: [
            { text: "JSON Web Token", correct: true },
            { text: "Java Web Token", correct: false },
            { text: "JavaScript Web Token", correct: false },
            { text: "JavaScript Web Technology", correct: false }
        ]
    },
    {
        question: "What does 'SaaS' stand for?",
        answers: [
            { text: "Software as a Service", correct: true },
            { text: "Storage as a Service", correct: false },
            { text: "Security as a Service", correct: false },
            { text: "Server as a Service", correct: false }
        ]
    },
    {
        question: "What does 'PaaS' stand for?",
        answers: [
            { text: "Platform as a Service", correct: true },
            { text: "Programming as a Service", correct: false },
            { text: "Process as a Service", correct: false },
            { text: "Product as a Service", correct: false }
        ]
    },
    {
        question: "What does 'IaaS' stand for?",
        answers: [
            { text: "Infrastructure as a Service", correct: true },
            { text: "Internet as a Service", correct: false },
            { text: "Innovation as a Service", correct: false },
            { text: "Identity as a Service", correct: false }
        ]
    },
    {
        question: "What does 'DevOps' stand for?",
        answers: [
            { text: "Development and Operations", correct: true },
            { text: "Developer Options", correct: false },
            { text: "Development Opportunities", correct: false },
            { text: "Development Operations", correct: false }
        ]
    },
    {
        question: "What does 'Agile' mean in software development?",
        answers: [
            { text: "A software development methodology", correct: true },
            { text: "A programming language", correct: false },
            { text: "A version control system", correct: false },
            { text: "A web framework", correct: false }
        ]
    },
    {
        question: "What is 'Scrum' in software development?",
        answers: [
            { text: "A framework for managing and organizing work", correct: true },
            { text: "A programming language", correct: false },
            { text: "A version control system", correct: false },
            { text: "A web framework", correct: false }
        ]
    },
    {
        question: "What is 'Kanban' in software development?",
        answers: [
            { text: "A method for managing knowledge work", correct: true },
            { text: "A programming language", correct: false },
            { text: "A version control system", correct: false },
            { text: "A web framework", correct: false }
        ]
    },
    {
        question: "What is 'Git' in software development?",
        answers: [
            { text: "A distributed version control system", correct: true },
            { text: "A programming language", correct: false },
            { text: "A web framework", correct: false },
            { text: "A database management system", correct: false }
        ]
    },
    
    
    
];


const questionContainer = document.getElementById('question-container');
const resultContainer = document.getElementById('result-container');
const resultText = document.getElementById('result');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion(questionIndex) {
    questionContainer.innerHTML = '';
    const question = questions[questionIndex];
    const questionElement = document.createElement('div');
    questionElement.innerHTML = `<h2>${question.question}</h2>`;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => {
            if (answer.correct) {
                score++;
            }
            if (currentQuestionIndex < 29) {
                currentQuestionIndex++;
                displayQuestion(currentQuestionIndex);
            } else {
                showResult();
            }
        });
        questionElement.appendChild(button);
    });
    questionContainer.appendChild(questionElement);
}

function showResult() {
    const percentage = (score / 30) * 100;
    resultText.textContent = `You scored ${percentage.toFixed(2)}%`;
    resultContainer.style.display = 'block';
}

nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < 29) {
        currentQuestionIndex++;
        displayQuestion(currentQuestionIndex);
    } else {
        showResult();
    }
});

displayQuestion(currentQuestionIndex);
