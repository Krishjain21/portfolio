/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen
const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section
const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Krish Jain",
  title: "Hi all, I'm Krish",
  subTitle: emoji(
    "A passionate Full Stack Developer 🚀 with experience in building web applications using JavaScript, ReactJS, NodeJS, and other cool tech stacks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Your resume link here
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/Krishjain21",
  linkedin: "https://www.linkedin.com/in/krish-jain-b1725a1b8/",
  gmail: "mahankrish2003@gmail.com",
  instagram: "https://www.instagram.com/krish_9121/",
  display: true // Set true to display this section, defaults to false
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WITH A PASSION FOR ML AND AI TECHNOLOGIES",
  skills: [
    emoji("⚡ Progressive Web Applications (PWA) with React and NextJS"),   
    emoji("⚡ Implement data processing with MySQL, MongoDB, PostgreSQL, and Redis"),
    emoji("⚡ Develop and deploy Machine Learning models using TensorFlow, OpenAI, and scikit-learn"),
    emoji("⚡ Conduct sentiment analysis and data analysis for interactive AI-driven applications")

  ],
  softwareSkills: [
    { skillName: "html-5", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "css3", fontAwesomeClassname: "fab fa-css3-alt" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "ReactJS", fontAwesomeClassname: "fab fa-react" },
    { skillName: "NodeJS", fontAwesomeClassname: "fab fa-node" },
    { skillName: "MySQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "MongoDB", fontAwesomeClassname: "fas fa-database" },
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Vellore Institute of Technology",
      logo: require("./assets/images/vitLogo.png"),
      subHeader: "Bachelor of Technology in Computer Science and Engineering",
      duration: "August 2021 - June 2025",
      desc: "CGPA: 8.94"
    },
    {
      schoolName: "Ramjas Public School, New Delhi",
      logo: require("./assets/images/Ramjas-School-Logo.png"),
      subHeader: "12th Grade (CBSE)",
      duration: "April 2019 - March 2021",
      desc: "Percentage: 85%"
    }
  ]
};

// Your top 3 proficient stacks/tech experience
const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Frontend/Design", progressPercentage: "80%" },
    { Stack: "Backend", progressPercentage: "90%" },
    { Stack: "ML/AI", progressPercentage: "70%" }
  ],
  displayCodersrank: false
};

// Work experience section
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Full Stack Developer Intern",
      company: "TechJockey.com",
      companylogo: require("./assets/images/techjockeyLogo.jfif"),
      date: "August 2023 – November 2023",
      desc: "Worked on migrating company website from PHP to NextJS, handling authentication and session management."
    },
    {
      role: "Intern",
      company: "Intel",
      companylogo: require("./assets/images/intelLogo.png"),
      date: "June 2023 – November 2023",
      desc: "Focused on AI research, data cleaning, and implementing machine learning models."
    }
  ]
};

// Projects Section
const bigProjects = {
  title: "Projects",
  subtitle: "Some projects that I've built and contributed to.",
  projects: [
    {
      projectName: "Best Course Picker",
      projectDesc: "An app recommending the best online courses using ML models. (Krypthon23 Hackathon)",
      footerLink: [{ name: "View Project", url: "https://krishjain21.github.io/trypton/" }]
    },
    {
      projectName: "Amazon Product Chatbot",
      projectDesc: "Developed a chatbot with sentiment analysis for Amazon product queries. (Intel Internship)",
      footerLink: [{ name: "View Project", url: "https://colab.research.google.com/drive/1CUTSIixOAojAJBOMI1jUI2fFPLF-RJ_9?usp=sharing" }]
    },
    {
      projectName: "Ebook to Audiobook",
      projectDesc: "A Flask and NextJS app to convert ebooks to audiobooks quickly.",
      footerLink: [{ name: "View Project", url: "https://github.com/Krishjain21/ebook-to-audiobook" }]
    }
  ],
  display: true
};

// Achievement Section
const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done!",
  achievementsCards: [
    {
      title: "Finalist in Krypton 23 Hackathon",
      subtitle: "Top 20 in Krypton 23, a 36-hour hackathon held at VIT Chennai."
    },
    {
      title: "Won Tech - Fun Connexion Event",
      subtitle: "A mathematical and tech event focused on discrete graph theory."
    },
    {
      title: "Python, C, and C++ Certifications",
      subtitle: "Certified by IIT Bombay (February 2022)."
    }
  ],
  display: true // Set false to hide this section
};


// Contact Info
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Want to discuss a project or just say hi? My inbox is open.",
  number: "+91-782-7148-681",
  email_address: "mahankrish2003@gmail.com"
};
const isHireable = false;
const openSource = {
  showGithubProfile: "true",
  display: true
};
const blogSection = {
  title: "Blogs",
  display: false // Set to true if you have blogs to display
};
const talkSection = {
  title: "Talks",
  display: false // Set to true if you have talks to display
};
const resumeSection = {
  title: "Resume",
  display: true
};
const podcastSection = {
  title: "Podcast",
  display: false // Set to true if you have podcasts to display
};
const twitterDetails = {
  userName: "your_twitter_username", // Replace with your Twitter username
  display: false
};

export {
  isHireable,
  openSource,
  blogSection,
  talkSection,
  resumeSection,
  podcastSection,
  twitterDetails,
  achievementSection,
  bigProjects,
  contactInfo,
  educationInfo,
  greeting,
  illustration,
  skillsSection,
  socialMediaLinks,
  splashScreen,
  techStack,
  workExperiences
};
