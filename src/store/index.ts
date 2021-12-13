import { createStore } from 'vuex'

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
                unused: true,
            },
            {
                id: 1001,
                question: "Ako sa volá postava zo seriálu IT Crowds s vtipným účesom ?",
                hint: "DT",
                answer: "display: table",
                winner: null, 
                unused: true
            },
            {
                id: 1002,
                question: "What does SASS stand for?",
                hint: "SCSS",
                answer: "Syntactically Awesome Style Sheets",
                winner: null, 
                unused: true
            },
            {
                id: 1003,
                question: "What does BEM stand for?",
                hint: "BEM",
                answer: "Block Element Modificator",
                winner: null, 
                unused: true
            },
            {
                id: 1004,
                question: "What is the current version of HTML",
                hint: "HTML",
                answer: "5",
                winner: null, 
                unused: true
            },
            {
                id: 1005,
                question: "What does HTML stand for?",
                hint: "HTML",
                answer: "Hyper Text Markup Language",
                winner: null,
                unused: true
            },
            {
                id: 1006,
                question: "What is the most popuplar and really old website about web development in ČR ?",
                hint: "JWB",
                answer: "jakpsatweb.cz",
                winner: null, 
                unused: true
            },
            {
                id: 1007,
                question: "What HTML attribute do I use to open a link in a new tab?",
                hint: "TB",
                answer: "target='_blank'",
                winner: null, 
                unused: true
            },
            {
                id: 1008,
                question: "How do I round a number up using javascript?",
                hint: "MR",
                answer: "Math.Round()",
                winner: null, 
                unused: true
            },
            {
                id: 1009,
                question: "What event do I capture the loss of focus from the input in javascript?",
                hint: "O",
                answer: "onfocusout",
                winner: null, 
                unused: true
            },
            {
                id: 10010,
                question: "What character is short for jQuery?",
                hint: "D",
                answer: "$",
                winner: null, 
                unused: true
            },
            {
                id: 10011,
                question: "What is the answer to the question of life, the universe and everything?",
                hint: "INT",
                answer: "42",
                winner: null, 
                unused: true
            },
            {
                id: 10012,
                question: "What's the name of a character from the IT Crowds series with a funny hairstyle?",
                hint: "MM",
                answer: "Maurice Moss",
                winner: null, 
                unused: true
            },
            {
                id: 10013,
                question: "What is the name of the image that appears in the browser tab next to the page title?",
                hint: "F",
                answer: "favicon",
                winner: null, 
                unused: true
            },
            {
                id: 10014,
                question: "What command does create a new git repository?",
                hint: "G",
                answer: "git init",
                winner: null, 
                unused: true
            },
            {
                id: 10015,
                question: "What is the name of a programming language that consists of only 8 commands",
                hint: "B",
                answer: "Brainfuck",
                winner: null, 
                unused: true
            },
            {
                id: 10016,
                question: "What code does the Internal Server Error have in the HTTP header?",
                hint: "INT",
                answer: "500",
                winner: null, 
                unused: true
            },
            {
                id: 10017,
                question: "What code does Unathorized have in the HTTP header?",
                hint: "INT",
                answer: "401",
                winner: null,
                unused: true
            },
            {
                id: 10018,
                question: "What's the emergency number in the IT Crowd?",
                hint: "0188 ...",
                answer: "0118 999 881 999 119 725 3",
                winner: null,
                unused: true
            },
            {
                id: 10019,
                question: "What does number 43 mean in the Big Bang series?",
                hint: "SR",
                answer: "Sheldons record in hackisack",
                winner: null, 
                unused: true
            },
            {
                id: 10020,
                question: "What does UTFG stand for?",
                hint: "UTFG",
                answer: "Use the fucking google",
                winner: null, 
                unused: true
            },
            {
                id: 10021,
                question: "What does WWW stand for?",
                hint: "WWW",
                answer: "world wide web",
                winner: null, 
                unused: true
            },
            {
                id: 1022,
                question: "Which one is the first web browser invented in 1990",
                hint: "N",
                answer: "Nexus",
                winner: null, 
                unused: true,
            },
            {
                id: 1023,
                question: "Number of bit used by the IPv6 address",
                hint: "INT",
                answer: "128 bit",
                winner: null, 
                unused: true,
            },
            {
                id: 1024,
                question: "Which one programming language is exclusively used for artificial intelligence",
                hint: "P",
                answer: "Prolog",
                winner: null, 
                unused: true,
            },
            {
                id: 1025,
                question: "Which of the following programming language is used to create programs like applets?",
                hint: "J",
                answer: "Java",
                winner: null, 
                unused: true,
            },
            {
                id: 1026,
                question: "First computer virus is known as",
                hint: "CV",
                answer: "Creeper Virus",
                winner: null, 
                unused: true,
            },
            {
                id: 1027,
                question: "Who programmed the first computer game 'Spacewar!' in 1962",
                hint: "SR",
                answer: "Steave Russell",
                winner: null, 
                unused: true,
            },
            {
                id: 1028,
                question: "Who created the C programming Language",
                hint: "DR",
                answer: "Dennis Ritchie",
                winner: null, 
                unused: true,
            },
            {
                id: 1029,
                question: "Who is known as the father of internet",
                hint: "VC",
                answer: "Vint Cerf",
                winner: null, 
                unused: true,
            },
            {
                id: 1030,
                question: "Which operating system is developed and used by Apple Inc",
                hint: "i",
                answer: "IOS",
                winner: null, 
                unused: true,
            },
            {
                id: 1031,
                question: "Computer Hard Disk was first introduced in 1956 by",
                hint: "I",
                answer: "IBM",
                winner: null, 
                unused: true,
            },
            {
                id: 1032,
                question: "What is a default 'text editor' for Microsoft Windows?",
                hint: "N",
                answer: "Notepad",
                winner: null, 
                unused: true,
            },
            {
                id: 1033,
                question: "Which key combination is used to minimize all open windows and displays in the screen",
                hint: "Win+?",
                answer: "Win+D",
                winner: null, 
                unused: true,
            },
            {
                id: 1034,
                question: "Which key combination is used to close a open application in Windows machine",
                hint: "?+?",
                answer: "Alt+F4",
                winner: null, 
                unused: true,
            },
            {
                id: 1035,
                question: "Which function key needs to be press during reboot to enter in Safe Mode of a Windows machine",
                hint: "F?",
                answer: "F8",
                winner: null, 
                unused: true,
            },
            {
                id: 1036,
                question: "Which key combination is used to permanently delete a file or folder",
                hint: "?+del",
                answer: "Shift+del",
                winner: null, 
                unused: true,
            },
            {
                id: 1037,
                question: "Which web browser is developed by the Google",
                hint: "C",
                answer: "Chrome",
                winner: null, 
                unused: true,
            },
            {
                id: 1038,
                question: "Mark Zuckerberg is the owner of",
                hint: "M",
                answer: "Meta (old Facebook)",
                winner: null, 
                unused: true,
            },
            {
                id: 1039,
                question: "What is the full form of PDF",
                hint: "PDF",
                answer: "Portable document format",
                winner: null, 
                unused: true,
            },
            {
                id: 1040,
                question: "Text connected to page is",
                hint: "HL",
                answer: "Hyperlink",
                winner: null, 
                unused: true,
            },
            {
                id: 1000,
                question: "",
                hint: "",
                answer: "",
                winner: null, 
                unused: true,
            },
            {
                id: 1000,
                question: "",
                hint: "",
                answer: "",
                winner: null, 
                unused: true,
            },
            {
                id: 1000,
                question: "",
                hint: "",
                answer: "",
                winner: null, 
                unused: true,
            },
            {
                id: 1000,
                question: "",
                hint: "",
                answer: "",
                winner: null, 
                unused: true,
            },
            {
                id: 1000,
                question: "",
                hint: "",
                answer: "",
                winner: null, 
                unused: true,
            },
            {
                id: 1000,
                question: "",
                hint: "",
                answer: "",
                winner: null, 
                unused: true,
            },
            {
                id: 1000,
                question: "",
                hint: "",
                answer: "",
                winner: null, 
                unused: true,
            },
            {
                id: 1000,
                question: "",
                hint: "",
                answer: "",
                winner: null, 
                unused: true,
            },
            {
                id: 1000,
                question: "",
                hint: "",
                answer: "",
                winner: null, 
                unused: true,
            },
        ],

        secondQuestions: [
            /* {
                id: 2001,
                question: "",
                answer: "",
                winner: null, 
                unused: true
            }, */
            {
                id: 2001,
                question: "Is Javascript case-sensitive ?",
                hint: "Y/N",
                answer: "A",
                winner: null, 
                unused: true
            },
            {
                id: 2002,
                question: "Is Javascript the same as is Java ?",
                hint: "Y/N",
                answer: "N",
                winner: null, 
                unused: true
            },
            {
                id: 2003,
                question: "Is C# the same as is C++ ?",
                hint: "Y/N",
                answer: "N",
                winner: null, 
                unused: true
            },
            {
                id: 2004,
                question: "Could a semicolon be used in brainfuck?",
                hint: "Y/N",
                answer: "N",
                winner: null, 
                unused: true
            },
            {
                id: 2005,
                question: "Is it possible to create HelloWorld in javascript using only six characters? (not code length)",
                hint: "Y/N",
                answer: "Y - JsFuck",
                winner: null, 
                unused: true
            },
            {
                id: 2006,
                question: "Has a Holly supercomputer from IQ 8000 ? (Which is like 8,000 gym teachers)",
                hint: "Y/N",
                answer: "N - 6000",
                winner: null, 
                unused: true
            },
            {
                id: 2007,
                question: "Was google the first search engine in internet?",
                hint: "Y/N",
                answer: "N - Archie",
                winner: null, 
                unused: true
            },
            {
                id: 2008,
                question: "Is Firewall in computer used for Authentication?",
                hint: "Y/N",
                answer: "N - Security",
                winner: null, 
                unused: true
            },
            {
                id: 2009,
                question: "Is COBOL a database management software?",
                hint: "Y/N",
                answer: "N",
                winner: null, 
                unused: true
            },
            {
                id: 2010,
                question: "Is .gif an extension for videos?",
                hint: "Y/N",
                answer: "N",
                winner: null, 
                unused: true
            },
            {
                id: 2011,
                question: " Is WordStar the first word processor application?",
                hint: "Y/N",
                answer: "Y",
                winner: null, 
                unused: true
            },
            {
                id: 2012,
                question: "Is RAM volatile memory in a computer system?",
                hint: "Y/N",
                answer: "Y",
                winner: null, 
                unused: true
            },
            {
                id: 2013,
                question: "One Terabyte (1 TB) is equal to 1000GB",
                hint: "Y/N",
                answer: "N - 1024GB",
                winner: null, 
                unused: true
            },
            {
                id: 2014,
                question: "Was Windows the first fully supported 64-bit operating system?",
                hint: "Y/N",
                answer: "N - Linux",
                winner: null, 
                unused: true
            },
            {
                id: 2015,
                question: "Is MOSAIC a web browser ?",
                hint: "Y/N",
                answer: "Y",
                winner: null, 
                unused: true
            },
            {
                id: 2016,
                question: "Is Troajn a computer virus ?",
                hint: "Y/N",
                answer: "N - Malware",
                winner: null, 
                unused: true
            }, 
            {
                id: 2017,
                question: "Is SMTP Protocol used to receive an e-mail?",
                hint: "Y/N",
                answer: "N - Pop3",
                winner: null, 
                unused: true
            }, 
            {
                id: 2018,
                question: "Is Pop3 Protocol used to receive an e-mail?",
                hint: "Y/N",
                answer: "Y",
                winner: null, 
                unused: true
            }, 
            {
                id: 2019,
                question: "Was '@' sign first chosen for its use in e-mail address before 1975?",
                hint: "Y/N",
                answer: "Y - 1972",
                winner: null, 
                unused: true
            }, 
            {
                id: 2020,
                question: "Is monitor an Input device ?",
                hint: "Y/N",
                answer: "N - output",
                winner: null, 
                unused: true
            }, 
            {
                id: 2021,
                question: "Is Firefox used as an search engine ?",
                hint: "Y/N",
                answer: "N - it's browser",
                winner: null, 
                unused: true
            }, 
            {
                id: 2022,
                question: "",
                hint: "Y/N",
                answer: "",
                winner: null, 
                unused: true
            }, 
            {
                id: 2023,
                question: "",
                hint: "Y/N",
                answer: "",
                winner: null, 
                unused: true
            }, 
            {
                id: 2024,
                question: "",
                hint: "Y/N",
                answer: "",
                winner: null, 
                unused: true
            }, 
            {
                id: 2025,
                question: "",
                hint: "Y/N",
                answer: "",
                winner: null, 
                unused: true
            }, 
            {
                id: 2026,
                question: "",
                hint: "Y/N",
                answer: "",
                winner: null, 
                unused: true
            }, 
            {
                id: 2027,
                question: "",
                hint: "Y/N",
                answer: "",
                winner: null, 
                unused: true
            }, 
            {
                id: 2028,
                question: "",
                hint: "Y/N",
                answer: "",
                winner: null, 
                unused: true
            }, 
            {
                id: 2029,
                question: "",
                hint: "Y/N",
                answer: "",
                winner: null, 
                unused: true
            }, 
            {
                id: 2030,
                question: "",
                hint: "Y/N",
                answer: "",
                winner: null, 
                unused: true
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
            var qList = []
            var allQuestions = state.firstQuestions

            for (let q = 0; q < 21; q++) {
                var random = Math.floor(Math.random()*(allQuestions.length - 1)) + 1 
                qList.push(allQuestions[random])
                allQuestions.splice(random, 1)
            } 
            return qList
        },
        getSecondQeustionsList: state => {
            var qList = []
            var allQuestions = state.secondQuestions

            for (let q = 0; q < 21; q++) {
                var random = Math.floor(Math.random()*(allQuestions.length - 1)) + 1 
                qList.push(allQuestions[random])
                allQuestions.splice(random, 1)
            } 
            return qList
        }
    }
})