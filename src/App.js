import './App.css'
// eslint-disable-next-line import/no-named-as-default
import SignUp from './components/SignUp'
import DateRangePicker from './components/UI/date-picker/DateRangePicker'

function App() {
   return (
      <div className="App">
         <p>Development</p>
         <SignUp />
         <DateRangePicker />
      </div>
   )
}

export default App
