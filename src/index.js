import React from "react";
import { render } from "react-dom";
import { Form } from "./Form";

const fakeData = [
  {
    id: "111111111",
    name: "manyOne"
  },
  {
    id: "22222222",
    name: "manyTwo"
  },
  {
    id: "33333333",
    name: "manyThree"
  }
];

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <Form>
      <Form.Input name="myInput22" defaultValue={"22"} />
      <Form.DropDown name="myDropDown22" defaultValue={fakeData[1].id} />
      <Form.DropDown name="myDropDown222222" defaultValue={fakeData[0].id} />
      <button type="submit">submit</button>
    </Form>
    <h2>Start editing to see some magic happen {"\u2728"}</h2>
  </div>
);

render(<App />, document.getElementById("root"));
