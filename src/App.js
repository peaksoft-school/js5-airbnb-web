import './App.css'
import AdminApplication from './components/AdminApplication'
import { sliderData } from './sliderData'

function App() {
   const CardData = [
      {
         id: 1,
         slides: sliderData,
         price: 26,
         description: 'Beautiful and picturesque...',
         location: '12 Morris Ave, Toronto,...',
         guestsAmount: 2,
         ratings: 3.4,
      },
   ]
   return (
      <div className="App">
         {/* <p>development</p> */}
         <AdminApplication CardData={CardData} />
      </div>
   )
}

export default App
