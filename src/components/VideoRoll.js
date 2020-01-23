import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";

class VideoRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: videos } = data.allMarkdownRemark;
    return (
      <div className="columns is-multiline">
        {videos &&
        videos.map(({ node: video }) => (
          <div className="is-parent column is-6" key={video.id}>
            <article
              className={`blog-list-item tile is-child box notification ${
                video.frontmatter.featuredpost ? "is-featured" : ""
                }`}
            >
              <header>
                {video.frontmatter.featuredimage ? (
                  <div className="featured-thumbnail">
                  </div>
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
              <p>
                {video.excerpt}
                <br />
                <br />
                <Link className="button" to={video.fields.slug}>
                  Keep Reading →
                </Link>
              </p>
            </article>
          </div>
        ))}
      </div>
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
