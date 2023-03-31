import _ from 'lodash';

// BEGIN
 export default function countWords (str) {
    if (str != "")
        return _.words(str).map(el => el.toLowerCase()).reduce((a, b) => {
            b in a ? a[b]++ : a[b] = 1;
            return a;
        }, {});
        return {};
        }
// END