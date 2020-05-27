	
var nav = $('nav'),
menu= $('nav h1'),
main =$('main'),
open = false,
hover = false;
		

menu.on('click',function(){
			open = !open ? true:false;
			nav.toggleClass('menu-active');
			main.toggleClass('menu-active');
			nav.removeClass('menu-hover');
			main.removeClass('menu-hover');
			console.log(open);
});


menu.hover(
				function(){
					if(!open){
						nav.addClass('menu-hover');
						main.addClass('menu-hover');
						}
					},function(){
						nav.removeClass('menu-hover');
						main.removeClass('menu-hover');
					}
);



var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var height=[];
var x=30; 
var value=100;

for(i=0;i<35;i++){
    height[i]=value;
    value=value+5;
   
}
height.reverse();

ctx.clearRect(0, 0, 800, 500);
for( i=0;i<35;i++)
{
  ctx.beginPath();
  ctx.rect(x, height[i], 20, 300-height[i]);
  ctx.fillRect(x, height[i], 20, 300-height[i]);
  ctx.fillStyle = "red";
  ctx.fill();
  ctx.stroke();
  x=x+20
}
x=30;




function d(){
  ctx.clearRect(0, 0, 800, 500);
  for( i=0;i<35;i++){
  ctx.beginPath();
  ctx.rect(x, height[i], 20, 300-height[i]);
  ctx.fillRect(x, height[i], 20, 300-height[i]);
  ctx.fillStyle = "steelblue";
  ctx.fill();
  ctx.stroke();
  x=x+20;
  }
  x=30;
}



function drwa1( color1 ,color2){
  ctx.clearRect(0, 0, 800, 500);
  for( i=0;i<35;i++){
  ctx.beginPath();
  ctx.rect(x, height[i], 20, 300-height[i]);
  ctx.fillRect(x, height[i], 20, 300-height[i]);
  if(i==color1 || i== color2) ctx.fillStyle = "blue";
  else ctx.fillStyle = "red";
  //ctx.fillStyle = "red";
  ctx.fill();
  ctx.stroke();
  x=x+20;
  }
  x=30;
}

function drwa2( color1 ,color2){
  ctx.clearRect(0, 0, 800, 500);
  for( i=0;i<35;i++){
  ctx.beginPath();
  ctx.rect(x, height[i], 20, 300-height[i]);
  ctx.fillRect(x, height[i], 20, 300-height[i]);
  if(i==color1 || i== color2) ctx.fillStyle = "green";
  else ctx.fillStyle = "red";
  //ctx.fillStyle = "red";
  ctx.fill();
  ctx.stroke();
  x=x+20;
  }
  x=30;
}

$("#try").on('click',function(){
  exicution=true;
  setTimeout(function(){ 
      exicution=false ;
      shuffle();
  ctx.clearRect(0, 0, 800, 500);

  for( i=0;i<35;i++){
  ctx.beginPath();
  ctx.rect(x, height[i], 20, 300-height[i]);
  ctx.fillRect(x, height[i], 20, 300-height[i]);
  ctx.fillStyle = "red";
  ctx.fill();
  ctx.stroke();
  x=x+20;
  }
  x=30;
    }, 500);
				
	
});

function shuffle(){
   var currentIndex = height.length, temporaryValue, randomIndex;
 
                  // While there remain elements to shuffle...
                  while (0 !== currentIndex) {
 
                    // Pick a remaining element...
                    randomIndex = Math.floor(Math.random() * currentIndex);
                    currentIndex -= 1;
 
                    // And swap it with the current element.
                    temporaryValue = height[currentIndex];
                    height[currentIndex] = height[randomIndex];
                  height[randomIndex] = temporaryValue;
                 }
                 
}
var bsort=false;
var ssort=false;
var isort=false;
var bsortR=false;
var ssortR=false;
var isortR=false;
var steps=0;

$("#sort").on('click',function(){
    exicution=true;

setTimeout(function(){ 
  exicution=false ;
      if(bsort===true){
       bubbleSort();
  }
  else if(ssort===true){
    
       selectionSort(); 
  }
  else if(isort===true){

       insertionSort();
  }
    }, 500);
  
    
});


$("#rev").on('click',function(){
      exicution=true;
      setTimeout(function()
      { 
       exicution=false ;

       if(bsortR===true){
       bubbleSortReverse(); 
       }
        else if(ssortR===true){ 
        selectionSortReverse();
        }
        else if(isortR===true){
        insertionSortReverse();
        }
      }, 500);
  
});

var exicution=false;

$("#bubble").on('click',function(){
  $(".mode").text("bubble Sort");
  bsort=true;
  bsortR=true; 
  ssort=false;
  ssortR=false;
  isortR=false;
  isort=false;
  exicution=true;
  $("#para").html(
      "<p>for (var i = 0; i < len; i++) {</p>"+
      "<p>  for ( var j = 0; j < len; j++) {</p>"+      
      "<p>    if (height[j] < height[j + 1]) {</p>"+
      "<p>    var tmp = height[j];</p>"+
      "<p>    height[j] = height[j + 1];</p>"+
      "<p>    height[j + 1] = tmp;</p>"+
      "<p>    await sleep(speed);</p>"+
      "<p>    }</p>"+
      "<p>  }</p>"+
      "<p> }</p>"+
      "<p>Worst Case Time Complexity : O(n2)</p>"+
      "<p>Best Case Time Complexity : O(n)</p>"+
      "<p>Average Time Complexity : O(n2)</p>"+
      "<p>Space Complexity: O(1)</p>"
  );
      
    
  
});


async function bubbleSort(){

    
    var len = height.length;
    for (var i = 0; i < len; i++) {

        for ( var j = 0; j < len; j++) {
            
            if (height[j] < height[j + 1]) {
                drwa1(j,j+1);
                var tmp = height[j];
                height[j] = height[j + 1];
                height[j + 1] = tmp;
                steps++;
                  
                  await sleep(speed);
                  drwa2(j,j+1);
                  await sleep(speed);
                  if(exicution==true){
                    return;
                    }
              
            }

        }

        
    }

    d();
}



async function bubbleSortReverse(){

    var len = height.length;
    for (var i = 0; i < len; i++) {

        for ( var j = 0; j < len; j++) {
            
            if (height[j] > height[j + 1]) {
                drwa1(j,j+1);
                var tmp = height[j];
                height[j] = height[j + 1];
                height[j + 1] = tmp;
              
                  
                  await sleep(speed);
                  drwa2(j,j+1);
                  await sleep(speed);
                   if(exicution==true){
                    return;
                    }
            }

        }
    }
    d();
}

$("#selection").on('click',function(){
  $(".mode").text("selection Sort");
  ssort=true;
  ssortR=true;
  bsort=false;
  bsortR=false;
  isort=false;
  isortR=false;
  exicution=true;
    $("#para").html(
        "<p> for (var i = 0; i < len; i++) {</p>"+
        "<p>   var min = i</p>"+
        "<p>   for (var j = i + 1; j < len; j++) {</p>"+
        "<p>      if (height[min] < height[j]) {</p>"+
        "<p>        min = j;</p>"+
        "<p>      }</p>"+
        "<p>   }</p>"+
        "<p>  if (min ! == i) {</p>"+
        "<p>  var tmp = height[i];</p>"+
        "<p>  height[i] = height[min];</p>"+
        "<p>  height[min] = tmp;</p>"+
        "<p>  }</p>"+    
        "<p> }</p>"+
        "<p>Worst Case Time Complexity : O(n2)</p>"+
        "<p>Best Case Time Complexity : O(n2)</p>"+
        "<p>Average Time Complexity : O(n2)</p>"+
        "<p>Space Complexity: O(1)</p>"
  );
});
async function selectionSort(){

    var len = height.length;
   

    for (var i = 0; i < len; i++) {
        var min = i;
        
        for (var j = i + 1; j < len; j++) {

            if (height[min] < height[j]) {
                min = j;
                
            }
        }
         if(exicution==true){
                    return;
              }
        if (min !== i) {
            drwa1(min , i);
            var tmp = height[i];
            height[i] = height[min];
            height[min] = tmp;
           
            await sleep(speed);
            drwa2(min ,i);
            await sleep(speed);
        }    
    }
    d();
}

async function selectionSortReverse(){

    var len = height.length;

    for (var i = 0; i < len; i++) {
        var min = i;

        for (var j = i + 1; j < len; j++) {

            if (height[min] > height[j]) {
                min = j;
            }
        }
         if(exicution==true){
                    return;
              }
        if (min !== i) {
            drwa1(min , i);
            var tmp = height[i];
            height[i] = height[min];
            height[min] = tmp;
           
            await sleep(speed);
            drwa2(min ,i);
            await sleep(speed);
            
        }    
    }
    d();
}





$("#insertion").on('click',function(){
$(".mode").text("insertion Sort");
  isort=true;
  isortR=true;
  bsort=false;
  bsortR=false;
  ssort=false;
  ssortR=false;
  exicution=true;
  $("#para").html(
    "<p> for (var i = 1; i < height.length; i++) {</p>"+
    "<p>  var j = i - 1;</p>"+
    "<p>  var temp = height[i];</p>"+
    "<p>  if(j >= 0 && height[j] < temp) {</p>"+
    "<p>    while (j >= 0 && height[j] < temp) {</p>"+
    "<p>      height[j + 1] = height[j];</p>"+
    "<p>      j--;</p>"+
    "<p>    }</p>"+
    "<p>    height[j+1] = temp;</p>"+
    "<p>  }</p>"+ 
    "<p>}</p>"+
    "<p>Worst Case Time Complexity : O(n2)</p>"+
    "<p>Best Case Time Complexity : O(n)</p>"+
    "<p>Average Time Complexity : O(n2)</p>"+
    "<p>Space Complexity: O(1)</p>"
  );

 
});
async function insertionSort()
{
  for (var i = 1; i < height.length; i++)
   {
      var j = i - 1;
      var temp = height[i];
      drwa1(i,-1);
        await sleep(speed);
      if(j >= 0 && height[j] < temp)
      {
        while (j >= 0 && height[j] < temp) 
        {
          height[j + 1] = height[j];
          j--;
        }
        
        height[j+1] = temp;
        
        
         drwa2(j+1,-1);
         await sleep(speed);

      } 
         if(exicution==true){
                    return;
             }
    }
    d();
  
}


async function insertionSortReverse()
{
  for (var i = 1; i < height.length; i++)
   {
      var j = i - 1;
      var temp = height[i];
      drwa1(i,-1);
        await sleep(speed);
      if(j >= 0 && height[j] > temp)
      {
        while (j >= 0 && height[j] > temp) 
        {
          height[j + 1] = height[j];
          j--;
        }
        height[j+1] = temp;
        
        
         drwa2(j,-1);
         await sleep(speed);
         
      } 
        if(exicution==true){
                    return;
                    }

    }
  d();
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}



var but=document.querySelectorAll("button");
$(".btn").on('click',function(){

  for(var i=1; i<but.length ; i++)
  {
    but[i].classList.remove("selected");
  }

  this.classList.add("selected");
});
  

var speed=1000;
$("#speed1").on('click' ,function(){
  speed=1500;
});    


$("#speed2").on('click' ,function(){
  speed=1000;
});

$("#speed3").on('click' ,function(){

  speed=500;
});


 

