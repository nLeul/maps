/*Write a function called removeDups(numList) that takes an Array which may
contain diplicates, and then returns a new Array with the duplicates removed.*/
function removeDups(numList) {
    let newSet = new Set();
    for (let key of numList) {
        newSet.add(key);
    }
    return Array.from(newSet);
}