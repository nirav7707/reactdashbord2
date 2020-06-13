import React, { Component } from "react";
import ListOF from "./ListComponent";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import Subject from "./subject";
import ExamMarks from "./exammarks";

function Rendersubject(props) {
  console.log(props.num);
  switch (props.num) {
    case 1:
      return <Subject num={1} />;
    case 2:
      return <Subject num={2} />;
    case 3:
      return <Subject num={3} />;
    case 4:
      return <Subject num={4} />;
    case 5:
      return <Subject num={5} />;
    case 6:
      return <Subject num={6} />;
    case 7:
      return <Subject num={7} />;
    case 8:
      return <Subject num={8} />;

    default:
      return <div />;
  }
}
function RendersubjectMarks(props) {
  console.log(props.num);
  switch (props.num) {
    case 1:
      return <ExamMarks num={1} />;
    case 2:
      return <ExamMarks num={2} />;
    case 3:
      return <ExamMarks num={3} />;
    case 4:
      return <ExamMarks num={4} />;
    case 5:
      return <ExamMarks num={5} />;
    case 6:
      return <ExamMarks num={6} />;
    case 7:
      return <ExamMarks num={7} />;
    case 8:
      return <ExamMarks num={8} />;

    default:
      return <div />;
  }
}

class Academic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedsem: null
    };
    this.rendersem = this.rendersem.bind(this);
  }
  rendersem(x) {
    this.setState({
      selectedsem: x
    });
  }
  render() {
    console.log(this.state.selectedsem);
    return (
      <div className="container-fluied">
        <div className="row">
          <div className="col-md-8">
            <RenderS
              num={this.props.componentnumber}
              sem={this.state.selectedsem}
            />
          </div>
          <div className="col-md-4">
            <ListOF data={{ compnum: x => this.rendersem(x), type: 2 }} />
          </div>
        </div>
      </div>
    );
  }
}

export default Academic;

function RenderS(props) {
  console.log("this is ReanderS", props.num);
  if (props.num === 1) {
    return <Rendersubject num={props.sem} />;
  } else {
    return <RendersubjectMarks num={props.sem} />;
  }
}
