var kittens = ["Milo", "Otis", "Garfield"]; 

function destructivelyAppendKitten(name) {
  kittens.push("Ralph");
  return kittens;
}

function destructivelyPrependKitten(name) {
 return kittens.unshift("Bob");
}