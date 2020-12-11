import tindev from "../assets/images/projects/tindev.jpg";
import calculator from "../assets/images/projects/calculator.png";
import portfolio from "../assets/images/projects/portfolio.png";

export default [
  {
    name: "tindev",
    technos: ["typescript", "react", "redux", "mongoose"],
    image: tindev,
    github: "https://github.com/MaximeArn/Tindev",
    description:
      " Social network to bring devs together with a shared project. You can also create a project yourself, or, join another user's project. You will be able to filter any project according to your criterias and discuss with other users through a chat or create groups to communicate easily with each others.",
  },
  {
    name: "calculator",
    technos: ["scss", "javascript", "react"],
    image: calculator,
    github: "https://github.com/MaximeArn/react-calculator",
    description:
      "A simple calculator to train on my current skills and try new things (change the color theme and neumorphism effect on the buttons)",
  },
  {
    name: "portfolio",
    technos: ["scss", "javascript", "react"],
    image: portfolio,
    github: "https://github.com/MaximeArn/Portfolio",
    description:
      "First project brought up to hosting (on netlify) and purchase of domain name.",
  },
];
