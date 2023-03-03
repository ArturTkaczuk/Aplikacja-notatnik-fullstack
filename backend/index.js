import app from "./app/app.js";

// server start
app.listen(process.env.PORT, () => {
  console.log("Server running on port " + process.env.PORT);
});
