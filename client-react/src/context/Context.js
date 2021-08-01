import { createContext, useEffect, useReducer } from "react";
import Reducer from "./Reducer";

const INITIAL_STATE = {
	farmeruser: JSON.parse(localStorage.getItem("farmeruser")) || null,
	isFetching: false,
	error: false,
};

export const Context = createContext(INITIAL_STATE);

export const ContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

	useEffect(() => {
		localStorage.setItem("farmeruser", JSON.stringify(state.farmeruser));
	}, [state.farmeruser]);

	return (
		<Context.Provider
			value={{
				farmeruser: state.farmeruser,
				isFetching: state.isFetching,
				error: state.error,
				dispatch,
			}}
		>
			{children}
		</Context.Provider>
	);
};
