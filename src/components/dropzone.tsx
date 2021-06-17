// libs
import * as React from 'react';
import {useState, useRef} from 'react';

const Dropzone: React.FC <{
	className?: string, 
	onFile: (object) => void, 
	children: object | string,
}> = ({
	className = '', 
	onFile, 
	children,
}) => {
	// ref
	const input = useRef();

	// state
	const [dragOver, setDragOver] = useState(false);

	// fns
	const onDrop = e => {
		e.stopPropagation();
		e.preventDefault();
		select(e.dataTransfer.files);
	}
	const select = ([file] : FileList) => {
		onFile(file);
		setDragOver(false);
	}

	return (
		<div 
			className={`
				text-center
				border-2 border-gray-400 border-dashed
				rounded-md
				hover:bg-gray-200
				${dragOver ? 'bg-gray-300' : 'bg-gray-100'}
				cursor-pointer
				${className}
			`}
			onClick={() => (input.current as HTMLInputElement).click()}
			onDragOver={e => e.preventDefault()}
			onDragEnter={() => setDragOver(true)}
			onDragLeave={() => setDragOver(false)}
			onDrop={onDrop}
		>
			<div className="p-4 pointer-events-none">
				{children}
			</div>
			<input type="file" className="hidden"
				ref={input}
				onClick={e => e.stopPropagation()}
				onChange={e => select(e.target.files)}
			/>
		</div>
	);
}

export default Dropzone;