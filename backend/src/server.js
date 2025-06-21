import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";
import notesRoutes from "./routes/notesRoutes.js";

dotenv.config();
const app = express();

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
app.use(rateLimiter);
app.use("/api/notes", notesRoutes);

const PORT = process.env.PORT || 5001;

// Modern approach with dedicated startup function
const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect to database:", error);
    process.exit(1);
  }
};

startServer();
// await connectDB();
// app.listen(PORT, () => {
//   console.log("Server is running on port:", PORT);
// });
// connectDB().then(() => { //  connectDB() first then listen to port
//   app.listen(PORT, () => {
//     console.log("Server is running on port:", PORT);
//   });
// });

// mongodb+srv://neeraj26:KvFk9WfLNBEhNyuZ@cluster0.h04asyu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
// mongodb+srv://<db_username>:<db_password>@cluster0.h04asyu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
// neeraj26, cep2z4aJ5edlCHd4

// not used youtube wale ka hai
// UPSTASH_REDIS_REST_URL=https://capable-lark-30310.upstash.io
// UPSTASH_REDIS_REST_TOKEN=AXZmAAIjcDE10GE5M2RlYmZjYTk0OWUzYmQwNGViYmE5MDM5NTNkZHAxMA
