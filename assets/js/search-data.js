// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-members",
          title: "Members",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/members/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-ctf",
          title: "CTF",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/CTF/";
          },
        },{id: "nav-fundings",
          title: "Fundings",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/fundings/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-paper-our-paper-entitled-understanding-and-detecting-remote-infection-on-linux-based-iot-devices-won-the-best-paper-award-at-asiaccs-22",
          title: '[Paper] Our paper entitled “Understanding and Detecting Remote Infection on Linux-based IoT Devices”...',
          description: "",
          section: "News",},{id: "news-student-award-our-high-school-intern-puhabi-chakraborty-from-kv-nit-agartala-india-won-an-award-at-intel-ai-for-youth-program-for-the-year-2021-read-the-news-at-here",
          title: '[Student Award] Our high school intern Puhabi Chakraborty from KV NIT Agartala, India...',
          description: "",
          section: "News",},{id: "news-ctf-team-cacti-advised-by-dr-zhao-and-dr-hu-placed-5th-in-mitre-ectf-2022",
          title: '[CTF] Team Cacti advised by Dr. Zhao and Dr. Hu placed 5th in...',
          description: "",
          section: "News",},{id: "news-ctf-team-cacti-advised-by-dr-zhao-and-dr-hu-placed-13th-in-baidu-autodriving-ctf-2022",
          title: '[CTF] Team Cacti advised by Dr. Zhao and Dr. Hu placed 13th in...',
          description: "",
          section: "News",},{id: "news-paper-our-paper-entitled-echohand-high-accuracy-and-presentation-attack-resistant-hand-authentication-on-commodity-mobile-devices-will-appear-in-ccs-22",
          title: '[Paper] Our paper entitled “EchoHand: High Accuracy and Presentation Attack Resistant Hand Authentication...',
          description: "",
          section: "News",},{id: "news-paper-our-paper-on-xnids-explaining-deep-learning-based-network-intrusion-detection-systems-for-active-intrusion-responses-will-appear-in-usenix-security-23-check-out-our-open-source-repo-at-here",
          title: '[Paper] Our paper on “xNIDS: Explaining Deep Learning-based Network Intrusion Detection Systems for...',
          description: "",
          section: "News",},{id: "news-paper-our-paper-entitled-return-to-non-secure-vulnerabilities-on-arm-cortex-m-trustzone-attack-and-defense-will-appear-in-dac-23-check-out-our-open-source-repo-at-here",
          title: '[Paper] Our paper entitled “Return-to-Non-Secure Vulnerabilities on ARM Cortex-M TrustZone: Attack and Defense”...',
          description: "",
          section: "News",},{id: "news-ctf-team-cacti-advised-by-dr-zhao-and-dr-hu-placed-4th-in-mitre-ectf-2023",
          title: '[CTF] Team Cacti advised by Dr. Zhao and Dr. Hu placed 4th in...',
          description: "",
          section: "News",},{id: "news-paper-our-paper-entitled-sherloc-secure-and-holistic-control-flow-violation-detection-on-embedded-systems-will-appear-in-acm-ccs-23-check-out-our-open-source-repo-at-here",
          title: '[Paper] Our paper entitled “SHERLOC: Secure and Holistic Control-Flow Violation Detection on Embedded...',
          description: "",
          section: "News",},{id: "news-paper-our-paper-entitled-moderating-new-waves-of-online-hate-with-chain-of-thought-reasoning-in-large-language-models-will-appear-in-ieee-security-and-privacy-oakland-24",
          title: '[Paper] Our paper entitled “Moderating New Waves of Online Hate with Chain-of-Thought Reasoning...',
          description: "",
          section: "News",},{id: "news-paper-our-paper-entitled-loccams-an-efficient-and-robust-approach-for-detecting-and-localizing-hidden-wireless-cameras-via-commodity-devices-will-appear-in-acm-imwut-24",
          title: '[Paper] Our paper entitled “LocCams: An Efficient and Robust Approach for Detecting and...',
          description: "",
          section: "News",},{id: "news-paper-two-papers-on-embedded-system-security-insectacide-debugger-based-holistic-asynchronous-cfi-for-embedded-system-and-trusted-execution-environments-in-embedded-and-iot-systems-a-cactilab-perspective-will-appear-in-ieee-rtas-24-and-seed-24-respectively",
          title: '[Paper] Two papers on embedded system security “InsectACIDE: Debugger-Based Holistic Asynchronous CFI for...',
          description: "",
          section: "News",},{id: "news-paper-our-papers-entitled-building-your-own-trusted-execution-environments-using-fpga-open-source-repo-at-here-and-command-hijacking-on-voice-controlled-iot-in-amazon-alexa-platform-will-appear-in-acm-asiaccs-24",
          title: '[Paper] Our papers entitled “Building Your Own Trusted Execution Environments Using FPGA” (open-source...',
          description: "",
          section: "News",},{id: "news-ctf-team-cacti-advised-by-dr-zhao-and-dr-hu-placed-4th-in-mitre-ectf-2024",
          title: '[CTF] Team Cacti advised by Dr. Zhao and Dr. Hu placed 4th in...',
          description: "",
          section: "News",},{id: "news-paper-our-paper-entitled-sok-where-s-the-up-a-comprehensive-bottom-up-study-on-the-security-of-arm-cortex-m-systems-will-appear-in-usenix-woot-24",
          title: '[Paper] Our paper entitled “SoK: Where’s the “up”?! A Comprehensive (bottom-up) Study on...',
          description: "",
          section: "News",},{id: "news-paper-two-papers-moderating-illicit-online-image-promotion-for-unsafe-user-generated-content-games-using-large-vision-language-models-and-unveiling-iot-security-in-reality-a-firmware-centric-journey-will-appear-in-usenix-security-24",
          title: '[Paper] Two papers “Moderating Illicit Online Image Promotion for Unsafe User Generated Content...',
          description: "",
          section: "News",},{id: "news-paper-our-paper-entitled-tokenscout-early-detection-of-ethereum-scam-tokens-via-temporal-graph-learning-will-appear-in-acm-ccs-24",
          title: '[Paper] Our paper entitled “TokenScout: Early Detection of Ethereum Scam Tokens via Temporal...',
          description: "",
          section: "News",},{id: "news-paper-our-paper-entitled-defending-against-membership-inference-attacks-on-iteratively-pruned-deep-neural-networks-will-appear-in-ndss-25",
          title: '[Paper] Our paper entitled “Defending Against Membership Inference Attacks on Iteratively Pruned Deep...',
          description: "",
          section: "News",},{id: "projects-baidu-autodriving-ctf-2021",
          title: 'Baidu AutoDriving CTF 2021',
          description: "Team Cacti (Nishant Vishwamitra, Zheyuan Ma, Shaik Sabiha, Xi Tan, Qiqing Huang, Feng Wei) advised by Dr. Zhao and Dr. Hu placed 5th in Baidu AutoDriving CTF 2021 during the COVID-19 pandemic. Read the news at here",
          section: "Projects",handler: () => {
              window.location.href = "/projects/CTF/BCTF2021/";
            },},{id: "projects-baidu-autodriving-ctf-2022",
          title: 'Baidu AutoDriving CTF 2022',
          description: "Team Cacti (Feng Wei, Qiqing Huang, Junzhe Li, Xixian Yang) advised by Dr. Zhao and Dr. Hu placed 13th in Baidu AutoDriving CTF 2022.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/CTF/BCTF2022/";
            },},{id: "projects-department-of-energy-cyberforce-competition-2019",
          title: 'Department of Energy CyberForce Competition 2019',
          description: "Team Cacti (Jake Brown, Connor Shade, Jack McKenna, Aaron Gdanski, Devon Reilly, Pierce Walker) advised by Dr. Ziming Zhao prepares for 2019 Department of Energy CyberForce Competition.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/CTF/DoECTF2019/";
            },},{id: "projects-mitre-collegiate-ectf",
          title: 'MITRE Collegiate eCTF',
          description: "Team TigerBytes (Max Proskauer, Langston Menezes, Stuart Nevans Locke, Alden Davidson, Eric Scheler, Thomas Cenova, Jason Blocklove, Prateek Talukdar, Brandon Adler, Jonathan Nissan), in the picture from left to right:Thomas Cenova, Brandon Adler, and Eric Scheler, advised by Dr. Ziming Zhao and Dr. Marcin Lukowiak placed 3rd in the 2019 MITRE Collegiate eCTF (embedded capture-the-flag) cybersecurity competition.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/CTF/MITREectf2019/";
            },},{id: "projects-mitre-collegiate-ectf-2020",
          title: 'MITRE Collegiate eCTF 2020',
          description: "Team Cacti (Xi Tan, Md. Armanuzzaman, Nick Hendee, Jason Blocklove, Jamie Kubeck, Erez Binyamin, Matthew Toro, Brandon Adler) advised by Dr. Ziming Zhao and Dr. Marcin Lukowiak placed 6th in the 2020 MITRE Collegiate eCTF (embedded capture-the-flag) cybersecurity competition.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/CTF/MITREectf2020/";
            },},{id: "projects-mitre-collegiate-ectf-2021",
          title: 'MITRE Collegiate eCTF 2021',
          description: "Team Cacti (Xi Tan, Md. Armanuzzaman, Ariel Shevah, Qiqing Huang, Gursimran Singh, Anjie Sun, Malav Vyas) advised by Dr. Zhao placed 9th in MITRE eCTF 2021 during the COVID-19 pandemic.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/CTF/MITREectf2021/";
            },},{id: "projects-mitre-collegiate-ectf2022",
          title: 'MITRE Collegiate eCTF2022',
          description: "Team Cacti (Xi Tan, Md. Armanuzzaman, Zheyuan Ma, Qiqing Huang) advised by Dr. Zhao and Dr. Hu placed 5th in MITRE eCTF 2022.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/CTF/MITREectf2022/";
            },},{id: "projects-mitre-collegiate-ectf2023",
          title: 'MITRE Collegiate eCTF2023',
          description: "Team Cacti (Zheyuan Ma, Gaoxiang Liu, Xi Tan, Md Armanuzzaman, Trevor Schupbach, Safayat Bin Hakim, Sagar Mohan, and Hiu Laam Chau) advised by Dr. Zhao and Dr. Hu placed 4th in MITRE eCTF 2023.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/CTF/MITREectf2023/";
            },},{id: "projects-mitre-collegiate-ectf2024",
          title: 'MITRE Collegiate eCTF2024',
          description: "Team Cacti (Gaoxiang Liu, Zheyuan Ma, Afton Spiegel, Alex Eastman, Xi Tan, MD Armanuzzaman, and Sagar Mohan) advised by Dr. Zhao and Dr. Hu placed 4th in MITRE eCTF 2024.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/CTF/MITREectf2024/";
            },},{id: "projects-dr-ziming-zhao",
          title: 'Dr. Ziming Zhao',
          description: "Director",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Director/Ziming/";
            },},{id: "projects-atharva-shaligram",
          title: 'Atharva Shaligram',
          description: "Brighton High School in Rochester, New York  April, 2021 -",
          section: "Projects",handler: () => {
              window.location.href = "/projects/High_School_Students/Atharva/";
            },},{id: "projects-puhabi-chakraborti",
          title: 'Puhabi Chakraborti',
          description: "KV NITA, India   August, 2021 -",
          section: "Projects",handler: () => {
              window.location.href = "/projects/High_School_Students/Puhabi/";
            },},{id: "projects-massimo-brigola",
          title: 'Massimo Brigola',
          description: "Spring 2025",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Master_Students/massimo/";
            },},{id: "projects-swadeep",
          title: 'Swadeep',
          description: "Spring 2025",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Master_Students/swadeep/";
            },},{id: "projects-ariel-shevah",
          title: 'Ariel Shevah',
          description: "Spring 2021",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Master_Students_Alumni/Ariel/";
            },},{id: "projects-arnod-paul",
          title: 'Arnod Paul',
          description: "Fall 2020 - Spring 2021",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Master_Students_Alumni/Arnod/";
            },},{id: "projects-ayushi-rathore",
          title: 'Ayushi Rathore',
          description: "Summer 2019 - Fall 2019, RIT",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Master_Students_Alumni/Ayushi/";
            },},{id: "projects-brandon-adler",
          title: 'Brandon Adler',
          description: "Spring 2019 - Spring 2020, RIT",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Master_Students_Alumni/Brandon/";
            },},{id: "projects-brinda-ashar",
          title: 'Brinda Ashar',
          description: "Winter 2021 -",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Master_Students_Alumni/Brinda/";
            },},{id: "projects-edward-christian",
          title: 'Edward Christian',
          description: "Fall 2020 - Spring 2021",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Master_Students_Alumni/Edward/";
            },},{id: "projects-jieqin-zhang",
          title: 'Jieqin Zhang',
          description: "Fall 2022 -",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Master_Students_Alumni/Jieqin/";
            },},{id: "projects-malav-vyas",
          title: 'Malav Vyas',
          description: "Spring 2021",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Master_Students_Alumni/Malav/";
            },},{id: "projects-mauricio-gutierrez-barnett",
          title: 'Mauricio Gutierrez Barnett',
          description: "2018, ASU",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Master_Students_Alumni/Mauricio/";
            },},{id: "projects-naveen-udhayasankar",
          title: 'Naveen Udhayasankar',
          description: "Winter 2021 -",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Master_Students_Alumni/Naveen/";
            },},{id: "projects-sagar-mohan",
          title: 'Sagar Mohan',
          description: "Fall 2023 -",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Master_Students_Alumni/Sagar/";
            },},{id: "projects-shaik-sabiha",
          title: 'Shaik Sabiha',
          description: "Fall 2021",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Master_Students_Alumni/Shaik/";
            },},{id: "projects-victoria-dib",
          title: 'Victoria Dib',
          description: "Fall 2022 -",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Master_Students_Alumni/Victoria/";
            },},{id: "projects-cong-wu",
          title: 'Cong Wu',
          description: "Wuhan University, 2022  Co-advised with Jing Chen  Postdoc at The University of Hong Kong",
          section: "Projects",handler: () => {
              window.location.href = "/projects/PhD_Alumni/Cong/";
            },},{id: "projects-md-armanuzzaman-tomal",
          title: 'Md. Armanuzzaman Tomal',
          description: "University at Buffalo, 2024  Postdoc at Northeastern University",
          section: "Projects",handler: () => {
              window.location.href = "/projects/PhD_Alumni/Tomal/";
            },},{id: "projects-wonkyu-han",
          title: 'Wonkyu Han',
          description: "Arizona State University,  2016  Co-advised with Gail-Joon Ahn",
          section: "Projects",handler: () => {
              window.location.href = "/projects/PhD_Alumni/Wonkyu/";
            },},{id: "projects-xi-tan",
          title: 'Xi Tan',
          description: "University at Buffalo, 2024  Assistant Professor at University of Colorado Colorado Springs",
          section: "Projects",handler: () => {
              window.location.href = "/projects/PhD_Alumni/Xi/";
            },},{id: "projects-alex-eastman",
          title: 'Alex Eastman',
          description: "Fall 2023 -",
          section: "Projects",handler: () => {
              window.location.href = "/projects/PhD_Students/Alex/";
            },},{id: "projects-gaoxiang-liu",
          title: 'Gaoxiang Liu',
          description: "Co-advised with Zhuoyue Zhao  Spring 2023 -",
          section: "Projects",handler: () => {
              window.location.href = "/projects/PhD_Students/Gaoxiang/";
            },},{id: "projects-junbeom-in",
          title: 'Junbeom In',
          description: "Fall 2024 -",
          section: "Projects",handler: () => {
              window.location.href = "/projects/PhD_Students/Jun/";
            },},{id: "projects-sagar-mohan",
          title: 'Sagar Mohan',
          description: "Fall 2024 -",
          section: "Projects",handler: () => {
              window.location.href = "/projects/PhD_Students/Sagar/";
            },},{id: "projects-zheyuan-ma",
          title: 'Zheyuan Ma',
          description: "Fall 2021 -",
          section: "Projects",handler: () => {
              window.location.href = "/projects/PhD_Students/Zheyuan/";
            },},{id: "projects-charles-wiechec",
          title: 'Charles Wiechec',
          description: "Fall 2021  Major advisor Dr. Lukasz Ziarek",
          section: "Projects",handler: () => {
              window.location.href = "/projects/PhD_students_Alumni/Charles/";
            },},{id: "projects-safayat-bin-hakim",
          title: 'Safayat Bin Hakim',
          description: "Fall 2022 - Spring 2023",
          section: "Projects",handler: () => {
              window.location.href = "/projects/PhD_students_Alumni/Safayet/";
            },},{id: "projects-md-armanuzzaman-tomal",
          title: 'Md. Armanuzzaman Tomal',
          description: "University at Buffalo, 2024  Postdoc at Northeastern University",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Postdocs/Tomal/";
            },},{id: "projects-emil-kovacev",
          title: 'Emil Kovacev',
          description: "Fall 2021",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Undergraduate_Alumni/Emil/";
            },},{id: "projects-eric-bishop",
          title: 'Eric Bishop',
          description: "Fall 2021",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Undergraduate_Alumni/Eric/";
            },},{id: "projects-eric-scheler",
          title: 'Eric Scheler',
          description: "Summer 2019 - Fall 2019, RIT",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Undergraduate_Alumni/Eric_Scheler/";
            },},{id: "projects-paulina-davison",
          title: 'Paulina Davison',
          description: "2018, ASU",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Undergraduate_Alumni/Paulina/";
            },},{id: "projects-xixian-yang",
          title: 'Xixian Yang',
          description: "Summer 2022 from ASU",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Undergraduate_Alumni/XIxian/";
            },},{id: "projects-dikshit-khandelwal",
          title: 'Dikshit Khandelwal',
          description: "Fall 2021",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Undergraduate_Students/Dikshit/";
            },},{id: "projects-elijah-sippel",
          title: 'Elijah Sippel',
          description: "Summer 2023 from UMass Amherst",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Undergraduate_Students/Elijah/";
            },},{id: "projects-junzhe-li",
          title: 'Junzhe Li',
          description: "Fall 2021",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Undergraduate_Students/Junzhe/";
            },},{id: "projects-kayla-yan",
          title: 'Kayla Yan',
          description: "Summer 2024",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Undergraduate_Students/Kayla/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
