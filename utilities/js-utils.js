const titleizeUserName = (str) => {
    str = str.split(".")[0];
    return `${str[0].toUpperCase()}${str.slice(1)}`;
};

module.exports = { titleizeUserName };
