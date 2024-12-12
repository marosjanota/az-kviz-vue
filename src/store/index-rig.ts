import { createStore } from 'vuex'

export default createStore({
    state: { 
        players: {
            player1name: "",
            player2name: "",
            winner: null, 
        },
        currentQuestion: null,
        firstQuestions: [
            {
                id: 1022,
                question: "Which one is the first web browser invented in 1990",
                hint: "N",
                answer: "Nexus",
                winner: null, 
            },
            {
                id: 1023,
                question: "Number of bit used by the IPv6 address",
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
                question: "Which of the following programming language is used to create programs like applets?",
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
                answer: "IOS",
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
                hint: "F?",
                answer: "F8",
                winner: null, 
            },
            {
                id: 1036,
                question: "Which key combination is used to permanently delete a file or folder",
                hint: "?+del",
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
                id: 1045,
                question: "Aká je to farba #3176bb; ?",
                hint: "DM",
                answer : "DotVVM Modrá",
                winner: null, 
            },
            {
                id: 1044,
                question: "What is a shotcut of BSOD",
                hint: "BSOD",
                answer: "Blue screen of death",
                winner: null, 
            },
            {
                id: 1099,
                question: "What does the shortcut LINQ stands for?",
                hint: "LINQ",
                answer: "Language Integrated Query",
                winner: null, 
            },
            {
                id: 1098,
                question: "How is called package manager that we are using in .NET?",
                hint: "N",
                answer: "Nuget",
                winner: null, 
            },
            
            /* TODO Edit Riganti questions */
            {
                id: 1046,
                question: "Jakou CSS property by mohla použít ikea pro lepší prodej svých stolů? ",
                hint: "DT",
                answer: "display: table",
                winner: null, 
            },
            {
                id: 1047,
                question: "Čo znamená skratka SASS ?",
                hint: "SCSS",
                answer: "Syntactically Awesome Style Sheets",
                winner: null, 
            },
            {
                id: 1048,
                question: "Čo znamená skratka BEM ?",
                hint: "BEM",
                answer: "Block-element_modifikator",
                winner: null, 
            },
            {
                id: 1049,
                question: "Pomocou akej property vycentrujeme grid-item vertikálne?",
                hint: "AIC",
                answer: "align-items: cente",
                winner: null, 
            },
            {
                id: 1050,
                question: "Pomocou akého zápisu získate hodnotu z CSS Variables ?",
                hint: "v",
                answer: "var(--x)",
                winner: null, 
            },
            {
                id: 1051,
                question: "Akým atribútom nastavím popisok pre odkaz ?",
                hint: "T",
                answer: "title",
                winner: null, 
            },
            {
                id: 1052,
                question: "Aká je najnovšia verzia HTML ?",
                hint: "INT",
                answer: "5",
                winner: null, 
            },
            {
                id: 1053,
                question: "Pomocou akého toolu dokážame vyvolať podporu pre vačšinu CSS propert ?",
                hint: "A",
                answer: "autoprefixer",
                winner: null, 
            },
            {
                id: 1054,
                question: "Ako zapíšete čiernu farbu s 50% opacity v HEXA formáte ?",
                hint: "#",
                answer: "#00000050",
                winner: null, 
            },
            {
                id: 1055,
                question: "Pomocou akého frameworku môžeme lepšie písať javascriptové animácie, bez jQuery ?",
                hint: "VJS",
                answer: "Vanilla JS",
                winner: null, 
            },
            {
                id: 1056,
                question: "Čo znamená skratka HTML ?",
                hint: "HTML",
                answer: "Hyper Text Markup Language",
                winner: null, 
            },
            {
                id: 1057,
                question: "Ako sa vola najznámejšia a najstaršia stránka v ČR o tvorbe webových stránok ?",
                hint: "JWB",
                answer: "jak psát web",
                winner: null, 
            },
            {
                id: 1058,
                question: "Pomocou akého atribútu otvorím odkaz v novom tabe ?",
                hint: "TB",
                answer: "target='_blank'",
                winner: null, 
            },
            {
                id: 1059,
                question: "Akým tagom vytvoríme číslovaný list ?",
                hint: "<>",
                answer: "<ol>",
                winner: null, 
            },
            {
                id: 1060,
                question: "Ako zaokrúhlim číslo nahor pomocou javascriptu ?",
                hint: "MR",
                answer: "Math.Round(x)",
                winner: null, 
            },
            {
                id: 1061,
                question: "Akým eventom odchytím strátu focusu z inputu v javascripte ?",
                hint: "O",
                answer: "onfocusout",
                winner: null, 
            },
            {
                id: 1062,
                question: "Akým znakom v CSS selektore definujem ako začína string ?",
                hint: "S",
                answer: "Strieška",
                winner: null, 
            },
            {
                id: 1063,
                question: "Aký znak je skratkou pre jQuery ?",
                hint: "D",
                answer: "dolár",
                winner: null, 
            },
            {
                id: 1064,
                question: "Aké je odpoveď na otázku života, vesmíru a vubec ?",
                hint: "INT",
                answer: "42",
                winner: null, 
            },
            {
                id: 1065,
                question: "Ako sa volá postava zo seriálu IT Crowds s vtipným účesom ?",
                hint: "MM",
                answer: "Maurice Moss",
                winner: null, 
            },
            {
                id: 1066,
                question: "Ako sa volá obrázok, ktorý sa zobrazí v prehliadačovom tabe, vedľa názvu stránky",
                hint: "F",
                answer: "favicon",
                winner: null, 
            },
            {
                id: 1067,
                question: "Aký je podľa Vás najlepší framework na tvorbu webových aplikácii ?",
                hint: "D",
                answer: "DotVVM",
                winner: null, 
            },
            {
                id: 1068,
                question: "Pomocou akého príkazu sa vytvorí nový git repozitár ?",
                hint: "G",
                answer: "git init",
                winner: null, 
            },
            {
                id: 1069,
                question: "Komu sa ako prvému podarilo pomocou CSS selectoru získať parent element ?",
                hint: "CN",
                answer: "Chuck Norris",
                winner: null, 
            },
            {
                id: 1070,
                question: "Pomocou akého príkazu povieme Markup Only kontrolke, aby nerenderovala wrapper tag ?",
                hint: "@",
                answer: "@noWrapperTag",
                winner: null, 
            },
            {
                id: 1071,
                question: "Ako sa vola programovací jazyk, ktorž pozsotáva len z 8 príkazov",
                hint: "B",
                answer: "Brainfuck",
                winner: null, 
            },
            {
                id: 1072,
                question: "Ako sa volá BusinessPacková komponenta, pomocou ktorej dokážete vytvoriť zobrazenie súborov, ako má Windows prieskumník ?",
                hint: "L",
                answer: "ListView",
                winner: null, 
            },
            {
                id: 1073,
                question: "Aký kód ma Internal Server Error v HTTP hlavičke ?",
                hint: "INT",
                answer: "500",
                winner: null, 
            },
            {
                id: 1074,
                question: "Aký kód ma Unathorized v HTTP hlavičke ?",
                hint: "INT",
                answer: "401",
                winner: null, 
            },
            {
                id: 1075,
                question: "Aké číslo je na záchranku v IT Crowd ? ",
                hint: "INT",
                answer: "0118 999 881 999 119 725 3",
                winner: null, 
            },
            {
                id: 1076,
                question: "Aký bol pôvodný názov DotVVM ?",
                hint: "R",
                answer: "Redwood",
                winner: null, 
            },
            {
                id: 1077,
                question: "Jaká barva má parametry 906090 ?",
                hint: "TF",
                answer: "tmavě fialová",
                winner: null, 
            },
            {
                id: 1078,
                question: "Kto má najviac commitov na DotVVM ?",
                hint: "S",
                answer: "Standa",
                winner: null, 
            },
            {
                id: 1079,
                question: "Aký runtime používa Xamarin ?",
                hint: "M",
                answer: "Mono",
                winner: null, 
            },
            {
                id: 1080,
                question: "Čo znamená v seriály Big Bang číslo 43 ?",
                hint: "RH",
                answer: "Sheldonov rekord",
                winner: null, 
            },
            {
                id: 1081,
                question: "Koľko ľudí v Riganti je originálne z Brna ?",
                hint: "INT",
                answer: "1",
                winner: null, 
            },
            {
                id: 1082,
                question: "Koľko je v Brne zapojených monitorov (bez notebookov) +-3 ?",
                hint: "INT",
                answer: "54",
                winner: null, 
            },
            {
                id: 1083,
                question: "Kto je v našej firme najdlhšie (Okrem bratov Hercegov) ?",
                hint: "R",
                answer: "Radek Čižkovský",
                winner: null, 
            },
            // 2019
            {
                id: 1084,
                question: "Kto vypil džúsy?",
                hint: "M",
                answer: "Michal Motyčka",
                winner: null, 
            },
            {
                id: 1085,
                question: "Čo znamená skratka WTF?",
                hint: "WTF",
                answer: "What the fuck",
                winner: null, 
            },
            {
                id: 1086,
                question: "Čo znamená skratka UTFG?",
                hint: "UTFG",
                answer: "Use the fucking google",
                winner: null, 
            },
            {
                id: 1087,
                question: "Čo znamená skratka DPTTPMNGMNT?",
                hint: "DPTTPMNGMNT",
                answer: "TOP Management Riganti",
                winner: null, 
            },
            {
                id: 1088,
                question: "Čo znamená skratka HP?",
                hint: "HP",
                answer: "Hewlett Packard",
                winner: null, 
            },
            {
                id: 1089,
                question: "Čo znamená skratka WWW?",
                hint: "WWW",
                answer: "World Wide Web",
                winner: null, 
            },
            {
                id: 1090,
                question: "Čo znamená skratka TFS?",
                hint: "TFS",
                answer: "Team Foundation Server",
                winner: null, 
            },
            {
                id: 1091,
                question: "Čo znamená skratka VSTS?",
                hint: "VSTS",
                answer: "Visual Studio Teams Services",
                winner: null, 
            },
            {
                id: 1092,
                question: "Čo znamená skratka VSTS?",
                hint: "GIT",
                answer: "(global information tracker) - you're in a good mood, and it actually works for you. Angels sing, and a light suddenly fills the room. (Goddamn idiotic truckload of sh*t): when it breaks - Linus Torvalds",
                winner: null, 
            },
            {
                id: 1093,
                question: "Aká je adresa kanclov v Prahe?",
                hint: "S",
                answer: "Sokolovská 352/215",
                winner: null, 
            },
            {
                id: 1094,
                question: "Aká je adresa kanclov v Brne?",
                hint: "H",
                answer: "Hybešova 61",
                winner: null, 
            },
            {
                id: 1095,
                question: "Kde sa nachádza link na wiki?",
                hint: "?",
                answer: "Riganti IS",
                winner: null, 
            },
        ],

        secondQuestions: [
            {
                id: 2007,
                question: "Was google the first search engine in internet?",
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
                question: "Is MOSAIC a web browser ?",
                hint: "Y/N",
                answer: "Y",
                winner: null, 
            },
            {
                id: 2016,
                question: "Is Troajn a computer virus ?",
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
                question: "Is monitor an Input device ?",
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
                /* TODO Edit Riganti questions */
            {
                id: 2031,
                question: "Zmení HTML tag <bdo> smer akým sa vykresluje text ?",
                answer: "A - Bi-Directional Override",
                winner: null, 
            },
            {
                id: 2032,
                question: "Sú CSS property case-sensitive ? ",
                answer: "N",
                winner: null, 
            },
            {
                id: 2033,
                question: "Môžem nalinkovať stylesheet súbor mimo hlavičku ? ",
                answer: "A - už áno",
                winner: null, 
            },
            {
                id: 2034,
                question: "Zmení sa poriadie DOMu, ak zmením poradie pomocou CSS order property ?",
                answer: "N",
                winner: null, 
            },
            {
                id: 2035,
                question: "Je javascript case-sensitive ?",
                answer: "A",
                winner: null, 
            },
            {
                id: 2036,
                question: "Je javascript to isté, čo Java ? ",
                answer: "N",
                winner: null, 
            },
            {
                id: 2037,
                question: "Má niektorý z našich interných webov hodnotenie 90% na novom page speed insight ?",
                answer: "N",
                winner: null, 
            },
            {
                id: 2038,
                question: "Existuje firma riganti už viac ako 10 rokov ?",
                answer: "A",
                winner: null, 
            },
            {
                id: 2039,
                question: "Je nás v Riganti viac ako 60 (Bez ITIXO)?",
                answer: "N",
                winner: null, 
            },
            {
                id: 2040,
                question: "Dá sa použiť MVC a MVVM v jednej aplikácii ?",
                answer: "A",
                winner: null, 
            },
            {
                id: 2041,
                question: "Vyvolá sa postback pri každom commande v DotVVM ?",
                answer: "A",
                winner: null, 
            },
            {
                id: 2042,
                question: "Obsahuje BusinessPack viac ako 20 komponent ? ",
                answer: "A",
                winner: null, 
            },
            {
                id: 2043,
                question: "Dá sa v DotVVM vytvoriť vlastný posback handler ?",
                answer: "A",
                winner: null, 
            },
            {
                id: 2044,
                question: "Môže sa v DotVVM vytvoriť a použiť viac ako jedna masterpage ?",
                answer: "A",
                winner: null, 
            },
            {
                id: 2045,
                question: "Dá sa v DotVVM startup registrovať resource file aj z CDN ?",
                answer: "A",
                winner: null, 
            },
            {
                id: 2046,
                question: "Dal sa použiť v jazyku brainfuck stredník ?",
                answer: "N",
                winner: null, 
            },
            {
                id: 2047,
                question: "Dá sa vytvoriť HelloWorld v javascripte iba pomocou šiestich znakov ?",
                answer: "A - JSFuck",
                winner: null, 
            },
            {
                id: 2048,
                question: "Je dobré používať background-image na informatívne obrázky z hladiska SEO ?",
                answer: "N",
                winner: null, 
            },
            {
                id: 2049,
                question: "Mal superpočítač Holly IQ 8000, čo je rovnako ako 8000 učitelov telocviku ?",
                answer: "N - 6000",
                winner: null, 
            },
            {
                id: 2050,
                question: "Využíva aplikáciu záchranka viac ako 800 000 užívateľov v ČR ?",
                answer: "A",
                winner: null, 
            },
            {
                id: 2051,
                question: "Ve verzi C# 4.5 přibylo klíčové slovo await? ",
                answer: "N - 5.0",
                winner: null, 
            },
            {
                id: 2052,
                question: "Padli Martinove monitory z výšky viac ako 100cm ? ",
                answer: "N - stol bol už nižšie",
                winner: null, 
            },
            {
                id: 2053,
                question: "Mali Filip s Josefom viac ako 10 pizza's na spoločnej fotografii z Valencie ? ",
                answer: "A - 11",
                winner: null, 
            },
            {
                id: 2054,
                question: "WebPack je balíčkovací systém? ",
                answer: "N - je to modul bundler",
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