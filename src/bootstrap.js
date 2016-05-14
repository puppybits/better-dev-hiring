import "app.sass";
import {render} from "react-dom";
import {createHistory} from 'history';
import App from "App";

let { Router } = ReactRouter,
  history = createHistory();

render(
  <Router history={history}>
    {{path: '/', component: App}}
  </Router>, window.document.getElementById('app'));

console.log('Loaded WebTest!');
