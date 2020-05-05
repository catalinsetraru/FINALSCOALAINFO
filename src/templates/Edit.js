import React, { Component } from "react";
import TasksDataService from "./taks.services";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.getTask = this.getTask.bind(this);
    this.updateTask = this.updateTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);

    this.state = {
      currentTutorial: {
        _id: null,
        title: "",
        description: "",
        published: false,
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
        currentTutorial: {
          ...prevState.currentTutorial,
          title: title,
        },
      };
    });
  }

  onChangeDescription(e) {
    const description = e.target.value;

    this.setState((prevState) => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        description: description,
      },
    }));
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

  updateTask() {
    console.log(this.state.currentTutorial.id);
    TasksDataService.update(
      this.state.currentTutorial._id,
      this.state.currentTutorial
    )
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
    TasksDataService.delete(this.state.currentTutorial._id)
      .then((response) => {
        console.log(response.data);
        this.props.history.push("/list");
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { currentTutorial } = this.state;

    return (
      <div class="editdelete">
        {currentTutorial ? (
          <div className="edit-form">
            <h1 className="h1updatedelete">Update or delete your tasks!</h1>
            <form>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={currentTutorial.title}
                  onChange={this.onChangeTitle}
                />

                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={currentTutorial.description}
                  onChange={this.onChangeDescription}
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
