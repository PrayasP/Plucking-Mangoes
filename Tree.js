class Tree{
    constructor(x, y) {
      this.x = x;
      this.y = y;
        // var options = {
        //     isStatic: true
        // }
        // this.body = Bodies.rectangle(x, y, width, height, options);
        // this.width = width;
        // this.height = height;
        this.image = loadImage("tree.png");
        World.add(world, this.image);
      }
      display(){
        push();
        translate(this.x, this.y);
        imageMode(CENTER);
        image(this.image, 0, 0, 750/1.4, 750/1.2);
        pop();
      }
}