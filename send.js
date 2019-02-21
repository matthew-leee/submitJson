const data = require("./data")
const Axios = require("axios")
const link = "http://career.wemine.hk/cv-submit"

const res = async () => {
    return await Axios(link, {
        method: "post",
        data: JSON.stringify(data)
    })
}

res().then(data=>console.log(data))