/* eslint-disable max-len */
import './App.css'
// import ApartmentHouseInnerPageFeedback from './components/ApartmentHouseInnerPageFeedback'
import AdminApplicationsInnerPage from './pages/AdminApplicationsInnerPage'
// import Modal from './components/UI/Modal'

// const arrayApartmentHouse = {
//    titleName: 'Name',
//    title: 'Name of hotel',
//    adress: '12 Morris Ave, Toronto, ON, CA',
//    text: 'The hotel will provide guests with air-conditioned rooms offering a desk, a kettle, a fridge, a minibar, a safety deposit box, a flat-screen TV and a shared bathroom with a shower. At Garden Hotel & SPA the rooms have bed linen and towels',
//    name: 'Anna Annova',
//    gmail: 'anna@gmail.com',
//    id: 1,
//    images: [
//       'https://images.unsplash.com/photo-1614649024145-7f847b1c803f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGFwYXJ0bWVudCUyMGFpcmJuYnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
//       'https://images.unsplash.com/photo-1622866306950-81d17097d458?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
//       'https://images.unsplash.com/photo-1628592102751-ba83b0314276?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGFwYXJ0bWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60',
//       'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80',
//    ],
// }
const arrayInnerPageDates = {
   titleName: 'Name',
   title: 'Name of hotel',
   adress: '12 Morris Ave, Toronto, ON, CA',
   text: 'The hotel will provide guests with air-conditioned rooms offering a desk, a kettle, a fridge, a minibar, a safety deposit box, a flat-screen TV and a shared bathroom with a shower. At Garden Hotel & SPA the rooms have bed linen and towels',
   name: 'Anna Annova',
   gmail: 'anna@gmail.com',
   id: 1,
   images: [
      'https://images.unsplash.com/photo-1614649024145-7f847b1c803f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGFwYXJ0bWVudCUyMGFpcmJuYnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1622866306950-81d17097d458?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
      'https://images.unsplash.com/photo-1628592102751-ba83b0314276?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGFwYXJ0bWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80',
   ],
}

function App() {
   return (
      <div className="App">
         <AdminApplicationsInnerPage
            arrayInnerPageDates={arrayInnerPageDates}
         />
         {/* <ApartmentHouseInnerPageFeedback
            arrayApartment={arrayApartmentHouse}
         /> */}
      </div>
   )
}

export default App
