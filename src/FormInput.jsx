import React, { Fragment } from "react";
import PropTypes from "prop-types";

export class Input extends React.Component {
  static contextTypes = {
    formValues: PropTypes.shape().isRequired,
    _formId: PropTypes.string,
    _setInitialValue: PropTypes.func,
    _handleChanges: PropTypes.func
  };

  componentDidMount() {
    const { name, defaultValue } = this.props;
    this.context._setInitialValue(name, defaultValue);
  }
  render() {
    const { formValues, _handleChanges } = this.context;
    const { name } = this.props;
    return (
      <div>
        <label>
          {"smtgng"}
          <input
            type="text"
            value={formValues[name]}
            name={name}
            onChange={_handleChanges}
          />
        </label>
      </div>
    );
  }
}
