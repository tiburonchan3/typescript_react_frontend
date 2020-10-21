import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import {VideoList} from './components/Videos/VideoList'
import {VideoForm} from './components/Videos/VideoForm'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css'
import {NavbarMenu} from './components/NavBar/Navbar'
import {ToastContainer} from 'react-toastify'
import {Container} from 'react-bootstrap'

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
        <NavbarMenu/>
        <Container>
        <Switch>
            <Route path="/" exact={true} component={VideoList} />
            <Route path="/new-video" exact={true} component={VideoForm}/>
            <Route path="/update/:id" exact={true} component={VideoForm}/>
        </Switch>
        </Container>
      </BrowserRouter>
      <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick={false}
                draggable
                pauseOnHover
            />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
