function main() {
    console.clear();
    console.log('Yes');
    var my_footer = document.querySelector('.data');
    console.log(my_footer);
    my_footer.textContent = 'Count: ' + String(testNumber);
    testNumber += 1;
    // my_footer.setAttribute(class, 'test_bg_green')
    // localStorage.setItem('test', '1');
    var testWord = localStorage.getItem('test');
    localStorage.setItem('test', String(Number(testWord) + 1));
    console.log(testWord);
}
function pressBtn(n) {
    console.log('hello', n);
}
var testNumber = 0;
// console.log(pressBtn(testNumber));
