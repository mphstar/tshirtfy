const AddParamUrl = (param, value) => {
    const url = new URL(window.location.href);
    url.searchParams.set(param, value);

    return url;
};

export default AddParamUrl;