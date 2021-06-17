// libs
import jp from 'jsonpath';

// bl 
import getPath from './path';

// types
import {JSONPath} from '../../../types/json';

const isExpanded = (
	pathArr: JSONPath,
	paths: string[],
) : boolean => {
	const path = jp.stringify(getPath(pathArr));
	const expanded = paths.some(_path => _path.indexOf(path) === 0);
	return expanded;
}
export default isExpanded;