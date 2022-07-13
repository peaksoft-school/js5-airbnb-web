import { useState } from 'react'
import './App.css'
import cardPic from './assets/images/cardPic.png'
import BlockedCard from './components/UI/cards/BlockedCard'
import UserProfileAnnouncementCard from './components/UI/cards/UserProfileAnnouncementCard'
// import SearchInput from './components/UI/searchInput/SearchInput'

function App() {
   const [blocked, setBlocked] = useState(false)

   const openHandler = () => {
      setBlocked(!blocked)
   }

   return (
      <div className="App">
         <p>development</p>
         <UserProfileAnnouncementCard open={blocked} url={cardPic} />
         <button onClick={openHandler}>open</button>
         {blocked && <BlockedCard open={blocked} onClose={setBlocked} />}
         {/* <SearchInput
            width="100px"
            height="100px"
            border="none"
            placeholder="ffffff"
         /> */}
      </div>
   )
}

export default App
