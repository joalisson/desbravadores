import * as React from 'react';
// import { Link } from "gatsby"

import Layout from '../components/layout'
import SEO from "../components/seo"
import PedalRoutes from '../components/pages/PedalRoutes';

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Home" />
    <p>Página em construção</p>
    <PedalRoutes />
  </Layout>
)

export default IndexPage
