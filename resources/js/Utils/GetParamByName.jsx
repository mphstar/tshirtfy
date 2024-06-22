const getParamByName = (name) => {
    const query = new URLSearchParams(window.location.search);

    const result = query.get(name);

    return result ?? "";
};
export default getParamByName;
