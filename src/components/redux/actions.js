export const AddToFavorite = id => {
    
    return {
      type: 'favorite/addFavorite',
      payload: id,
    };
  };
  
  export const DeleteFromFavorite = id => {
    return {
      type: 'favorite/deleteFavorite',
      payload: id,
    };
  };