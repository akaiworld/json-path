// libis
import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

// store
import store from './store/store';

// bl-components
import File from './bl-components/file';
import Filter from './bl-components/filter';
import Tree from './bl-components/tree';

// styles
import './styles.css';

const App: React.FC = () => {
	return (
		<Provider store={store}>
			<h1 className="my-6 text-blue-800 text-4xl font-semibold text-center">
				JSON Path visualizer
			</h1>
			<div className="relative m-2 p-10 pb-4 border-2 border-blue-800 rounded-lg shadow">
				<File />
				<Filter className="mt-4" />
			</div>
			<Tree 
				className="m-2 p-10 rounded-lg shadow"
			/>
		</Provider>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));