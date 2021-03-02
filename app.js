const counters = document.querySelectorAll('.counter');

counters.forEach(counter=>{
    counter.innerHTML = 0;
    
    const updateCounter=()=>{
        const startingVal = Number(counter.innerHTML);
        const targetVal = +counter.getAttribute('data-target')
        const incr = targetVal/100;
        
        if(startingVal<targetVal){
            counter.innerHTML = Math.floor(startingVal+incr);
            setTimeout(updateCounter,10)
        }
        else{
            counter.innerHTML = targetVal;
        }
        
    }
    updateCounter();
})