import * as React from "react";
import CMS from "netlify-cms-app";
const StringControl = CMS.getWidget("string");

export const TranslitePreview = props => {
  console.log(props);
  console.log(props);
  console.log(props);
  console.log(props);
  console.log(props);
  console.log(props);
  return <StringControl.preview {...props} value={props.value.view} />;
};
