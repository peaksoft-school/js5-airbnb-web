import React from 'react'
import UserProfileApartmentCard from './layout/UserApartmentBody/UserProfileApartmentCard'
import UserProfileData from './layout/UserApartmentBody/UserProfileData'
import './App.css'

function App() {
   return (
      <div className="App">
         <UserProfileApartmentCard ApartmentInfo={UserProfileData} />
      </div>
   )
}

export default App
