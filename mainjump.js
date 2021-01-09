const HEIGHT = 400;
const WIDTH  = 400;
const stageHeight=300;


let player = new Image();
player.src="blacksquare.png";

//画像を動かす
let gazo = { x: 500, y: 300 };//画像の初期位置

let movePlayer = {x: 20, y: 290};

let square ={x:20, y:20};

let jumpHeight =[60];

let shougaiWidth  =40;
let shougaiHeight =50;

let playerWidth = 60;
let playerHeight = 60;

let shougaiY = 305;

let count = 0;

let score = 0;

let num=320;



//準備
const gameArea = document.getElementById('game-area');
const ctx = gameArea.getContext('2d');

document.getElementById("game-area").onclick = function(){

  jump();
  setTimeout(back,400);
  end = 1;


}

function jump(){
 
  for(let i = 0; i<1; i++)
  {
    movePlayer.y = movePlayer.y -jumpHeight[i];
  }


}

function back()
{
  movePlayer.y = 290;
}


function checkMove(mx,my)
{
  let nx = movePlayer.x + mx;
  let ny = movePlayer.y + my;

  if(nx < 0 || ny < 0 || nx >=350 || ny>=350){
    return false;
  } 

  return true;
  
}




/*
window.onkeydown = function(ev)
{
  let c = ev.keyCode;

  let mx = Math.floor(movePlayer.x);
  let my = Math.floor(movePlayer.y);
  

  if( c == 37 && checkMove(-20,0)==true ) movePlayer.x -=20  //左
  if( c == 38 && checkMove(0,-20)==true ) movePlayer.y -=20; //上
  if( c == 39 && checkMove(20,0)==true  ) movePlayer.x +=20; //右
  if( c == 40 && checkMove(0,60)==true  ) movePlayer.y +=20; //下

}  

 */ 


//let moving = setInterval(move, 1000 / 30);//1000/30ミリ秒毎にmoveを実行する

function hiddenButton() {
 document.getElementById("start-game").style.display="none";

}

//画面の表示
function draw() {
  
 ctx.clearRect(0, -50, 400, 400)
 ctx.drawImage(player, 0, 350,1000,100);
 num+=0.6;
 
   for(let x = 0; x<2; x++)
   {
     if(score >=500)
     {
       gazo.x -=0.5;
     } 
     
     if(score >=1000)
     {
       gazo.x-=0.7;

     }

     if(score >=1500)
     {
       gazo.x-=0.9;

     }

     if(score >=2000)
     {
       gazo.x-=1;

     }

     if(score >=2500)
     {
       gazo.x-=1.1;

     }

     if(score >=3000)
     {
       gazo.x-=1.3;

     }

     if(score >=3500)
     {
       gazo.x-=1.5;

     }

     if(score >=4000)
     {
       gazo.x-=4;

     }
    
    
    
      gazo.x -=5;

      if(gazo.x + num >=-700)
      {
        num=405;
      }

      if(gazo.x<=-440)
      {
        
        gazo.x = 410;
   
      }

      
      ctx.drawImage(player,gazo.x ,gazo.y,shougaiWidth,shougaiHeight);
      ctx.drawImage(player,gazo.x + num,gazo.y ,shougaiWidth,shougaiHeight);

     


      score++;
  }   





  ctx.font = "16px Arial";
  ctx.fillStyle = "black";
  ctx.fillText("Score: "+score, 8, 20);

  //console.log("これはgazo.x " + gazo.x);
  //console.log("これはgazo.y " +  gazo.y);
  //console.log("これはmovePlayer.x " + movePlayer.x);
  //console.log("これはmovePlayer.y "  +movePlayer.y);


 
 ctx.drawImage(player,movePlayer.x,movePlayer.y,playerWidth ,playerHeight);
 /*
 ctx.strokeRect(movePlayer.x, movePlayer.y, playerWidth,playerHeight );
 ctx.strokeStyle="red";
 ctx.lineWidth=1;

 window.requestAnimationFrame(draw);  //毎秒60回のペースでdrawを実行する
 */

}




/*
function damage()
{
  if(   (  movePlayer.x + playerWidth   ) >= gazo.x && movePlayer.x <= (gazo.x + shougaiWidth ) ){
    if( (  movePlayer.y + playerHeight  ) >= gazo.y && movePlayer.y <= (gazo.y + shougaiHeight) ) {
    console.log("x座標,y座標に当たっています");
    stop();
    
    }
    
  }
}

function stop()
{
clearInterval(draw);
console.log("dhfhdjah", 1000/50);

}

*/

function start()
{

  if(count ==1){
    location.reload();
  }
  document.getElementById("restart-game").style.display="none";
  document.getElementById("start-game").style.display="block";
  ctx.fillRect(0,0,400,400);
  ctx.fillStyle = "white";
  ctx.font="bold 50px 'arial'";
  ctx.fillText("そうたの",90,90);
  ctx.fillText("ジャンプゲーム",20,150);

  

}

function StartGame()
{
  hiddenButton();
  let moving = setInterval(function() {

    if(count == 0)
    {
      draw();

    }else if(count == 1)
    {
      location.reload();
    }

  
    if(   (  movePlayer.x + playerWidth   ) >= gazo.x && movePlayer.x <= (gazo.x + shougaiWidth ) ){
      if( (  movePlayer.y + playerHeight  ) >= gazo.y && movePlayer.y <= (gazo.y + shougaiHeight) ) {
      
        console.log("x座標,y座標に当たっています");
        clearInterval(moving);
        ctx.fillStyle = "black";
        ctx.font="bold 50px 'arial'";
        ctx.fillText("ゲームオーバー",20,120);
        ctx.font="17px arial";
        ctx.fillText("あなたのスコアは"+ score +"点です",110,160);
        count = 1;
        document.getElementById("restart-game").style.display="block";
      
      }
      
    }

    if(   (  movePlayer.x + playerWidth   ) >= gazo.x + num && movePlayer.x <= (gazo.x  + num + shougaiWidth ) ){
      if( (  movePlayer.y + playerHeight  ) >= gazo.y && movePlayer.y <= (gazo.y + shougaiHeight) ) {
      
        console.log("x座標,y座標に当たっています");
        clearInterval(moving);
        ctx.fillStyle = "black";
        ctx.font="bold 50px 'arial'";
        ctx.fillText("ゲームオーバー",20,120);
        ctx.font="17px arial";
        ctx.fillText("あなたのスコアは"+ score +"点です",110,160);
        count = 1;
        document.getElementById("restart-game").style.display="block";
      
      }
      
    }
  
  } ,1000/50);

}

function restartGame()
{
  
}


window.onload= function()
{
start();
document.getElementById("restart-game").style.display="none";

}



