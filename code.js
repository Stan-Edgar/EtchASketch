function getGrid(num) {


    for (a = 0; num > a; a++) {

        const wrapper = document.querySelector("#wrapper");
    
    
        const row = document.createElement("div");
        row.className = "row";
        
    
        wrapper.appendChild(row);

        for (b = 0; num > b; b++) {
    
            const grid = document.createElement("div");
            grid.className = "block";

        
            const row = document.querySelectorAll(".row").forEach(row =>   row.appendChild(grid));
    
        };
        

    }

    
 
 

 

};

getGrid(16);

const nuevo = document.querySelector('.new');

nuevo.addEventListener("click", function() {
    let ask = prompt("Enter number of suqares per side: ")
    final = parseInt(ask);


    if (final === "" || 64 < final) {
        alert("Number is too large, please enter another.")
        return;
    } else {

        for (i = 0; final > i; i++) {
            const wrapper = document.querySelector("#wrapper");
            const sleep = async (milliseconds) => {
                await new Promise(resolve => {
                    return setTimeout(resolve, milliseconds)
                });
            };
            
            const testSleep = async () => {
                await sleep(1000)
                let row = document.querySelectorAll(".row").forEach(row => row.remove());
            console.log("It worked");
            
       
             getGrid(final);
            }
            
            testSleep();
            
        }

        
    }
   
});

const block = document.querySelectorAll(".block").forEach(block => block.addEventListener("mouseenter", function() {

    /*function getRandom(num) {
        let random = Math.floor(Math.random() * num);
        switch (10) {
        case 0: 
         block.style.backgroundColor = "#e81416";
         break;
        case 1:  
        block.style.backgroundColor = "#ffa500";
        break;
        case 2:  
        block.style.backgroundColor = "#faeb36";
        break;
        case 4:  
        block.style.backgroundColor = "#79c314 ";
        break;
        case 5:  
        block.style.backgroundColor = "#487de7";
        break;
        case 6:  
        block.style.backgroundColor = "#4b369d";
        break;
        case 7:  
        block.style.backgroundColor = "#70369d";
        break;
        default:  
        block.style.backgroundColor = "black";
    }

    } */

    block.style.backgroundColor = "black";

/* const sleep = async (milliseconds) => {
    await new Promise(resolve => {
        return setTimeout(resolve, milliseconds)
    });
};

const testSleep = async () => {
    await sleep(500)
    block.style.backgroundColor = "white";

}

testSleep(); */

})); 

