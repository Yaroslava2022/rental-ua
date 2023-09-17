
// const Favorites =() => {
//     return (
//         <div className={css.favorites}>
//              <p>My favorites cars</p>
//         </div>
//     )
// }
// 
import css from './Favorites.module.css';
import CarItem from './Car';
import { Modal } from './Modal';
import { useDispatch, useSelector } from 'react-redux';

import { getCars } from './redux/selectors';
import { fetchCars } from "./redux/operations";
const { useEffect, useState } = require('react');

 const Favorites = () => {
  const dispatch = useDispatch();
  const cars = useSelector(getCars);
  const favorites = useSelector(state => state.favorite);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentCar, setCurrentCar] = useState([]);
 console.log(favorites)
  const toggleModal = event => {
      setIsModalOpen(state => !state);
      
      setCurrentCar(
        cars.filter(car => car.id.toString() === event.currentTarget.id)
      );
    };
    const handleKeyDown = event => {
      if (event.key === 'Escape') setIsModalOpen(false);
    };
  useEffect(() => {
      dispatch(fetchCars());
  }, [dispatch]);

  const favoriteCars = cars.filter(car => favorites.includes(car.id));
  return (
    <div className={css.favorites}>
    <div tabIndex={0} onKeyDown={handleKeyDown}>
        <h1> Your favorites cars: </h1>
      <ul className={css.carsList}>
        <CarItem cars={favoriteCars} toggleModal={toggleModal} />
      </ul>
      {isModalOpen && (
        <Modal card={currentCar} setIsModalOpen={setIsModalOpen} />
      )}
    </div>
    </div>
  );
};
export default Favorites;