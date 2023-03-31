// BEGIN
export default function pick (object, property) {
    let newobject = {};
    for (let key in object) {
        if (property.includes(key)) {
            newobject[key] = object[key];
        }
    }
    return newobject;
}
// END