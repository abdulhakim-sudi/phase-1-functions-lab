
function distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue - 42);
  }
  function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264;
  }
  function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264;
  }
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0; // Free for distances <= 400 feet
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02; // 2 cents per foot for distance between 400 and 2000 feet
    } else if (distance > 2000 && distance <= 2500) {
      return 25; // Flat fare of $25 for distances between 2000 and 2500 feet
    } else {
      return 'cannot travel that far'; // For distances over 2500 feet
    }
  }
  