function main() {
    console.clear();
    console.log('Yes');
    var my_footer = document.querySelector('.footer');
    console.log(my_footer);
    my_footer.textContent = 'Count: ' + String(testNumber);
    testNumber += 1;
    // my_footer.setAttribute(class, 'test_bg_green')
}
function pressBtn(n) {
    console.log('hello', n);
}
var testNumber = 0;
// console.log(pressBtn(testNumber));
