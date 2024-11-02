function getGrid(num) {


    for (a = 0; num > a; a++) {

        const wrapper = document.querySelector("#wrapper");
    
    
        const row = document.createElement("div");
        row.className = "row";
        
    
        wrapper.appendChild(row);

        for (b = 0; num > b; b++) {

            let size = (450 / num) - 2;
            
            
            const grid = document.createElement("div");
            grid.className = "block";
            grid.style.cssText = "border: 1px solid lightblue; display: flex;";
            grid.style.width = `${size}px`;
            grid.style.height = `${size}px`;

        
            const row = document.querySelectorAll(".row").forEach(row =>   row.appendChild(grid));
    
        };
        
    } 

    const block = document.querySelectorAll(".block").forEach(block => block.addEventListener("mouseenter", function(e) {

        setTimeout(function() {
            e.target.style.background = "black";
        }, 500)
        
    
    })); 
    

};

getGrid(16);

const nuevo = document.querySelector('.new');

nuevo.addEventListener("click", function() {
    let ask = prompt("Enter number of suqares per side: ")


    if (ask === "" || 64 < ask) {
        alert("Number is too large, please enter another.")
        return;
    } else {

        for (i = 0; ask > i; i++) {
            
            let row = document.querySelectorAll(".row").forEach(row => row.remove());
            getGrid(ask);
            
           
            
        }

        
    } 
   
}
);


