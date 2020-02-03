import React from "react";
import CMS from "netlify-cms-app";

const StringControl = CMS.getWidget("string");
console.log(StringControl);

export class TransliteControl extends React.Component {
  state = {
    view: "",
    formatted: ""
  };
  onChange = value => {
    console.log(this.props);

    this.setState(
      {
        view: value,
        formatted: value.toUpperCase()
      },
      () => {
        this.props.onChange(this.state);
      }
    );
  };
  render() {
    return (
      <StringControl.control
        {...this.props}
        onChange={this.onChange}
        value={this.state.view}
      />
    );
  }
}
