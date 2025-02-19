import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Scan from '@/pages/Scan'

const PageRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/scan/:id" element={<Scan></Scan>}></Route>
      </Routes>
    </>
  )
}

export default PageRouter
