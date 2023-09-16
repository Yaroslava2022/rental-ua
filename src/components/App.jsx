import { Routes, Route} from 'react-router-dom';
import CatalogPage from 'pages/Catalog';
import FavoritesPage from 'pages/Favorites';

import Home from 'pages/Home.jsx';

export const App = () => {
  return (

      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
 
</Routes>

  );
};
