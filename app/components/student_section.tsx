"use client"
import React from "react";

interface Props {
    tab: string; 
}

const StudentSection: React.FC<Props> = ({ tab }) => {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Student Section</h2>
            <p>{tab}</p>
        </div>
    );
};

export default StudentSection;

