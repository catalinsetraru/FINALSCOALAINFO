import React, { Component } from "react";
import TasksDataService from "./taks.services";
import "../App.css";

class AddTask extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.saveTutorial = this.saveTutorial.bind(this);
    this.newTutorial = this.newTutorial.bind(this);

    this.state = {
      id: null,
      title: "",
      description: "",
      published: false,

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

  saveTutorial() {
    var data = {
      title: this.state.title,
      description: this.state.description,
    };

    TasksDataService.create(data)
      .then((response) => {
        this.setState({
          id: response.data.id,
          title: response.data.title,
          description: response.data.description,
          published: response.data.published,

          submitted: true,
        });
        console.log(response.data);
        this.props.history.push("/list");
      })
      .catch((e) => {
        console.log(e);
      });
  }

  newTutorial() {
    this.setState({
      id: null,
      title: "",
      description: "",
      published: false,

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
        </form>

        <button onClick={this.saveTutorial} className="btn-success">
          Submit
        </button>
      </div>
    );
  }
}
export default AddTask;
