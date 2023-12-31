import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {AiFillHeart}  from 'react-icons/ai';

// import { getCars } from "./redux/selectors";
import { AddToFavorite, DeleteFromFavorite } from "./redux/actions";
import css from "./Car.module.css"
const CarItem = ({ toggleModal, cars }) => {
	const favorites = useSelector(state => state.favorite);
	// const [favorites, setFavorites] = useState([]);
	const dispatch = useDispatch();
	// const cars = useSelector(getCars);
	return cars.map(car => {
		const { id, make, model, year,  photoLink, type, mileage, img, rentalPrice, rentalCompany, address } = car;
		const addressParts = address.split(", ");
		const city = addressParts[1];
		const country = addressParts[2];
	
    return (
<>   <li key={id} className={css.item}>
			<div className={css.imgWrapper}>
			{favorites && favorites?.includes(id) ? (
            <button id={id} onClick={() => dispatch(DeleteFromFavorite(id))} className={css.delButton}><AiFillHeart/>
              </button>
          ) : (
			<button id={id} onClick={() => dispatch(AddToFavorite(id))} className={css.addButton}><AiFillHeart/>
            </button>
          )}
				<button className={css.addButton}><AiFillHeart/></button>
				<img
					className={css.picture}
					src={img? img: photoLink}
					alt={`${make} ${model} ${year}`}
				/>
				
			</div>

			<div className={css.mainInfo}>
				<div>
					<span>{make} </span>
					<span className={css.model}>{model}</span>, 
					<span className={css.year}>{year}</span>
					</div>
				<div>
				<span className={css.price}>{rentalPrice}</span></div>	
				
				
			</div>
			<div className={css.cardInfo}>
			<span className={css.additionalInfo}>{rentalCompany}</span>
			<span className={css.additionalInfo}>{city}</span>
			<span className={css.additionalInfo}>{country}</span>
			<span className={css.additionalInfo}>{type}</span>
			<span className={css.additionalInfo}>{model}</span>
            <span className={css.additionalInfo}>{mileage}</span>
			
			</div>
		{/* <div className={css.cardInfo}>
	
		</div> */}
			<button className={css.btnLearnMore} id={id} onClick={toggleModal}>Learn more</button>
			</li>
		</>
       );
	});
  };
CarItem.propTypes = {
	car: PropTypes.shape({
		id: PropTypes.string.isRequired,
		year: PropTypes.number.isRequired,
		make: PropTypes.string.isRequired,
		model: PropTypes.string.isRequired,
		type: PropTypes.string.isRequired,
		img: PropTypes.string,
        photoLink: PropTypes.string,
		description: PropTypes.string.isRequired,
		functionalities: PropTypes.array.isRequired,
		rentalPrice: PropTypes.string.isRequired,
		rentalCompany: PropTypes.string.isRequired,
		address: PropTypes.string.isRequired,
		mileage: PropTypes.number.isRequired,
	}),
	
};

export default CarItem;