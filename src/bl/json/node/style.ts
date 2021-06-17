// types
import {JSONPath} from '../../../types/json';

// bl
import isHighlighted from './highlighted';

type NodeStyle = {
	[key: string]: string;
}

const highlighed = {
	fontWeight: 'bold',
	fontSize: '1.1em',
}

const getStyle = (
	{style}: {style: NodeStyle},
	path: JSONPath,
	paths: string[],
):{
	style: NodeStyle,
} => {
	const _highlighted = isHighlighted(path, paths);
	if (!_highlighted) {
		return {style};
	}
	return {
		style: {
			...style,
			...highlighed,
		},
	};
}
export default getStyle;