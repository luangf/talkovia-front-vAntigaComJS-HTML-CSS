/*
    data: email, username, password...
    min / max: characteres permited
    fieldValidationMsgData: html of error message printed to user
    return true or false
*/
export default function validateDataLength(data, min, max, fieldValidationMsgData) {
    const dataTrimed = data.value.trim();
    const isBetweenMinMaxRangeData = dataTrimed.length >= min && dataTrimed.length <= max;
    if (isBetweenMinMaxRangeData) {
        data.classList.remove('invalid');
        fieldValidationMsgData.classList.add('hide');
        return true;
    } else {
        data.classList.add('invalid');
        fieldValidationMsgData.classList.remove('hide');
        return false;
    }
}