import React, { Component } from "react";
import TasksDataService from "./taks.services";
import "../App.css";

class AddTask extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangetaskImg = this.onChangetaskImg.bind(this);
    this.saveTask = this.saveTask.bind(this);
    this.newTask = this.newTask.bind(this);

    this.state = {
      id: null,
      title: "",
      description: "",
      taskImg: "",

      submitted: false,
    };
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  onChangetaskImg(e) {
    this.setState({
      taskImg: e.target.value,
    });
  }

  saveTask() {
    var data = {
      title: this.state.title,
      description: this.state.description,
      taskImg: this.state.taskImg,
    };

    TasksDataService.create(data)
      .then((response) => {
        this.setState({
          id: response.data.id,
          title: response.data.title,
          description: response.data.description,
          taskImg: response.data.taskImg,
        });
        console.log(response.data);
        this.props.history.push("/list");
      })
      .catch((e) => {
        console.log(e);
      });
  }

  newTask() {
    this.setState({
      id: null,
      title: "",
      description: "",
      taskImg: "",

      submitted: false,
    });
  }
  // ...

  render() {
    return (
      <div className="formdiv">
        <h1 className="addtask">Add a new task!</h1>
        <form className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            required
            value={this.state.title}
            onChange={this.onChangeTitle}
            name="title"
          />

          <label htmlFor="description">Description</label>
          <input
            type="text"
            className="form-control"
            id="description"
            required
            value={this.state.description}
            onChange={this.onChangeDescription}
            name="description"
          />
          <label htmlFor="taskImg">Image</label>
          <input
            type="text"
            className="form-control"
            id="taskImg"
            required
            value={this.state.taskImg}
            onChange={this.onChangetaskImg}
            name="taskImg"
          />
        </form>

        <button onClick={this.saveTask} className="btn-success">
          Submit
        </button>
      </div>
    );
  }
}
export default AddTask;
