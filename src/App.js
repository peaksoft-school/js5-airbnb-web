import './App.css'
import AddAnnouncementForm from './components/AddAnnountCementForm'
import SignUp from './components/SignUp'
import SignupPhoneNumber from './components/SignupPhoneNumber'
import UserProfile from './components/user-profile/UserProfile'

function App() {
   return (
      <div className="App">
         {/* <p>development</p> */}
         <SignUp />
         <SignupPhoneNumber />
         <AddAnnouncementForm />
         <UserProfile />
      </div>
   )
}

export default App
