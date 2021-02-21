exports.exportsValue = async(objList, key) => {
    let result = ''
    try{
        result = objList.map(obj => obj[key])
    } catch(e) {
        result = false
    }
    return result
}