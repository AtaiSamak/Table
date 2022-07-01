import axios from "axios";

const getData = async ({ setError, setData }) => {
    await axios({
        method: "get",
        url: "http://localhost:8080/api",
    })
        .then((response) => {
            setData(response.data);
        })
        .catch((error) => {
            console.error(error);
            setError(true);
        });
};

export default getData;
