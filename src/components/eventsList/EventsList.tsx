import useFetch from "@/hooks/useFetch";
import CreateEvents from "../createEvents/CreateEvents";
import EventsButton from "../eventsButton/EventsButton";
import { Link } from "react-router-dom";

import { ScrollArea } from "@/components/ui/scroll-area";

type eventDetails = {
  id: number;
  event_name: string;
  committee: string;
};
const EventsList = () => {
  const events = useFetch("http://member-validation.app.dlsu-lscs.org/events");
  return (
    <>
      <div className="space-y-8">
        <div className="flex justify-center items-center space-x-3">
          <h1 className="font-bold text-4xl text-center">Events:</h1>{" "}
          <CreateEvents></CreateEvents>
        </div>
        <ScrollArea className="h-[500px] w-[400px] rounded-lg p-4">
          <div className="flex flex-col items-center justify-center space-y-6">
            {events.data != null
              ? events.data.map((event: eventDetails) => {
                  return (
                    <>
                      <Link
                        key={event.id}
                        onClick={() => {
                          console.log(event.id);
                        }}
                        to={`/scan/${event.id}`}
                      >
                        <EventsButton
                          title={event.event_name}
                          committee={event.committee}
                        ></EventsButton>
                      </Link>
                    </>
                  );
                })
              : null}
          </div>
        </ScrollArea>
      </div>
    </>
  );
};

export default EventsList;
