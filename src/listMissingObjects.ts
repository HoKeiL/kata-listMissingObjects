/**
 * Write a function `listMissingObjects` which takes two arguments - both being arrays of objects.

The objects are guaranteed to have at least an id (number) and name (string) property.

The function should return an array of the objects from the first array which do not have a match in the second array.

Two objects are considered a match if either their ids match or their names match.

It is suggested you work in typescript

it is suggested you try a solution making use of array functions.

What is the time complexity of your solution?
 * @param a - the first object array
 * @param b - the second object array
 * @returns an array of the objects from the first array which do not have a match in the second array
 */
function listMissingObjects(a: object[], b: object[]): object[] {
  const missingObjList: object[] = [];
  return missingObjList;
}

export default listMissingObjects;
