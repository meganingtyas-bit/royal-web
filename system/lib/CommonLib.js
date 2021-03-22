import Config from '../../config/config'
class CommonLib {
    isJson(str) {
        try {
            JSON.parse(str);
        } catch (e) {
            return false;
        }
        return true;
    }

    objectJoin(obj, setJoin = ', ') {
        let arr = Object.keys(obj).map(item => obj[item]);
        let string = arr.join(`${setJoin}`);
        return string
    }

    objectIsEmpty(obj) {
        if (Object.keys(obj).length > 0) {
            return false
        }
        return true
    }



}

export default new CommonLib()