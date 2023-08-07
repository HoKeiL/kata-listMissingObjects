/**
 * Write a function `listMissingObjects` which takes two arguments - both being arrays of objects.

The objects are guaranteed to have at least an id (number) and name (string) property.

The function should return an array of the objects from the first array which do not have a match in the second array.

Two objects are considered a match if either their ids match or their names match.

It is suggested you work in typescript

it is suggested you try a solution making use of array functions.

What is the time complexity of your solution?
 * @param arr1 - the first object array
 * @param arr2 - the second object array
 * @returns an array of the objects from the first array which do not have a match in the second array
 */

/**
 * The filter() method
 * The some() method tests whether at least one element in the array passes the test implemented by the provided function. it returns a boolean.
 *
 * declare a variable to store filtered array
 * filters out the object that returns true:
 *
 * arr1.filter(object in arr1 => arr2.some(object in arr1 => obj1.id === obj2.id OR obj1.name === obj2.name))
 *
 * Return filtered array
 */

interface obj {
  id: number;
  name: string;
}

function listMissingObjects(arr1: obj[], arr2: obj[]): obj[] {
  const missingObjectsListArray = arr1.filter(
    (obj1) =>
      !arr2.some((obj2) => obj1.id === obj2.id || obj1.name === obj2.name),
  );
  return missingObjectsListArray;
}

export default listMissingObjects;
