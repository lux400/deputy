import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import Container from "@components/ui/Container";
import Row from "@components/ui/Row";
import {
  VideoBox,
  VideosContainer,
  PosterBlock
} from "@components/VideoRoll/styled";
import VideoThumbnail from "react-video-thumbnail"; // use npm published version
import { Player, LoadingSpinner } from "video-react";
import "video-react/dist/video-react.css"; // import css

class VideoRoll extends React.Component {
  render() {
    const { data } = this.props;
    let { edges: videos } = data.allMarkdownRemark;
    console.log(videos);
    return (
      <Container fluid>
        <Row>
          <VideosContainer>
            {videos &&
              videos.map(({ node: video }) => (
                <VideoBox
                  key={video.id}
                  className={`blog-list-item tile is-child box notification ${
                    video.frontmatter.featuredpost ? "is-featured" : ""
                  }`}
                >
                  <Link
                    className="title has-text-primary is-size-4"
                    to={video.fields.slug}
                  >
                    <PosterBlock>
                      <img src={video.frontmatter.poster} />
                    </PosterBlock>
                  </Link>
                  <p>{video.frontmatter.description}</p>
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
      edges: PropTypes.array
    })
  })
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
                video
                poster
                description
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
