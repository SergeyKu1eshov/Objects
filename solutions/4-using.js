// BEGIN
export default function getDomainInfo(dom) {
    let domain = {
        name: dom.slice(0),
        scheme: ' '
    };
    if (dom.startsWith('https')){
        domain.scheme = 'https';
        domain.name = dom.slice(8);
    } else if (dom.startsWith('http')){
        domain.scheme = 'http';
        domain.name = dom.slice(7);
    } else {
        domain.scheme = 'http';
        domain.name = dom;
    }
    return domain;
}
// END