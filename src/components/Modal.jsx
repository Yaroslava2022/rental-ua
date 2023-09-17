 import css from "./Modal.module.css"
 import { Link } from "react-router-dom";
 import {  AiOutlineCloseCircle } from 'react-icons/ai';

 export const Modal=({card, setIsModalOpen })=> {
    const { id, make, model, year, type, mileage, img,accessories, functionalities, description, rentalPrice, photoLink,address, engineSize, fuelConsumption } = card[0];
    const addressParts = address.split(", ");
    const city = addressParts[1];
    const country = addressParts[2];
    const realMilage =mileage/1000;
    const handleBackdropClick = event => {
        if (event.target.id !== 'backdrop') return;
        setIsModalOpen(false);
      };
return(
    <div className={css.backdrop} onClick={handleBackdropClick} id="backdrop">
        <div key={id} className={css.modal}>
            <button className={css.close_button} ><AiOutlineCloseCircle id="backdrop"/></button>
        <div className={css.imgWrapper}>
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
				
				
				
			</div>
			<div className={css.cardInfo}>
			
			<span className={css.additionalInfo}>{city}</span>
			<span className={css.additionalInfo}>{country}</span>
            <span className={css.additionalInfo}>Id: {id}</span>
			<span className={css.additionalInfo}>Year: {year}</span>
			<span className={css.additionalInfo}>Type: {type}</span>
            <span className={css.additionalInfo}>Fuel Consumption: {fuelConsumption}</span>
            <span className={css.additionalInfo}>Engine Size: {engineSize}</span>
          
			{/* <div>
				<span className={css.price}>{rentalPrice}</span></div>	 */}
			</div>
            <div className={css.additional_div}>
                <p>{description}</p>
            </div>
            <div className={css.additional_div}>
                <p className={css.additional_title}>Accessories and functionalities:</p>
                <div className={css.cardInfo}>
                <span className={css.additionalInfo}> {accessories}</span>
                <span className={css.additionalInfo}>{functionalities}</span>
               
                </div>
                
            </div>
            <div className={css.last_div}>
                <p className={css.additional_title}>Rental Conditions:</p>
                <div className={css.lastInfo}>
               
                <span className={css.last_info}> Mileage: {realMilage}</span>
                <span className={css.last_info}> Price:  {rentalPrice}</span>
                </div>
                <Link className={css.link} to="tel:+380730000000">  <button className={css.btnRental}>Rental car</button></Link>
              
            </div>
        </div>
    </div>
)
}