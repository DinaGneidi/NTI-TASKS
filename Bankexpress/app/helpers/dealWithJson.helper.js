const fs = require("fs")

class DealWithJson {
    static readDataFromJSON = () => {
        let data
        try {
            data = JSON.parse(fs.readFileSync('app/model/customer.json'))
            if (!Array.isArray(data)) throw new Error()
        } catch (e) {
            data = []
        }
        return data

    }
    static writeDataToJsON = (data) => {
        fs.writeFileSync('app/model/customer.json', JSON.stringify(data))
    }
}
module.exports = DealWithJson