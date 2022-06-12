function main(): void{
    console.clear();
    console.log('Yes');
    let my_footer = document.querySelector('.footer');
    console.log(my_footer);
    my_footer.textContent = 'Count: ' + String(testNumber);
    testNumber += 1;
    // my_footer.setAttribute(class, 'test_bg_green')
    
}

function pressBtn(n:number):void { 
    console.log('hello', n);
}

let testNumber: number = 0;
// console.log(pressBtn(testNumber));
