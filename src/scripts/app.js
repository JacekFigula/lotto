const btnPlayRef = document.querySelector('#playBtn');
const inputRefs = [...document.querySelectorAll('input[id^="digit"]')];

//sprawdzenie czy pola nie są puste
const isAllNotEmpty = (nodes) => nodes.every((node) => node.value.trim() !== '');
//sprawdzenie czy wszystkie są liczbami
const isIntegers = (nodes) => nodes.every((node) => Number.isInteger(Number(node.value)));
const convertToIntegers = (nodes) => nodes.map((node) => parseInt(node.value));
const isInRange = (digits) => digits.every((digit) => digit >= 1 && digit <= 49);

const isNotRedundant = (digits) => new Set(digits).size === digits.length


btnPlayRef.addEventListener('click', function (event) {
    if (isAllNotEmpty(inputRefs)) {
        if (isIntegers(inputRefs)) {
            const userDigits = convertToIntegers(inputRefs);
            if (isInRange(userDigits)) {
                if (isNotRedundant(userDigits)) {

                }else {
                    console.log('Liczby Ci się powtarzają ziomeczku')
                }
            } else {
                console.log('są liczby poza zakresem 1-49')
            }
        } else {
            console.log('liczby nie są liczbami')
        }
        // console.log('ok')
    } else {
        console.log('cos jest puste')
    }
})