import { takeLatest } from "@redux-saga/core/effects";
import { tableActions } from "./table/tableSlice";
import { fetchTableItems } from "./table/tableSagas";

export function* sagaWatcher() {
	yield takeLatest(tableActions.fetch().type, fetchTableItems);
}
