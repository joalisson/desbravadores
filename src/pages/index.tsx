import * as React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout'
import SEO from "../components/seo"
import Home from '../components/pages/Home';

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Home" />
    <Home /> 
  </Layout>
)

export default IndexPage
