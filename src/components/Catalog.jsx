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
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { fetchCars } from "./redux/operations";
import css from "./Catalog.module.css";

import CarItem from "./Car";

const Catalog = () => {
	const [page, setPage] = useState(1);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchCars(page));
	}, [dispatch, page]);

	return (
        <div className={css.catalog}>
		<ul className={css.carsList}>
			<CarItem/>
		
		</ul>
		{ page<4? <button className={css.loadmore_button} type="button" onClick={() => setPage(page=>(page+1))} >
          Load more
        </button> : <div></div>
}
        </div>
	);
};

Catalog.propTypes = {
	item: PropTypes.array,
};

export default Catalog;