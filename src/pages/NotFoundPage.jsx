import { useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Footer from '../components/footer/Footer'
import UserHeader from '../components/headers/innerheader/UserHeader'
import Button from '../components/UI/Button'

const NotFoundPage = () => {
   const location = useLocation()
   const navigate = useNavigate()
   return (
      <div>
         <UserHeader />
         <Div1>
            <h2>Not found: {location.pathname.slice(1)}</h2>
            <Button
               onClick={() => {
                  navigate(-1)
               }}
            >
               Go back
            </Button>
         </Div1>
         <Footer />
      </div>
   )
}
export default NotFoundPage
const Div1 = styled.div`
   min-height: 60vh;
`
