import ayla from "../assets/ayla.jpg";
import crefin from "../assets/crefin.jpg";
import realEstate from "../assets/real-estate.jpg";
import travel from "../assets/travel.jpg";

export const projectsData = [
  {
    id: 1,
    name: "LeaseGuard Pro || Lease Property Maintenance",
    description:
      "Developed a lease property maintenance system featuring user roles (admin, creator, authorizer) and a 20+ attribute database schema. Implemented branch-specific entry for creators to add records, validated by authorizers, improving data accuracy. Leveraged MongoDB, Flask, and React to enable efficient querying over 4+ attributes.",
    tools: ["Flask", "MongoDB", "ReactJs", "Tailwind CSS"],
    status: "April 24 – Present",
    // code: "",
    // demo: "",
    image: crefin,
  },
  {
    id: 2,
    name: "Pneumonia Detector || Your Health tracker",
    description:
      "Developed a pneumonia detection system utilizing transfer learning techniques for enhanced diagnostic accuracy. Employed the VGG16 model to achieve a training accuracy of 97.51% and a validation accuracy of 91.83%. Integrated the machine learning model with a web application, facilitating user interaction and accessibility. Utilized React for the frontend, Flask as the backend, and TensorFlow for the ML model.",
    tools: ["ReactJs", "Material UI", "Flask", "Tensorflow"],
    status: "March 24 – April 24",
    // code: "",
    // demo: "",
    image: travel,
  },
  {
    id: 3,
    name: "Analyzing Sentiments || Multi-Model evaluation on IMDb",
    description:
      "Conducted sentiment analysis on IMDb dataset using Vanilla RNN, GRU, LSTM, Bi-LSTM models. Evaluated model performances based on accuracies, with GRU achieving highest accuracy of 88.84%, surpassing Vanilla RNN by 25%. Analyzed and compared the results to determine the most effective model for sentiment analysis.",
    tools: ["Python", "Tensorflow", "Numpy", "Matplotlib"],
    // code: "",
    status: "February 24 – March 24",
    // demo: "",
    image: realEstate,
  },
  {
    id: 4,
    name: "ResearchMate || Research Aid Platform",
    description:
      "Incorporated key functionalities, including a summarization feature that effectively reduced lengthy research extracts of research materials by 50%, along with limitation generation and chatbot interaction. Integrated technologies like ReactJs, CSS, Flask, Spacy, ChatGPT to enhance user experience.",
    tools: ["ReactJS", "Tailwind CSS", "Flask", "Spacy", "ChatGPT model"],
    // code: "",
    // demo: "",
    image: ayla,
    status: "February 24 – February 24",
  },
  {
    id: 5,
    name: "Verbalize || Enhance your Spanish",
    description:
      "Engineered a web platform to enable learners to engage with 1000+ Spanish verbs in an enjoyable manner. Launched 3+ engaging digital content pieces with cross-browser compatibility. Used CSS, ReactJs, NodeJs, ExpressJs and integrated MongoDB to handle language exercises across various proficiency levels.",
    tools: ["ReactJS", "Material UI", "NodeJs", "ExpressJs", "MongoDB"],
    // code: "",
    // demo: "",
    image: ayla,
    status: "November 23 – January 24",
  },
  {
    id: 6,
    name: "DalleVision || Visualize your ideas",
    description:
      "A web application that uses the Dalle API to generate images in real-time and store them in cloud database of MongoDB reducing the searching time for subsequent searches. Built reusable React components that improved the code efficiency and added user registration and login functionality. Support users with different roles and post creative images options for users. Adjusted database schemas and API requests according to the changes in application requirements.",
    tools: ["ReactJS", "Tailwind CSS", "NodeJs", "ExpressJs", "MongoDB"],
    // code: "",
    // demo: "",
    image: ayla,
    status: "March 2023 - June 2023",
  },
  {
    id: 7,
    name: "WonderMart || Your Shopping Store",
    description:
      "Collaborated with a team 3 members to design and develop a food delivery application named WonderMart. Added functionalities like adding items to cart showing user history using technologies like ReactJs, Firebase, Framer motion, Tailwind CSS. Accomplished good user experience by considering various aspects of a good design. Built reusable components to design a completely responsive web application. ",
    tools: ["ReactJS", "Tailwind CSS", "NodeJs", "ExpressJs", "MongoDB"],
    // code: "",
    // demo: "",
    image: ayla,
    status: "March 2023 - June 2023",
  },
];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
