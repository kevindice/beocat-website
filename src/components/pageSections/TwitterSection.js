import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { TwitterTimelineEmbed } from 'react-twitter-embed'

const TwitterSection = () => (
  <section className="bg-primary">
    <Container>
      <header className="text-center">
        <h2 style={{ color: 'white' }}>Twitter Feed</h2>
        <span style={{ color: '#eee' }}>
          Follow us on Twitter for updates on system status
        </span>
      </header>
      <Row>
        <Col md={{ size: 6, offset: 3 }}>
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="KSUBeocat"
            options={{
              height: 800,
              linkColor: '#512888',
            }}
          />
        </Col>
      </Row>
    </Container>
  </section>
)

export default TwitterSection
