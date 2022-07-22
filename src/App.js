import { useState } from 'react'
import './App.css'
import AdminProfileApplicationCard from './components/UI/cards/AdminProfileApplicationCard'
import NotViewedCard from './components/UI/cards/NotViewedCard'

function App() {
   const [isViewed, setIsViewed] = useState(false)

   const openHandler = () => {
      setIsViewed(!isViewed)
   }
   return (
      <div className="App">
         <p>development</p>
         <AdminProfileApplicationCard isViewed={isViewed} />
         <button onClick={openHandler}>viewed</button>
         {isViewed && <NotViewedCard />}
      </div>
   )
}

export default App
