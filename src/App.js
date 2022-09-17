import './App.css'
// import AdminApplicationsInnerPage from './pages/AdminApplicationsInnerPage'
import { SignUp } from './components/SignUp'
import ApartmentHouseInnerPageFeedback from './pages/ApartmentHouseInnerPageFeedback'

export const data = []

function App() {
   return (
      <div className="App">
         <SignUp />
         <ApartmentHouseInnerPageFeedback />
      </div>
   )
}

export default App
