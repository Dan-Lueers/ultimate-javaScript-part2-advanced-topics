// Factory Functions
function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log("draw circle from factory function");
    },
  };
}

const circle1 = createCircle(1);
circle1.draw();

// Constructor Functions
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw circle from constructor function");
  };
}

let circle2 = new Circle(2);
circle2.draw();


// Enumerating over properties
for(key in circle1) {
    if(typeof circle1[key] !== 'function')
        console.log(key, circle1[key])
} 

const keys = Object.keys(circle1);
console.log(keys);

if('radius' in circle1)
    console.log('circle has radius')