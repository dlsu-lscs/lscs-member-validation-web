'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import useFetch from '@/hooks/useFetch'
import { toast } from 'sonner'

const IDSchema = z.object({
  idNumber: z.string(),
})

export const IDForms = () => {
  const [, setCookie] = useCookies(['currentID'])
  const [ID, setID] = useState(0)

  const student = useFetch(
    ID !== 0
      ? `http://member-validation.app.dlsu-lscs.org/status?studentId=${ID}`
      : ''
  )

  console.log(student.data)
  useEffect(() => {
    if (student.data != null) {
      toast(`Hello ${student.data.member_details.full_name}`)
      setCookie('currentID', student.data, { path: '/', maxAge: 60 })
    }
  }, [student.data])

  // Forms
  const form = useForm({
    resolver: zodResolver(IDSchema),
    defaultValues: {
      idNumber: '',
    },
  })

  const onSubmit = (values: any) => {
    setID(Number(values.idNumber))
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex justify-center space-x-2">
            <FormField
              control={form.control}
              name="idNumber"
              render={({ field }) => (
                <FormItem className="text-center">
                  <FormControl>
                    <Input
                      placeholder="1234567"
                      {...field}
                      className="text-white"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="bg-white text-black">
              Submit
            </Button>
          </div>
          <div className="flex justify-center py-2">
            <FormItem className="text-center">
              <FormDescription>Input your ID number instead</FormDescription>
            </FormItem>
          </div>
        </form>
      </Form>
    </div>
  )
}

export default IDForms
