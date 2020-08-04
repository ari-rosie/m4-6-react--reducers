import React, { useContext } from 'react';

import GlobalStyles from './GlobalStyles';
import { SeatContext } from './SeatContext';
import { FetchData } from '../hooks';

function App() {
  const { state, actions: { receiveSeatInfoFromServer },} = useContext(SeatContext);

  FetchData('/api/seat-availability', '', receiveSeatInfoFromServer);
  console.log(state);
  return (
    <>
      <GlobalStyles />
      TODO: write code
    </>
  );
}

export default App;
