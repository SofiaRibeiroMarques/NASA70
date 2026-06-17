SUPSI 2026  
Corso d’interaction design, CV429.01  
Docenti: A. Gysin, G. Profeta  

Progetto 2: NASA 70 - Archivio dei progetti

# NASA 70
Autore: Sofia Marques \
[NASA70](https://sofiaribeiromarques.github.io/NASA70/)


## Introduzione e tema
Il progetto nasce dall’idea di trasformare l’archivio in un’esperienza interattiva ispirata all’esplorazione dello spazio. L’obiettivo è rappresentare i diversi step delle missioni spaziali, dal lancio fino all’“arrivo” nella destinazione scelta, rendendo la navigazione più intuitiva e coinvolgente e sostituendo i menu tradizionali con una mappa interattiva.
L’utente viene introdotto con un breve countdown e un “liftoff”, che segnano l’inizio del viaggio. Da lì può esplorare una mappa interattiva, dove ogni pianeta rappresenta una categoria di progetti.


## Riferimenti progettuali
Per la parte della mappa interattiva mi sono ispirata al sito [NASA Eyes on the Solar System](https://eyes.nasa.gov/apps/solar-system/#/home), che mostra un sistema di esplorazione del sistema solare attraverso elementi interattivi e navigabili. L’obiettivo, come già citato nel "Introduzione e tema", è stato quello di ricreare una navigazione intuitiva in cui ogni pianeta diventa un elemento cliccabile contenente i progetti legati ad esso.

Per la pagina dell'archivio, ho deciso di organizzare gli elementi seguendo una struttura simile alle tabelle Excel, facendo si che la visualizzazione sia il più chiaro e accessibile possibile, questo per evitare che l'utente non si perda all'interno del sito.


## Design dell’interfaccia e modalità di interazione
Il sito utilizza un layout basato su una navigazione lineare. La struttura è progettata per simulare un viaggio spaziale, accompagnando l’utente attraverso le diverse fasi dell’esperienza.
L’interazione inizia con un countdown e "liftoff" che introduce il tema della missione spaziale. Successivamente, l’utente raggiunge una mappa interattiva del sistema solare e del deep space, dove può scegliere liberamente la propria destinazione.
Ogni pianeta o elemento spaziale rappresenta una categoria e permette di accedere ai relativi progetti. Se uno di questi elementi viene cliccato, l'utente verrà portato alla pagina d'archivio dove gli verrà mostrato tutti i progetti relativi al pianeta che precedentemente ha selezionato.

Uno degli elementi centrali del progetto è la mappa interattiva, che trasforma l’archivio in uno spazio esplorabile. Invece di cercare i contenuti tramite menu tradizionali, l’utente esplora il sito scegliendo direttamente una destinazione.


<img width="1511" height="846" alt="Ribeiro_Sofia_Countdown" src="https://github.com/user-attachments/assets/b44aaf38-862e-4588-8ceb-7d4e21f4cc74" />
<img width="1511" height="846" alt="Ribeiro_Sofia_Map" src="https://github.com/user-attachments/assets/809fedc4-0014-41de-bf94-c30839efc632" />
<img width="1511" height="846" alt="Ribeiro_Sofia__Archive" src="https://github.com/user-attachments/assets/99bf0caa-b449-4cc4-9033-f8e2445686c5" />


https://github.com/user-attachments/assets/51127802-da7b-483b-911d-fed97a54e85e





## Tecnologia usata
A differenza di altri archivi, il sito che ho realizzato utilizza un sistema di filtraggio "nascosto", ovvero la mappa interattiva, permettendo all’utente di selezionare e esplorare i contenuti in maniera più immediata in base alle proprie scelte, senza dover scrollare in continuazione per trovare il progetto che gli interessa visitare. Questa logica migliora l’esperienza utente e rende la navigazione più fluida, immediata e immersiva.


```JavaScript
async function loadData(){
  try{
    const data=await(await fetch('https://ixd-supsi.github.io/n70api/data.json')).json();
    data.forEach(p=>{
      let imgArr = Array.isArray(p.immagine) ? p.immagine : [p.immagine];
      // Se il progetto ha due immagini, carichiamo solo la seconda (solitamente quella quadrata)
      if (imgArr.length === 2) {
        imgArr = [imgArr[1]];
      }
      const proj={
        title:p.titolo,
        desc:p.descrizione,
        tag:p.autore,
        link:p.url,
        img:'immagini/'+imgArr[0],
        imgs: imgArr.map(i => 'immagini/' + i),
        tags:p.tags};
      const a=p.autore;
      const key=a==='Luca Mazzola'?'solarsystem':
        ['Claudio Ceppi','Melissa Broggini','Davide Barattini'].includes(a)?'earth':
        ['Sofia Ribeiro Marques','Daniele Falcone','Riccardo Vosti'].includes(a)?'moon':
        a==='Nahele Belli'?'mars':
        a==='Alissa Bionda'?'nebula':
        ['Carla De Gennaro','Laura Pantani'].includes(a)?'satellites':
        ['Michelle Chicherio','Djordja Krsteva'].includes(a)?'deepspace':null;
      if(key&&planets[key])planets[key].projects.push(proj);
    });
    document.querySelectorAll('.planet-row[data-planet]').forEach(row=>{
      const n=planets[row.dataset.planet]?.projects.length||0;
      const dist=row.querySelector('.planet-row-dist');
      if(dist)dist.textContent=n>0?(n===1?'1 project':`${n} projects`):'—';
    });
    // Inject icons into list view
    document.querySelectorAll('.planet-row').forEach(row => {
      row.querySelector('.planet-row-index').innerHTML = planetIcons[row.dataset.planet] || '';
    });
  }catch(e){console.error('Error loading data:',e)}
}
```

## Progettazione logo
Per quanto riguarda il logo che ho realizzato, ho deciso di renderlo coerente con la narrazione del sito. Visto che all’interno del sito l’utente può “diventare” un astronauta, ho deciso di inserire i due numeri (7 e 0) all’interno di due caschi da astronauta. Non solo perché volevo associare un numero a ciascun casco, ma anche per rappresentare il fatto che, in una missione spaziale, non c’è mai un solo astronauta a bordo.

<img width="314" height="203" alt="logo" src="https://github.com/user-attachments/assets/eaca686e-d92a-4361-bc21-858759584653" />



## Target e contesto d’uso
Rispetto ai target più specifici dei singoli progetti, questo archivio si rivolge a un pubblico più ampio, grazie alla varietà dei contenuti presenti, che spaziano da siti pensati per un pubblico giovane a progetti più orientati a professionisti del settore.
Può essere utilizzato sia in ambito didattico, come supporto a contenuti educativi legati allo spazio e al sistema solare, sia come esperienza esplorativa e interattiva capace di avvicinare il pubblico ai temi dell’esplorazione spaziale.
