import React, { useContext } from 'react';
import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';


import { getRowName, getSeatNum } from '../helpers';
import { range } from '../utils';
import { SeatContext } from './SeatContext';
import Seat from './Seat';


const TicketWidget = () => {
  const {state: {numOfRows, seatsPerRow, hasLoaded, seats}} = useContext(SeatContext);

  return (
    <>
      {!hasLoaded && <CircularProgress />}
      {hasLoaded && 
      <Wrapper>
        {range(numOfRows).map(rowIndex => {
          const rowName = getRowName(rowIndex);

          return (
            <Row key={rowIndex}>
              <RowLabel>Row {rowName}</RowLabel>
              {range(seatsPerRow).map(seatIndex => {
                const seatId = `${rowName}-${getSeatNum(seatIndex)}`;
                return (
                  <button key={seatId} disabled={seats[seatId].isBooked ? true: false}>
                    <Seat seats={seats} seatId={seatId} rowName={rowName}/>
                  </button>
                );
              })}
            </Row>
          );
        })}
      </Wrapper>
      }
    </>
  );
};

const Wrapper = styled.div`
  background: #eee;
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 8px;
`;

const Row = styled.div`
  display: flex;
  position: relative;

  &:not(:last-of-type) {
    border-bottom: 1px solid #ddd;
  }
`;

const RowLabel = styled.div`
  font-weight: bold;
`;


export default TicketWidget;
