import { Router } from "express";

import {
  insertTeacher,
  getAllTeachers,
  getOneTeacher,
  getPracticeAndModuleByTeacher,
} from "../controllers/profesorController";
const router = Router();

// Inserciones
router.post("/", insertTeacher);

// Consultas
// /api/profesor
router.get("/", getAllTeachers);
// Conocer la informacion de un profesor especifico
router.get("/:idProfesor", getOneTeacher);
// Conocer las practicas que ha creado un determinado profesor y a que corte estan asociadas cada una:
router.get("/practica/:idProfesor", getPracticeAndModuleByTeacher);

export default router;
