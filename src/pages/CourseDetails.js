import {useParams} from 'react-router-dom';
import React from 'react'


const CourseDetails = (props) => {
    const params = useParams();

    return <div>
        <h1>Course Details {params.courseId}</h1>

    </div>
};

export default CourseDetails;