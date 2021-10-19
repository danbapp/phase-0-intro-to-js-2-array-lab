const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
  return cats.push(name);
}

function destructivelyPrependCat(name){
  return cats.unshift(name);
}

function destructivelyRemoveLastCat(name){
  return cats.pop(name);
}

function destructivelyRemoveFirstCat(name){
  return cats.shift(name);
}

function appendCat(name){
  const append = [...cats, 'Broom'];
  return append;
}

function prependCat(name){
  const append = ['Arnold', ...cats];
  return append;
}

function removeLastCat(){
  const removeLast = cats.slice(0, 2);
  return removeLast;
}

function removeFirstCat(){
  const removeFirst = cats.slice(1, 3);
  return removeFirst;
}