import React from 'react'

import Layout from '../../components/Layout'
import VideoRoll from '../../components/VideoRoll'
import SEO from "../../components/SEO";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout >
        <SEO title={"VIDE TITLE"}/>
        <section className="section">
          <div className="container">
            <div className="content">
              <VideoRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
