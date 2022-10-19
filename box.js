class Box{
    constructor(x,y,w,h,cor){
        var options = {
            isStatic:true
        };
        this.body = Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.body);
        this.w = w;
        this.h = h;
        this.cor = cor;
}
    show(){
    var pos = this.body.position;
    push();
    fill(this.cor);
    rect(pos.x,pos.y,this.w,this.h);
    pop();
    }
}