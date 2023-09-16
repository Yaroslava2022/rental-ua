import HomePage from "components/Home";
import { SideBar } from "components/SideBar";
import { RightBar } from "components/RightBar";
import css from './Global.module.css';
const Home = () => {
    return (
        <div className={css.general}>
   <SideBar/>
    <HomePage/>
    <RightBar/>
        </div>
    )
}

export default Home;