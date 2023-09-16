import css from './RightBar.module.css';
import { Link } from 'react-router-dom';
import { BsTelephone } from 'react-icons/bs';
import {SiGooglemaps} from 'react-icons/si';
export const RightBar =() => {
    return (
<div className={css.rightbar}>
<ul className={css.menu_list}>
    <li className={css.menu_item}>
   
    <Link className={css.link} to="tel:+380730000000"><p><BsTelephone/></p></Link></li>
    <li className={css.menu_item}>
    <Link className={css.link} to="https://goo.gl/maps/ebXGRYjhbtUUYJ8H9"><p><SiGooglemaps/></p></Link></li>
    </ul>
</div>
    )
}