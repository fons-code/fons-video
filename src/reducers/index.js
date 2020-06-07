const reducer = (state, action) => {
	switch (action.type) {
		case 'DELETE_FAVORITE':
			return {
				...state,
				myList: state.myList.filter((item) => item.id !== action.payload),
			};
		case 'SET_FAVORITE':
			return {
				...state,
				myList: [...state.myList, action.payload],
			};
		default:
			return state;
	}
};

export default reducer;