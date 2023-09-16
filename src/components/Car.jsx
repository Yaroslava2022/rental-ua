import PropTypes from "prop-types";
// import { useDispatch, useSelector } from "react-redux";
import css from "./Car.module.css"
const CarItem = ({ car }) => {
	const {
		// id,
		img,
		make,
		model,
		year,
		rentalPrice,
        photoLink,
		// address,
		// rentalCompany,
		// type,
		// functionalities,
	} = car;
    return (
<>
			<div className={css.imgWrapper}>
				<img
					className={css.picture}
					src={img? img: photoLink}
					alt={`${make} ${model} ${year}`}
				/>
				
			</div>

			<div className={css.blockTitle}>
				<h2 className={css.title}>
					<span>{make} </span>
					<span className={css.model}>{model}</span>, <span>{year}</span>
				</h2>
				<span className={css.price}>{rentalPrice}</span>
			</div>
			<div className={css.cardInfo}>
				
			</div>
			<button className={css.btnLearnMore}>Learn more</button>
		</>
    );
}
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
	}).isRequired,
	
};

export default CarItem;