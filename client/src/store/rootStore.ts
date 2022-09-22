import { configureStore } from "@reduxjs/toolkit";
import { create } from "domain";
import createSagaMiddleware from "@redux-saga/core";
import TableReducer from "./table/tableSlice";
import { sagaWatcher } from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
	reducer: {
		table: TableReducer,
	},
	middleware: [sagaMiddleware],
});

sagaMiddleware.run(sagaWatcher);

export default store;
