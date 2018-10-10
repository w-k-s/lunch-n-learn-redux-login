const UPDATE_FORM = 'UPDATE_FORM';
const SUBMIT_FORM = 'SUBMIT_FORM';

export const updateForm = (key, value) => {
	return {
		type: UPDATE_FORM,
		data: {
			[key]: value
		}
	}
}

export const submitForm = () => {
	return {
		type: SUBMIT_FORM
	}
}

const INITIAL_STATE = {
	form:{},
	responseData:null,
	responseError:null,
	submitting: false
}

export const reducer =  (state = INITIAL_STATE, action)=>{
	switch(action.type){
		case UPDATE_FORM:
			return {
				...state,
				form:{
					...state.form,						
					...action.data,
				}
			}
		case SUBMIT_FORM:
			//TODO: Handle using redux-saga
			console.log(state.form);
		default:
			return state;
	}
}
