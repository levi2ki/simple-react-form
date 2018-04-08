import React, { Fragment } from "react";

export class Form extends React.Component {
  state = {};

  render() {
    return (
      <Fragment>
        <form action="" id={this.props.id}>
          {this.props.children}
        </form>
      </Fragment>
    );
  }
}
