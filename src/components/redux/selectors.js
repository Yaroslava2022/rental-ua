import { createSelector } from "@reduxjs/toolkit";

export const getCars = (state) => state.cars.items;
export const getFilter = (state) => state.filter;

export const getVisibleCars = createSelector(
  [getCars, getFilter],
  (cars, filter) => {
    // const filter = getFilter(state);
    // const contacts = getContacts(state);
    const normalizedFilter = filter.toLowerCase();
    console.log(cars);
    if (!cars) {
      return;
    }
    return cars.filter((car) =>
      car.model.toString().toLowerCase().includes(normalizedFilter)
    );
  }
);