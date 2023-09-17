import Favorites from "components/Favorites";
import { SideBar } from "components/SideBar";
import css from './Global.module.css';
const FavoritesPage = () => {
    return (
      <div className={css.general}>
        <SideBar/>,
        <Favorites/>
      </div>
    )
}

export default FavoritesPage;