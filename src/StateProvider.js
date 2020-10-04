// data layer
// to track the basket

import React, { createContext, useContext, useReducer} from "react";

// THIS IS DATA LAYER
export const StateContext = createContext();

// BUILD A PROVIDER
export const StateProvider = ({ reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// this is to export and how we use it inside a component
export const useStateValue = () => useContext(StateContext);