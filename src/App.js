// import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import AdminApplicationsInnerPage from './pages/AdminApplicationsInnerPage'
import { getAdminApplicationById } from './store/slices/getAdminApplicationById'

export const data = []

function App() {
   const selector = useSelector((store) => store)
   const dispatch = useDispatch()

   // useEffect(() => {
   //    dispatch(getAdminApplicationById(getDates))
   // }, [])

   const getDates = () => {
      dispatch(getAdminApplicationById(6))
   }
   return (
      <div className="App">
         {/* {data?.map((i) => (
            <AdminApplicationsInnerPage data={i} />
         ))} */}
         <button
            onClick={() => {
               getDates()
            }}
         >
            getDates
         </button>

         {selector?.getAdminApplicationById?.data?.map((i) => (
            <AdminApplicationsInnerPage key={i.id} data={i} />
         ))}
      </div>
   )
}

export default App
