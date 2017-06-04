export default class stringUtils {

    static reverse(str) {
        return str.split('').reverse().join('');
    }

    static empty(str) {
        return str.length === 1 && str.match(/\s$/) !== null;
    }

    static truncate(str, length) {
        return str.substring(0, length).replace(/\s*$/g, '') + '...';
    }

    static anagram(str) {
        let strArray = str.split(''),
            index = strArray.length,
            tmp,
            randomIndex;

        while (index) {
            index -= 1;
            randomIndex = Math.floor(Math.random() * index);

            tmp = strArray[index];
            strArray[index] = strArray[randomIndex];
            strArray[randomIndex] = tmp;
        }

        return strArray.join('');
    }

}
