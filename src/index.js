import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import 'bootstrap3/dist/css/bootstrap.min.css';
import '../assets/mystyle.css';
import reducer from './store/reducer';

const store = createStore(reducer);

/*
ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<Route exact path="/" component={App} />			
		</Provider>
	</BrowserRouter>,
	document.getElementById("app"));
*/

ReactDOM.render(<Provider store={store}>
					<App />			
				</Provider>,
				document.getElementById("app"));	