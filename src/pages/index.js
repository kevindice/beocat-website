import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
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

    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
