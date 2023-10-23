// Scenario

// Several people are standing in a row divided into two teams.
// The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.
// Task

// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.
// Notes

//     Array size is at least 1.
//     All numbers will be positive.
//     Input >> Output Examples

// rowWeights([13, 27, 49])  ==>  return (62, 27)

// Explanation:

// The first element 62 is the total weight of team 1, and the second element 27 is the total weight of team 2.

// rowWeights([50, 60, 70, 80])  ==>  return (120, 140)

// Explanation:

// The first element 120 is the total weight of team 1, and the second element 140 is the total weight of team 2.

// rowWeights([80])  ==>  return (80, 0)

// Explanation:

// The first element 80 is the total weight of team 1, and the second element 0 is the total weight of team 2.

// My solution:
function rowWeights(array){
    let team1 = 0;
    let team2 = 0;
    for(let i=0; i < array.length; i++) {
      if(i % 2 === 0) {
        team1 += array[i];
      }else {
        team2 += array[i];
      }
    }
    return [team1, team2];
  }
  
  /*
  params: "array" as an array of numbers
  ret: array of nums, representing the weights of the people of each team, where the even elements from "array" represents the weigth of team 1, and the odd elements the weigth of team 2
  
  ex:
    rowWeights([13, 27, 49])  ==>  return (62, 27)
    rowWeights([50, 60, 70, 80])  ==>  return (120, 140)
  
  create variables "team1" and "team2" initialized as 0 to hold the team weight numbers
  loop through the array
  if the element index is even, sum the element to team1
  if the element index is odd, sum the element to team2
  return an array holding team1 and team2 values
  */