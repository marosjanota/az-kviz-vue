import { createStore } from 'vuex'

function generateQuestionList(allQuestions: any[], cacheKey: string): any[] {
    let qList = [];
    let localStorageItems = localStorage.getItem(cacheKey)?.slice(0, -1)
    let cachedQuestions = JSON.parse(("[" + localStorageItems + "]") || '[]');

    // Reset cached questions if there is not enought questions to take from list
    if(cachedQuestions.length >= (allQuestions.length - 21)) {
        localStorage.setItem(cacheKey, "")
    }

    for (let q = 0; q < 21; q++) {
        let randomIndex;
        let selectedQuestion;

        // Find a question that has not been selected before
        do {
            randomIndex = Math.floor(Math.random() * allQuestions.length);
            selectedQuestion = allQuestions[randomIndex];
        } while (cachedQuestions.includes(selectedQuestion.id));

        // Add the selected question to the list
        qList.push(selectedQuestion);

        // Remove the selected question from the pool
        allQuestions.splice(randomIndex, 1);
    }

    return qList;
}


export default createStore({
    state: { 
        players: {
            player1name: "",
            player2name: "",
            winner: null, 
            unused: true
        },
        currentQuestion: null,
        firstQuestions: [
            {
                id: 1000,
                question: "",
                hint: "",
                answer: "",
                winner: null, 
                
            },
            {
                id: 1001,
                question: "Which CSS property can IKEA use for table sales marketing?",
                hint: "DT",
                answer: "display: table",
                winner: null, 
            },
            {
                id: 1002,
                question: "What is the name of the tool used for tracking issues and tasks in AXIS?",
                hint: "J",
                answer: "Jira",
                winner: null, 
            },
            {
                id: 1003,
                question: "Which tool is used for recording user interactions and creating heatmaps?",
                hint: "H",
                answer: "Hotjar",
                winner: null, 
            },
            {
                id: 1004,
                question: "What is the current version of HTML",
                hint: "INT",
                answer: "5",
                winner: null, 
            },
            {
                id: 1005,
                question: "What does HTML stand for?",
                hint: "HTML",
                answer: "Hyper Text Markup Language",
                winner: null,
            },
            {
                id: 1006,
                question: "What is the most popuplar and really old website about web development in ČR?",
                hint: "JWB",
                answer: "jakpsatweb.cz",
                winner: null, 
            },
            {
                id: 1007,
                question: "What HTML attribute do I use to open a link in a new tab?",
                hint: "TB",
                answer: "target='_blank'",
                winner: null, 
            },
            {
                id: 1008,
                question: "How do I round a number up using javascript?",
                hint: "MR",
                answer: "Math.round()",
                winner: null, 
            },
            {
                id: 1009,
                question: "What event do I capture the loss of focus from the input in javascript?",
                hint: "O",
                answer: "onfocusout/focusout",
                winner: null, 
            },
            {
                id: 1010,
                question: "What character is short for jQuery?",
                hint: "D",
                answer: "$",
                winner: null, 
            },
            {
                id: 1011,
                question: "What is the answer to the question of life, the universe and everything?",
                hint: "INT",
                answer: "42",
                winner: null, 
            },
            {
                id: 1012,
                question: "What's the name of a character from the IT Crowds series with a funny hairstyle?",
                hint: "MM",
                answer: "Maurice Moss",
                winner: null, 
            },
            {
                id: 1013,
                question: "What is the name of the image that appears in the browser tab next to the page title?",
                hint: "F",
                answer: "favicon",
                winner: null, 
            },
            {
                id: 1014,
                question: "What command does create a new git repository?",
                hint: "G",
                answer: "git init",
                winner: null, 
            },
            {
                id: 1015,
                question: "What is the name of a programming language that consists of only 8 commands",
                hint: "B",
                answer: "Brainfuck",
                winner: null, 
            },
            {
                id: 1016,
                question: "What code does the Internal Server Error have in the HTTP header?",
                hint: "INT",
                answer: "500",
                winner: null, 
            },
            {
                id: 1017,
                question: "What code does Unathorized have in the HTTP header?",
                hint: "INT",
                answer: "401",
                winner: null,
            },
            {
                id: 1018,
                question: "What's the emergency number in the IT Crowd?",
                hint: "0118 ...",
                answer: "0118 999 881 999 119 725 3",
                winner: null,
            },
            {
                id: 1019,
                question: "What does number 43 mean in the Big Bang series?",
                hint: "SR",
                answer: "Sheldons record in hackisack",
                winner: null, 
            },
            {
                id: 1020,
                question: "What does UTFG stand for?",
                hint: "UTFG",
                answer: "Use the fucking google",
                winner: null, 
            },
            {
                id: 1021,
                question: "What does WWW stand for?",
                hint: "WWW",
                answer: "world wide web",
                winner: null, 
            },
            {
                id: 1022,
                question: "Which one is the first web browser invented in 1990",
                hint: "N",
                answer: "Nexus",
                winner: null, 
            },
            {
                id: 1023,
                question: "Number of bits used by the IPv6 address",
                hint: "INT",
                answer: "128 bit",
                winner: null, 
            },
            {
                id: 1024,
                question: "Which one programming language is exclusively used for artificial intelligence",
                hint: "P",
                answer: "Prolog",
                winner: null, 
            },
            {
                id: 1025,
                question: "Which programming language is used to create programs like applets?",
                hint: "J",
                answer: "Java",
                winner: null, 
            },
            {
                id: 1026,
                question: "First computer virus is known as",
                hint: "CV",
                answer: "Creeper Virus",
                winner: null, 
            },
            {
                id: 1027,
                question: "Who programmed the first computer game 'Spacewar!' in 1962",
                hint: "SR",
                answer: "Steave Russell",
                winner: null, 
            },
            {
                id: 1028,
                question: "Who created the C programming Language",
                hint: "DR",
                answer: "Dennis Ritchie",
                winner: null, 
            },
            {
                id: 1029,
                question: "Who is known as the father of internet",
                hint: "VC",
                answer: "Vint Cerf",
                winner: null, 
            },
            {
                id: 1030,
                question: "Which operating system is developed and used by Apple Inc",
                hint: "i",
                answer: "iOS",
                winner: null, 
            },
            {
                id: 1031,
                question: "Computer Hard Disk was first introduced in 1956 by",
                hint: "I",
                answer: "IBM",
                winner: null, 
            },
            {
                id: 1032,
                question: "What is a default 'text editor' for Microsoft Windows?",
                hint: "N",
                answer: "Notepad",
                winner: null, 
            },
            {
                id: 1033,
                question: "Which key combination is used to minimize all open windows and displays in the screen",
                hint: "Win+?",
                answer: "Win+D",
                winner: null, 
            },
            {
                id: 1034,
                question: "Which key combination is used to close a open application in Windows machine",
                hint: "?+?",
                answer: "Alt+F4",
                winner: null, 
            },
            {
                id: 1035,
                question: "Which function key needs to be press during reboot to enter in Safe Mode of a Windows machine",
                hint: "??",
                answer: "F8",
                winner: null, 
            },
            {
                id: 1036,
                question: "Which key combination is used to permanently delete a file or folder",
                hint: "?+?",
                answer: "Shift+del",
                winner: null, 
            },
            {
                id: 1037,
                question: "Which web browser is developed by the Google",
                hint: "C",
                answer: "Chrome",
                winner: null, 
            },
            {
                id: 1038,
                question: "Mark Zuckerberg is the owner of",
                hint: "M",
                answer: "Meta (old Facebook)",
                winner: null, 
            },
            {
                id: 1039,
                question: "What is the full form of PDF",
                hint: "PDF",
                answer: "Portable document format",
                winner: null, 
            },
            {
                id: 1040,
                question: "Text connected to page is",
                hint: "HL",
                answer: "Hyperlink",
                winner: null, 
            },
            {
                id: 1041,
                question: "Saving a file from the Internet onto your desktop is called",
                hint: "D",
                answer: "Downloading",
                winner: null, 
            },
            {
                id: 1042,
                question: "Errors in computer programmes are called",
                hint: "Bugs",
                answer: "Bugs",
                winner: null, 
            },
            {
                id: 1043,
                question: "The exact meaning of the term VPN is?",
                hint: "VPN",
                answer: "Virtual Private Network",
                winner: null, 
            },
            {
                id: 1044,
                question: "What does the shortcut BSOD stands for?",
                hint: "BSOD",
                answer: "Blue screen of death",
                winner: null, 
            },

            // From Peter QA
            {
                id: 1045,
                question: "Which team member has had the longest experience with AXIS so far?",
                hint: "??",
                answer: "Pavel",
                winner: null, 
            },
            {
                id: 1046,
                question: "What is the most commonly used website people use at work for swearing? .",
                hint: "M",
                answer: "http://milujipraci.cz/",
                winner: null, 
            },
            {
                id: 1047,
                question: "Who is presumably the only person from Chyron Brno office who has an existing wikipedia page about himself/herself.",
                hint: "MK",
                answer: "Marie Kurkova",
                winner: null, 
            },
            {
                id: 1048,
                question: "How long was the code freeze period before Axis release 2.0 (tolerance - 1hr).",
                hint: "INT",
                answer: "0",
                winner: null, 
            },
            {
                id: 1049,
                question: "How many unique official US releases (at least half of the modules deployed) Axis team had in the last 12 months?",
                hint: "INT",
                answer: "8 (1.0, 2.0, 2.1.0, 2.2.0, 2.3.0, 3.1.0, 3.1.2, 3.2.0)",
                winner: null, 
            },
            {
                id: 1050,
                question: "Name all 3 main brands (divisions) of Chyronhego?",
                hint: "CTH",
                answer: "Chyron Tracab Hego",
                winner: null, 
            },
            {
                id: 1051,
                question: "In which year was the Chyron Corporation (later Chyronhego Corporation) established?",
                hint: "19xx",
                answer: "1966",
                winner: null, 
            },
            {
                id: 1052,
                question: "Name all the members of Axis front-end team and sort them by seniority (start with the most junior one)",
                hint: "N/A",
                answer: "Maroš Janota",
                winner: null, 
            },
            {
                id: 1053,
                question: "How many pets do Maroš have at home (without kids)",
                hint: "INT",
                answer: "6 (Dog, agama, rabbit, guinea pig, turtle, fish) ",
                winner: null, 
            },
            {
                id: 1054,
                question: "Name at least 3 job positions which Maroš Janota had (or still has) in Chyron.",
                hint: "N/A",
                answer: "Product owner, Teamleader, HR, Happiness manager, Frontend developer, ",
                winner: null, 
            },
            {
                id: 1055,
                question: "Name the 6 end user facing modules of Axis (Portal excluded, start with your personal favorite).",
                hint: "N/A",
                answer: "Charts, Maps, News, Order, Quotes, Track",
                winner: null, 
            },
            {
                id: 1056,
                question: "How many people were part of the HR department of Chyronhego in summer 2020.",
                hint: "INT",
                answer: "0",
                winner: null, 
            },
            {
                id: 1057,
                question: "What is the favorite nickname of Marek Radimersky?",
                hint: "R",
                answer: "Radim",
                winner: null, 
            },
            {
                id: 1058,
                question: "What was the first big module assignment of Ivo Točený?",
                hint: "N/A",
                answer: "Quotes",
                winner: null, 
            },
            {
                id: 1059,
                question: "Who is at the moment the oldest team member of Axis Brno team?",
                hint: "N/A",
                answer: "Honza",
                winner: null, 
            },
            {
                id: 1060,
                question: "How many kids (combined) the Axis team members have? Official ones only, we don't count with 'What happened in Vegas - stays in Vegas' kind of kids.",
                hint: "INT",
                answer: "7",
                winner: null, 
            },
            {
                id: 1061,
                question: "What was the estimated duration of 'Axis migration to cloud' by the former CTO of Chyronhego? (tolerance one day).",
                hint: "INT",
                answer: "One day",
                winner: null, 
            },
            {
                id: 1062,
                question: "How many people with a name Marek are currently employed in Chyronhego?",
                hint: "INT",
                answer: "4 (Fort, Provaznik, Radimersky, Maara?",
                winner: null, 
            },
            {
                id: 1063,
                question: "What is the country of origin of Mathieu Yarle?",
                hint: "F",
                answer: "France",
                winner: null, 
            },
            {
                id: 1064,
                question: "Which sport equipment Yomi usied as a part of his morning routine?",
                hint: "T",
                answer: "Treadmill",
                winner: null, 
            },
            {
                id: 1065,
                question: "What is Mathieu's hobby?",
                hint: "C",
                answer: "Cars",
                winner: null, 
            },
            {
                id: 1066,
                question: "What was a typical Christmas gift in Chyronhego Czech?",
                hint: "N/A",
                answer: "Bottle of gin",
                winner: null, 
            },
            {
                id: 1067,
                question: "What is Mathieu's job title listed in his profile on slack?",
                hint: "COS",
                answer: "Chief of stuff",
                winner: null, 
            },
            {
                id: 1068,
                question: "What is YOMI's job title listed in his profile on slack?",
                hint: "HS&N",
                answer: "Hosted Services & NetOps",
                winner: null, 
            },
            {
                id: 1069,
                question: "What is Maro's job title listed in his profile on slack?",
                hint: "APO&HP",
                answer: "AXIS Product owner & hapinness manager",
                winner: null, 
            },
            {
                id: 1070,
                question: "What is the village Vašek comes from known for?",
                hint: "L",
                answer: "Levander fields",
                winner: null, 
            },
            {
                id: 1071,
                question: "What is Peter's job title listed in his profile on slack?",
                hint: "PM",
                answer: "Pro duck manager",
                winner: null, 
            },
            {
                id: 1072,
                question: "What was the DJ name of Ivo Točený?",
                hint: "DJ",
                answer: "DJ Ajvo",
                winner: null, 
            },
            {
                id: 1073,
                question: "Which PC game was played the most by Axis team members (commonly)?",
                hint: "N/A",
                answer: "Battlefield V",
                winner: null, 
            },
            {
                id: 1074,
                question: "What was the most played game during hackathon nights?",
                hint: "CP",
                answer: "Černý Petr",
                winner: null, 
            },
            {
                id: 1075,
                question: "What was the cottage name where the Axis hackathon was conducted?",
                hint: "ChUF",
                answer: "Chalupa u Fryšavky",
                winner: null, 
            },
            {
                id: 1076,
                question: "How many foreigns are part of the Axis team",
                hint: "INT",
                answer: "4 (Ivo, Maros, Peter, Kasia)",
                winner: null, 
            },
            {
                id: 1077,
                question: "Name the brand of beer which were the main beverage on Axis hackathon",
                hint: "🍻",
                answer: "Nachmelena Opice",
                winner: null, 
            },
            {
                id: 1078,
                question: "How many animation options are available in Axis Charts for a chart type: pie?",
                hint: "INT",
                answer: "3",
                winner: null, 
            },
            {
                id: 1079,
                question: "What is the name of both of the third party image banks in Axis?",
                hint: "A&G",
                answer: "AP, Getty Images",
                winner: null, 
            },
            {
                id: 1080,
                question: "What is the name of our AXIS dragon at the office",
                hint: "S",
                answer: "Šmaxis",
                winner: null, 
            },
            {
                id: 1081,
                question: "Which mythological creature has Axis “tattooed” on its forehead?",
                hint: "U",
                answer: "Unicorn",
                winner: null, 
            },
            {
                id: 1082,
                question: "How many cars were used to transport 7 people to the cottage where Axis hackathon took place? ",
                hint: "INT",
                answer: "5",
                winner: null, 
            },
            {
                id: 1083,
                question: "What is the current sprint number on AXIS?",
                hint: "INT",
                answer: "59",
                winner: null, 
            },
            {
                id: 1084,
                question: "What is the name of Maroš's optic store?",
                hint: "K",
                answer: "KUK OPTIK",
                winner: null, 
            },
            {
                id: 1085,
                question: "What is the name of the main library used by Chyron Frontend Framework?",
                hint: "M",
                answer: "Material UI",
                winner: null, 
            },
            {
                id: 1086,
                question: "Which company is a majority shareholder of Chyronhego?",
                hint: "AGM",
                answer: "Apollo Global Management",
                winner: null, 
            },
            {
                id: 1087,
                question: "Who is the manufacturer of our blue Chyron thermo mugs?",
                hint: "Y",
                answer: "Yeti",
                winner: null, 
            },
            {
                id: 1088,
                question: "What kind of dance does Marek Radimerský go to?",
                hint: "S",
                answer: "Swing",
                winner: null, 
            },
            {
                id: 1100,
                question: "How many repositories are there in axis? (+- 2)",
                hint: "INT",
                answer: "17 or 16",
                winner: null, 
            },
            {
                id: 1102,
                question: "How many product managers are in Brno?",
                hint: "INT",
                answer: "One",
                winner: null, 
            },
            {
                id: 1103,
                question: "How many supervisors are there above an AXIS developer according to the lattice?",
                hint: "INT",
                answer: "4",
                winner: null, 
            },
            {
                id: 1104,
                question: "Who is the NO.1 reviewer of pull requests?",
                hint: "N/A",
                answer: "Pavel",
                winner: null, 
            },
            {
                id: 1105,
                question: "What menu item does Peter order most often at Chilli Tree?",
                hint: "INT",
                answer: "60",
                winner: null, 
            },
            {
                id: 1107,
                question: "What does the shortcut LINQ stands for?",
                hint: "LINQ",
                answer: "Language Integrated Query",
                winner: null, 
            },
            {
                id: 1109,
                question: "Which text format do we use for documentation?",
                hint: "M",
                answer: "Markdown",
                winner: null, 
            },
            {
                id: 1110,
                question: "In which language are written our deployment scripts?",
                hint: "R",
                answer: "Ruby",
                winner: null, 
            },
            {
                id: 1112,
                question: "How is called a dynamic documentation for our Specflow tests that are generated from `axis/test` project?",
                hint: "LD",
                answer: "LivingDoc",
                winner: null, 
            },
            {
                id: 1113,
                question: "How is called package manager that we are using in .NET?",
                hint: "N",
                answer: "Nuget",
                winner: null, 
            },
            {
                id: 1114,
                question: "Which test framework/runner we are using in our axis/tests project?",
                hint: "XU",
                answer: "xUnit - We are also migrating all tests to this",
                winner: null, 
            },
            {
                id: 1115,
                question: "What is the name of the new `News module` frontend?",
                hint: "C",
                answer: "Compose",
                winner: null, 
            },
            {
                id: 1116,
                question: "How many Software Enginners are required to approve pull request to `master` branch?",
                hint: "INT",
                answer: "2",
                winner: null, 
            },
            {
                id: 1117,
                question: "What is Maroš's most hated device?",
                hint: "M",
                answer: "MacBook",
                winner: null, 
            },
            {
                id: 1118,
                question: "What two animals does the Kasia have on her desk, printed from a 3D printer?",
                hint: "DB",
                answer: "Duck and bobr",
                winner: null, 
            },
            {
                id: 1119,
                question: "How many smokers (cigarettes only) do we have in Axis Brno?",
                hint: "INT",
                answer: "1",
                winner: null, 
            },
            
            {
                id: 1120,
                question: "What is the name of the new invoicing software for contractors?",
                hint: "R",
                answer: "Remote",
                winner: null, 
            },
            {
                id: 1121,
                question: "Who has the ownership of current Relay Agent?",
                hint: "",
                answer: "Nobody knows... ",
                winner: null, 
            },
            {
                id: 1122,
                question: "How long does it take to get to Chilli Tree? (+-1min)",
                hint: "INT",
                answer: "8",
                winner: null, 
            },
            {
                id: 1123,
                question: "How long has Karl Arnemann been with the company? (+-3y)",
                hint: "INT",
                answer: "43",
                winner: null, 
            },
            {
                id: 1124,
                question: "Who knows the most about Kasia?",
                hint: "name",
                answer: "ChatGPT",
                winner: null, 
            }
        ],
        secondQuestions: [
            {
                id: 2001,
                question: "Is Javascript case-sensitive ?",
                hint: "Y/N",
                answer: "A",
                winner: null, 
            },
            {
                id: 2002,
                question: "Is Javascript the same as is Java ?",
                hint: "Y/N",
                answer: "N",
                winner: null, 
            },
            {
                id: 2003,
                question: "Is C# the same as is C++ ?",
                hint: "Y/N",
                answer: "N",
                winner: null, 
            },
            {
                id: 2004,
                question: "Could a semicolon be used in brainfuck?",
                hint: "Y/N",
                answer: "N",
                winner: null, 
            },
            {
                id: 2005,
                question: "Is it possible to create HelloWorld in javascript using only six characters? (not code length)",
                hint: "Y/N",
                answer: "Y - JsFuck",
                winner: null, 
            },
            {
                id: 2006,
                question: "Has a Holly supercomputer from IQ 8000 ? (Which is like 8,000 gym teachers)",
                hint: "Y/N",
                answer: "N - 6000",
                winner: null, 
            },
            {
                id: 2007,
                question: "Was google the first search engine on the internet?",
                hint: "Y/N",
                answer: "N - Archie",
                winner: null, 
            },
            {
                id: 2008,
                question: "Is Firewall in computer used for Authentication?",
                hint: "Y/N",
                answer: "N - Security",
                winner: null, 
            },
            {
                id: 2009,
                question: "Is COBOL a database management software?",
                hint: "Y/N",
                answer: "N",
                winner: null, 
            },
            {
                id: 2010,
                question: "Is .gif an extension for videos?",
                hint: "Y/N",
                answer: "N",
                winner: null, 
            },
            {
                id: 2011,
                question: " Is WordStar the first word processor application?",
                hint: "Y/N",
                answer: "Y",
                winner: null, 
            },
            {
                id: 2012,
                question: "Is RAM volatile memory in a computer system?",
                hint: "Y/N",
                answer: "Y",
                winner: null, 
            },
            {
                id: 2013,
                question: "One Terabyte (1 TB) is equal to 1000GB",
                hint: "Y/N",
                answer: "N - 1024GB",
                winner: null, 
            },
            {
                id: 2014,
                question: "Was Windows the first fully supported 64-bit operating system?",
                hint: "Y/N",
                answer: "N - Linux",
                winner: null, 
            },
            {
                id: 2015,
                question: "Is MOSAIC a web browser?",
                hint: "Y/N",
                answer: "Y",
                winner: null, 
            },
            {
                id: 2016,
                question: "Is Trojan a computer virus?",
                hint: "Y/N",
                answer: "N - Malware",
                winner: null, 
            }, 
            {
                id: 2017,
                question: "Is SMTP Protocol used to receive an e-mail?",
                hint: "Y/N",
                answer: "N - Pop3",
                winner: null, 
            }, 
            {
                id: 2018,
                question: "Is Pop3 Protocol used to receive an e-mail?",
                hint: "Y/N",
                answer: "Y",
                winner: null, 
            }, 
            {
                id: 2019,
                question: "Was '@' sign first chosen for its use in e-mail address before 1975?",
                hint: "Y/N",
                answer: "Y - 1972",
                winner: null, 
            }, 
            {
                id: 2020,
                question: "Is monitor an Input device?",
                hint: "Y/N",
                answer: "N - output",
                winner: null, 
            }, 
            {
                id: 2021,
                question: "Is Firefox used as an search engine?",
                hint: "Y/N",
                answer: "N - it's browser",
                winner: null, 
            }, 
            {
                id: 2022,
                question: "Are cookies stored on the server?",
                hint: "Y/N",
                answer: "N - on the client",
                winner: null, 
            }, 
            {
                id: 2023,
                question: "Antivirus protect systems from hackers",
                hint: "Y/N",
                answer: "N - Firewall",
                winner: null, 
            }, 
            {
                id: 2024,
                question: "USB Hard disk is a secondary type of storage device",
                hint: "Y/N",
                answer: "Y",
                winner: null, 
            }, 
            {
                id: 2025,
                question: "'IoT' refers to - Internet Organisation of Telecommunication",
                hint: "Y/N",
                answer: "N - Internet of Things",
                winner: null, 
            }, 
            {
                id: 2026,
                question: "Do we have in Lattice more than 300 people?",
                hint: "Y/N",
                answer: "Y - 309",
                winner: null, 
            }, 
            {
                id: 2027,
                question: "Did Peter Matis ever have long hair?",
                hint: "Y/N",
                answer: "Y",
                winner: null, 
            }, 
            {
                id: 2028,
                question: "Were there more than 20 different developers working on AXIS?",
                hint: "Y/N",
                answer: "Y - (Maros, Pavel, Peto, Honza, Ivo, Marek, Vasek, Kasia, Michal, Franta, Patrik, Celyn, Jirka, Ilca, Pudich, Huba, Sramek, Yomi, Who?, Michael, D. Zacek, Zahradnik, Peter Palka)",
                winner: null, 
            }, 
            {
                id: 2029,
                question: "Was Ivo a dancer?",
                hint: "Y/N",
                answer: "N",
                winner: null, 
            }, 
            {
                id: 2030,
                question: "Does Maroš like to go fishing?",
                hint: "Y/N",
                answer: "Y",
                winner: null, 
            }, 
            {
                id: 2031,
                question: "Will we be able to finish the new maps next year?",
                hint: "Y/N",
                answer: "Y",
                winner: null, 
            }, 
            {
                id: 2032,
                question: "Does the AXIS currently support Chrome version 50 or lower??",
                hint: "Y/N",
                answer: "Y - 49",
                winner: null, 
            }, 
            {
                id: 2033,
                question: "Are Maps the most used module in Axis by the entire customer group?",
                hint: "Y/N",
                answer: "N - Order",
                winner: null, 
            }, 
            {
                id: 2034,
                question: "Are Quotes the least used module in Axis by the entire customer group?",
                hint: "Y/N",
                answer: "Y",
                winner: null, 
            }, 
            {
                id: 2035,
                question: "Is .NET 5 direct successor of .NET 4.7.2?",
                hint: "Y/N",
                answer: "No, it is direct successor of .NET Core",
                winner: null, 
            }, 
            {
                id: 2036,
                question: "Is Transport Tycoon part of the Axis?",
                hint: "Y/N",
                answer: "No",
                winner: null, 
            }, 
            {
                id: 2037,
                question: "Do we have a monorepo?",
                hint: "Y/N",
                answer: "Yes (Axis repository)",
                winner: null, 
            }, 
            {
                id: 2038,
                question: "Do we have some easter eggs in AXIS?",
                hint: "Y/N",
                answer: "N ",
                winner: null, 
            }, 
            {
                id: 2039,
                question: "Is “The IT Crowd” set in a company’s marketing department?",
                hint: "Y/N",
                answer: "N",
                winner: null, 
            }, 
            {
                id: 2040,
                question: "In “The Matrix,” does the main character Neo work as a programmer?",
                hint: "Y/N",
                answer: "Y",
                winner: null, 
            }, 
            {
                id: 2041,
                question: "Was the first computer programmer a woman?",
                hint: "Y/N",
                answer: "Y - Ada Lovelace",
                winner: null, 
            }, 
        ]
    },
    mutations: {
        SET_PLAYERS_NAMES(state, value) {
            state.players = value
        },
        SET_WINNER(state, value) {
            state.players.winner = value
        },
        SET_QUESTION(state, value) {
            state.currentQuestion = value
        }
    },
    actions: {
    },
    getters: {
        getFirstQeustionsList: state => {
            return generateQuestionList(state.firstQuestions, "first")
        },
        getSecondQeustionsList: state => {
            return generateQuestionList(state.secondQuestions, "second")
        }
    }
})