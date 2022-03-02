const normalizeURL = (params) => {
    params = params.replace(/ /g,"-");

    return params;
}

const trimParam = () => {

}

export { normalizeURL, trimParam };