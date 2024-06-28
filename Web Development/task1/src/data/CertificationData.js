import mongo from "../assets/mongo.png";
import cisco from "../assets/cisco.png";
import google from "../assets/google.png";


export const CertificationData = [
  {
    id: 1,
    cover_image: mongo,
    company: "MongoDB",
    url: "https://ti-user-certificates.s3.amazonaws.com/ae62dcd7-abdc-4e90-a570-83eccba49043/915d8e8d-718c-4b07-916f-16e2ccbd7322-shreya-parkar-597a0939-eea5-4610-b5eb-454fd81f1aeb-certificate.pdf",
    title: "MongoDB NodeJs and Python Developer Path",
    description:
      "Applying CRUD operations, connecting to database using PyMongo and NodeJs, creating aggregation pipelines and indexes to improve query performance",
  },
  {
    id: 2,
    cover_image: google,
    company: "Google, Coursera",
    url: "https://www.coursera.org/account/accomplishments/certificate/AVG9XZ48Z4QN",
    title: "Foundation of User Experience (UX) Design",
    description:
      "Certified in applying factors contributing to great User Experience and making them useful, enjoyable, and accessible.",
  },
  {
    id: 3,
    cover_image: cisco,
    company: "Cisco",
    url: "https://www.credly.com/badges/b0aa0afa-6b08-491b-937c-71c68de39625/public_url",
    title: "Cisco Certified Network Associate",
    description:
      "Proficient in IP addressing, routing and switching protocols, network security, and wireless networking. ",
  },
];
