import React from 'react'
import mongoose, {Schema} from 'mongoose';

const assessmentSchema = new Schema(
 {
     
        moduleName: {
            type: String,
            required: true
        },
        assessmentName: {
            type: String,
            required: true
        },
        assessmentType: {
            type: String,
            required: true
        },
        assessmentDescription: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
    }
)