import './App.css'
// import AdminApplication from './components/AdminApplication'
// import SignupAdmin from './components/SignupAdmin'
// import AdminApplicationsInnerPage from './pages/AdminApplicationsInnerPage'
import SignUp from './components/SignUp'
import SignupPhoneNumber from './components/SignupPhoneNumber'
// import ApartmentHouseInnerPageFeedback from './pages/ApartmentHouseInnerPageFeedback'
import { MinMaxDateRangePicker } from './components/UI/datepicker/DatePickerInnerPage'

export const data = []

function App() {
   return (
      <div className="App">
         <SignUp />
         <SignupPhoneNumber />
         <MinMaxDateRangePicker />
         {/* <SignupAdmin /> */}
         {/* <ApartmentHouseInnerPageFeedback /> */}
         {/* <AdminApplication /> */}
      </div>
   )
}

export default App
