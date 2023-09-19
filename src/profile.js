// Change website animations
const animation = {
  // make it false to switch off fade-up animation
  animate: true,
  // animation playing duration
  duration: 750,
  // if true, animation plays only once when element comes on screen
  once: false,
};
// Change your display name on tha landing display
const header = {
  name: "Samuel Maya",
};
const background = {
  // Options: Snow or Particle
  type: "Snow",
};
// Write a para about yourself here
// To update your image, go to './styles/images.css'
const section2title = "About Me";
const about = {
  paragraph:
    "I am a software developer with a passion for problem solving and a desire to constantly be improving on my skills.",
};
// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma
const skillsBar = [
  {
    name: "HTML5",
    // To add a custom svg instead of font-awesome icons, add svg path below otherwise just comment it out
    svg: "M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z",
    faClass: "fab fa-html5",
  },
  {
    name: "CSS3",
    // svg: '',
    faClass: "fab fa-css3",
  },
  {
    name: "Javascript",
    // svg: '',
    faClass: "fab fa-js",
  },
  {
    name: "React",
    // svg: '',
    faClass: "fab fa-react",
  },
  {
    name: "Node",
    // svg: '',
    faClass: "fab fa-node",
  },
  {
    name: "TypeScript",
    // svg: '',
    faClass: "fas fa-keyboard",
  },
  {
    name: "Python",
    // svg: '',
    faClass: "fab fa-python",
  },
  {
    name: "Kotlin",
    // svg: '',
    faClass: "fab fa-android",
  },
  {
    name: "Java",
    // svg: '',
    faClass: "fab fa-java",
  },
  {
    name: "Bootstrap",
    // svg: '',
    faClass: "fab fa-bootstrap",
  },
  {
    name: "MongoDB",
    // svg: '',
    faClass: "fas fa-database",
  },
  {
    name: "Firebase",
    // svg: '',
    faClass: "fas fa-fire",
  },
  {
    name: "WordPress",
    // svg: '',
    faClass: "fab fa-wordpress",
  }
];
// Edit your projects, its name, your skills used to make it, and the url.
// You can omit freely anything if you dont have it
// To Add a Project, copy any one below and paste it after the last comma and increment the id's project number
const section3Title = "Past Projects";
const projects = [
  {
    // Add image in './styles/images.css' in #project1
    id: "project6",
    name: "Swift Retail Advisors",
    skills: ["HTML, CSS, JavaScript, WordPress"],
    url: "https://swiftreadvisors.com/",
  },
  {
    // Add image in './styles/images.css' in #project1
    id: "project7",
    name: "Tribeca Mortgage",
    skills: ["HTML, CSS, JavaScript, WordPress"],
    url: "https://tribecamortgage.com/",
  },
  {
    // Add image in './styles/images.css' in #project1
    id: "project1",
    name: "Goals Keeper",
    skills: ["MongoDB, Express, React, Node.js, Redux, JWT"],
    url: "https://github.com/Sam-Maya/MERN_APP",
  },
  {
    // Add image in './styles/images.css' in #project4
    id: "project4",
    name: "The Studio Worldwide",
    skills: ["HTML, CSS, JavaScript, PHP"],
    url: "https://www.thestudioworldwide.com/",
  },
  {
    // Add image in './styles/images.css' in #project2
    id: "project2",
    name: "React Task App",
    skills: ["React, JavaScript"],
    url: "https://github.com/Sam-Maya/ReactTaskApp",
  },
  {
    // Add image in './styles/images.css' in #project3
    id: "project3",
    name: "Tennis String API",
    skills: ["Express, Node.js"],
    url: "https://github.com/Sam-Maya/TennisStringScaper",
  },
  {
    id: "project8",
    name: "Kotlin Age To Minutes App",
    skills: ["Kotlin, XML"],
    url: "https://github.com/Sam-Maya/Android-Age-To-Minutes-App",
  },
  {
    // Add image in './styles/images.css' in #project5
    id: "project5",
    name: "Portfolio Site",
    skills: ["React, JavaScript"],
    url: "https://samuelthedev.com/",
  }
  // {
  //   // Add image in './styles/images.css' in #project6
  //   id: "project6",
  //   name: "Project 6",
  //   skills: ["HTML, CSS, JS"],
  //   url: "",
  // },
];
// Edit your Miscellaneous Activities, its name and the url.
// You can omit freely anything if you dont have it
// To Add a Activity, copy any one below and paste it after the last comma and increment the id's Miscellaneous number
const section4Title = "Miscellaneous";
const miscellaneous = [
  {
    // Add image in './styles/images.css' in #misc1
    id: "misc1",
    name: "Miscellaneous 1",
    url: "https://github.com/sam-maya",
  },
  {
    // Add image in './styles/images.css' in #misc2
    id: "misc2",
    name: "Miscellaneous 2",
    url: "https://github.com/sam-maya",
  },
  {
    // Add image in './styles/images.css' in #misc3
    id: "misc3",
    name: "Miscellaneous 3",
    url: "https://github.com/sam-maya",
  },
];
// Contact form text, and Formspree link(
const section5Title = "Get in Touch";
const contact = {
  pitch:
    "If you would like to reach out about any projects or employment opportunities you may have feel free to reach out and I will get back you you as soon as possible.",
};
// Paste your respective social media links. You can omit any if you dont have it
// Upload your resume in your drive, get the shaareable link and paste it in the resume section
const social = {
  github: "https://github.com/Sam-Maya",
  // facebook: "https://facebook.com",
  // twitter: "https://twitter.com",
  // instagram: "https://instagram.com",
  linkedin: "https://www.linkedin.com/in/samuel-maya-2316a176/",
  resume: "https://drive.google.com/file/d/1xtoIu1mkcqgDPcXEavo0WFodD8yCJSHw/view?usp=sharing",
};
// Dont change anything here
export {
  animation,
  header,
  background,
  about,
  skillsBar,
  projects,
  miscellaneous,
  contact,
  social,
  section2title,
  section3Title,
  section4Title,
  section5Title,
};
