// libs
import jp from 'jsonpath';

// types
import {JSONPath} from '../../../types/json';

// bl 
import getPath from './path';

export const isHighlighted = (
	pathArr: JSONPath,
	paths: string[],
) : boolean => {
	const path = jp.stringify(getPath(pathArr));
	return paths.some(_path => _path === path);
};
export default isHighlighted;
