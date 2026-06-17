const planets = {
  solarsystem:{name:"Solar System",sub:"Milky Way · Orion Arm",desc:"Our planetary system, a collection of celestial bodies gravitationally bound to the Sun.",projects:[]},
  sun:{name:"Sun",sub:"Parent star · system center",desc:"The star at the center of our solar system, the primary source of energy for life on Earth.",projects:[]},
  mercury:{name:"Mercury",sub:"Rocky planet · first orbit",desc:"The smallest planet and closest to the Sun, with extreme temperatures and a cratered surface.",projects:[]},
  venus:{name:"Venus",sub:"Rocky planet · second orbit",desc:"A rocky planet with a dense and toxic atmosphere, known for its extreme greenhouse effect.",projects:[]},
  earth:{name:"Earth",sub:"Wandering planet · third orbit",desc:"The only known planet to host life, characterized by liquid oceans and an oxygen-rich atmosphere.",projects:[]},
  moon:{name:"Moon",sub:"Natural satellite · earth orbit",desc:"Earth's only natural satellite, essential for stabilizing the Earth's axis of rotation and influencing tides.",projects:[]},
  mars:{name:"Mars",sub:"Rocky planet · fourth orbit",desc:"The 'Red Planet', a subject of great interest in the search for extraterrestrial life and future human missions.",projects:[]},
  jupiter:{name:"Jupiter",sub:"Gas giant · fifth orbit",desc:"The largest planet in the solar system, a gas giant with a Great Red Spot, a centuries-old storm.",projects:[]},
  saturn:{name:"Saturn",sub:"Gas giant · sixth orbit",desc:"Famous for its spectacular rings, it is the second largest planet in the solar system.",projects:[]},
  uranus:{name:"Uranus",sub:"Ice giant · seventh orbit",desc:"An ice giant with a unique axial tilt, causing it to 'roll' on its side.",projects:[]},
  neptune:{name:"Neptune",sub:"Ice giant · eighth orbit",desc:"The farthest planet from the Sun, an ice giant with extremely strong winds and an intense blue color.",projects:[]},
  nebula:{name:"Stars",sub:"Deep space · nebula region",desc:"Vast clouds of interstellar gas and dust where stars are born, or the remains of exploded stars.",projects:[]},
  satellites:{name:"Satellites",sub:"Low earth orbit · artificial network",desc:"Artificial objects launched into orbit for purposes such as communication, Earth observation, and navigation.",projects:[]},
  deepspace:{name:"Deep Space",sub:"Extra-solar regions · exoplanets",desc:"The vast and unexplored regions beyond our solar system, rich in galaxies, quasars, and black holes.",projects:[]},
};

const planetIcons = {
  solarsystem: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><circle cx="12" cy="12" r="2" fill="currentColor"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="9"/></svg>`,
  sun: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><circle cx="12" cy="12" r="8"/><line x1="12" y1="4" x2="12" y2="20"/><line x1="4" y1="12" x2="20" y2="12"/></svg>`,
  mercury: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><circle cx="12" cy="12" r="3"/></svg>`,
  venus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><circle cx="12" cy="12" r="4.5"/></svg>`,
  earth: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><circle cx="12" cy="12" r="5.5"/><circle cx="12" cy="12" r="9" stroke-width="0.5" stroke-dasharray="1 1"/></svg>`,
  moon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><circle cx="12" cy="12" r="2"/></svg>`,
  mars: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><circle cx="12" cy="12" r="4"/></svg>`,
  jupiter: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><circle cx="12" cy="12" r="8"/></svg>`,
  saturn: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><circle cx="12" cy="12" r="5"/><ellipse cx="12" cy="12" rx="10" ry="3"/></svg>`,
  uranus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><circle cx="12" cy="12" r="6"/></svg>`,
  neptune: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><circle cx="12" cy="12" r="6"/></svg>`,
  satellites: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M9 10h6v4H9zM2 11h7v2H2zM15 11h7v2h-7zM12 7v3M12 14v3"/></svg>`,
  nebula: `<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="8" cy="8" r="1.5"/><circle cx="16" cy="14" r="2"/><circle cx="14" cy="6" r="1"/></svg>`,
  deepspace: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(-30 12 12)"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/></svg>`
};

async function loadData(){
  try{
    const data=await(await fetch('https://ixd-supsi.github.io/n70api/data.json')).json();
    const imgBase = 'https://ixd-supsi.github.io/n70api/immagini/';

    data.forEach(p=>{
      let imgArr = Array.isArray(p.immagine) ? p.immagine : (p.immagine ? [p.immagine] : []);
      
      const proj={
        title:p.titolo,
        desc:p.descrizione,
        tag:p.autore,
        link:p.url,
        img: imgArr.length ? imgBase + imgArr[0] : '',
        imgs: imgArr.map(i => imgBase + i),
        tags:p.tags};
      const a=p.autore;
      const key=['Luca Mazzola', 'Michelle Chicherio'].includes(a)?'sun':
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
loadData();

const pageMap=document.getElementById('page-map'),pageList=document.getElementById('page-list');

function showView(id){
  [pageMap,pageList].forEach(p=>{
    p.classList.toggle('visible',p.id===id);
    p.classList.toggle('hidden',p.id!==id);
  });
}

function showPlanet(key,rowEl,forceOpen=false){
  document.querySelectorAll('.planet-drawer').forEach(d=>{if(d.previousElementSibling!==rowEl)d.classList.remove('open')});
  if(pageList.classList.contains('hidden'))showView('page-list');
  let drawer=rowEl.nextElementSibling;
  if(!drawer||!drawer.classList.contains('planet-drawer')){
    drawer=document.createElement('div');
    drawer.className='planet-drawer';
    rowEl.parentNode.insertBefore(drawer,rowEl.nextSibling);
  }
  if(drawer.classList.contains('open')&&!forceOpen){drawer.classList.remove('open');return}
  const d=planets[key];
  if(!d || !d.projects.length) {
    console.warn("No projects for:", key);
    return;
  }
  drawer.innerHTML=`<div class="drawer-content">
    <div class="project-table-header">
      <div class="project-alignment-spacer"></div>
      <div>Title</div>
      <div>Author</div>
      <div>Note</div>
      <div></div>
    </div>
    <div class="drawer-projects-grid">
      ${d.projects.map((p, i)=>`
        <div class="project-card" data-index="${i}" style="cursor:pointer">
          <div class="project-alignment-spacer"></div>
          <div class="project-title">${p.title}</div>
          <div class="project-tag">by ${p.tag}</div>
          <div class="project-desc-cell">${p.desc || ''}</div>
          <div><a href="${p.link}" target="_blank" class="visit-btn" onclick="event.stopPropagation()">Visit project</a></div>
        </div>`).join('')}
    </div>
  </div>`;

  drawer.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
      const proj = d.projects[card.dataset.index];
      toggleProjectAccordion(card, proj);
    });
  });
  setTimeout(()=>drawer.classList.add('open'),10);
}

function toggleProjectAccordion(row, proj) {
  let projDrawer = row.nextElementSibling;
  if (!projDrawer || !projDrawer.classList.contains('project-details-drawer')) {
    projDrawer = document.createElement('div');
    projDrawer.className = 'project-details-drawer';
    row.parentNode.insertBefore(projDrawer, row.nextSibling);

    projDrawer.addEventListener('click', () => {
      projDrawer.classList.remove('open');
      row.classList.remove('active-card');
    });
  }
  if (projDrawer.classList.contains('open')) {
    projDrawer.classList.remove('open');
    row.classList.remove('active-card');
  } else {
    row.parentNode.querySelectorAll('.project-details-drawer').forEach(d => d.classList.remove('open'));
    row.parentNode.querySelectorAll('.project-card, .project-list-row').forEach(r => r.classList.remove('active-card'));
    projDrawer.innerHTML = `
      <div class="project-details-inner">
        <div class="project-alignment-spacer"></div>
        <div class="project-detail-images">
          <img src="${proj.imgs[0]}" class="project-detail-img" onerror="this.style.display='none'">
        </div>
      </div>`;
    setTimeout(() => {
      projDrawer.classList.add('open');
      row.classList.add('active-card');
    }, 10);
  }
}

document.querySelectorAll('.planet-row[data-planet]').forEach(row=>{
  row.addEventListener('click',()=>showPlanet(row.dataset.planet,row));
});

document.querySelectorAll('.random-project-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const all=getAllProjects().filter(p=>p.link&&p.link!=='#'&&p.link!=='https://...');
    if(all.length)window.open(all[Math.floor(Math.random()*all.length)].link,'_blank');
  });
});

document.querySelectorAll('.planet-hit, .sidebar-item').forEach(el=>{
  el.addEventListener('click',(e)=>{
    e.stopPropagation();
    const key=el.dataset.planet;
    const row=document.querySelector(`.planet-row[data-planet="${key}"]`);
    showView('page-list');
    setTimeout(()=>{if(row){row.scrollIntoView({behavior:'smooth',block:'start'});showPlanet(key,row,true)}},100);
  });
});

function getAllProjects(){
  return Object.entries(planets).flatMap(([k,v])=>v.projects.map(p=>({...p,planetKey:k})));
}

document.querySelectorAll('#site-logo').forEach(logo=>logo.addEventListener('click',()=>showView('page-map')));

function buildSearch(inputId){
  const input=document.getElementById(inputId);
  if(!input)return;

  input.addEventListener('input',e=>{
    const q=e.target.value.toLowerCase().trim();

    if (inputId === 'search-input') {
      // FILTRO PAGINA ARCHIVIO (Lista Pianeti)
      const rows = document.querySelectorAll('.planet-row');
      const categories = document.querySelectorAll('.list-category');

      rows.forEach(row => {
        const key = row.dataset.planet;
        const pData = planets[key];
        const match = !q || 
                      pData.name.toLowerCase().includes(q) || 
                      pData.projects.some(proj => 
                        proj.title.toLowerCase().includes(q) || 
                        proj.tag.toLowerCase().includes(q)
                      );
        row.style.display = match ? 'grid' : 'none';
      });

      categories.forEach(cat => {
        let next = cat.nextElementSibling;
        let hasVisible = false;
        while (next && next.classList.contains('planet-row')) {
          if (next.style.display !== 'none') hasVisible = true;
          next = next.nextElementSibling;
        }
        cat.style.display = hasVisible ? 'block' : 'none';
      });

      if (q.length >= 3) {
        for (const [key, pData] of Object.entries(planets)) {
          const proj = pData.projects.find(p => 
            p.title.toLowerCase().includes(q) || 
            p.tag.toLowerCase().includes(q)
          );
          if (proj) {
            const row = document.querySelector(`.planet-row[data-planet="${key}"]`);
            if (row && row.style.display !== 'none') {
              let drawer = row.nextElementSibling;
              // Apre il pianeta se non è già aperto
              if (!drawer || !drawer.classList.contains('open')) {
                showPlanet(key, row, true);
              }
              setTimeout(() => {
                const d = row.nextElementSibling;
                if (d && d.classList.contains('planet-drawer')) {
                  const cards = d.querySelectorAll('.project-card');
                  const card = Array.from(cards).find(c => {
                    const title = c.querySelector('.project-title').innerText.toLowerCase();
                    const author = c.querySelector('.project-tag').innerText.toLowerCase();
                    // Controlla se il testo cercato è nel titolo o nell'autore del progetto trovato
                    return title.includes(q) || author.includes(q);
                  });
                  if (card) {
                    const projDrawer = card.nextElementSibling;
                    if (!projDrawer || !projDrawer.classList.contains('open')) {
                      toggleProjectAccordion(card, proj);
                    }
                  }
                }
              }, 200);
              break; 
            }
          }
        }
      }

    }
  });
}
buildSearch('search-input');

document.addEventListener('click',e=>{
  if(!e.target.closest('.search-wrap'))
    document.querySelectorAll('.search-results').forEach(r=>r.classList.remove('visible'));
});

(function() {
  const s = document.getElementById('solar'), v = document.getElementById('viewport');
  const resetBtn = document.getElementById('reset-map-btn');
  let sc = 1, tx = 0, ty = 0, isDragging = false, lx, ly, initialDist = 0;

  const update = () => {
    v.style.transform = `translate(${tx}px, ${ty}px) scale(${sc})`;
    const isDefault = Math.abs(sc - 0.7) < 0.01 && Math.abs(tx - 150) < 1 && Math.abs(ty - 133) < 1;
    resetBtn?.classList.toggle('visible', !isDefault);
  };

  s.addEventListener('wheel', e => {
    e.preventDefault();
    const f = Math.pow(1.1, -e.deltaY / 100);
    const nsc = Math.min(Math.max(sc * f, 0.3), 8);
    const px = 500, py = 310;
    tx = px - (px - tx) * (nsc / sc);
    ty = py - (py - ty) * (nsc / sc);
    sc = nsc;
    update();
  }, { passive: false });

  s.addEventListener('mousedown', e => {
    if (e.button !== 0 || e.target.closest('.planet-hit')) return;
    isDragging = true; lx = e.clientX; ly = e.clientY;
  });

  window.addEventListener('mousemove', e => {
    if (!isDragging) return;
    tx += e.clientX - lx; ty += e.clientY - ly;
    lx = e.clientX; ly = e.clientY;
    update();
  });

  window.addEventListener('mouseup', () => { isDragging = false; });

  s.addEventListener('touchstart', e => {
    if (e.target.closest('.planet-hit')) return;
    if (e.touches.length === 1) {
      isDragging = true; lx = e.touches[0].clientX; ly = e.touches[0].clientY;
    } else if (e.touches.length === 2) {
      initialDist = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);
    }
  }, { passive: false });

  s.addEventListener('touchmove', e => {
    e.preventDefault();
    if (e.touches.length === 1 && isDragging) {
      tx += e.touches[0].clientX - lx; ty += e.touches[0].clientY - ly;
      lx = e.touches[0].clientX; ly = e.touches[0].clientY;
      update();
    } else if (e.touches.length === 2) {
      const dist = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);
      const f = dist / initialDist;
      const nsc = Math.min(Math.max(sc * f, 0.3), 8);
      const px = 500, py = 310;
      tx = px - (px - tx) * (nsc / sc);
      ty = py - (py - ty) * (nsc / sc);
      sc = nsc;
      initialDist = dist;
      update();
    }
  }, { passive: false });

  s.addEventListener('touchend', () => { isDragging = false; });
  
  const resetMap = () => {    
    const sunSvgX = 500;
    const sunSvgY = 310;
    sc = 0.7; 
    tx = 500 - sunSvgX * sc;
    ty = 350 - sunSvgY * sc; 
    update();
  };

  document.getElementById('reset-map-btn')?.addEventListener('click', resetMap);
  s.addEventListener('dblclick', resetMap);
  setTimeout(resetMap, 100);
})();

(function() {
  const screen   = document.getElementById('page-countdown');
  const timerEl  = document.getElementById('cd-timer');
  const flashEl  = document.getElementById('cd-flash');
  const speedBtn = document.getElementById('cd-speed-btn');
  let totalSec = 6; 
  let tickDelay = 1000;

  speedBtn.addEventListener('click', () => {
    tickDelay = 75; // Rallentato a 1.5x (da 50ms a 75ms)
    speedBtn.style.opacity = '0';
    speedBtn.style.pointerEvents = 'none';
  });

  function fmt(s) {
    const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), sec = s % 60;
    return `
      <div class="cd-unit"><span>T-${h}</span><span class="cd-label-item">HOUR</span></div>
      <div class="cd-sep">:</div>
      <div class="cd-unit"><span>${String(m).padStart(2,'0')}</span><span class="cd-label-item">MINUTE</span></div>
      <div class="cd-sep">:</div>
      <div class="cd-unit"><span>${String(sec).padStart(2,'0')}</span><span class="cd-label-item">SECOND</span></div>`;
  }

  const events = [
    { at: 5,  fn: () => { timerEl.classList.add('cd-urgent'); } },
    { at: 3,  fn: () => { timerEl.classList.add('cd-warning'); } },
    { at: 1,  fn: () => { timerEl.classList.add('cd-final'); } },
  ];

  function launch() {
    speedBtn.style.display = 'none';
    timerEl.classList.remove('cd-final','cd-urgent','cd-warning');
    timerEl.style.color = '#fff';
    setTimeout(() => {
      if(flashEl) flashEl.classList.add('go');
      setTimeout(() => {
        if(flashEl) flashEl.classList.remove('go');
        screen.classList.add('hidden-countdown');
        setTimeout(() => {
          screen.style.display = 'none';
          showView('page-map');
        }, 400);
      }, 100);
    }, 100);
  }

  function tick() {
    totalSec--;
    events.forEach(ev => { if (totalSec === ev.at) ev.fn(); });
    if (timerEl) timerEl.innerHTML = fmt(totalSec);
    if (totalSec <= 0) {
      setTimeout(launch, Math.min(tickDelay, 300));
      return;
    }
    setTimeout(tick, tickDelay);
  }
  tick();
})();

const infoBtns = document.querySelectorAll('.site-header .info-btn'); // Seleziona solo i bottoni 'About' nell'header
const infoModal = document.getElementById('info-modal');
const infoCloseElems = document.querySelectorAll('.info-close-trigger'); // Seleziona il bottone 'Close' in fondo al testo

infoBtns.forEach(btn => {
  btn.addEventListener('click', () => infoModal.classList.add('visible'));
});

infoCloseElems.forEach(el => el.addEventListener('click', () => infoModal.classList.remove('visible'))); // Gestisce la chiusura dal bottone 'Close'

infoModal?.addEventListener('click', (e) => {
  if (e.target === infoModal) infoModal.classList.remove('visible');
});