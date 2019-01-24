import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import GenericHero from '../components/pageSections/GenericHero'

const BlogPage = () => (
  <Layout>
    <SEO title="Blog" keywords={[]} />

    <GenericHero title="Blog" />


  </Layout>
)

export default BlogPage