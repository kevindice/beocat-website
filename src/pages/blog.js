import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import GenericHero from '../components/pageSections/GenericHero'

const BlogPage = () => (
  <Layout>
    <SEO title="Blog" keywords={[]} />

    <GenericHero title="Blog" />
  </Layout>
)

export default BlogPage
