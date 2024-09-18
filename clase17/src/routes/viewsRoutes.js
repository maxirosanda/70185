import { Router } from "express"
import Student from "../models/Student.js"

const router = Router()

router.get('/:page', async (req,res)=>{
    const {page} = req.params
    const students = await Student.paginate({},{page,limit:10})
    res.status(200).render("index",{students})
})


export default router