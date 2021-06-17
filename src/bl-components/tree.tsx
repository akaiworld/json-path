// libs
import * as React from 'react';
import {useSelector} from 'react-redux';
import JSONTree from 'react-json-tree';
import {monokai as theme} from 'base16';

// bl
import isExpandedNode from '../bl/json/node/expanded-node';
import getStyle from '../bl/json/node/style';

// store
import {getData, getPaths, getFileError} from '../store/slice/json';

const Tree: React.FC <{
	className?: string,
}> = ({
	className = '',
}) => {

	// selectors
	const data = useSelector(getData);
	const paths = useSelector(getPaths);
	const fileError = useSelector(getFileError);
	
	// theme
	const base16Theme = {
		extend: theme,
		valueText: ({style}, path) => getStyle({style}, path, paths),
		valueLabel: ({style}, path) => getStyle({style}, path, paths),
		nestedNode: ({style}, path) => getStyle({style}, path, paths),
	}
	
	return (
		<div className={`
			${fileError ? 'border-2 border-red-800' : ''}
			${className}
		`}>
			{!fileError ? <>
				<div className="mb-4 text-lg font-medium">
					Your JSON with filter results expanded and highlighted
				</div>
				<div className="relative">
					<JSONTree
						keyPath={['$']}
						theme={base16Theme}
						data={data}
						shouldExpandNode={keyPath => isExpandedNode(keyPath, paths)}
					/>
					<div className="absolute top-0 right-0 px-4 py-2 text-white text-xl font-bold bg-blue-800 rounded-lg">
						{paths.length} results
					</div>
				</div>
			</>:(
				<div className="flex items-center justify-center p-10 text-2xl text-red-800 font-medium">
					Error loading file...
				</div>
			)}
		</div>
	);
};
export default Tree;