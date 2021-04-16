import React, {useState, useMemo, useEffect} from 'react'
import TinderCard from 'react-tinder-card'
import CarService from "../services/car.service";

const alreadyRemoved = []

function TinderCards () {
  const [cars, setCars] = useState([])

  useEffect(() => {
      CarService.getCars().then(
        (response) => {
          setCars(response.data);
        },
        (error) => {
          console.log(error)
        }
      );
  }, []);

  const childRefs = useMemo(() => Array(cars.length).fill(0).map(i => React.createRef()), [])

  const swiped = (value, car) => {
    CarService.tinderAct(car.id, value).then(
      (response) => {
        console.log(response)
        },
      (error) => {
        console.log(error)
      });
    alreadyRemoved.push(car.id)
  }

  const outOfFrame = (car) => {
    setCars(cars.filter(c => c.id !== car.id))
  }

  return (
    <div id={"tinder"}>
      <div>
        <link href='https://fonts.googleapis.com/css?family=Damion&display=swap' rel='stylesheet' />
        <link href='https://fonts.googleapis.com/css?family=Alatsi&display=swap' rel='stylesheet' />
        <h1>React Tinder Card</h1>
        <div className='cardContainer'>
          {cars.map((car, index) =>
            <TinderCard ref={childRefs[index]} className='swipe' key={car.id} onSwipe={(dir) => swiped(dir, car)} onCardLeftScreen={() => outOfFrame(car.id)}>
              <div style={{ backgroundImage: 'url(https://vignette.wikia.nocookie.net/agk/images/8/85/Rick-astley-never-gonna-give-you-up.jpg/revision/latest?cb=20121109230013)' }} className='card'>
                <h3>{car.name + ' ' + car.price_eur + '€'}</h3>
              </div>
            </TinderCard>
          )}
        </div>
      </div>
    </div>
  )
}

export default TinderCards