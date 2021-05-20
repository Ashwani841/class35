class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount=playerCountRef.val();
        player.getCount();
      }
       
        form = new Form()
        form.display();
        
     
    }
  }

  play(){
    form.hide_details();
    textSize(35);
    text("Game begin",200,30);
    Player.getPlayerInfo();

    if(allPlayers!==undefined){
      var positionplayery = 50
      for(var p in allPlayers){
        if(p==="player"+player.index){
          fill("red");
        }
        else{
          fill("black");
        }
        positionplayery=positionplayery+30;
        text(allPlayers[p].name+":"+allPlayers[p].distance,100,positionplayery);
      }

    }
    if(keyDown(UP_ARROW)&&player.index!==null){
      player.distance = player.distance+50;
      player.update();
    }
  }
}
