import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

function ScheduleList({ schedule }) {
  const currDate = ~~(+new Date() / 1000);
  const filteredSchedule = schedule.filter((event) => {
    return event.date.seconds > currDate;
  });
  return (
    <>
      <Accordion defaultActiveKey="0">
        {filteredSchedule.map((event) => {
          const date = new Date(event.date.seconds * 1000);
          return (
            <Accordion.Item eventKey={event.eventId} key={event.eventId}>
              <Accordion.Header>
                {event.title} {date.toLocaleTimeString("en-UK")},{" "}
                {date.toLocaleDateString("en-UK")}
              </Accordion.Header>
              <Accordion.Body>{event.description} </Accordion.Body>
              <Accordion.Body>Type: {event.type} </Accordion.Body>
              <Accordion.Body>Level: {event.level} </Accordion.Body>
              <Accordion.Body>Location: {event.location}</Accordion.Body>
              <Accordion.Body>
                Participants: {event.participants.join(", ")}
              </Accordion.Body>
              <Accordion.Body>
                <Link to={`/events/${event.eventId}`}>
                  <Button variant="outline-primary">View event </Button>
                </Link>
              </Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </>
  );
}

export default ScheduleList;
