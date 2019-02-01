import React from 'react'
import { Container, Row, Col, Table } from 'reactstrap'

const BEOCAT_CALENDAR =
  'https://www.googleapis.com/calendar/v3/calendars/hek6gpeu4bg40tdb2eqdrlfiuo@group.calendar.google.com/events?singleEvents=True&orderBy=startTime&key=AIzaSyDLn7Sa9o14haRZw7bff3b8OGIG9xkK0Us'
const weekday = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

class EventsSection extends React.Component {
  state = {
    data: { items: [] },
  }

  componentDidMount() {
    fetch(BEOCAT_CALENDAR, {
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(data => data.json())
      .then(data => {
        console.log(data)
        this.setState({ data })
      })
  }

  render() {
    const { data } = this.state
    const events = data.items.filter(event => {
      // Filter out all day events from the past
      if (
        event.start &&
        event.start.date &&
        Date.parse(event.start.date) - Date.parse(new Date()) < 0
      ) {
        return false
      }

      // Filter out partial day events from the past
      if (
        event.start &&
        event.start.dateTime &&
        Date.parse(event.start.dateTime) - Date.parse(new Date()) < 0
      ) {
        return false
      }

      return true
    })

    console.log(events)
    console.log(events.map(event => event.start))
    console.log('title', events.map(event => event.summary))

    return (
      <section className="events">
        <Container>
          <header className="text-center">
            <h2>Upcoming Events</h2>
            <small style={{ color: '#999' }}>
              Training Sessions, Support Office Hours, and More
            </small>
            <div className="row text-center">
              <p className="col-lg-8 mx-auto">
                <a href="https://calendar.google.com/calendar/embed?src=hek6gpeu4bg40tdb2eqdrlfiuo%40group.calendar.google.com&ctz=America%2FChicago">
                  View our Google Calendar
                </a>
                &nbsp; | &nbsp;
                <a href="https://calendar.google.com/calendar/ical/hek6gpeu4bg40tdb2eqdrlfiuo%40group.calendar.google.com/public/basic.ics">
                  Public iCal Address
                </a>
              </p>
            </div>
          </header>

          <Row>
            <Col xs={12} style={{ maxHeight: '400px', overflowY: 'scroll' }}>
              <Table>
                <tbody>
                  {events.map(item => {
                    const date = new Date(Date.parse(item.start.dateTime))
                    return (
                      <tr key={item.id}>
                        <td>{`${
                          weekday[date.getDay()]
                        }, ${date.toLocaleDateString('en-US')}`}</td>
                        <td>{`${date.toLocaleTimeString('en-US', {
                          hour: 'numeric',
                          minute: 'numeric',
                          hour12: true,
                        })}`}</td>
                        <td>
                          <a href={item.htmlLink}>{item.summary}</a>
                        </td>
                        <td>{item.location}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}

export default EventsSection
