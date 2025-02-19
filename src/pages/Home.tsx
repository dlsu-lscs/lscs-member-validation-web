import NavBar from '../components/navbar/NavBar'
import GoogleLogin from '@/components/GoogleLogin/GoogleLogin'
import { useCookies } from 'react-cookie'
import EventsList from '@/components/eventsList/EventsList'
import UserInfo from '@/components/userInfo/UserInfo'

const Home = () => {
  const [cookies, ,] = useCookies(['currentUser'])
  return (
    <>
      <NavBar></NavBar>
      <div className="min-h-screen bg-black text-white flex justify-center">
        {!('currentUser' in cookies) ? (
          <>
            <div className="my-16 flex flex-col items-center space-y-8">
              <div className="bg-gray-950 border-2 border-gray-500 rounded-lg px-6 py-8 flex flex-col items-center justify-center space-y-3">
                <div>
                  <GoogleLogin></GoogleLogin>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="space-y-8">
              <div className="bg-gray-950 border-2 border-gray-500 rounded-lg p-2 flex flex-col items-center justify-center space-y-3">
                <UserInfo></UserInfo>
              </div>
              <EventsList></EventsList>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default Home
