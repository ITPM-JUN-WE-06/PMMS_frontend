import React from 'react'
import mongoose, {Schema} from 'mongoose';
import { time } from 'console';

const presentationSchema = new Schema(
 {
     
        projectModule: {
            type: String,
            required: true
        },
        assessmentName: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            required: true
        },
        venue: {
            type: String,
            required: true
        },
        time: {
            type: time,
            required: true
        },
        groupNumber: {
             type: String,
             required: true
        },
        presentationPanel: {
            type: String,
            required: true
       }
},
{
        timestamps: true,
    }
)


const Presentation= mongoose.models.Presentation || mongoose.model('Presentation', presentationSchema);

export default Presentation;
