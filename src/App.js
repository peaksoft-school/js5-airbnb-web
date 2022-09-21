import './App.css'
import AddAnnouncementForm from './components/AddAnnountCementForm'
import SignUp from './components/SignUp'
import UserProfile from './components/user-profile/UserProfile'

function App() {
   return (
      <div className="App">
         {/* <p>development</p> */}
         <AddAnnouncementForm />
         <SignUp />
         <UserProfile />
      </div>
   )
}

export default App
