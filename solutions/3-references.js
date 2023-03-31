// BEGIN
function is (com1, com2) {
    if (com1.name == com2.name && com1.state == com2.state && com1.website == com2.website) {
        return true;
    } else {
    return false;
    }
}
export default is;
// END
