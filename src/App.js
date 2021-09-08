import React, { Fragment } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Profile from './components/Profile';
import GlobalStyle from './theme/globalStyle';

const AppWrapper = styled.div`
  background-color: #fafafa;
`;

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <AppWrapper>
        <Header />
        <Profile />
      </AppWrapper>
    </Fragment>
  );
};

export default App;
