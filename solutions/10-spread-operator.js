// BEGIN
export default function make (company, params) {
    let obj1 = params;
    let obj2 = {
        name: company,
        state: 'moderating',
        createdAt: Date.now()
    };
    let result = {
        ...obj2,
        ...obj1
    }
    return result;
}
// END