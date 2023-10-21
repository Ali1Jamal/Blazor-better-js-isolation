import { uniqueNamesGenerator, Config, colors, animals } from 'unique-names-generator';

const customConfig: Config = {
    dictionaries: [colors,animals],
    separator: '-',
    length: 2,
};

export function shortName() {
    alert(uniqueNamesGenerator(customConfig)); //red-donkey

}