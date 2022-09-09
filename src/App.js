import './App.css'
import AddAnnouncementForm from './components/AddAnnountCementForm'
import { SignUp } from './components/SignUp'
import UserProfile from './components/user-profile/UserProfile'

function App() {
   return (
      <div className="App">
         <SignUp />
         <AddAnnouncementForm />
         <UserProfile />
         {/* <p>development</p> */}
      </div>
   )
}

export default App
