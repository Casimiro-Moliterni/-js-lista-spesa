// Consegna:
// Data una lista della spesa:
// const list = [
    // 'Latte',
    // 'Cacao',
    // 'Insalata',
    // 'Carote',
    // 'Pomodori',
    // 'Piatti pronti'
// ];
// Stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente.
// Svolgete questo esercizio in 2 versioni: col ciclo for e col ciclo while.
// Consigli:
// - Ricordiamoci di inizializzare la variabile di contatore prima dell'inizio del ciclo while
// - Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all'interno ciclo while


// creare lista della spesa con arrow

const list = [
    'Latte',
    'Cacao',
    'Insalata',
    'Carote',
    'Pomodori',
    'Piatti pronti'
];

const ulContainer = document.querySelector('.list');
// creare con ciclo for ul list 
for(let i = 0 ; i < list.length ; i++){
      thisElementList = list[i];
      console.log(thisElementList)
        

      const newLi = document.createElement('li');
      newLi.innerHTML = thisElementList;
      ulContainer.append(newLi);
}



// dichiarare grandezza del contenuto in base alla grandezza della lista 

// stampare in dom 