import connectDb from "../DB/connection.js";
import userRouter from "./users/user.router.js";
import investorProfileRouter from "./investorProfile/investorProfile.router.js";
import founderProfileRouter from "./founderProfile/founderProfile.router.js";
import postRouter from "./posts/post.router.js";
import cors from "cors";

const initApp = async (app, express) => {
  const corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200,
  };
  connectDb();
  app.use(cors(corsOptions));
  app.use(express.json());

  app.use("/users", userRouter);
  app.use("/founderProfile", founderProfileRouter);
  app.use("/investorProfile", investorProfileRouter);
  app.use("/post", postRouter);
};

export default initApp;
