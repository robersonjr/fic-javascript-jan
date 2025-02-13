/*
  - Após a const names, utilize um for loop para gerar um tamplate HTML;
  - Exiba no console o template HTML que você gerou;
  - O templatedeve ser exibido apenas uma vez no console e o resultado dev ser :
  <li>João Grilo</li><li>Chico</li><li>Rosinha</> 
*/
const names =['João Grilo', 'Chico', 'Rosinha'];

let templateNames = '';
  for (let i = 0; i <names.length; i++) {
    templateNames += `<li>${names[i]}</li>`;
  }

  console.log(templateNames);