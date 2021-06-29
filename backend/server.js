import express from "express";
import mongoose from "mongoose";
// import data from "./data.js";
import dotenv from "dotenv";
import productRouter from "./routers/productRouter.js";
import userRouter from "./routers/userRouter.js";
import orderRouter from "./routers/orderRouter.js";

dotenv.config(); //to use env file we need to config in backend

const app = express();

// start to give permissions to users to send post requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//end

//connect mongodb start
mongoose
  .connect(process.env.MONGODB_URL || "mongodb://localhost/e-tech", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));
//monodb end

//first created server
app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter); //order router api
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});
app.get("/api/config/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || "sb"); //api for PayPal sandbox id
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});
