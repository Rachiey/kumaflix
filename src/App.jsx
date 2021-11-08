import React from 'react';
import { Header } from './layout';
import { Switch, Route } from 'react-router-dom';
import * as Pages from './pages';

import { useSelector } from 'react-redux';

const App = () => {
    const type= useSelector((store) => store.musicType )
    const name = useSelector((store) => store.artistName )

    return (
    <>
        <Header />
        
        <Switch>
        <Route exact path='/'>
       
          <Pages.Home />
        </Route>

        <Route path='/rilakkuma'>
          <Pages.rilakkuma />
        </Route>

        <Route path='/korilakkuma'>
          <Pages.korilakkuma />
        </Route>

        <Route path='/kiiroitori'>
          <Pages.kiiroitori />
        </Route>

        <Route path='/chairoikoguma'>
          <Pages.chairoikoguma />
        </Route>

        </Switch>
        
  
    </>
    )
};

export default App;