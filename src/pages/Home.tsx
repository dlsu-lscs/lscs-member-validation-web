import NavBar from '../components/navbar/NavBar'
import EventsButton from '../components/eventsButton/EventsButton'
import { Button } from '@/components/ui/button'
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

const Home = () => {
  return (
    <>
      <NavBar></NavBar>
      <div className="min-h-screen bg-black text-white flex justify-center">
        <div className="space-y-8">
          <div className="flex justify-center items-center space-x-3">
            <h1 className="font-bold text-2xl text-center">Events:</h1>
            <AlertDialog>
              <AlertDialogTrigger>
                <Button className="bg-white text-black">
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
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                  Add Event
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
          <div className="flex flex-col items-center justify-center space-y-6">
            <EventsButton
              title="Macky's Heartstring"
              committee="Socio-Civic"
            ></EventsButton>
            <EventsButton
              title="Frosh Convocation"
              committee="All"
            ></EventsButton>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
