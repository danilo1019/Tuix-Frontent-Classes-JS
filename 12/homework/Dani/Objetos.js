snake = {
    posx:[250,240,230,220,210,200],
    posy:[250,250,250,250,250,250],
    speed:200,
    dir:"right",
    internalId: null,
    moveChange: function(posx,posy,dir){},
    move: function(){
    snake.internalId = setInterval(function(){
    snake.movechange(snake.posx,snake.posy,snake.dir)
},snake.speed)
  
    },
    stops: function () {
        clearInterval(snake.internalId)
        }
    
}

food = {
    posx:[100],
    posy:[100]}