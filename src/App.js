import './App.css';
import Layout from './components/Layout';
import {Routes, Route, Navigate} from 'react-router-dom';
import PageNotFound from "./pages/PageNotFound";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import Home from "./pages/Home";
function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Navigate to="/home"/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/courses" element={<Courses/>}/>
                <Route path="/course-details/:courseId" element={<CourseDetails/>}/>
                <Route path="*" element={<PageNotFound/>}/>
            </Routes>
        </Layout>
    );
}

export default App;
