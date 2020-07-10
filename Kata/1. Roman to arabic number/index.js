export default function(romanString) {
    const vocabular = {
        i: 1,
        v: 5,
        x: 10,
        l: 50,
        c: 100,
        d: 500,
        m: 1000
    };
    const repeats = [1,10,100,1000];
    const noRepeats = [5,50,500];
    const notValid = 'Not valid number';
    let arabicArray = [];
    let isValid = true;


    const sum = romanString.toLowerCase().split('')
        .reduce((acc, cur, index, array )=> {
            const curValue = vocabular[cur],
                prevValue = index > 0 ? vocabular[array[index-1]] : 0,
                nextValue = index + 1 < array.length ? vocabular[array[index+1]] : false,
                oneMoreNextValue = index + 2 < array.length ? vocabular[array[index+2]] : false

            if (!(cur && curValue)) {
                isValid = false;
            }
            else if (nextValue && curValue < nextValue
                && (curValue <= prevValue)) isValid = false;
            else if (noRepeats.find((a)=> a === curValue)
                && curValue === nextValue ) isValid = false;
            else if ( nextValue && oneMoreNextValue && curValue === prevValue
                && curValue === nextValue && curValue === oneMoreNextValue) isValid = false;
            else {
                if (curValue < nextValue) return acc-curValue;
                return acc+curValue;
            }
        }, 0);

    return isValid ? sum : notValid;
}
