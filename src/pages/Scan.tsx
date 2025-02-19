import { useCookies } from 'react-cookie'
import useFetch from '@/hooks/useFetch'
import { useParams, Link } from 'react-router-dom'
import IDForms from '@/components/idForms/IDForms'
import StudentInfo from '@/components/studentInfo/StudentInfo'

const Scan = () => {
  const [cookies, , removeCookie] = useCookies(['currentID'])
  const { id } = useParams()
  if (id == undefined) window.location.href = '/'

  const event = useFetch(
    'http://member-validation.app.dlsu-lscs.org/event?id=' + id
  )
  return (
    <>
      <div className="min-h-screen bg-[#000000] md:p-8 text-white p-6">
        <div>
          <div className="flex flex-col items-center justify-center font-bold md:text-4xl text-3xl">
            <Link
              onClick={() => {
                removeCookie('currentID', { path: '/' })
              }}
              to="/"
              className="flex p-2 hover:opacity-50 transition-all items-center my-6"
            >
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
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>

              <div className="mx-3 text-xs font-bold">Home</div>
            </Link>
            {event.data != null ? event.data.event : 'Loading...'}
          </div>
          <div className="flex justify-center py-2">
            Input ID Number to Verify LSCS Membership
          </div>
          <div className="flex justify-center py-8">
            {!('currentID' in cookies) ? (
              <>
                <IDForms></IDForms>
              </>
            ) : (
              <>
                {event.data != null ? (
                  <>
                    <StudentInfo eventName={event.data.event}></StudentInfo>
                  </>
                ) : null}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Scan
