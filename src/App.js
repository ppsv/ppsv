import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import { BrowserRouter, Route } from "react-router-dom";

const App = (props) => {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/Dialogs' render={() => <Dialogs dialogsDate={props.state.dialogsPage.dialogsDate} messageDate={props.state.dialogsPage.messageDate} />} />
          <Route path='/Profile' component={() => <Profile myPostsDate={props.state.profilePage.myPostsDate} />} />
          <Route path='/News' component={News} />
          <Route path='/Music' component={Music} />
          <Route path='/Setting' component={Setting} />
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
