import React from 'react';
import { Header } from './layout';
import { Switch, Route } from 'react-router-dom';
import * as Pages from './pages';


const App = () => {
    return (
    <>
        <Header />
        
        <Switch>
        <Route exact path='/'>
       
          <Pages.Home />
        </Route>

        <Route path='/rilakkuma'>
          <Pages.Rilakkuma />
        </Route>

        <Route path='/korilakkuma'>
          <Pages.Korilakkuma />
        </Route>

        <Route path='/kiiroitori'>
          <Pages.Kiiroitori />
        </Route>

        <Route path='/chairoikoguma'>
          <Pages.Chairoikoguma />
        </Route>

        </Switch>
        
  
    </>
    )
};

export default App;