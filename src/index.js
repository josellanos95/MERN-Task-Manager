import app from "./app.js";
import { connectDB } from "./db.js";
import { PORT } from "./config/config.js";

connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;

