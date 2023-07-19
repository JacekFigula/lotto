const btnPlayRef = document.querySelector('#playBtn');
const inputRefs=[...document.querySelectorAll('input[id^="digit"]')];

//sprawdzenie czy pola nie są puste
const isAllNotEmpty = (nodes) => nodes.every((node) => node.value.trim() !== '');
//sprawdzenie czy wszystkie są liczbami
const isIntegers=(nodes) => nodes.every((node)=>Number.isInteger(Number(node.value)));

btnPlayRef.addEventListener('click', function(event){
if (isAllNotEmpty(inputRefs)){
    console.log('ok')
} else {
    console.log('cos jest puste')
}
})