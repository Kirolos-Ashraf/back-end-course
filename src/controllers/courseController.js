import mongoose from "mongoose";
import { CourseSchema } from "../models/courseModel";

const Courses = mongoose.model('Courses', CourseSchema)

export const addNewCourse = (req, res)=> { 

     let newCourse = new Courses(req.body)

     newCourse.save((err, course)=> { 
          if(err){ 
               res.send(err)
          }

          res.json(course)
     })

}

export const getCourses = (req, res)=> { 

     Courses.find({}, (err, course)=> { 
          if(err){ 
               res.send(err)
          }

          res.json(course)
     })

}

export const getCourseWithId = (req, res)=> { 

     Courses.findOne({ name: req.params.name }, (err, course)=> { 
          if(err){ 
               res.send(err)
          }

          res.json(course)
     })

}

export const getCourseWithName = (req, res)=> { 

     Courses.find({ name: req.params.search }, (err, course)=> { 
          if(err){ 
               res.send(err)
          }

          res.json(course)
     })

}

export const updateCourse = (req, res)=> { 

     Courses.findOneAndUpdate({ _id: req.params.courseID}, req.body, {new: true, useFindAndModify: false}, (err, course)=> { 
          if(err){ 
               res.send(err)
          }

          res.json(course)
     })

}

export const deleteCourse = (req, res)=> { 

     Courses.remove({ course_id: req.params.courseID}, (err, course)=> { 
          if(err){ 
               res.send(err)
          }

          res.json({ message: "Successfully deleted contact "})
     })

}
