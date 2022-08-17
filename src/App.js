// import React, { useState } from 'react'
import './App.css'
import AddAnnounCementForm from './components/AddAnnounCementForm'

function App() {
   // const [value, setValue] = useState([])
   const submitHandlerForm = (i) => {
      console.log(i)
   }
   return (
      <div className="App">
         <p>development</p>
         <AddAnnounCementForm onSubmit={submitHandlerForm} />
      </div>
   )
}

export default App
