//On ajoute la possibilité d'avoir un nom d'utilisateur. Si présent, alors on affiche un message de bienvenu personnalisé 
let userName = '';
userName ? console.log(`Hello ${userName}`) : console.log('Hello');

//On ajoute une question
let userQuestion = 'Question ?';
console.log(userQuestion);

//On génère un nombre aléatoire entre 0 et 7. Celui ci sera utilisé pour obtenir la réponse à donner 
let randomNumber = Math.floor(Math.random()* 7 + 1);

//On déclare une variable vide qui récupère la réponse
let eightBall = '';

//On déclare une instruction switch qui permet de définir la réponse selon le nombre obtenu
switch(randomNumber){
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
}

//On affiche la réponse
console.log(`Voici la réponse à ta question : ${eightBall}`);