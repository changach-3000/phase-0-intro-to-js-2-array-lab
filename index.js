// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name="Ralph"){
    cats.push(name);   
}
function destructivelyPrependCat(name="Bob"){
    cats.unshift(name);
}
function destructivelyRemoveLastCat(){
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();

}
function appendCat(name="Broom"){
    const cats2 = cats.slice();
    cats2.push(name)
    return cats2
}
function prependCat(name="Arnold"){
    const cats3 = cats.slice();
    cats3.unshift(name)
    return cats3

}
function removeLastCat(){
    const cats4 = cats.slice();
    cats4.pop();
    return cats4
}
function removeFirstCat(){
    const cats5 = cats.slice();
    cats5.shift();
    return cats5
}