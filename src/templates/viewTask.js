import React, { Component } from "react";
import TasksDataService from "./taks.services";

class ViewTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTutorial: {
        _id: null,
        title: "",
        description: "",
        taskImg: "",
      },
      message: "",
    };
  }
  componentDidMount() {
    this.getTask(this.props.match.params.id);
    console.log(this.props.match.params.id);
  }

  getTask(id) {
    TasksDataService.get(id)
      .then((response) => {
        this.setState({
          currentTutorial: response.data,
        });
        console.log(response.data);
        console.log(this.props.match.params.id);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { currentTutorial } = this.state;

    return (
      <div className="edit-form">
        <h1>{currentTutorial.title}</h1>
        <p>{currentTutorial.description}</p>
        <img src={currentTutorial.taskImg} className="fetchedimg"></img>
      </div>
    );
  }
}

export default ViewTask;
