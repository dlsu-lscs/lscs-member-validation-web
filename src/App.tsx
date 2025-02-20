import Layout from './layout/Layout'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { Toaster } from '@/components/ui/sonner'

const App = () => {
    return (
        <>
            <GoogleOAuthProvider clientId="112879338322-58o490i8bdlag1dhio1d98n693furloc.apps.googleusercontent.com">
                <BrowserRouter>
                    <div className="font-(--font-inter)">
                        <Layout></Layout>
                        <Toaster />
                    </div>
                </BrowserRouter>
            </GoogleOAuthProvider>
        </>
    )
}

export default App
