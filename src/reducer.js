const INITIAL_STATE = {
	form:{},
	responseData:null,
	responseError:null,
	submitting: false
}

export default (state = INITIAL_STATE, action){
	switch(action.type){

		default:
			return INITIAL_STATE;
	}
}