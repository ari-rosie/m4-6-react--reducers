import React from 'react';
import styled from 'styled-components';
import { ReactComponent as SeatPic } from '../assets/seat-available.svg';
import { Tooltip } from '../utils';

const Seat = ({seats, seatId, rowName}) => {
    return (
        <SeatWrapper seats={seats} seatId={seatId}> 
            <Tooltip str={`Row ${rowName}, Seat ${seatId} - $${seats[seatId].price}`}>
                <SeatPic />
            </Tooltip>
        </SeatWrapper>

    );
};

const SeatWrapper = styled.div(props => ({
    padding: '5px',
    filter: props.seats[props.seatId].isbooked ? 'grayscale(100%)': 'none',
}));

export default Seat;