import type { Request, Response , NextFunction } from "express";
import { createExample } from "../services/example/Example.js";



export async function createExampleController(req:Request, res:Response, next:NextFunction){
        
        try {

            const result = await createExample("insertModel o repo", {id:1,name:"test"})

            res.status(200).send("create")
            
        } catch (error) {
            res.status(500).send("errror")
        }
        
    }