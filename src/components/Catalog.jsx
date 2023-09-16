// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from 'react';
// import css from './Catalog.module.css';
// import { fetchCars } from './redux/operations';
// import { getCars, getFilter, getVisibleCars } from "./redux/selectors";

// const Catalog =() => {
//     const cars = useSelector(getCars);
//     const filter = useSelector(getFilter);
//     console.log(cars);
//     console.log(filter);
//     const dispatch = useDispatch();
//     const visibleCars = useSelector(getVisibleCars);
//     console.log(visibleCars);
//     useEffect(() => {
//       dispatch(fetchCars());
//     }, [dispatch]);
    
//     return (
//         <div className={css.catalog}>
//              <p>Our cars</p>
//              <ul>{cars}</ul>
//         </div>
//     )
// }
// export default Catalog;
import PropTypes from "prop-types";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCars } from "./redux/selectors";
import { fetchCars } from "./redux/operations";
import css from "./Catalog.module.css";

import CarItem from "./Car";

const Catalog = () => {
	const items = useSelector(getCars);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchCars());
	}, [dispatch]);

	return (
        <div className={css.catalog}>
		<ul className={css.carsList}>
			{items.map((item) => (
				<li key={item.id} className={css.item}>
					<CarItem car={item} />
				</li>
			))}
		</ul>
        </div>
	);
};

Catalog.propTypes = {
	item: PropTypes.array,
};

export default Catalog;