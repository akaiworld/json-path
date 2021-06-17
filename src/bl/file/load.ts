const loadFile = (file: File) => {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();

		const onError = () => {
			reader.abort();
			reject(reader.error?.message);
		}

		reader.onload = () => {
			if(typeof reader.result === 'string'){
				try {
					resolve(JSON.parse(reader.result));
				} catch (e) {
					onError();
				}
			}else{
				onError();
			}
		}

		reader.onerror = onError;

		reader.readAsText(file);
	});
}
export default loadFile;