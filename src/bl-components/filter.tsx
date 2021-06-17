// libs
import * as React from 'react';
import {useSelector, useDispatch} from 'react-redux';

// store
import {getData, setFilter, getFilter, getFilterError} from '../store/slice/json';

// components
import Input from '../components/input';

// hooks
import useSetPaths from '../hooks/use-set-paths';

const Filter: React.FC <{
	className?: string,
}> = ({
	className = '',
}) => {
	// dispatch
	const dispatch = useDispatch();

	// selectors
	const filter = useSelector(getFilter);
	const data = useSelector(getData);
	const filterError = useSelector(getFilterError);

	// hooks
	useSetPaths({filter, data, dispatch});
	
	return (
		<div className={className}>
			<div className="mb-1 text-lg font-medium">
				Enter JSON path
			</div>
			<Input
				placeholder="$..my.field[?(@.counter>100)]"
				value={filter}
				onInput={filter => dispatch(setFilter(filter))}
			/>
			<div 
				className={`
					mt-2 text-red-800 font-medium
					${filterError ? 'opacity-100' : 'opacity-0'}
				`}
			>
				Error filtering...
			</div>
		</div>
	);
};
export default Filter;