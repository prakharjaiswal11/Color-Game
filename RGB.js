var numsquares=6;
var squares=document.querySelectorAll(".square");
var color=generateRandomColors(6);
var colorHeading=document.querySelector("#e");
var pickedColor=pickColor();
var resultDisplay=document.getElementById("d");
var newColors=document.getElementById("b");
var easy=document.getElementById("a");
var hard=document.getElementById("c");
var changeBackgroud=document.querySelector(".jumbotron");


colorHeading.textContent = pickedColor;


for(var i=0;i<squares.length;i++)
{
    squares[i].style.background=color[i];
    squares[i].addEventListener("click",function(){
    var clickedColor=this.style.backgroundColor;
    if(clickedColor===pickedColor)
    {
    	resultDisplay.textContent="CORRECT!!!";
    	changeColors(clickedColor);
    	newColors.textContent="PLAY AGAIN!";
    	changeBackgroud.style.backgroundColor=clickedColor;
    }
    else
    {
    	this.style.backgroundColor = "#232323";
    	resultDisplay.textContent="TRY AGAIN?";
    }
})
}


function pickColor()
{
	var random=Math.floor(Math.random()*color.length);
	return color[random];
}


function generateRandomColors(num)
{
	var arr=[];
	for(var i=0;i<num;i++)
	{
        arr.push(RandomColors())
	}
    return arr;
}


function RandomColors(num)
{
	r=Math.floor(Math.random()*256);
	g=Math.floor(Math.random()*256);
	b=Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";
}


function changeColors(color)
{
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=color;
	}
}


newColors.addEventListener("click",function(){
	color=generateRandomColors(numsquares);
    pickedColor=pickColor();
    resultDisplay.textContent="Yo!!!";
    newColors.textContent="NEW COLORS";
    colorHeading.textContent=pickedColor;
    for(var i=0;i<squares.length;i++)
    {
    	squares[i].style.background=color[i];
    }
    changeBackgroud.style.backgroundColor="#3387CE";
})


easy.addEventListener("click",function(){
	easy.classList.add("selected");
	hard.classList.remove("selected");
	numsquares=3;
    color=generateRandomColors(numsquares);
    pickedColor=pickColor();
    colorHeading.textContent=pickedColor;
    for(var i=0;i<squares.length;i++)
    {
    	if(color[i])
    	{
    		squares[i].style.background=color[i];
    	}
    	else
    	{
            squares[i].style.display="none";
    	}
    }
    
})


hard.addEventListener("click",function(){
	hard.classList.add("selected");
	easy.classList.remove("selected");
	numsquares=6;
    generateRandomColors(numsquares);
    color=generateRandomColors(numsquares);
    pickedColor=pickColor();
    colorHeading.textContent=pickedColor;
    for(var i=0;i<squares.length;i++)
    {
    		squares[i].style.background=color[i]
            squares[i].style.display="block";
    }
})













