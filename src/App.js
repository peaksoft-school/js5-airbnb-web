// import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import AdminApplicationsInnerPage from './pages/AdminApplicationsInnerPage'
// import { getapplicationByid } from './store/slices/adminInnerPageSlice'

export const data = []

function App() {
   const selector = useSelector((store) => store)
   const dispatch = useDispatch()
   console.log(dispatch)

   const location = useLocation()
   const pageId = location.pathname.split('/')[2]
   console.log(pageId)

   // const getDates = () => {
   //    dispatch(getapplicationByid(1))
   // }

   // useEffect(() => {
   //    dispatch(getapplicationByid(params))
   // }, [])

   return (
      <div className="App">
         <BrowserRouter>
         <Routes>
            <Route></Route>
         </Routes>
         </BrowserRouter>
         {/* <button
            onClick={() => {
               getDates()
            }}
         >
            getInnerPage
         </button> */}
         {selector?.getAnnountcementbyid?.data?.map((i) => (
            <AdminApplicationsInnerPage data={i} />
         ))}
      </div>
   )
}

export default App
