const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(tinyArray);
let resultsAppend = perf.stop();  // Stops timer and save time results



// Try it with second function
perf.start();
doublerInsert(tinyArray);
let resultsInsert = perf.stop();


console.log('Results for the tinyArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);
//Results for the extraLargeArray insert 882.9668 ms append 2.6844 ms (append better)
//Results for the largeArray insert 9.0846 ms append 678.3 μs (insert better)
//Results forResults for the mediumArray insert 194.2 μs append 149.9 μs (append better)
//Results for the smallArray insert 49 μs append 83.1 μs (insert better)
//Results for the tinyArray insert 39.5 μs append 125.1 μs (insert better)


//As the arrays get bigger, it seems that using append is the better option to use for larger arrays.
//Append scales the best. If we look at the information above you can see that insert increases very drastically while append stays near the same.
//The information shows that insert is good for smaller arrays.
//The insert function would therefore be the slower function because it gets slower as the size of the array increases.
//The reason insert is so slow for bigger files is because the positions of each element need to be shifted.
//Shifting involves moving each element to a new location which makes it take so much more time to complete.