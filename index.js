// index.js

let cats = ["Milo", "Otis", "Garfield"];

function destructivelyPrependCat(name) {
  cats.unshift(name);
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}

function destructivelyAppendCat(name) {
  cats.push(name);
}

function appendCat(name) {
  return cats.concat([name]);
}

function prependCat(name) {
  return [name].concat(cats);
}

function removeLastCat() {
  return cats.slice(0, -1);
}

function removeFirstCat() {
  return cats.slice(1);
}

module.exports = {
  cats,
  destructivelyPrependCat,
  destructivelyRemoveLastCat,
  destructivelyRemoveFirstCat,
  destructivelyAppendCat,
  appendCat,
  prependCat,
  removeLastCat,
  removeFirstCat
};
