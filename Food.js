class Food{
    constructor(x, y,r) {
        var options = {
            
        
        }
        
        this.image = loadImage("Milk.png");
        
        
      
      }
      getState(){
        var gameStateRef=database.ref("gameState");
        gameStateRef.on("value",function(data){
            gameState=data.val();
        
        }) 
            }
         update(state){
        database.ref("/").update({
            gameState:state
        })
        
            }
            start(){
                if (gameState===0){
                    dog=new Dog();
                    dog.getCount();
                    form=new Form();
                    form.display();
        }
            }
}