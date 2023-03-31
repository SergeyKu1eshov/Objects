// BEGIN
export default function get (object, keys) {
    let val = object;
    for (let key of keys) {
        val = val[key];
        if(val == undefined) {
            return null;
        }
    }
    return val;
}
// END