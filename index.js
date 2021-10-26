
// 6 kyu - Array.diff 
// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b keeping their order
// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:
// arrayDiff([1,2,2,2,3],[2]) == [1,3]

//Solution is:

function arrayDiff(a, b) {
    let result = [];
 
     for (let n of a) {
        if (!b.includes(n)) {
          result.push(n);
        }
     }
     return result
 }


 // 8 kyu - Opposites Attract

// Timmy & Sarah think they are in love, but around where they live,
// they will only know once they pick a flower each.
// If one of the flowers has an even number of petals
// and the other has an odd number of petals it means they are in love.
// Write a function that will take the number of petals of each flower and return true
// if they are in love and false if they aren't.
 
//Solution is:

function lovefunc(flower1, flower2){
    if (flower1 % 2 == 0 && flower2 % 2 !==0){
     return true;
    }
    else if (flower2 % 2 == 0 && flower1 % 2 !==0){
      return true;
    }
    else {
      return false;
    }
  }


 // 7 kyu - Is this a triangle?

// Implement a function that accepts 3 integer values a, b, c.
// The function should return trueif a triangle can be built with the sides of given length and false in any other case.
// (In this case, all triangles must have surface greater than 0 to be accepted).

//Solution is:

function isTriangle(a,b,c)
{
  let sides = [a, b, c];
  let max = Math.max(...sides);
  let sum = sides.reduce((a, b) => a + b, 0);
  return sum - max > max;
}

