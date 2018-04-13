import React, { Component } from 'react';
import {Provider} from 'react-redux';

import store from './redux/store'
import Router from './Router';
import { userCheckLoginStatusStart } from './redux/actions/actionCreators';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router />
			</Provider>
		);
	}
}

store.dispatch(userCheckLoginStatusStart());
export default App;
