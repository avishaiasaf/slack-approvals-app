const axios = require("axios");

const titleizeUserName = (str) => {
    str = str.split(".")[0];
    return `${str[0].toUpperCase()}${str.slice(1)}`;
};

sendPostRequest = async (url, body, headers) => {
    try {
        const response = await axios.post(url, body, {
            headers,
        });
        return response.data;
    } catch (error) {
        return error;
    }
};

module.exports = { titleizeUserName, sendPostRequest };
