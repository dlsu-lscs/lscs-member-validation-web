type Event = {
  title: string
  committee: string
}
const EventsButton = (props: Event) => {
  return (
    <>
      <div className="bg-black border-2 border-white rounded-lg p-6 text-white space-y-1.5 max-w-72 max-h-96 hover:opacity-50 transition">
        <div className="break-words">
          <div>Event: {props.title || 'Title'}</div>
          <div>Committee: {props.committee || 'Committee'}</div>
        </div>
      </div>
    </>
  )
}

export default EventsButton
