function test() {
    console.log('one');
    setTimeout(function() {
        console.log('two');
        setTimeout(function() {
            console.log('three');
        }, 0);
    }, 1000);
    setTimeout(function() {
        console.log('four');
        setTimeout(function() { 
            console.log('five');
        }, 1000);c
    }, 0);
    console.log('six');
}
test();


/* no not the same and the reason why is that the asyncronus call back will execute as soon as the callstack is empty and that will be different everytimes */