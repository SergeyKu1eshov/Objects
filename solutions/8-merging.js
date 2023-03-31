import _ from 'lodash';

// BEGIN
export default function fill (obj1, params, obj2) {
if (params.length > 0) {
        return params.reduce((a, b) => {
            a[b] = obj2[b];
            return a;
        }, obj1);
    } else {
        for (let key in obj2) {
            obj1[key] = obj2[key];
        }
        return obj1;
    }
}
// END