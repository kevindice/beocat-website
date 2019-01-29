import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import HomeHero from '../components/pageSections/HomeHero'
import InfoBoxes from '../components/pageSections/InfoBoxes'
import IntroSection from '../components/pageSections/IntroSection'
import TourSection from '../components/pageSections/TourSection'
import NewsSection from '../components/pageSections/NewsSection'
import StatisticsSection from '../components/pageSections/StatisticsSection'
import EventsSection from '../components/pageSections/EventsSection'
import BlogSection from '../components/pageSections/BlogSection'
import DividerSection from '../components/pageSections/DividerSection'
import TestimonialsSection from '../components/pageSections/TestimonialsSection'
import { graphql, StaticQuery } from '../../.cache/gatsby-browser-entry'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <HomeHero />
    {/*<InfoBoxes />*/}
    <IntroSection />
    <StatisticsSection />
    <DividerSection />
    <TourSection />
    {/*<NewsSection />*/}


    <EventsSection/>
    {/*<BlogSection />*/}
    <TestimonialsSection />
  </Layout>
)

export default IndexPage