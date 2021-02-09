import React from 'react';

import SEO from '@components/Layout/SEO';
import Layout from '@components/Layout';
import { FormattedMessage } from 'react-intl';
import { Col, Container, Row } from '@components/ui';

const IndexPage = props => {
  console.log(props);
  return (
    <Layout {...props}>
      <SEO title={'Main page'} />
      <section className="section">
        <Container>
          <Row>
           <Col>
             <FormattedMessage id="name" />
           </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export default IndexPage;
