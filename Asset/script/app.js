//All the html elements needed
projectHeaderEL = getElementByClassName("project__header");




//remove the border from project__header divs
projectHeaderEL.addEventListener("resize", event=>{
    if(screen.width <= 420+"px")
    {
        projectHeaderEL.style.borderRight = "none";
        projectHeaderEL.style.borderBottom = "3px solid rgba(255, 103, 68, 0.91)";
    }
})