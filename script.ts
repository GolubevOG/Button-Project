function main(): void{
    console.clear();
    console.log('Yes');
    let my_footer = document.querySelector('.data');
    console.log(my_footer);
    my_footer.textContent = 'Count: ' + String(testNumber);
    testNumber += 1;
    // my_footer.setAttribute(class, 'test_bg_green')
    // localStorage.setItem('test', '1');
    let testWord = localStorage.getItem('test');
    localStorage.setItem('test', String(Number(testWord) + 1));
    console.log(testWord);
    
    
}

function pressBtn(n:number):void { 
    console.log('hello', n);
}

let testNumber: number = 0;
// console.log(pressBtn(testNumber));
