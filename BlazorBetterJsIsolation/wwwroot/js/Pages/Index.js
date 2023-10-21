import { uniqueNamesGenerator as n, colors as t, animals as r } from '../node_modules/unique-names-generator/dist/index.m.js';

const customConfig = {
    dictionaries: [t, r],
    separator: '-',
    length: 2,
};
function shortName() {
    alert(n(customConfig)); //red-donkey
}

export { shortName };
