import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";

export default class StudentTableRow extends Component {
  constructor(props) {
    super(props);
    this.deleteStudent = this.deleteStudent.bind(this);
  }

  deleteStudent() {
    axios
      .delete(
        "http://localhost:4000/students/delete-student/" + this.props.obj._id
      )
      .then((res) => {
        console.log("Student successfully deleted!");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <tr>
        <td>{this.props.obj.name}</td>
        <td>{this.props.obj.email}</td>
        <td>{this.props.obj.rollno}</td>
        <td>
          <Link
            className="edit-link"
            path={"product/:id"}
            to={"/edit-student/" + this.props.obj._id}
          >
            Editar
          </Link>
          <Button onClick={this.deleteStudent} size="sm" variant="danger">
            Borrar
          </Button>
        </td>
      </tr>
    );
  }
}
