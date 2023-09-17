import Catalog from "components/Catalog";
import { SideBar } from "components/SideBar";
import css from './Global.module.css';
const CatalogPage = () => {
    return (
        <div className={css.general}>
            <SideBar/>,
      <Catalog/>
           
          
       
        </div>
    )
}

export default CatalogPage;