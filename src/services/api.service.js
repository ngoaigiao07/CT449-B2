import axios from "axios";
//improt
const commonConfig = {
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        },
};

export default (baseURL) => {
    return axios.create({
    baseURL,
    ...commonConfig,
    });
};