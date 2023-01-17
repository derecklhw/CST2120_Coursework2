function retrieveAllKeysLocalStorage() {
  let array = [];
  for (var key in localStorage) {
    array.push(key);
  }
  array.splice(array.length - 6, 6);
  return array;
}

function mergeSort(arr) {
  // Base case
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  // Recursive calls
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function merge(left, right) {
  let sortedArr = []; // the sorted items will go here
  while (left.length && right.length) {
    // Insert the smallest item into sortedArr
    if (left[0].score > right[0].score) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }
  // Use spread operators to create a new array, combining the three arrays
  return [...sortedArr, ...left, ...right];
}

function generateTableHead(table, data) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of data) {
    if (key == "password" || key == "acceptCondition" || key == "time") {
      continue;
    }
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}

function generateTable(table, data) {
  for (let element of data) {
    let row = table.insertRow();
    for (key in element) {
      if (key == "password" || key == "acceptCondition" || key == "time") {
        continue;
      }
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}

function createTable() {
  let arrayUserKey = retrieveAllKeysLocalStorage();

  let arrayUserObjects = [];
  arrayUserKey.forEach((key) => {
    let userObject = JSON.parse(localStorage[key]);
    arrayUserObjects.push(userObject);
  });

  let sortArrayUserObjects = mergeSort(arrayUserObjects);
  console.log(sortArrayUserObjects);

  let table = document.getElementById("leaderboardTable");
  let data = Object.keys(sortArrayUserObjects[0]);
  generateTableHead(table, data);
  generateTable(table, sortArrayUserObjects);

  console.log("hi");
}
