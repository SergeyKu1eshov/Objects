// BEGIN
export default function getSortedNames (names) {
    let newnames = [];
    for (let key in names) {
        const {name} = names[key];
        newnames.push(name);
    }
    return newnames.sort();
}
// END