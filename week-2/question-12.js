function trafficLight(color){
  switch (color){
    case 'Green':
      return 'Go';
    case 'Yellow':
      return 'Ready';
    case 'Red':
      return 'Stop';
    default:
      return 'Error: Invalid input';
  }
}

module.exports = trafficLight;

