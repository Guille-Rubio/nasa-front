function sortNameArrayAscendent(x, y) {
    if (x.name < y.name) { return -1; }
    if (x.name > y.name) { return 1; }
    return 0;
}

function sortMassArrayAscendent(x, y) {
    if (parseInt(x.mass) < parseInt(y.mass)) { return -1; }
    if (parseInt(x.mass) > parseInt(y.mass)) { return 1; }
    return 0;
}

function sortDateArrayAscendent(x, y) {
    if (new Date(x.year) < new Date(y.year)) { return -1; }
    if (new Date(x.year) > new Date(y.year)) { return 1; }
    return 0;
}

function sortNameArrayDescendent(x, y) {
    if (x.name > y.name) { return -1; }
    if (x.name < y.name) { return 1; }
    return 0;
}

function sortMassArrayDescendent(x, y) {
    if (parseInt(x.mass) > parseInt(y.mass)) { return -1; }
    if (parseInt(x.mass) < parseInt(y.mass)) { return 1; }
    return 0;
}

function sortDateArrayDescendent(x, y) {
    if (new Date(x.year) > new Date(y.year)) { return -1; }
    if (new Date(x.year) < new Date(y.year)) { return 1; }
    return 0;
}




export {
    sortNameArrayAscendent,
    sortMassArrayAscendent,
    sortDateArrayAscendent,
    sortNameArrayDescendent,
    sortMassArrayDescendent,
    sortDateArrayDescendent
};
