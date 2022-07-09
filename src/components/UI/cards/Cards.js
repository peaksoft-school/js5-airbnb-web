import { card } from './constants'
import UserAnnCard from './UserAnnCard'

const Cards = () => {
   return (
      <div>
         {card.map((el) => {
            return (
               <UserAnnCard
                  price={el.price}
                  ratings={el.ratings}
                  description={el.description}
                  location={el.location}
                  guestsAmount={el.guestsAmount}
               />
            )
         })}
      </div>
   )
}

export default Cards
