import {Router} from "express"

import { deleteTask, getTask, getTaskCount, getTasks, saveTask, updateTask } from "../controllers/tasks"


const router = Router()


/**
 * @swagger
 * tags:
 *  name: Tasks
 *  description: Tasks endpoint
 */


/**
 * @swagger
 * /tasks:
 *      get:
 *          summary: obtiene todas las tareas
 *          tags: [Tasks]
 */
router.get("/tasks", getTasks)

/**
 * @swagger
 * /tasks/count:
 *      get:
 *          summary: obtiene el total de las tareas
 *          tags: [Tasks]
 */
router.get("/tasks/count", getTaskCount)


/**
 * @swagger
 * /tasks/{id}:
 *      get:
 *          summary: obtiene una tarea por id
 *          tags: [Tasks]
 */
router.get("/tasks/:id", getTask)


/**
 * @swagger
 * /tasks:
 *      post:
 *          summary: guarda una tarea
 *          tags: [Tasks]
 */
router.post("/tasks", saveTask)


/**
 * @swagger
 * /tasks/{id}:
 *      delete:
 *          summary: elimina una tarea
 *          tags: [Tasks]
 */
router.delete("/tasks/:id", deleteTask)


/**
 * @swagger
 * /tasks/{id}:
 *      put:
 *          summary: actualiza  una tarea
 *          tags: [Tasks]
 */
router.put("/tasks/:id", updateTask)






export default router