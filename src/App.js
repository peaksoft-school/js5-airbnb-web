import './App.css'
import AddAnnouncementForm from './components/AddAnnountCementForm'
import UserProfile from './components/user-profile/UserProfile'
// eslint-disable-next-line import/order
import { SignUp } from './components/SignUp'
// eslint-disable-next-line import/order

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
