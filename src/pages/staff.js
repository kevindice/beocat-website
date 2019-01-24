import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import GenericHero from '../components/pageSections/GenericHero'
import StaffSection from '../components/pageSections/StaffSection'

const StaffPage = () => (
  <Layout>
    <SEO title="Staff" keywords={[]} />

    <GenericHero
      title="Staff"
    >
      <p className="col-lg-8">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
        voluptatum deleniti atque corrupti quos.</p>
    </GenericHero>
    <StaffSection />

  </Layout>
)

export default StaffPage