// types
import {JSONPath} from '../../../types/json';

const getPath = (keyPath: JSONPath) : JSONPath => {
	const path = [...keyPath];
	path.reverse();
	return path;
};
export default getPath;