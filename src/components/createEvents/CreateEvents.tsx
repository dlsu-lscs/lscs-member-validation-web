import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
;('use client')

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useCookies } from 'react-cookie'

const formSchema = z.object({
  eventName: z.string(),
})

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

const CreateEvents = () => {
  const [cookies, ,] = useCookies(['currentUser'])
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      eventName: '',
    },
  })

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const postData = async () => {
      try {
        const response = await axios.post(
          `http://member-validation.app.dlsu-lscs.org/add-event`,
          { email: cookies.currentUser, event_name: values.eventName },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
        console.log(response)
        if (response.status == 200) {
          window.location.reload()
        }
      } catch (e) {
        console.log(e)
      }
    }
    postData()
  }
  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger>
          <div className="flex justify-center items-center rounded-lg p-2 bg-white text-black hover:opacity-50 transition">
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
          </div>
        </AlertDialogTrigger>
        <AlertDialogContent className="bg-black border-2 border-white text-white">
          <Form {...form}>
            <AlertDialogHeader>
              <AlertDialogTitle>Create Event</AlertDialogTitle>
            </AlertDialogHeader>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="eventName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Event Name:</FormLabel>
                    <FormControl>
                      <Input placeholder="LSCS GA" {...field} />
                    </FormControl>
                    <FormDescription>Input a Unique Event Name</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <AlertDialogFooter>
                <AlertDialogCancel className="bg-red-800 border-none text-whte">
                  Cancel
                </AlertDialogCancel>
                <AlertDialogAction type="submit" className="bg-green-800">
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </form>
          </Form>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}

export default CreateEvents
