/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/
/* Questo array viene usato per gli esercizi. Non modificarlo. */
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];
// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
console.log("----Esercizio A----");
const sum = 10 + 20;
console.log(`La somma tra 10 e 20 è: ${sum}`);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
console.log("----Esercizio B----");
const random = Math.floor(Math.random() * 21);
console.log(`Numero random: ${random}`);
/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
console.log("----Esercizio C----");
const me = {
  name: "Valentino",
  surname: "Nai",
  age: 35,
};
console.log(me);
/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
console.log("----Esercizio D----");
delete me.age;
console.log(me);
/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
console.log("----Esercizio E----");

const skills = ["HTML", "CSS", "javaScript"];
me.skills = skills;
console.log(me);
/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
console.log("----Esercizio F----");

me.skills.push("C++");
console.log(me);
/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
console.log("----Esercizio G----");

me.skills.pop();
console.log(me);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

console.log("----Esercizio 1----");

const dice = () => {
  return Math.floor(Math.random() * 6) + 1;
};
console.log(`Numero casuale tra 1 e 6: ${dice()}`);

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
console.log("----Esercizio 2----");

const whoIsBigger = (a, b) => {
  if (a > b) return a;
  else if (b > a) return b;
  else return "I numeri sono uguali";
};
const a = 2,
  b = 3;
console.log(`Il maggiore tra ${a}  e ${b} è: ${whoIsBigger(a, b)}`);
/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
console.log("----Esercizio 3----");

const splitMe = (str) => {
  return str.split(" ");
};
const str = "I love coding";
console.log(`La stringa è: ${str}
La stringa splittata è ${splitMe(str)}`);
console.log(splitMe(str));
/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
console.log("----Esercizio 4----");

const delateOne = (str, x) => {
  if (x === true) return str.substring(1);
  else return str.substring(0, str.length - 1);
};

console.log(`La stringa originale è: ${str}
Stringa con booleano= true: ${delateOne(str, true)}
Stringa con booleano=false: ${delateOne(str, false)}`);
/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
console.log("----Esercizio 5----");

const onlyLetters = (str) => {
  return str.replace(/[0-9]?/g, "");
};
const stringaMista = "c8cdosd89 ffedj  g eruh34";
console.log(`Stringa originale: ${stringaMista}`);
console.log(`Stringa senza numeri: ${onlyLetters(stringaMista)}`);
/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
console.log("----Esercizio 6----");

const isThisAEmail = (str) => {
  const x = str.search("@");
  const y = str.endsWith(".com");
  if (x === -1 || y === false) return false;
  else return true;
};
const Email = "ciao.comeve@gmail.com";
console.log(`La mail inserita è:${Email}`);
if (isThisAEmail(Email)) {
  console.log("La mail inserita è valida");
} else {
  console.log("La mail inserita non è valida");
}
/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
console.log("----Esercizio 7----");

const whatDayIsIt = () => {
  const now = new Date();
  const day = now.getDay();
  switch (day) {
    case 0:
      return "Domenica";
    case 1:
      return "Lunedi";
    case 2:
      return "Martedi";
    case 3:
      return "Mercoledi";
    case 4:
      return "Giovedi";
    case 5:
      return "Venerdi";
    case 6:
      return "Sabato";
  }
};
console.log(`Oggi è: ${whatDayIsIt()}`);
/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
console.log("----Esercizio 8----");

const rollTheDices = (N) => {
  const dadi = {};
  let somma = 0;
  dadi.sum = [];
  console.log("I numeri usciti sono:");
  for (let i = 0; i < N; i++) {
    dadi.sum[i] = dice();
    somma += dadi.sum[i];
    console.log(dadi.sum[i]);
  }
  dadi.somma = somma;
  return dadi;
};

const dadi = rollTheDices(4);
console.log(dadi);
/* ESERCIZIO 9
Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
console.log("----Esercizio 9----");
const howManyDays = (date) => {
  let now = new Date();

  const ms = 1000 * 60 * 60 * 24;
  now = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
  let d = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
  console.log(`Giorni trascorsi: ${Math.floor((now - d) / ms)}`);
};
const date = new Date("2022-7-14");
howManyDays(date);
/* ESERCIZIO 10
Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
console.log("----Esercizio 10----");
const isTodayMyBirthday = (day, month) => {
  const now = new Date();
  const nowDay = now.getDate();
  const nowMonth = now.getMonth();
  if (day === nowDay && month === nowMonth + 1) return true;
  else return false;
};
const giorno = 14,
  mese = 7;
console.log(isTodayMyBirthday(giorno, mese) === true ? "Oggi è il tuo compleanno" : "Oggi non è il tuo compleanno");
// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
console.log("----Esercizio 11----");
const deleteProp = (obj, str) => {
  delete obj[str];
  return obj;
};
console.log(movies[3]);
console.log(deleteProp(movies[3], "Poster"));
/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
console.log("----Esercizio 12----");

const newestMovie = () => {
  let index = 0;
  for (let i = 1; i < movies.length; i++) {
    if (movies[i].Year > movies[index].Year) {
      index = i;
    }
  }
  const newest = { ...movies[index] };
  return newest;
};
const newest = newestMovie();
console.log("Il film più nuovo è:");
console.log(newest);
/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

console.log("----Esercizio 13----");
const countMovies = () => {
  return movies.length;
};
console.log(`Nell'array ci sono: ${countMovies()} film`);
/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
console.log("----Esercizio 14----");
const onlyTheYears = () => {
  const anni = [];
  for (let i = 0; i < movies.length; i++) anni.push(movies[i].Year);
  return anni;
};
const anni = onlyTheYears();
console.log(`Gli anni sono: ${anni}`);
/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
console.log("----Esercizio 15----");
const onlyInLastMillennium = () => {
  const millenio = movies.filter((x) => x.Year < 2000 && x.Year > 1899);
  return millenio;
};
const millenio = onlyInLastMillennium();
console.log(`Film usciti nel millenio scorso: `);
millenio.forEach((x) => console.log(`${x.Title}`));
/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
console.log("----Esercizio 16----");

const sumAllTheYears = () => {
  let sum = 0;
  for (let i = 0; i < movies.length; i++) {
    sum += parseInt(movies[i].Year);
  }
  return sum;
};
console.log(`La somma degli anni di produzione è:${sumAllTheYears()}`);
/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
console.log("----Esercizio 17----");

const searchByTitle = (str) => {
  const obj = [];
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].Title === str) {
      obj.push(movies[i]);
    }
  }
  return obj;
};
const title = "Lord of the Flies";
const sameTitle = searchByTitle(title);
console.log("Film con lo stesso titolo");
console.log(sameTitle);
/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
console.log("----Esercizio 18----");
const searchAndDivide = (str) => {
  const match = movies.filter((x) => x.Title.toLowerCase().includes(str.toLowerCase()));
  unmatch = movies.filter((X) => !X.Title.toLocaleLowerCase().includes(str.toLocaleLowerCase()));
  const obj = {};
  obj.match = match;
  obj.unmatch = unmatch;
  return obj;
};
const str2 = "lord";
console.log(`I film contenenti la srtinga-- ${str2} --sono:`);
const filmRicerca = searchAndDivide(str2);
console.log(filmRicerca);
/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
console.log("----Esercizio 19----");
const removeIndex = (index) => {
  movies.splice(index, 1);
};
console.log(movies);
removeIndex(1);
console.log(movies);

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
console.log("----Esercizio 20 Solo codice----");
const selector = () => {
  const cont = document.getElementById("container");
};

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
console.log("----Esercizio 21 Solo codice----");
const selectTd = () => {
  const td = document.getElementsByTagName("td");
};
/* ESERCIZIO 22
Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
console.log("----Esercizio 22 Solo codice----");
const printTd = () => {
  const td = document.getElementsByTagName("td");
  for (let i = 0; i < td.length; i++) {
    console.log(td[i].innerText);
  }
};
/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
console.log("----Esercizio 23 Solo codice----");
const addBackground = () => {
  const a = document.getElementsByTagName("a");
  for (let i = 0; i < a.length; i++) a[i].style.backgroundColor = "red";
};

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
console.log("----Esercizio 24 Solo codice----");
const addElement = () => {
  const ul = document.getElementById("myList");
  const li = document.createElement("li");
  li.innerText = "Nuovo elemento lista";
  ul.appendChild(li);
};
/* ESERCIZIO 25
Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
console.log("----Esercizio 25 Solo codice----");
const svuotaLista = () => {
  const ul = document.getElementById("myList");
  ul.innerHTML = "";
};
/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
console.log("----Esercizio 26 Solo codice----");
const addClass = () => {
  const tr = document.getElementsByTagName("tr");
  for (let i = 0; i < tr.length; i++) tr[i].classList.add("test");
};
// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/
console.log("----Esercizio 27----");

const halfTree = (N) => {
  for (let i = 1; i <= N; i++) {
    const Tree = [];
    for (let j = 0; j < i; j++) {
      Tree.push("*");
    }
    console.log(Tree.join(""));
  }
};
const x = 5;
console.log(`Il tuo numero è: ${x}`);
halfTree(x);
/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/
console.log("----Esercizio 28----");

const fullTree = (N) => {
  let cont = 0;
  for (let i = 1; i <= N; i++) {
    const Tree = [];
    for (let j = 0; j < i + (i - 1); j++) {
      Tree.push("*");
      cont++;
    }
    for (let j = 0; j < (N + (N - 1) - cont) / 2; j++) {
      Tree.push(" ");
      Tree.unshift(" ");
    }
    console.log(Tree.join(""));
    cont = 0;
  }
};

console.log(`Il tuo numero è: ${x}`);
fullTree(x);
/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
console.log("----Esercizio 29----");
const isItPrime = (N) => {
  for (let i = 2; i < N; i++) {
    if (N % i === 0) return console.log("Numero non primo");
  }
  return console.log("Numero primo");
};
isItPrime(79);
