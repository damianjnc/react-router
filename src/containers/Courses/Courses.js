import React, { Component } from 'react';
import {Link, Route} from "react-router-dom";
import './Courses.css';
import Course from "../Course/Course";
import Auxiliary from "../../App";


class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' , courseUrl:'/courses/angular'},
            { id: 2, title: 'Vue - The Complete Guide', courseUrl:'/courses/vue' },
            { id: 3, title: 'PWA - The Complete Guide', courseUrl:'/courses/pwa' }
        ],
        selectedCourseId: null,
        courseId:null
    }
    courseSelectedHandler(id,title){
    this.setState({selectedCourseId:id,
    courseId:title});
}

    render () {

        return (
            <Auxiliary>
                <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {
                        this.state.courses.map( course => {
                            return (<Link  key={course.id} to={this.props.match + '/course'}>
                                <article onClick={() => this.courseSelectedHandler(course.id, course.title)} className="Course">{course.title}
                                </article>
                            </Link>);
                        } )
                    }
                </section>
                {this.state.selectedCourseId ? (<Route path="/courses" component={() =><Course courseId={this.state.selectedCourseId} courseTitle={this.state.courseId} />} />): null}
                </div>
            </Auxiliary>
        );
    }
}

export default Courses;