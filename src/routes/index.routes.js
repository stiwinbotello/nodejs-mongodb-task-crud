import { Router } from "express";


import {
  createTask,
  deleteTask,
  renderTask,
  taskToggleDone,
  renderTaskEdit,
  editTask,
  home,
} from "../controllers/tasks.controllers";

const router = Router();

router.get("/", renderTask);



router.get("/home", home);







router.post("/tasks/add", createTask);

router.get("/tasks/:id/edit", renderTaskEdit);

router.post("/tasks/:id/edit", editTask);

router.get("/tasks/:id/delete", deleteTask);

router.get("/tasks/:id/toggleDone", taskToggleDone);

export default router;
