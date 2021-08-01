export const LoginStart = (userCredentials) => ({
	type: "LOGIN_START",
});

export const LoginSuccess = (farmeruser) => ({
	type: "LOGIN_SUCCESS",
	payload: farmeruser,
});

export const LoginFailure = (errorMsg) => ({
	type: "LOGIN_FAILURE",
	
});

export const Logout = () => ({
	type: "LOGOUT",
});

export const UpdateStart = (userCredentials) => ({
	type: "UPDATE_START",
});

export const UpdateSuccess = (farmeruser) => ({
	type: "UPDATE_SUCCESS",
	payload: farmeruser,
});

export const UpdateFailure = () => ({
	type: "UPDATE_FAILURE",
});
