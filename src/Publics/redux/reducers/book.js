const initialState = {
	bookList: [],
	isLoading: false,
	isFulfilled: false,
	isRejected: false,
	jumlah : 0
};

const book = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_BOOK_PENDING':
			return {
				...state,
				isLoading: true,
				isFulfilled: false,
				isRejected: false
			};
		case 'GET_BOOK_REJECTED':
			return {
				...state,
				isLoading: false,
				isRejected: true
			};
		case 'GET_BOOK_FULFILLED':
			return {
				...state,
				isLoading: false,
				isFulfilled: true,
				bookList: action.payload.data.result,
				jumlah : action.payload.data.jumlah
			};
		case 'GET_BOOK_ID_PENDING':
			return {
				...state,
				isLoading: true,
				isFulfilled: false,
				isRejected: false
			};
		case 'GET_BOOK_ID_REJECTED':
			return {
				...state,
				isLoading: false,
				isRejected: true
			};
		case 'GET_BOOK_ID_FULFILLED':
			return {
				...state,
				isLoading: false,
				isFulfilled: true,
				bookList: action.payload.data.result
			};
		case 'POST_BOOK_PENDING':
			return {
				...state,
				isLoading: true,
				isFulfilled: false,
				isRejected: false
			};
		case 'POST_BOOK_REJECTED':
			return {
				...state,
				isLoading: false,
				isRejected: true
			};
		case 'POST_BOOK_FULFILLED':
			state.bookList.push(action.payload.data.result);
			return {
				...state,
				isLoading: false,
				isFulfilled: true,
				// bookList: [ state.bookList, action.payload.data[0] ]
			};
		case 'EDIT_BOOK_PENDING':
			return {
				...state,
				isLoading: true,
				isFulfilled: false,
				isRejected: false
			};
		case 'EDIT_BOOK_REJECTED':
			return {
				...state,
				isLoading: false,
				isRejected: true
			};
		case 'EDIT_BOOK_FULFILLED':
			// let res = state.bookList.find((item)=> Number(item.idBook) === Number(action.payload.data.result.idBook))
			// state.bookList[state.bookList.indexOf(res)]=action.payload.data.result
			return {
				...state,
				isLoading: false,
				isFulfilled: true,
				bookList: [ state.bookList, action.payload.data[0] ]
			};
		case 'DELETE_BOOK_PENDING':
			return {
				...state,
				isLoading: true,
				isFulfilled: false,
				isRejected: false
			};
		case 'DELETE_BOOK_REJECTED':
			return {
				...state,
				isLoading: false,
				isRejected: true
			};
		case 'DELETE_BOOK_FULFILLED':
			state.bookList.filter((item)=> item.idBook === action.payload.data.result);
			return {
				...state,
				isLoading: false,
				isFulfilled: true,
				// bookList: [ state.bookList, action.payload.data[0] ]
			};		
		default:
			return state;
	}
};

export default book;
