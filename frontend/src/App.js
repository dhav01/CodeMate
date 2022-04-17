import * as React from "react";
import './App.css';
import AuthContext from "./contexts/authContext";
import Home from './pages/index';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUpPage from './pages/signup';
import LogInPage from './pages/login';
import CodePage from "./pages/code";
import DirectCodePage from "./pages/directcode";
import DirectCodePageCpp from "./pages/directcodecpp";
import DirectCodePageJava from "./pages/directcodejava";
import DirectCodePagePython from "./pages/directcodepython";
import DirectCodePageRuby from "./pages/directcoderuby";
import DirectCodePagePerl from "./pages/directcodeperl";


function App() {
  const authCtx = React.useContext(AuthContext);
  console.log(authCtx.user);
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/signup' component={SignUpPage} exact/>
          <Route path='/directcode' component={DirectCodePage} exact/>
          <Route path='/directcodecpp' component={DirectCodePageCpp} exact/>
          <Route path='/directcodejava' component={DirectCodePageJava} exact/>
          <Route path='/directcodeperl' component={DirectCodePagePerl} exact/>
          <Route path='/directcodepython' component={DirectCodePagePython} exact/>
          <Route path='/directcoderuby' component={DirectCodePageRuby} exact/>
          {/* <Route path='/login' component={LogInPage} exact/>
          <Route path='/userhome' component={UserHomePage} exact/>
          <Route path='/code' component={CodePage} exact /> */}
          {/* <Route path='/code' component={CodePage} exact /> */}
          {/* {authCtx.user?.userName == null ? (
            <LogInPage />
            ) : (
            <UserHomePage userName={authCtx.user?.userName} />
          )} */}
          {authCtx.user?.userName == null ? (
              <LogInPage />
            )
           : 
          (
            <CodePage userName={authCtx.user?.userName} />  
          ) 
          }
          


        </Switch>
      </Router>
    </>
  );
}

export default App;
