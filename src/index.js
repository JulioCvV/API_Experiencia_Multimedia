import app from "./app";
import "@babel/polyfill";
const PORT = process.env.PORT || 4000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server on Port ${PORT}`);
});
