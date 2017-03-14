   var speed = 4; 
   var sysspeed = 4;                
   var paddle_x;
   var paddle_y;
   var ball;
   var design;
   var point;              
   var dx, dy; 
   var ballX, ballY;
   var playerY;               
   var system; 
   var call_loop;
   var direction = 0.8;              
   var time_secs;
   var ticker;
   
   window.onload = initial;
               
function startTimer(secs){
time_secs = parseInt(secs)-1;
ticker = setInterval("tick()",1000);   // every second
}

function tick() {
var secs = time_secs;
if (secs>0) {
time_secs--;
}
else {
//alert('timeout')
clearInterval(ticker); 
}
document.getElementById("countdown").innerHTML = secs;
}

  // 60 seconds 
 
function initial()
{ 
      
   paddle_x = document.getElementById('paddle1');
   paddle_y = document.getElementById('paddle2');
   
   ball = document.getElementById('ball');
   design = document.getElementById('design');

   ballX = (design.offsetWidth / 2) - (ball.offsetWidth / 2);
   ballY = (design.offsetHeight / 2) - (ball.offsetHeight / 2);
   
  
  // balla= (design.offsetWidth / 4) - (ball.offsetWidth / 4);
   system = (design.offsetHeight / 2) - (paddle_y.offsetHeight / 2);
   playerY = (design.offsetHeight / 2) - (paddle_x.offsetHeight / 2);
   //ballX = Math.floor(Math.random()*ballX);
   ballY = Math.floor(Math.random()*ballY);
   var lev=window.document.getElementById("sel_level").value;
   if (lev=='Level1') {
      speed = 4;
   }
   else if (lev=='Level2') {
      speed = 4.5;
   }
   else if (lev=='Level3') {
      speed = 5;
   }
   else if (lev=='Level4') {
      speed = 5.5;
   }
   else if (lev=='Level5') {
      speed = 6;     
   }
    dx = dy = speed;
   paddle_x.style.left = 2 + 'px';
   paddle_y.style.top = playerY + 'px';  
   paddle_y.style.left = design.offsetWidth - (10 + paddle_y.offsetWidth) + 'px';  
   paddle_x.style.top = Math.floor(Math.random()*system) + 'px';
   ball.style.left = ballX + 'px';
   ball.style.top = ballY + 'px';
}

function onloading()
{
    //dx=dy=speed;
   var val = window.document.getElementById("btnmove").value;
   design.onmousemove = movearrow;
   call_loop = setInterval(functionality, 10);
   var lev=window.document.getElementById("sel_level").value;
   if (lev=='Level1') {
        point=setInterval(startTimer(60),10);  
   }
   else if (lev=='Level2') {
     point=setInterval(startTimer(80),10);  
   }
   else if (lev=='Level3') {
      point=setInterval(startTimer(100),10); 
   }
   else if (lev=='Level4') {
      point=setInterval(startTimer(120),10); 
   }
   else if (lev=='Level5') {
      point=setInterval(startTimer(150),10); 
   }
 
}
function functionality()
{
   var lev=window.document.getElementById("sel_level").value;
  
   if (lev=='Level1') {
      sysspeed = 4;
      ballX +=dx;
      ballY += dy;   
   if(ballX < 0)
   {
      clearInterval(call_loop);
      clearInterval(ticker);
      initial();
      design.onmousemove = '';
      alert("You Loose!");
   }
 var count=document.getElementById("countdown").innerHTML;;
 //alert(a);
   if(((ballX + ball.offsetWidth) > design.offsetWidth)||count==0)
   {
      clearInterval(call_loop);
      initial();
      design.onmousemove = '';   
      alert("Congrats!You Won Level1!!");
      alert('Level2');
      document.getElementById("paddle1").style.height="100px";
      document.getElementById("paddle2").style.height="100px";
      document.getElementById("countdown").innerHTML = 80;
      design.onmousemove = movearrow;
      call_loop = setInterval(functionality2, 10);
      point=setInterval(startTimer(80),10); 
     }
      
   
   
   if(ballY < 0 || ((ballY + ball.offsetHeight) > design.offsetHeight)) 
         dy=-dy;  
   
   if((ballX + ball.offsetWidth) > paddle_y.offsetLeft)   
      if(((ballY + ball.offsetHeight) > system) && ballY < (system + paddle_y.offsetHeight))   
      dx=-dx;  
          
   if(ballX < (paddle_x.offsetLeft + paddle_x.offsetWidth))
   {
      if(((ballY + ball.offsetHeight) > playerY) && ballY < (playerY + paddle_x.offsetHeight))         
         dx=-dx;        
   }
   ball.style.left = dx + 'px';
   ball.style.top = dy + 'px';
   ball.style.top = ballY + 'px';
   ball.style.left = ballX + 'px';

   if(dx > 0)
   {
      if((system + (paddle_y.offsetHeight)) > (ballY + ball.offsetHeight))
      system -= sysspeed;
      else
      system += sysspeed;
      if (system>0) {
      paddle_y.style.top = system + 'px';}
   }  
   }
   
   
  if (lev=='Level2') {
      sysspeed = 5;
      ballX +=dx;
      ballY += dy;   
   if(ballX < 0)
   {
      clearInterval(call_loop);
      clearInterval(ticker);
      initial();
      design.onmousemove = '';
      alert("You Loose!");
   }
   var count=document.getElementById("countdown").innerHTML;;
   if(((ballX + ball.offsetWidth) > design.offsetWidth)||count==0)
   {
      clearInterval(call_loop);
      clearInterval(ticker);      
      initial();
      design.onmousemove = '';
      alert("Congrats!You Won Level2!!");
   }
   
   if(ballY < 0 || ((ballY + ball.offsetHeight) > design.offsetHeight)) 
         dy=-dy;  
   
   if((ballX + ball.offsetWidth) > paddle_y.offsetLeft)   
      if(((ballY + ball.offsetHeight) > system) && ballY < (system + paddle_y.offsetHeight))   
      dx=-dx;  
          
   if(ballX < (paddle_x.offsetLeft + paddle_x.offsetWidth))
   {
      if(((ballY + ball.offsetHeight) > playerY) && ballY < (playerY + paddle_x.offsetHeight))         
         dx=-dx;        
   }
   ball.style.left = dx + 'px';
   ball.style.top = dy + 'px';
   ball.style.top = ballY + 'px';
   ball.style.left = ballX + 'px';

   if(dx > 0)
   {
      if((system + (paddle_y.offsetHeight)) > (ballY + ball.offsetHeight))
      system -= sysspeed;
      else
      system += sysspeed;
      if (system>0) {
      paddle_y.style.top = system + 'px';}
   }  
   }
   
   
   
   if (lev=='Level3') {
      sysspeed = 6;
      ballX +=dx;
      ballY += dy;   
   if(ballX < 0)
   {
      clearInterval(call_loop);
      clearInterval(ticker);
      initial();
      design.onmousemove = '';
      alert("You Loose!");
   }

   var count=document.getElementById("countdown").innerHTML;;
   if(((ballX + ball.offsetWidth) > design.offsetWidth)||count==0)
   {
      clearInterval(call_loop);
      initial();
      design.onmousemove = '';
      alert("Congrats!You Won Level3!!");
   }
   
   if(ballY < 0 || ((ballY + ball.offsetHeight) > design.offsetHeight)) 
         dy=-dy;  
   
   if((ballX + ball.offsetWidth) > paddle_y.offsetLeft)   
      if(((ballY + ball.offsetHeight) > system) && ballY < (system + paddle_y.offsetHeight))   
      dx=-dx;  
          
   if(ballX < (paddle_x.offsetLeft + paddle_x.offsetWidth))
   {
      if(((ballY + ball.offsetHeight) > playerY) && ballY < (playerY + paddle_x.offsetHeight))         
         dx=-dx;        
   }
   ball.style.left = dx + 'px';
   ball.style.top = dy + 'px';
   ball.style.top = ballY + 'px';
   ball.style.left = ballX + 'px';

   if(dx > 0)
   {
      if((system + (paddle_y.offsetHeight)) > (ballY + ball.offsetHeight))
      system -= sysspeed;
      else
      system += sysspeed;
      if (system>0) {
      paddle_y.style.top = system + 'px';}
   }  
   }
   
    
   if (lev=='Level4') {
    sysspeed = 7;
       ballX +=dx;
       ballY += dy;   
   if(ballX < 0)
   {
      clearInterval(call_loop);
      clearInterval(ticker);
      initial();
      design.onmousemove = '';
      alert("You Loose!");
   }

   var count=document.getElementById("countdown").innerHTML;;
   if(((ballX + ball.offsetWidth) > design.offsetWidth)||count==0)
   {
      clearInterval(call_loop);
      initial();
      design.onmousemove = '';
      alert("Congrats!You Won Level4!!");
   }
   
   if(ballY < 0 || ((ballY + ball.offsetHeight) > design.offsetHeight)) 
         dy=-dy;  
   
   if((ballX + ball.offsetWidth) > paddle_y.offsetLeft)   
      if(((ballY + ball.offsetHeight) > system) && ballY < (system + paddle_y.offsetHeight))   
      dx=-dx;  
          
   if(ballX < (paddle_x.offsetLeft + paddle_x.offsetWidth))
   {
      if(((ballY + ball.offsetHeight) > playerY) && ballY < (playerY + paddle_x.offsetHeight))         
         dx=-dx;        
   }
   ball.style.left = dx + 'px';
   ball.style.top = dy + 'px';
   ball.style.top = ballY + 'px';
   ball.style.left = ballX + 'px';

   if(dx > 0)
   {
      if((system + (paddle_y.offsetHeight)) > (ballY + ball.offsetHeight))
      system -= sysspeed;
      else
      system += sysspeed;
      if (system>0) {
      paddle_y.style.top = system + 'px';}
   }  
   }
   
    
   if (lev=='Level5') {
    sysspeed = 8;
       ballX +=dx;
       ballY += dy;   
   if(ballX < 0)
   {
      clearInterval(call_loop);
      clearInterval(ticker);
      initial();
      design.onmousemove = '';
      alert("You Loose!");
   }

   var count=document.getElementById("countdown").innerHTML;;
   if(((ballX + ball.offsetWidth) > design.offsetWidth)||count==0)
   {
      clearInterval(call_loop);
      initial();
      design.onmousemove = '';
      alert("Congrats!You Won Level5!!");
   }
   
   if(ballY < 0 || ((ballY + ball.offsetHeight) > design.offsetHeight)) 
         dy=-dy;  
   
   if((ballX + ball.offsetWidth) > paddle_y.offsetLeft)   
      if(((ballY + ball.offsetHeight) > system) && ballY < (system + paddle_y.offsetHeight))   
      dx=-dx;  
          
   if(ballX < (paddle_x.offsetLeft + paddle_x.offsetWidth))
   {
      if(((ballY + ball.offsetHeight) > playerY) && ballY < (playerY + paddle_x.offsetHeight))         
         dx=-dx;        
   }
   ball.style.left = dx + 'px';
   ball.style.top = dy + 'px';
   ball.style.top = ballY + 'px';
   ball.style.left = ballX + 'px';

   if(dx > 0)
   {
      if((system + (paddle_y.offsetHeight)) > (ballY + ball.offsetHeight))
      system -= sysspeed;
      else
      system += sysspeed;
      if (system>0) {
      paddle_y.style.top = system + 'px';}
   }  
   }
}
function movearrow(e)
{
   var y = (e.clientY - (design.offsetTop - document.documentElement.scrollTop));
   var xy=(design.offsetTop - document.documentElement.scrollTop);
   if(y > (design.offsetHeight - paddle_x.offsetHeight))
      y = (design.offsetHeight - paddle_x.offsetHeight);
   playerY = y;
   paddle_x.style.top = y + 'px';
}
function stop()
{
    dx=dy=0;
}
function play()
{
   dx=dy=speed;
}
function changestyle(lev)
{
  if (lev=='Level1') {
       document.getElementById("paddle1").style.height="120px";
       document.getElementById("paddle2").style.height="120px";
       document.getElementById("countdown").innerHTML = 60;
   }
   else if (lev=='Level2') {
       document.getElementById("paddle1").style.height="100px";
       document.getElementById("paddle2").style.height="100px";
      document.getElementById("countdown").innerHTML = 80;
   }
   else if (lev=='Level3') {
      document.getElementById("paddle1").style.height="80px";
       document.getElementById("paddle2").style.height="80px";
      document.getElementById("countdown").innerHTML = 100;
   }
   else if (lev=='Level4') {
      document.getElementById("paddle1").style.height="60px";
       document.getElementById("paddle2").style.height="60px";
      document.getElementById("countdown").innerHTML = 120;
   }
   else if (lev=='Level5') {
      document.getElementById("paddle1").style.height="40px";
       document.getElementById("paddle2").style.height="40px";
      document.getElementById("countdown").innerHTML = 150;
   }
 
}

function functionality2()
{
      sysspeed = 5;
      ballX +=dx;
      ballY += dy;   
   if(ballX < 0)
   {
      clearInterval(call_loop);
      clearInterval(ticker);
      initial();
      design.onmousemove = '';
      alert("You Loose!");
   }
   var count=document.getElementById("countdown").innerHTML;;
   if(((ballX + ball.offsetWidth) > design.offsetWidth)||count==0)
   {
      clearInterval(call_loop);
      clearInterval(ticker);
      
      initial();
      design.onmousemove = '';
      alert("Congrats!You Won Level2!!");
      alert('Level3');
       document.getElementById("paddle1").style.height="80px";
      document.getElementById("paddle2").style.height="80px";
      document.getElementById("countdown").innerHTML = 100;
      design.onmousemove = movearrow;
      call_loop = setInterval(functionality3, 10);
      point=setInterval(startTimer(100),10);
   }
   
   if(ballY < 0 || ((ballY + ball.offsetHeight) > design.offsetHeight)) 
         dy=-dy;  
   
   if((ballX + ball.offsetWidth) > paddle_y.offsetLeft)   
      if(((ballY + ball.offsetHeight) > system) && ballY < (system + paddle_y.offsetHeight))   
      dx=-dx;  
          
   if(ballX < (paddle_x.offsetLeft + paddle_x.offsetWidth))
   {
      if(((ballY + ball.offsetHeight) > playerY) && ballY < (playerY + paddle_x.offsetHeight))         
         dx=-dx;        
   }
   ball.style.left = dx + 'px';
   ball.style.top = dy + 'px';
   ball.style.top = ballY + 'px';
   ball.style.left = ballX + 'px';

   if(dx > 0)
   {
      if((system + (paddle_y.offsetHeight)) > (ballY + ball.offsetHeight))
      system -= sysspeed;
      else
      system += sysspeed;
      if (system>0) {
      paddle_y.style.top = system + 'px';}
   }  
   
}

function functionality3()
{
      sysspeed = 6;
      ballX +=dx;
      ballY += dy;   
   if(ballX < 0)
   {
      clearInterval(call_loop);
      clearInterval(ticker);
      initial();
      design.onmousemove = '';
      alert("You Loose!");
   }

   var count=document.getElementById("countdown").innerHTML;;
   if(((ballX + ball.offsetWidth) > design.offsetWidth)||count==0)
   {
      clearInterval(call_loop);
      initial();
      design.onmousemove = '';
      alert("Congrats!You Won Level3!!");
      alert('Level4');
      document.getElementById("paddle1").style.height="60px";
      document.getElementById("paddle2").style.height="60px";
      document.getElementById("countdown").innerHTML = 120;
      design.onmousemove = movearrow;
      call_loop = setInterval(functionality4, 10);
      point=setInterval(startTimer(120),10);
   }
   
   if(ballY < 0 || ((ballY + ball.offsetHeight) > design.offsetHeight)) 
         dy=-dy;  
   
   if((ballX + ball.offsetWidth) > paddle_y.offsetLeft)   
      if(((ballY + ball.offsetHeight) > system) && ballY < (system + paddle_y.offsetHeight))   
      dx=-dx;  
          
   if(ballX < (paddle_x.offsetLeft + paddle_x.offsetWidth))
   {
      if(((ballY + ball.offsetHeight) > playerY) && ballY < (playerY + paddle_x.offsetHeight))         
         dx=-dx;        
   }
   ball.style.left = dx + 'px';
   ball.style.top = dy + 'px';
   ball.style.top = ballY + 'px';
   ball.style.left = ballX + 'px';

   if(dx > 0)
   {
      if((system + (paddle_y.offsetHeight)) > (ballY + ball.offsetHeight))
      system -= sysspeed;
      else
      system += sysspeed;
      if (system>0) {
      paddle_y.style.top = system + 'px';}
   }  
}

function functionality4()
{
    sysspeed = 7;
       ballX +=dx;
       ballY += dy;   
   if(ballX < 0)
   {
      clearInterval(call_loop);
      clearInterval(ticker);
      initial();
      design.onmousemove = '';
      alert("You Loose!");
   }

   var count=document.getElementById("countdown").innerHTML;;
   if(((ballX + ball.offsetWidth) > design.offsetWidth)||count==0)
   {
      clearInterval(call_loop);
      initial();
      design.onmousemove = '';
      alert("Congrats!You Won Level4!!");
      alert('Level5');
      document.getElementById("paddle1").style.height="40px";
      document.getElementById("paddle2").style.height="40px";
      document.getElementById("countdown").innerHTML = 150;
      design.onmousemove = movearrow;
      call_loop = setInterval(functionality5, 10);
      point=setInterval(startTimer(150),10);
   }
   
   if(ballY < 0 || ((ballY + ball.offsetHeight) > design.offsetHeight)) 
         dy=-dy;  
   
   if((ballX + ball.offsetWidth) > paddle_y.offsetLeft)   
      if(((ballY + ball.offsetHeight) > system) && ballY < (system + paddle_y.offsetHeight))   
      dx=-dx;  
          
   if(ballX < (paddle_x.offsetLeft + paddle_x.offsetWidth))
   {
      if(((ballY + ball.offsetHeight) > playerY) && ballY < (playerY + paddle_x.offsetHeight))         
         dx=-dx;        
   }
   ball.style.left = dx + 'px';
   ball.style.top = dy + 'px';
   ball.style.top = ballY + 'px';
   ball.style.left = ballX + 'px';

   if(dx > 0)
   {
      if((system + (paddle_y.offsetHeight)) > (ballY + ball.offsetHeight))
      system -= sysspeed;
      else
      system += sysspeed;
      if (system>0) {
      paddle_y.style.top = system + 'px';}
   }  
}

function functionality5()
{
      sysspeed = 8;
       ballX +=dx;
       ballY += dy;   
   if(ballX < 0)
   {
      clearInterval(call_loop);
      clearInterval(ticker);
      initial();
      design.onmousemove = '';
      alert("You Loose!");
   }

   var count=document.getElementById("countdown").innerHTML;;
   if(((ballX + ball.offsetWidth) > design.offsetWidth)||count==0)
   {
      clearInterval(call_loop);
      initial();
      design.onmousemove = '';
      alert("Congrats!!You Won All Levels!!");
   }
   
   if(ballY < 0 || ((ballY + ball.offsetHeight) > design.offsetHeight)) 
         dy=-dy;  
   
   if((ballX + ball.offsetWidth) > paddle_y.offsetLeft)   
      if(((ballY + ball.offsetHeight) > system) && ballY < (system + paddle_y.offsetHeight))   
      dx=-dx;  
          
   if(ballX < (paddle_x.offsetLeft + paddle_x.offsetWidth))
   {
      if(((ballY + ball.offsetHeight) > playerY) && ballY < (playerY + paddle_x.offsetHeight))         
         dx=-dx;        
   }
   ball.style.left = dx + 'px';
   ball.style.top = dy + 'px';
   ball.style.top = ballY + 'px';
   ball.style.left = ballX + 'px';

   if(dx > 0)
   {
      if((system + (paddle_y.offsetHeight)) > (ballY + ball.offsetHeight))
      system -= sysspeed;
      else
      system += sysspeed;
      if (system>0) {
      paddle_y.style.top = system + 'px';}
   }  
}