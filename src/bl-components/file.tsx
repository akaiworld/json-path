// libs
import * as React from 'react';
import {useState, useEffect} from 'react';

// components
import Dropzone from '../components/dropzone';

// hooks
import useLoadData from '../hooks/use-load-data';

const Filter: React.FC <{
	className?: string,
}> = ({
	className = '',
}) => {
	// state
	const [overlayVisible, setOverlayVisible] = useState(false);

	// hooks
	const [loadData, isLoading] = useLoadData();

	// effects
	useEffect(() => setOverlayVisible(isLoading),[isLoading]);
	
	return (
		<div className={className}>
			<Dropzone
				onFile={loadData}
			>
				<div className="font-medium">
					Drop a JSON file here
				</div>
			</Dropzone>
			{isLoading && (
				<div 
					className={`
						absolute inset-0 
						flex items-center justify-center 
						text-white text-xl 
						bg-gray-700 
						${overlayVisible ? 'opacity-100' : 'opacity-0'}
						transition-opacity
					`}
				>
					Loading data...
				</div>
			)}
		</div>
	);
};
export default Filter;