import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import AdminApplicationsInnerPage from './pages/AdminApplicationsInnerPage'
import { getapplicationByid } from './store/slices/getAdminApplicationById'

export const data = []

function App() {
   const selector = useSelector((store) => store)
   const dispatch = useDispatch()

   const getDates = () => {
      dispatch(getapplicationByid(16))
   }

   return (
      <div className="App">
         <button
            onClick={() => {
               getDates()
            }}
         >
            getInnerPage
         </button>
         {selector?.getAnnountcementbyid?.data?.map((i) => (
            <AdminApplicationsInnerPage data={i} />
         ))}
      </div>
   )
}

export default App
