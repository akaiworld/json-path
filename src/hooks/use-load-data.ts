// libs
import {useState} from 'react';
import {useDispatch} from 'react-redux';

// store
import {setData, setFileError} from '../store/slice/json';

// hooks
import useMounted from '../hooks/use-mounted';

// bl
import loadFile from '../bl/file/load';

// types
import {AnyJSON} from '../types/json';

type UseLoadData = [
	(object) => void,
	boolean,
]

const useLoadData = () : UseLoadData => {
	const componentState = useMounted();
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(false);

	const loadData = async file => {
		setIsLoading(true);
		try {
			const data = await loadFile(file) as AnyJSON;
			if(!componentState.isActive){
				return;
			}
			dispatch(setData(data));
			dispatch(setFileError(false));
		} catch(e){
			dispatch(setFileError(true));
		}
		setIsLoading(false);
	}

	return [loadData, isLoading];
}
export default useLoadData;