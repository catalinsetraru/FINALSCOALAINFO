import React, { Component } from "react";
import TasksDataService from "./taks.services";
import Navbar from "./Layout/Navbar";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangetaskImg = this.onChangetaskImg.bind(this);
    this.getTask = this.getTask.bind(this);
    this.updateTask = this.updateTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);

    this.state = {
      currentTask: {
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

  onChangeTitle(e) {
    const title = e.target.value;

    this.setState(function (prevState) {
      return {
        currentTask: {
          ...prevState.currentTask,
          title: title,
        },
      };
    });
  }

  onChangeDescription(e) {
    const description = e.target.value;

    this.setState((prevState) => ({
      currentTask: {
        ...prevState.currentTask,
        description: description,
      },
    }));
  }

  onChangetaskImg(e) {
    const taskImg = e.target.value;

    this.setState((prevState) => ({
      currentTask: {
        ...prevState.currentTask,
        taskImg: taskImg,
      },
    }));
  }

  getTask(id) {
    TasksDataService.get(id)
      .then((response) => {
        this.setState({
          currentTask: response.data,
        });
        console.log(response.data);
        console.log(this.props.match.params.id);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  updateTask() {
    console.log(this.state.currentTask.id);
    TasksDataService.update(this.state.currentTask._id, this.state.currentTask)
      .then((response) => {
        console.log(response.data);
        this.props.history.push("/list");
        this.setState({
          message: "The tutorial was updated successfully!",
        });
      })
      .catch((e) => {
        console.log(e);
        console.log("Eroare");
      });
  }

  deleteTask() {
    TasksDataService.delete(this.state.currentTask._id)
      .then((response) => {
        console.log(response.data);
        this.props.history.push("/list");
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { currentTask } = this.state;

    return (
      <div className="editdelete">
        <Navbar />
        {currentTask ? (
          <div className="edit-form">
            <h1 className="h1updatedelete">Update or delete your tasks!</h1>
            <form>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={currentTask.title}
                  onChange={this.onChangeTitle}
                />

                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={currentTask.description}
                  onChange={this.onChangeDescription}
                />
                <label htmlFor="taskImg">Image</label>
                <input
                  type="taskImg"
                  className="form-control"
                  id="taskImg"
                  value={currentTask.taskImg}
                  onChange={this.onChangetaskImg}
                />
              </div>
            </form>

            <button className="btndelete" onClick={this.deleteTask}>
              Delete
            </button>

            <button type="submit" className="btnedit" onClick={this.updateTask}>
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Tutorial...</p>
          </div>
        )}
      </div>
    );
  }
}

export default Edit;
