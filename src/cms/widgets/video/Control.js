import React from 'react';
import CMS from 'netlify-cms-app';

const FileControl = CMS.getWidget('file')
console.log(FileControl);

export class VideoControl extends React.Component {
  onChange = () => {
    console.log(234234);
  };
  render() {
    console.log(this.props);
    return <FileControl.control {...this.props} />;
  }
}
