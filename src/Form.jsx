import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Input } from "./FormInput";
import { FormDropDown } from "./FormDropDown";

export class Form extends React.Component {
  static childContextTypes = {
    formValues: PropTypes.shape().isRequired,
    _formId: PropTypes.string,
    _setInitialValue: PropTypes.func,
    _handleChanges: PropTypes.func
  };

  static Input = Input;
  static DropDown = FormDropDown;

  state = {};

  _setInitialValue = (name, val) => {
    console.log("me foo", name, val);
    this.setState(
      {
        [name]: val || ""
      },
      () => {
        console.log(this.state);
      }
    );
  };

  _handleChanges = e => {
    const target = e.target;
    const name = target.name;
    this.setState({
      [name]: target.value
    });
  };

  getChildContext() {
    const { _setInitialValue, _handleChanges } = this;
    return {
      formValues: this.state,
      _formId: this.props.id,
      _setInitialValue,
      _handleChanges
    };
  }

  __onFormSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <Fragment>
        <form action="" id={this.props.id} onSubmit={this.__onFormSubmit}>
          {this.props.children}
        </form>
      </Fragment>
    );
  }
}
