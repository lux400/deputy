import * as React from 'react';
import CMS from "netlify-cms-app";
const FileControl = CMS.getWidget('file')

export const VideoPreview = (props) => {
  console.log(props);
  return <FileControl.preview {...props} />;
};
