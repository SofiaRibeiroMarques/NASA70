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

const typeIcons = {
  code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
  visual: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>`,
  interaction: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5"></path></svg>`,
  data: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>`,
  audio: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5L6 9H2v6h4l5 4V5z"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>`,
  three: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>`,
  default: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`
};

function getProjectIcon(tags = []) {
  const t = tags.map(v => v.toLowerCase());
  if (t.some(tag => ['codice', 'programmazione', 'p5.js', 'javascript', 'generativo'].includes(tag))) return typeIcons.code;
  if (t.some(tag => ['video', 'visuale', 'animazione', 'cinema', 'narrazione', 'storia'].includes(tag))) return typeIcons.visual;
  if (t.some(tag => ['interazione', 'interaction', 'gioco', 'game', 'ux', 'esperimento'].includes(tag))) return typeIcons.interaction;
  if (t.some(tag => ['dati', 'data', 'mappa', 'visualization', 'visualizzazione', 'grafico'].includes(tag))) return typeIcons.data;
  if (t.some(tag => ['audio', 'suono', 'sound', 'musica', 'ambiente'].includes(tag))) return typeIcons.audio;
  if (t.some(tag => ['3d', 'modelli', 'three.js', 'vr', 'spazio'].includes(tag))) return typeIcons.three;
  return typeIcons.default;
}

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

const pageMap=document.getElementById('page-map'),pageList=document.getElementById('page-list'),pagePlanet=document.getElementById('page-planet');

function showView(id){
  [pageMap,pageList,pagePlanet].forEach(p=>{
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

function renderPlanetProjects(key) {
  const d = planets[key];
  const grid = document.getElementById('projects-grid');
  const nameEl = document.getElementById('planet-name');
  
  if (!d) return;
  nameEl.textContent = d.name;
  
  grid.innerHTML = d.projects.length 
    ? d.projects.map((p, i) => `
        <div class="project-list-row" data-index="${i}" style="cursor:pointer">
          <div class="project-alignment-spacer"></div>
          <div class="project-list-row-info">
            <span class="project-list-row-name">${p.title}</span>
            <span class="project-list-row-sub">by ${p.tag}</span>
          </div>
          <span class="project-list-row-arrow">&#8594;</span>
        </div>`).join('')
    : '<div class="empty-state">No projects found for this destination.</div>';

  grid.querySelectorAll('.project-list-row').forEach(row => {
    row.addEventListener('click', () => {
      const proj = d.projects[row.dataset.index];
      toggleProjectAccordion(row, proj);
    });
  });
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

document.getElementById('back-btn').addEventListener('click', () => {
  showView('page-list');
});

function getAllProjects(){
  return Object.entries(planets).flatMap(([k,v])=>v.projects.map(p=>({...p,planetKey:k})));
}

document.querySelectorAll('#site-logo').forEach(logo=>logo.addEventListener('click',()=>showView('page-map')));

function buildSearch(inputId,resultsId){
  const input=document.getElementById(inputId),results=document.getElementById(resultsId);
  if(!input||!results)return;
  input.addEventListener('input',e=>{
    const q=e.target.value.toLowerCase().trim();
    if(q.length<2){results.classList.remove('visible');return}
    const filtered=getAllProjects().filter(p=>
      p.title.toLowerCase().includes(q)||p.tag.toLowerCase().includes(q)||
      (p.desc&&p.desc.toLowerCase().includes(q))||(p.tags&&p.tags.some(t=>t.toLowerCase().includes(q)))
    );
    results.innerHTML=filtered.length
      ?filtered.map(p=>`<div class="search-item" onclick="window.open('${p.link}','_blank')">
          <div class="search-item-title">${p.title}</div>
          <div class="search-item-meta">${p.tag} &middot; ${planets[p.planetKey].name}</div>
          ${p.desc?`<div class="search-item-desc">${p.desc}</div>`:''}
        </div>`).join('')
      :'<div style="padding:12px;font-size:9px;color:rgba(255,255,255,.25);letter-spacing:.04em">no results</div>';
    results.classList.add('visible');
  });
}
buildSearch('search-input','search-results');
buildSearch('search-input-planet','search-results-planet');

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
  const msgEl    = document.getElementById('cd-status-msg');
  const flashEl  = document.getElementById('cd-flash');
  const speedBtn = document.getElementById('cd-speed-btn');
  let totalSec = 11; 
  let tickDelay = 1000;

  speedBtn.addEventListener('click', () => {
    tickDelay = 50;
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

  function setMsg(m) { if(msgEl) msgEl.textContent = m; }

  const events = [
    { at: 10, fn: () => { setMsg('Guidance is internal'); } },
    { at: 8,  fn: () => { setMsg('Ignition sequence start'); timerEl.classList.add('cd-urgent'); } },
    { at: 3,  fn: () => { timerEl.classList.add('cd-warning'); } },
    { at: 1,  fn: () => { setMsg('All engines running'); timerEl.classList.add('cd-final'); } },
  ];

  function launch() {
    speedBtn.style.display = 'none';
    timerEl.innerHTML = 'LIFTOFF';
    timerEl.style.letterSpacing = '0.06em';
    timerEl.classList.remove('cd-final','cd-urgent','cd-warning');
    timerEl.style.color = '#fff';
    setMsg('We have a liftoff');
    setTimeout(() => {
      if(flashEl) flashEl.classList.add('go');
      setTimeout(() => {
        if(flashEl) flashEl.classList.remove('go');
        screen.classList.add('hidden-countdown');
        setTimeout(() => {
          screen.style.display = 'none';
          showView('page-map');
        }, 800);
      }, 150);
    }, 900);
  }

  function tick() {
    totalSec--;
    events.forEach(ev => { if (totalSec === ev.at) ev.fn(); });
    if (timerEl) timerEl.innerHTML = fmt(totalSec);
    if (totalSec <= 0) {
      setTimeout(launch, tickDelay);
      return;
    }
    setTimeout(tick, tickDelay);
  }
  tick();
})();