import express from "express";
import indexRoutes from "./routes/index.routes";
import exphbs from "express-handlebars";
import path from "path"; //para utilizar la ruta no absoluta
import { create } from "express-handlebars";
import morgan from "morgan"

const app = express();


app.set("views", path.join(__dirname, "views"));//para utilizar la ruta no absoluta

app.engine(
    ".hbs",
    create({
      layoutsDir: path.join(app.get("views"), "layouts"),
      partialsDir: path.join(app.get("views"), "partials"),
      defaulLayout: "main",
      extname: ".hbs",
    }).engine
  );
app.set("view engine", ".hbs");

//middlewars
app.use(morgan("dev")); //detalla por consola 
app.use(express.urlencoded({ extended: false }));


//routes
app.use(indexRoutes);

// public route
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  res.status(404).render("404");
});

export default app;
