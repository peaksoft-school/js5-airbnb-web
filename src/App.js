import Select from './components/UI/Select'
import UserHeader from './layout/headers/User-VendorHeader/UserHeader'
import UserApartmentBody from './layout/UserApartmentBody/UserApartmentBody'
import './App.css'

function App() {
   return (
      <div className="App">
         <UserHeader />
         <Select />
         <UserApartmentBody />
      </div>
   )
}

export default App
