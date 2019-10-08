import * as React from 'react';
// import { Link } from "gatsby"

import Layout from '../components/layout'
import SEO from "../components/seo"
import MembersList from '../components/pages/MembersList';

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Membros" />
    <p>Página em construção</p>
    <MembersList />
  </Layout>
)

export default IndexPage
