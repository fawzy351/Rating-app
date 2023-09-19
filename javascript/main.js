let lis = document.querySelectorAll('ul li');
let button = document.querySelector('button');
let rate = document.querySelector('.rate');
let thank = document.querySelector('.thank');
let yourRate = document.querySelector('.your-rate')

lis.forEach(function(e,no,list){
    e.onclick = function(){
        // remove checked class from lis 
        lis.forEach(e => {
            e.classList.remove('checked');
        })
        // add class to active one 
        this.classList.add('checked')
    }
})
button.onclick = function(){
    // move boxes 
    rate.style.left = 'calc(-100% - 20px)'
    thank.style.left = 'calc(-100% - 20px)'
    // get data 
    let checkEle = 0;
    lis.forEach(element => {
        if(element.classList.contains('checked')){
            checkEle = element.innerHTML
        }
    });
    yourRate.innerHTML = `Your rate is ${checkEle} out of 5`

}