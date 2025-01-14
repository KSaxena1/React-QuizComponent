import React, { Component } from "react";

class QuizQuestionButton extends Component {
  handleClick() {
    this.props.clickHandler(this.props.button_text);
  }
  render() {
    return (
      <li>
        <button key={this.props.key} onClick={this.handleClick.bind(this)}>
          {this.props.button_text}
        </button>
      </li>
    );
  }
}

export default QuizQuestionButton;
