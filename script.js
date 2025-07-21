var gridRow = 4;
const colours = [
    "Red",
    "Green",
    "Blue",
    "Yellow",
    "Orange",
    "Purple",
    "Pink",
    "Brown",
    "Gray",
    "Turquoise"
];

const containerDivEle = document.querySelector(".containerDiv");
const sizeButtonEle = document.querySelector(".size-button");
const resetButtonEle = document.querySelector(".reset-button");


function createGrid(size)
{
    containerDivEle.innerHTML = '';

    for(var j=0; j < size; j++)
    {
        var newDiv = document.createElement("div");
        newDiv.setAttribute("class", "newDiv");
        for(var i=0; i < size; i++)
        {
            var div = document.createElement("div");
            div.setAttribute("class", "gridDiv")
        
            div.addEventListener("mouseenter", function() {
                var opacity = parseFloat(this.style.opacity) || 1;
                this.style.backgroundColor = colours[Math.floor(Math.random() * 10)];
                this.style.opacity = opacity - 0.1;
            });
        
            newDiv.appendChild(div);
        }
        containerDivEle.appendChild(newDiv);
    }    
    
}

createGrid(gridRow);

sizeButtonEle.addEventListener("click", function ()
{
    gridRow = prompt("Enter Number of Rows/Columns","16");

    if(gridRow !== null)
    {
        gridRow = parseInt(gridRow);
        if(gridRow !== NaN && gridRow > 0)
        {
            createGrid(gridRow);
        }
        else
        {
            alert("Enter a valid number !!");
        }
    }
});

resetButtonEle.addEventListener("click", function ()
{
    createGrid(gridRow);
});