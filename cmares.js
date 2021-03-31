const got = require('got');
const fs = require('fs');
async function cmares(callback) {
    try {
        const response = await got('http://www.examicmai.org/RIF-BCMM-D19/');
        const data = response.body
            if(data.includes("Intermediate")){
                callback(true)
            }
            if(data.includes("Int")){
                callback(true)
            }
            if(data.includes("intermediate")){
                callback(true)
            }
            else{
                callback(false)
            }
        //=> '<!doctype html> ...'
    } catch (error) {
        console.log(error.response.body);
        console.log(`catch`)
        return false
        //=> 'Internal server error ...'
    }
}


module.exports = cmares;