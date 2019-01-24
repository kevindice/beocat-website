import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/hero'
import InfoBoxes from '../components/pageSections/InfoBoxes'
import IntroSection from '../components/pageSections/IntroSection'
import TourSection from '../components/pageSections/TourSection'
import NewsSection from '../components/pageSections/NewsSection'
import StatisticsSection from '../components/pageSections/StatisticsSection'
import EventsSection from '../components/pageSections/EventsSection'
import BlogSection from '../components/pageSections/BlogSection'
import DividerSection from '../components/pageSections/DividerSection'
import TestimonialsSection from '../components/pageSections/TestimonialsSection'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <Hero />
    <InfoBoxes />
    <IntroSection />
    <TourSection />
    <NewsSection />
    <StatisticsSection />
    <EventsSection />
    <BlogSection />
    <DividerSection />
    <TestimonialsSection />
  </Layout>
)

export default IndexPage
