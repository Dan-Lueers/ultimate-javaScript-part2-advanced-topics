// --------------------------------------
// Factory Functions vs Constructor Functions
// --------------------------------------

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

// --------------------------------------
// Enumerating over properties
// --------------------------------------
for (let key in circle1) {
  if (typeof circle1[key] !== "function") console.log(key, circle1[key]);
}

const keys = Object.keys(circle1);
console.log(keys);

if ("radius" in circle1) console.log("circle has radius");

// --------------------------------------
// Private Properties and Methods
// --------------------------------------
function MyCircle(radius) {
  this.radius = radius;
  let defaultLocation = { x: 1, y: 1 };
  let computeOptimumLocation = function () {
    console.log("computing optimal location...");
  };
  this.draw = function () {
    console.log("draw Mycircle from constructor function");
    computeOptimumLocation();
  };
}

const myCircle = new MyCircle();
myCircle.draw();


// --------------------------------------
// Getters and Setters
// --------------------------------------
function SuperCircle(radius) {
  this.radius = radius;
  let defaultLocation = { x: 1, y: 1 };
  let computeOptimumLocation = function () {
    console.log("computing optimal location...");
  };
  this.draw = function () {
    console.log("draw Mycircle from constructor function");
    computeOptimumLocation();
  };

  Object.defineProperty(this, 'defaultLocation', {
    get: function (){
        return defaultLocation;
    },
    set: function(value) {
        if(!value.x || !value.y)
            throw new Error('Invalid default location')
        defaultLocation = value;
    }
  })
}

const superCircle = new SuperCircle();
superCircle.draw();
superCircle.defaultLocation = {x: 3, y: 5}
console.log(superCircle.defaultLocation);
