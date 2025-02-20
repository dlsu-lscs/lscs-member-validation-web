import useFetch from '@/hooks/useFetch'
import CreateEvents from '../createEvents/CreateEvents'
import EventsButton from '../eventsButton/EventsButton'
import { Link } from 'react-router-dom'

import { ScrollArea } from '@/components/ui/scroll-area'
import useDelete from '@/hooks/useDelete'

type eventDetails = {
  id: number
  event_name: string
  committee: string
}

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'

const EventsList = () => {
  const events = useFetch('http://member-validation.app.dlsu-lscs.org/events')
  return (
    <>
      <div className="space-y-8">
        <div className="flex justify-center items-center space-x-3">
          <h1 className="font-bold text-4xl text-center">Events:</h1>{' '}
          <CreateEvents></CreateEvents>
        </div>
        <ScrollArea className="h-[500px] w-[400px] rounded-lg p-4">
          <div className="flex flex-col items-center justify-center space-y-6">
            {events.data != null
              ? events.data.map((event: eventDetails) => {
                  return (
                    <div key={event.id} className="flex items-center space-x-6">
                      <Link
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
                      <div className="bg-red-900 p-2 rounded-lg hover:opacity-50 transition">
                        <AlertDialog>
                          <AlertDialogTrigger className="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="size-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                              />
                            </svg>
                          </AlertDialogTrigger>
                          <AlertDialogContent className="bg-black text-white border-2 border-white">
                            <AlertDialogHeader>
                              <AlertDialogTitle>
                                Are you absolutely sure?
                              </AlertDialogTitle>
                              <AlertDialogDescription>
                                This action cannot be undone. This will
                                permanently delete your event from our servers.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel className="text-white bg-black">
                                Cancel
                              </AlertDialogCancel>
                              <AlertDialogAction
                                className="bg-red-900 text-white"
                                onClick={() => {
                                  useDelete(
                                    'http://member-validation.app.dlsu-lscs.org/delete-event?event=' +
                                      encodeURIComponent(event.event_name)
                                  )
                                }}
                              >
                                Continue
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>
                    </div>
                  )
                })
              : null}
          </div>
        </ScrollArea>
      </div>
    </>
  )
}

export default EventsList
