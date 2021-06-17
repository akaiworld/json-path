// libs
import {useEffect, useRef} from 'react';
import jp from 'jsonpath';

// store
import {setPaths, setFilterError} from '../store/slice/json';

const debounceTs = 300;
const limit = 10000;

const useSetPaths = ({filter, data, dispatch}) => {
	const state = useRef({timeout: null});
	useEffect(() => {
		_setPaths({filter, data, dispatch, state});
	}, [filter, data, dispatch]);
}
export default useSetPaths;

const _setPaths = ({filter, data, dispatch, state}) => {
	clearTimeout(state.current.timeout);
	state.current.timeout = window.setTimeout(() => {
		try {
			const paths = jp.paths(data, filter, limit).map(path => jp.stringify(path));
			dispatch(setPaths(paths));
			dispatch(setFilterError(false));
		} catch(e){
			dispatch(setFilterError(true));
		}
	}, debounceTs);
}