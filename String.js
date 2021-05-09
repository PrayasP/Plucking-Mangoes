class String{
    constructor(body1,point2){
        var options = {
            bodyA: body1,
            pointB: point2,
            stiffness:0.04,
            length: 10
        }

        this.pointB = point2;
        this.thread = Constraint.create(options);
        World.add(world,this.thread);
    }

    fly(){
        this.thread.bodyA = null;
    }

    display(){
        if(this.thread.bodyA){
        var pointA = this.thread.bodyA.position;
        
        var pointB = this.pointB;

        push();
        fill("black");
        strokeWeight(3);
        
        line(pointA.x,pointA.y,pointB.x,pointB.y); 
        pop();
        }
    }
}