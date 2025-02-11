/*
  - Abacaxi do array "fruits", verifique se "abacaxi" existe no array. Se 
  existir, exiba no console a mensagen "A string "abacaxi" existe no array fruits.";
  - se "abacaxi" não existir, verifique se "pera" existe no array. Se existir,
  exiba no console a mensagen "A string "pera" existe no array fruits.";
  - Se nenhuma das duas frutas existirem no array, exiba no console a mensagen 
  "Nenhuma das strings existe no array fruits".
*/

const fruits = ["morango", "banana", "mamão", "pera"];

if(fruits.includes("Abacaxi")) {
    console.log("A strings Abacaxi existe no array fruits");
} else if (fruits.includes("pera")) {
    console.log("A string pera existe no array fruits");
} else {
    console.log("Nenhuma das strings existe no array fruits");
}