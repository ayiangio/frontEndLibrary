const initialState = {
	borrowList: [],
	isLoading: false,
	isFulfilled: false,
	isRejected: false
};

const borrow = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_BORROW_PENDING':
			return {
				...state,
				isLoading: true,
				isFulfilled: false,
				isRejected: false
			};
		case 'GET_BORROW_REJECTED':
			return {
				...state,
				isLoading: false,
				isRejected: true
			};
		case 'GET_BORROW_FULFILLED':
			return {
				...state,
				isLoading: false,
				isFulfilled: true,
				borrowList: action.payload.data.result
			};
		case 'POST_BORROW_PENDING':
			return {
				...state,
				isLoading: true,
				isFulfilled: false,
				isRejected: false
			};
		case 'POST_BORROW_REJECTED':
			return {
				...state,
				isLoading: false,
				isRejected: true
			};
		case 'POST_BORROW_FULFILLED':
			state.borrowList.push(action.payload.data.result);
			return {
				...state,
				isLoading: false,
				isFulfilled: true,
				// borrowList: [state.borrowList, action.payload.data[0]]
			};
		case 'UPDATE_BORROW_PENDING':
			return {
				...state,
				isLoading: true,
				isFulfilled: false,
				isRejected: false
			};
		case 'UPDATE_BORROW_REJECTED':
			return {
				...state,
				isLoading: false,
				isRejected: true
			};
		case 'UPDATE_BORROW_FULFILLED':
			return {
				...state,
				isLoading: false,
				isFulfilled: true,
				borrowList: [state.borrowList, action.payload.data[0]]
			};
		case 'GET_LIST_BORROW_PENDING':
			return {
				...state,
				isLoading: true,
				isFulfilled: false,
				isRejected: false
			};
		case 'GET_LIST_BORROW_REJECTED':
			return {
				...state,
				isLoading: false,
				isRejected: true
			};
		case 'GET_LIST_BORROW_FULFILLED':
			return {
				...state,
				isLoading: false,
				isFulfilled: true,
				borrowList: action.payload.data.result
			};

		case 'GET_ALL_BORROW_PENDING':
			return {
				...state,
				isLoading: true,
				isFulfilled: false,
				isRejected: false
			};
		case 'GET_ALL_BORROW_REJECTED':
			return {
				...state,
				isLoading: false,
				isRejected: true
			};
		case 'GET_ALL_BORROW_FULFILLED':
			return {
				...state,
				isLoading: false,
				isFulfilled: true,
				borrowList: action.payload.data.result
			};
		default:
			return state;
	}
};

export default borrow;

