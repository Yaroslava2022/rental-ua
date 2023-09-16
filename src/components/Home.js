import css from './HomePage.module.css';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className={css.home}>
           
            <h1 className={css.main_title}>RENTAL-UA</h1>
            <p className={css.about_text}>Our company provides services in the car rental market since 2003. In our fleet there are 32 vehicles, which completely cover the needs of even the most demanding customers.</p>
            <h2 className={css.title}>Why should you cooperate with us?</h2>
            <div className={css.about_text}>
                <ol>
                    <li>All vehicles are preexamined strictly during the whole life cycle. The cars in our fleet are never old, it’s our guarantee of safety and a high level of comfort for the client.</li>
                    <li>We choose only the best employees - among us there are many of those who had previously worked in the partner company of your service. It gives us the possibility of perfect understanding all of the intricacies of cooperating with Economycarrentals.</li>
                    <li>During the work "RENTAL-UA" has served more than 5,000 satisfied customers in more than 60 countries around the world - it makes us in the right way an international service company.</li>
                    <li>Network,which consists of 13 partners throughout Ukraine (including companies,which have already been working with you), - makes our service popular,convenient and as accessible as possible for the customers.</li>
                </ol>
            </div>
            <div>
                
                <h2 className={css.title}>Our contacts</h2>

              <ul className={css.address_list}>
                
                <li className={css.address_item}>
                <Link className={css.link} to="https://goo.gl/maps/ebXGRYjhbtUUYJ8H9">
                  Our address: <span className={css.address_info}>Kyiv, Lesi Ukrainki, 26</span> </Link></li>
                <li className={css.address_item}> <Link className={css.link} to="tel:+380730000000">Our tel:<span className={css.address_info}> +380730000000</span></Link></li>
                
           </ul>
          
                </div>
        </div>
    )
 }
 export default HomePage;