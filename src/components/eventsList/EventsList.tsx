import useFetch from '@/hooks/useFetch'
import CreateEvents from '../createEvents/CreateEvents'
import EventsButton from '../eventsButton/EventsButton'
import { Link } from 'react-router-dom'

type eventDetails = {
  id: number
  event_name: string
  committee: string
}
const EventsList = () => {
  const events = useFetch('http://member-validation.app.dlsu-lscs.org/events')
  return (
    <>
      <div className="space-y-8">
        <div className="flex justify-center items-center space-x-3">
          <h1 className="font-bold text-4xl text-center">Events:</h1>{' '}
          <CreateEvents></CreateEvents>
        </div>
        <div className="flex flex-col items-center justify-center space-y-6">
          {events.data != null
            ? events.data.map((event: eventDetails) => {
                return (
                  <>
                    <Link
                      key={event.id}
                      onClick={() => {
                        console.log(event.id)
                      }}
                      to={`/scan/${event.id}`}
                    >
                      <EventsButton
                        title={event.event_name}
                        committee={event.committee}
                      ></EventsButton>
                    </Link>
                  </>
                )
              })
            : null}
        </div>
      </div>
    </>
  )
}

export default EventsList
