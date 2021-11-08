import React from 'react';
import { Header } from './layout';
import { Switch, Route } from 'react-router-dom';
import * as Pages from './pages';


const App = () => {
    return (
    <>
       
        <Switch>
        <Route exact path='/'>
            
          <Pages.Home />
        
        </Route>

        <Route path='/rilakkuma'>
          <Pages.Rilakkuma />
          <Header />
        </Route>

        <Route path='/korilakkuma'>
          <Pages.Korilakkuma />
          <Header />
        </Route>

        <Route path='/kiiroitori'>
          <Pages.Kiiroitori />
          <Header />
        </Route>

        <Route path='/chairoikoguma'>
          <Pages.Chairoikoguma />
          <Header />
        </Route>

        </Switch>
        
  
    </>
    )
};

export default App;