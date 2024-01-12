/**
 Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

If no occurrences can be found, a count of 0 should be returned.
**/

function strCount(str, letter){  
    return str.match(letter) || [].length
  }

console.log(strCount("Forever", "e"))

//solution

function strCounts(str, letter){  
    return str.split(letter).length-1  //the reason why the -1 is here, is because split will insert a empty string if 2 letters are the same and side by side each other. With the length property, it's counting the amount of things that have been split
  }

  console.log(strCounts("Forever", "e"))



  console.log("Hello".split("l"))