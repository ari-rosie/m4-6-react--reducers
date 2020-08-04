import React, { useReducer } from 'react';

export const SeatContext = React.createContext();

const initialState = {
    hasLoaded: false,
    seats: null,
    numOfRows: 0,
    seatsPerRow:0,
};

const reducer = (state, action) => {
    switch(action.type) {
        case 'RECEIVE-SEAT-INFO-FROM-SERVER':
            return {
                hasLoaded: true,
                seats: action.data.seats,
                numOfRows: action.data.numOfRows,
                seatsPerRow: action.data.seatsPerRow
            }
        default:
            throw new Error(`unrecognized action: ${action.type}`);
    }
};

export const SeatProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const receiveSeatInfoFromServer = (data) => {
        dispatch({
            type: 'RECEIVE-SEAT-INFO-FROM-SERVER',
            data: data,
        });  
    };

    return (
        <SeatContext.Provider
            value={{
                state,
                actions: {
                    receiveSeatInfoFromServer,
                },
                
            }}
        >
            {children}
        </SeatContext.Provider>
    );
};