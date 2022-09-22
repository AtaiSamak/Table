import { put, call } from "redux-saga/effects";
import TableAPI from "../../api/tableAPI";
import { tableActions } from "./tableSlice";
import { AxiosResponse } from "axios";

export function* fetchTableItems() {
	try {
		const response: AxiosResponse = yield call(TableAPI.fetchData);
		yield put(tableActions.success({ items: response.data }));
	} catch (error) {
		yield put(tableActions.failure({ error }));
	}
}
