import { Router } from "express";
import { createExampleController } from "../../controllers/Example,controller.js";


const ExampleRouter:Router = Router()

ExampleRouter.post("/create" ,createExampleController)

export default ExampleRouter