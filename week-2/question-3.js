function getRectangleAreaAndPerimeter(length, width){
    if(!length && !width){
        return 'Error: Inputs must not be empty';
    }else{
        if(typeof length !== 'number' && typeof width !== 'number'){
            return 'Error: Inputs must be numbers';
        }else{
            return `Area: ${length*width}, Perimeter: ${2*(length+width)}`;
        }
    }
}

module.exports = getRectangleAreaAndPerimeter;