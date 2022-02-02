// Wait for window to load
document.addEventListener("DOMContentLoaded", function(event){
    
    // Get reference to header object
    let myHeader = document.getElementById("header-id")
    
    
    // Wait for 3 sec, then display header
    setTimeout(()=>{
        myHeader.classList.remove("hidden")
    }, 3000)

})