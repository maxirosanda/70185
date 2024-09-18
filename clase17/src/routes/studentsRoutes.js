import { Router } from "express"
import Student from "../models/Student.js"

const router = Router()

router.get('/', async (req,res)=>{
    const students = await Student.paginate({},{page:2,limit:10})
    res.status(200).json(students)
})

router.get('/stats', async (req,res)=>{

    const sortedByGrade = await Student.aggregate([
        { $sort: { grade: -1 } }
    ])

    const groupedByGroup = await Student.aggregate([
        { $group: { 
            _id: "$group", 
            students: { $push: "$$ROOT" } 
        } }
    ])

    const averageGradeGroupB = await Student.aggregate([
        { $match: { group: "B" } },
        { $group: { _id: null, averageGrade: { $avg: "$grade" } } }
    ])

    const averageGradeGroupA = await Student.aggregate([
        { $match: { group: "A" } },
        { $group: { _id: null, averageGrade: { $avg: "$grade" } } }
    ])

    const averageGradeOverall = await Student.aggregate([
        { $group: { _id: null, averageGrade: { $avg: "$grade" } } }
    ])

    const averageGradeMale = await Student.aggregate([
        { $match: { gender: "Male" } },
        { $group: { _id: null, averageGrade: { $avg: "$grade" } } }
    ])
    

    const averageGradeFemale = await Student.aggregate([
        { $match: { gender: "Female" } },
        { $group: { _id: null, averageGrade: { $avg: "$grade" } } }
    ])

    const result = {
        sortedByGrade,
        groupedByGroup,
        averageGradeGroupA,
        averageGradeGroupB,
        averageGradeOverall,
        averageGradeMale,
        averageGradeFemale
    }
    res.status(200).json(result)
})

export default router