// libs
import {useEffect, useRef} from 'react';

const useMounted = () : {isMounting: boolean, isActive: boolean} => {

	const state = useRef({
		isMounting: true,
		isActive: true,
	});

	useEffect(() => {
		state.current.isMounting = false;
		return () => {
			state.current.isActive = false;
		}
	},[]);

	return state.current;
}
export default useMounted;