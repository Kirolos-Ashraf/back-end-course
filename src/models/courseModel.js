import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const CourseSchema = new Schema({
     name: { 
          type: String,
          required: 'Enter a course name'
     }, 
     imageSrc: { 
          type: String,
          required: "enter image src"
     },
     description: { 
          type: String,
          minlength: 5,
          maxlength: 1000,
          required: 'enter course description'
     },
     category: { 
          type: String, 
          required: 'Enter a last name'
     },
     course_id: { 
          type: Number
     },
     rate: { 
          type: Number
     }, 
     requirement: { 
          type: String
     },
     created_by: { 
          type: String
     },
     created_date: { 
          type: Date,
          default: Date.now
     }
})