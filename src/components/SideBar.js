import css from './SideBar.module.css';
import { Link } from 'react-router-dom';
export const SideBar =() => {
    return (
<div className={css.sidebar}>
<ul className={css.menu_list}>
    <li className={css.menu_item}>
    <Link className={css.link} to="/"><p>Home</p></Link></li>
    <li className={css.menu_item}>
    <Link className={css.link} to="/catalog"><p>Catalog</p></Link></li>
    <li className={css.menu_item}><Link className={css.link} to="/favorites"><p>Favorites</p></Link></li>
</ul>
</div>
    )
}