 class Paper {
     constructor(x,y,width,height){
        var options = {
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.circle(x, y,23, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("paper.png",70,70);
        World.add(world, this.body);      
       
     }
     display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }


 
 }