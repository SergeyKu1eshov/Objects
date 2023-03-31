import _ from 'lodash';
// BEGIN
export default function cloneShallow (obj) {
    let newobj = _.clone(obj);
    return newobj;
}
// END
