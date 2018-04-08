import React, { Fragment } from "react";
import PropTypes from "prop-types";
import "./FormDropDown.css";

export class FormDropDown extends React.Component {
  static contextTypes = {
    formValues: PropTypes.shape().isRequired,
    _formId: PropTypes.string,
    _setInitialValue: PropTypes.func,
    _handleChanges: PropTypes.func
  };
  componentDidMount() {
    this.context._setInitialValue(this.props.name, this.props.defaultValue);
  }

  render() {
    const { name } = this.props;

    return (
      <Fragment>
        <input
          type="hidden"
          name={name}
          value={this.context.formValues[name]}
        />
        <div>
          <svg className="dropdown-arrow-up">
            <polygon points="0,0 10,0 5,10" />
          </svg>
        </div>
      </Fragment>
    );
  }
}
