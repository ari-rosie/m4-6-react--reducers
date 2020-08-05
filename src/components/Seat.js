import React, { useContext } from 'react';
import styled from 'styled-components';
import { ReactComponent as SeatPic } from '../assets/seat-available.svg';
import { Tooltip } from '../utils';
import { BookingContext } from './BookingContext';

const Seat = ({seats, seatId, rowName}) => {
    const { receiveSelectionFromUser } = useContext(BookingContext);
    return (
        <SeatWrapper seats={seats} seatId={seatId} onClick={() => {receiveSelectionFromUser(seatId)}}> 
            <Tooltip str={`Row ${rowName}, Seat ${seatId} - $${seats[seatId].price}`}>
                <SeatPic />
            </Tooltip>
        </SeatWrapper>

    );
};

const SeatWrapper = styled.button(props => ({
    padding: '5px',
    filter: props.seats[props.seatId].isbooked ? 'grayscale(100%)': 'none',
}));

export default Seat;