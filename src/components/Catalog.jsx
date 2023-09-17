
import { Modal } from "./Modal";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCars} from "./redux/selectors";

import { fetchCars } from "./redux/operations";
import css from "./Catalog.module.css";

import CarItem from "./Car";

const Catalog = () => {
	const [page, setPage] = useState(1);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const dispatch = useDispatch();
	const cars = useSelector(getCars);
const {id}= cars;

	const [currentCar, setCurrentCar] = useState([]);
    const [maken, setMaken] = useState('');

	const makeHandler = (e) => {
		setMaken(e.target.value);
	  };
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
		dispatch(fetchCars(page));
	}, [dispatch, page]);

	const getVisibleCars = cars.filter((car) =>
	car.make.toString().toLowerCase().includes(maken)
  );
	console.log(getVisibleCars);
	
	return (
        <div className={css.catalog}>
			
			    <div tabIndex={0} onKeyDown={handleKeyDown}>
					<div className={css.input}>
						<input className={css.searchinput}  type="text"
                    placeholder="Enter the text"  value={maken} onChange ={makeHandler}></input>
						<button className={css.btnSearch}>Search</button>
					</div>
		<ul className={css.carsList}>
			{maken? (<CarItem cars={getVisibleCars} toggleModal={toggleModal}  id={id}/>) : <CarItem cars={cars} toggleModal={toggleModal}  id={id}/>  } 
		
		</ul>
		{ page<4? <button className={css.loadmore_button} type="button" onClick={() => setPage(page=>(page+1))} >
          Load more
        </button> : <div></div>
}             {isModalOpen && (
        <Modal card={currentCar} setIsModalOpen={setIsModalOpen} />
      )}
        </div>
		</div>
	);
};

Catalog.propTypes = {
	item: PropTypes.array,
};

export default Catalog;