var response = {};

response.gotData = {
    status: true,
    errorMessage: "",
    message: "",
    data: {}
}

response.noData =  {
    status: false,
    errorMessage: "No data found",
    message: "",
    data: ""
}

module.exports = response;