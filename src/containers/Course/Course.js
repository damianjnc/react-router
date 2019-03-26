import React, { Component } from 'react';

class Course extends Component {
    state={
        courseTitle: ''
    }

    componentDidMount() {
     this.queryHelper();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
    this.queryHelper();
    }

    queryHelper(){
        console.log(this.props);
        const query = new URLSearchParams(this.props.location.search);
        console.log(query);
        for(let param of query.entries()){
            console.log(param);
            (this.state.courseTitle == param[1]) ?null: this.setState({ courseTitle: param[1]});
        }
    }
    render () {
        console.log(this.props);
        return (
            <div>
                <h1>{this.state.courseTitle}</h1>
                <p>You selected the Course with ID: {this.props.match.params.courseId}</p>
            </div>
        );
    }
}

export default Course;