import React, { useReducer } from 'react';

export const BookingContext = React.createContext();

const initialState = {
    status: 'idle',
    error: null,
    selectedSeatId: null,
    price: null,
};

const reducer = (state, action) => {
    switch(action.type) {
        case 'BEGIN-BOOKING-PROCESS':
            console.log(action.seatId)
            return {
                ...state,
                selectedSeatId: action.seatId
            }
        default:
            throw new Error(`unrecognized action type: ${action.type}`);

    }
};

export const BookingProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const receiveSelectionFromUser = (seatId) => {                
        dispatch({ 
            type: 'BEGIN-BOOKING-PROCESS',
            seatId: seatId
        });
        console.log(state);
    }

    return (
        <BookingContext.Provider 
            value={{
                state,
                receiveSelectionFromUser
                }}>
                {children}
            </BookingContext.Provider> 
    );   
};