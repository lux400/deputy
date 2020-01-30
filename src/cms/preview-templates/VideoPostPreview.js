import React from 'react';
import PropTypes from 'prop-types';
import { VideoPostTemplate } from 'src/templates/video-post';

const BlogPostPreview = ({ entry, widgetFor }) => {
  const tags = entry.getIn(['data', 'tags']);
  console.log(entry.toJS());
  return (
    <VideoPostTemplate
      content={widgetFor('body')}
      description={entry.getIn(['data', 'description'])}
      tags={tags && tags.toJS()}
      title={entry.getIn(['data', 'title'])}
    />
  );
};

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default BlogPostPreview;
