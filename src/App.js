/* eslint-disable import/order */
import './App.css'
import UserProfile from './components/user-profile/UserProfile'
// import ApartmentHouseInnerPageFeedback from './pages/ApartmentHouseInnerPageFeedback'
import AdminApplication from './components/AdminApplication'
import SignupAdmin from './components/SignupAdmin'

function App() {
   return (
      <div className="App">
         <UserProfile />
         {/* <p>development</p> */}
         <SignupAdmin />
         <AdminApplication />
      </div>
   )
}

export default App
