class Form {
  constructor() {
    this.input = createInput("Name");
    this.button = reateButton('Play');
    this.greeting = createElements('h2');
    
  }
  hide(){
    this.input.hide(); 
    this.button.hide(); 
    this.greeting.hide(); 
  }

  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(130, 0);
    
   
  


    this.input.position(130, 160);
    this.button.position(250, 200);

    button.mousePressed(function(){
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      
      
      playerCount+=1;
      player.index = playerCount;
      player.update(name)
      player.updateCount(playerCount);
      var greeting = createElement('h3');
      this.greeting.html("Hello " + name )
      this.greeting.position(130, 160)
    });

  }
}
