SUPSI 2026  
Corso d’interaction design, CV429.01  
Docenti: A. Gysin, G. Profeta  

Progetto 2: NASA 70 - Archivio dei progetti

# NASA 70
Autore: Sofia Marques \
[NASA70](https://sofiaribeiromarques.github.io/NASA70/)


## Introduzione e tema
...


## Riferimenti progettuali
Per la parte della mappa interattiva mi sono ispirata al sito [NASA Eyes on the Solar System](https://eyes.nasa.gov/apps/solar-system/#/home), che mostra un sistema di esplorazione del sistema solare attraverso elementi interattivi e navigabili. L’obiettivo, come giä citato nel "Introduzione e tema", è stato quello di ricreare una navigazione intuitiva in cui ogni pianeta diventa un elemento cliccabile contenente i progetti legati ad esso.

Per la pagina dell'archivio, ho deciso di organizzare gli elementi seguendo una struttura simile alle tabelle Excel, facendo si che la visualizzazione sia il più chiaro e accessibile possibile, questo per evitare che l'utente non si perda all'interno del sito.


## Design dell’interfaccia e modalità di interazione
Il sito utilizza un layout basato su una navigazione lineare. La struttura è progettata per simulare un viaggio spaziale, accompagnando l’utente attraverso le diverse fasi dell’esperienza.
L’interazione inizia con un countdown e "liftoff" che introduce il tema della missione spaziale. Successivamente, l’utente raggiunge una mappa interattiva del sistema solare e del deep space, dove può scegliere liberamente la propria destinazione.
Ogni pianeta o elemento spaziale rappresenta una categoria e permette di accedere ai relativi progetti. Se uno di questi elementi viene cliccato, l'utente verrä portato alla pagina d'archivio dove gli verrä mostrato tutti i progetti relativi al pianeta che precedentemente ha selezionato.

Uno degli elementi centrali del progetto è proprio la mappa interattiva, che trasforma l’archivio in uno spazio esplorabile. Invece di cercare i contenuti tramite menu tradizionali, l’utente esplora il sito scegliendo direttamente una destinazione.

<img width="3004" height="1594" alt="countdown" src="https://github.com/user-attachments/assets/31f8f993-afa0-45f3-80d9-93dcc35bc250" />
<img width="3004" height="1594" alt="mappa_interattiva" src="https://github.com/user-attachments/assets/41d2add3-1455-4bd5-8821-488c6fd65f15" />
<img width="3004" height="1594" alt="Archive" src="https://github.com/user-attachments/assets/28b39d9b-34b8-4e79-83e5-81a05c468f6b" />


## Tecnologia usata
A differenza di altri archivi digitali, il sito che ho realizzato utilizza un sistema di filtraggio "nascosto, ovvero la mappa interattiva, permettendo all’utente di selezionare e esplorare i contenuti in maniera più immediata in base alle proprie scelte, senza dover scrollare in continuazione per trovare il progetto che gli interessa visitare. Questa logica migliora l’esperienza utente e rende la navigazione più fluida, immediata e immersiva.


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
      const key=['Luca Mazzola', 'Michelle Chicherio'].includes(a)?'solarsystem':
        ['Claudio Ceppi','Melissa Broggini','Davide Barattini'].includes(a)?'earth':
        ['Sofia Ribeiro Marques','Daniele Falcone','Riccardo Vosti'].includes(a)?'moon':
        a==='Nahele Belli'?'mars':
        a==='Alissa Bionda'?'nebula':
        ['Carla De Gennaro','Laura Pantani'].includes(a)?'satellites':
        a==='Djordja Krsteva'?'deepspace':null;
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

## Target e contesto d’uso
Rispetto ai target più specifici dei singoli progetti, questo archivio si rivolge a un pubblico più ampio, grazie alla varietà dei contenuti presenti, che spaziano da siti pensati per un pubblico giovane a progetti più orientati a professionisti del settore.
Può essere utilizzato sia in ambito didattico, come supporto a contenuti educativi legati allo spazio e al sistema solare, sia come esperienza esplorativa e interattiva capace di avvicinare il pubblico ai temi dell’esplorazione spaziale.
