/*
  Use o metodo adequado para adicionar os 3 seguintes itens

   - Coxinha
   - null
   - Brigadeiro
*/
let brazilianFoods = ["Coxinha", "null", "Brigadeiro" ];

// ["coxinha", null, "brigadeiro"];
brazilianFoods.push("Coxinha", null, "Brigadeiro")
//                      1         2        3 

// No lugar do null, adicionar pao de queijo 
console.log(brazilianFoods[1]);

brazilianFoods[1]= "Pão de Queijo";
console.log(brazilianFoods)
