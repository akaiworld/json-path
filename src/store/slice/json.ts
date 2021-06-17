import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AnyJSON, JSONPath} from '../../types/json';
import data from './example';

type State = {
	fileError: boolean;
	filterError: boolean;
	filter: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	data: any;
	paths: JSONPath[];
};

const initialState: State = {
	fileError: false,
	filterError: false,
	filter: '$..products[?(@.averageRating>4)]',
	data,
	paths: [],
};

const jsonSlice = createSlice({
	name: 'json',
	initialState,
	reducers: {
		setFileError(state, action: PayloadAction<boolean>): void {
			state.fileError = action.payload;
		},
		setFilterError(state, action: PayloadAction<boolean>): void {
			state.filterError = action.payload;
		},
		setData(state, action: PayloadAction<AnyJSON>): void {
			state.data = action.payload;
		},
		setFilter(state, action: PayloadAction<string>): void {
			state.filter = action.payload;
		},
		setPaths(state, action: PayloadAction<JSONPath[]>): void {
			state.paths = action.payload;
		},
	},
});

export const {
	setFileError,
	setFilterError,
	setData,
	setFilter,
	setPaths,
} = jsonSlice.actions;

export const getFileError = state => state.json.fileError;
export const getFilterError = state => state.json.filterError;
export const getData = state => state.json.data;
export const getFilter = state => state.json.filter;
export const getPaths = state => state.json.paths;

export default jsonSlice.reducer;