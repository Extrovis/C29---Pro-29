class Box{

    constructor(x, y, width, height) {
        var properties = {
            isStatic: false
        }

        this.body = Bodies.rectangle(x, y, width, height, properties);

        this.width = width;
        this.height = height;

        World.add(world, this.body);
    }

    display() {

        var pos = this.body.position;

        push();

        rectMode(CENTER);

        translate(pos.x, pos.y);

        fill("white");

        rect(0, 0, this.width, this.height);

        noFill();

        pop();
    }

}