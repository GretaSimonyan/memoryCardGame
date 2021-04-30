import React, { Component } from "react";
import GlobalStyles from './styled/globalStyles';
import Home from './pages/Home';
import Store from './Store';

class App extends Component{
  render(){
    return(
      <>
        <GlobalStyles/>
        <Store>
          <Home/>
        </Store>
      </>
    );
  }
}

export default App;