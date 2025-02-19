import { useCookies } from 'react-cookie'
import useFetch from '@/hooks/useFetch'
import { useParams } from 'react-router-dom'

const Scan = () => {
  const [cookie, ,] = useCookies(['currentID'])
  const { id } = useParams()
  if (id == undefined) window.location.href = '/'

  const event = useFetch(
    'http://member-validation.app.dlsu-lscs.org/event?id=' + id
  )
  return (
    <>
      <div className="min-h-screen bg-[#000000] md:p-8 text-white p-6">
        <div>
          <div className="flex justify-center font-bold md:text-4xl text-3xl">
            {event.data != null ? event.data.event : 'Loading...'}
          </div>
          <div className="flex justify-center py-2">
            Input ID Number to Verify LSCS Membership
          </div>
          <div className="flex justify-center py-8"></div>
        </div>
      </div>
    </>
  )
}

export default Scan
