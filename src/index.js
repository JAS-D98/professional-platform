import express from "express"
import { config } from "dotenv";
import professionalRoutes from "./routes/professionals.router.js";
import userRoutes from "./routes/users.router.js";
import reviewRoutes from "./routes/reviews.router.js";


config();
const app = express();
app.use(express.json());

app.use("/api/users/v1", userRoutes);
app.use("/api/professionals/v1", professionalRoutes);
app.use("/api/reviews/v1", reviewRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
