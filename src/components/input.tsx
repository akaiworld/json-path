// libs
import * as React from 'react';

const Input: React.FC <{
	placeholder?: string,
	value: string,
	onInput: (string) => void,
}> = ({
	placeholder,
	value, 
	onInput,
}) => {
	return (
		<input type="text"
			className="block px-2 w-full border h-10"
			placeholder={placeholder}
			value={value}
			onInput={e => onInput(((e.target as HTMLTextAreaElement)).value)}
		/>
	);
};
export default Input;