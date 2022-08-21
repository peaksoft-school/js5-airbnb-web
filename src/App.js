import './App.css'
import ApartmentHouseInnerPageFeedback from './pages/ApartmentHouseInnerPageFeedback'

const data = [
   {
      titleName: 'Name',
      title: 'Name of hotel',
      adress: '12 Morris Ave, Toronto, ON, CA',
      text: 'The hotel will provide guests with air-conditioned rooms offering a desk, a kettle, a fridge, a minibar, a safety deposit box, a flat-screen TV and a shared bathroom with a shower. At Garden Hotel & SPA the rooms have bed linen and towels',
      name: 'Anna Annova',
      gmail: 'anna@gmail.com',
      images: [
         'https://mir-s3-cdn-cf.behance.net/project_modules/1400/af023d102092091.5f2e72cd61df5.jpg',
         'https://mir-s3-cdn-cf.behance.net/project_modules/1400/2fbfa3102092091.5f2e72cd61886.jpg',
         'https://i.pinimg.com/originals/24/e9/98/24e9988d98953b0426fac1866071c12f.jpg',
         'https://a0.muscache.com/im/pictures/a407550d-9daf-4417-b19f-f0d7bceead62.jpg',
      ],
   },
]

function App() {
   return (
      <div className="App">
         {data.map((i) => (
            <ApartmentHouseInnerPageFeedback data={i} />
         ))}
      </div>
   )
}

export default App
