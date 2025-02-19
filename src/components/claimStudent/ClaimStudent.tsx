import { Button } from '@/components/ui/button'
import { useCookies } from 'react-cookie'
import axios from 'axios'
import { toast } from 'sonner'

type event = {
  eventName: string
}
export const ClaimStudent = (props: event) => {
  const [cookies] = useCookies(['currentID'])
  console.log(props.eventName)

  const postData = async () => {
    try {
      const response = await axios.post(
        `http://member-validation.app.dlsu-lscs.org/claim`,
        {
          studentId: Number(cookies.currentID?.member_details?.id),
          event: props.eventName,
        },
        { headers: { 'Content-Type': 'application/json' } }
      )
      toast(response.data.claim)
    } catch (e) {
      console.log(e)
      toast('Member has already claimed at the event')
    }
  }
  return (
    <Button
      variant="outline"
      onClick={postData}
      className="text-white bg-black"
    >
      Claim
    </Button>
  )
}

export default ClaimStudent
