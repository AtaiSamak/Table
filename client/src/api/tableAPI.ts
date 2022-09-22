import axios from "axios";

class TableAPI {
	static async fetchData() {
		return axios({
			method: "get",
			url: "http://localhost:8080/api",
		});
	}
}
export default TableAPI;
