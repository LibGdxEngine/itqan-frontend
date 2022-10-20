import CourseListItem from "./CoursesListItem";
import classes from './CoursesList.module.css';

const COURSES = [
    {
        id: 1,
        name: "Python and AI",
        description: "Python description"
    },
    {
        id: 2,
        name: "Android",
        description: "Python description"
    }, {
        id: 3,
        name: "Datastructure and Algorithms",
        description: "Python description"
    }, {
        id: 4,
        name: "Java spring",
        description: "Python description"
    }
]

const CoursesList = (props) => {
    const courses = COURSES.map((course) => {
        return <CourseListItem key={course.id} courseData={course}/>

    });

    return <div>
        <ul>
            {courses}
        </ul>
    </div>
};

export default CoursesList;