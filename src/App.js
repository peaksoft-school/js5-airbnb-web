/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
import { useState } from 'react'
import AdminUsers from './components/AdminUsers'

import './App.css'

const m = [
   {
      id: 1,
      fullName: 'Максат Максатов',
      email: 'example@gmail.com',
      booking: 1,
      announcement: 2,
   },
   {
      id: 2,
      fullName: 'Максат Максатов',
      email: 'example@gmail.com',
      booking: 1,
      announcement: 2,
   },
   {
      id: 3,
      fullName: 'Максат Максатов',
      email: 'example@gmail.com',
      booking: 1,
      announcement: 2,
   },
   {
      id: 4,
      fullName: 'Максат Максатов',
      email: 'example@gmail.com',
      booking: 1,
      announcement: 2,
   },
   {
      id: 5,
      fullName: 'Максат Максатов',
      email: 'example@gmail.com',
      booking: 1,
      announcement: 2,
   },
   {
      id: 6,
      fullName: 'Максат Максатов',
      email: 'example@gmail.com',
      booking: 1,
      announcement: 2,
   },
   {
      id: 7,
      fullName: 'take',
      email: 'gafurov@gmail.com',
      booking: 1,
      announcement: 2,
   },
   {
      id: 7,
      fullName: 'take',
      email: 'gafurov@gmail.com',
      booking: 1,
      announcement: 2,
   },
   {
      id: 7,
      fullName: 'take',
      email: 'gafurov@gmail.com',
      booking: 1,
      announcement: 2,
   },
   {
      id: 7,
      fullName: 'take',
      email: 'gafurov@gmail.com',
      booking: 1,
      announcement: 2,
   },
   {
      id: 7,
      fullName: 'take',
      email: 'gafurov@gmail.com',
      booking: 1,
      announcement: 2,
   },
   {
      id: 7,
      fullName: 'take',
      email: 'gafurov@gmail.com',
      booking: 1,
      announcement: 2,
   },
   {
      id: 7,
      fullName: 'take',
      email: 'gafurov@gmail.com',
      booking: 1,
      announcement: 2,
   },
   {
      id: 7,
      fullName: 'take',
      email: 'gafurov@gmail.com',
      booking: 1,
      announcement: 2,
   },
   {
      id: 7,
      fullName: 'take',
      email: 'gafurov@gmail.com',
      booking: 1,
      announcement: 2,
   },
   {
      id: 7,
      fullName: 'take',
      email: 'gafurov@gmail.com',
      booking: 1,
      announcement: 2,
   },
   {
      id: 7,
      fullName: 'take',
      email: 'gafurov@gmail.com',
      booking: 1,
      announcement: 2,
   },
   {
      id: 7,
      fullName: 'take',
      email: 'gafurov@gmail.com',
      booking: 1,
      announcement: 2,
   },
   {
      id: 7,
      fullName: 'take',
      email: 'gafurov@gmail.com',
      booking: 1,
      announcement: 2,
   },
   {
      id: 7,
      fullName: 'take',
      email: 'gafurov@gmail.com',
      booking: 1,
      announcement: 2,
   },
   {
      id: 7,
      fullName: 'take',
      email: 'gafurov@gmail.com',
      booking: 1,
      announcement: 2,
   },
   {
      id: 7,
      fullName: 'take',
      email: 'gafurov@gmail.com',
      booking: 1,
      announcement: 2,
   },
   {
      id: 7,
      fullName: 'take',
      email: 'gafurov@gmail.com',
      booking: 1,
      announcement: 2,
   },
   {
      id: 7,
      fullName: 'take',
      email: 'gafurov@gmail.com',
      booking: 1,
      announcement: 2,
   },
   {
      id: 7,
      fullName: 'take',
      email: 'gafurov@gmail.com',
      booking: 1,
      announcement: 2,
   },
   {
      id: 7,
      fullName: 'take',
      email: 'gafurov@gmail.com',
      booking: 1,
      announcement: 2,
   },
   {
      id: 7,
      fullName: 'take',
      email: 'gafurov@gmail.com',
      booking: 1,
      announcement: 2,
   },
   {
      id: 7,
      fullName: 'take',
      email: 'gafurov@gmail.com',
      booking: 1,
      announcement: 2,
   },
]
function App() {
   const [users, setUsers] = useState(m)
   const deletHandler = (o) => {
      const d = users.filter((d) => {
         if (d.id !== o) {
            return []
         }
      })
      setUsers(d)
   }
   return (
      <div className="App">
         <AdminUsers users={users} onDelete={deletHandler} />
      </div>
   )
}

export default App
