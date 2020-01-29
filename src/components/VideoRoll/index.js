import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import Container from '@components/ui/Container';
import Row from '@components/ui/Row';
import { VideoBox, VideosContainer } from '@components/VideoRoll/styled';
import VideoThumbnail from 'react-video-thumbnail'; // use npm published version
import { Player, LoadingSpinner } from 'video-react';
import "video-react/dist/video-react.css"; // import css

class VideoRoll extends React.Component {
  render() {
    const { data } = this.props;
    let { edges: videos } = data.allMarkdownRemark;
    videos = [videos[0], ];
    return (
      <Container fluid>
        <Row>
          <VideosContainer>
            {videos &&
              videos.map(({ node: video }) => (
                <VideoBox
                  key={video.id}
                  className={`blog-list-item tile is-child box notification ${
                    video.frontmatter.featuredpost ? 'is-featured' : ''
                  }`}
                >
                  <header>
                    {video.frontmatter.featuredimage ? (
                      <div className="featured-thumbnail" />
                    ) : null}
                    <p className="post-meta">
                      <Link
                        className="title has-text-primary is-size-4"
                        to={video.fields.slug}
                      >
                        {video.frontmatter.title}
                      </Link>
                      <span> &bull; </span>
                      <span className="subtitle is-size-5 is-block">
                        {video.frontmatter.date}
                      </span>
                    </p>
                  </header>
                  <Player src={video.frontmatter.video.publicURL}>
                    <LoadingSpinner />
                  </Player>
                  {/*<video controls>*/}
                    {/*<source*/}
                      {/*src={video.frontmatter.video.publicURL}*/}
                      {/*type="video/mp4"*/}
                    {/*/>*/}
                  {/*</video>*/}
                  {/*<VideoThumbnail*/}
                    {/*videoUrl={video.frontmatter.video.publicURL}*/}
                    {/*snapshotAtTime={44}*/}
                    {/*width="100%"*/}
                  {/*/>*/}
                  <p>
                    {video.excerpt}
                    <br />
                    <br />
                    <Link className="button" to={video.fields.slug}>
                      Keep Reading →
                    </Link>
                  </p>
                </VideoBox>
              ))}
          </VideosContainer>
        </Row>
      </Container>
    );
  }
}

VideoRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query VideoRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "video-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                video {
                  publicURL
                }
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <VideoRoll data={data} count={count} />}
  />
);
