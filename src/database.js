import { connect } from "mongoose"; //modulo paara conectarnos a la base de datos
import "./database"
import { MONGODB_URI} from "./config"



(async () => {
  try {
    const db = await connect(MONGODB_URI);
    console.log("Db connectect to", db.connection.name);
  } catch (error) {
    console.error(error);
  }
})();
