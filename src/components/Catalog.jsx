import { useDispatch } from "react-redux";
import { useEffect } from 'react';
import css from './Catalog.module.css';
import { fetchCars } from './redux/operations';

const Catalog =() => {
    // const dispatch = useDispatch();

    // useEffect(() => {
    //   dispatch(fetchCars());
    // }, [dispatch]);
    console.log(fetchCars());
    return (
        <div className={css.catalog}>
             <p>Our cars</p>
        </div>
    )
}
export default Catalog;