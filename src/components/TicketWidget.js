import React, { useContext } from 'react';
import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';


import { getRowName, getSeatNum } from '../helpers';
import { range, Tooltip } from '../utils';
import { ReactComponent as SeatPic } from '../assets/seat-available.svg';
import { SeatContext } from './SeatContext';


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
                  <SeatWrapper key={seatId} seatId={seatId} seats={seats}> 
                    <Tooltip str={`Row ${rowName}, Seat ${seatId} - $${seats[seatId].price}`}>
                      <SeatPic />
                    </Tooltip>
                  </SeatWrapper>
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

const SeatWrapper = styled.div(props => ({
  padding: '5px',
  filter: props.seats[props.seatId].isbooked ? 'grayscale(100%)': 'none',
}))

export default TicketWidget;
