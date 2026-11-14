// Skill dots
document.querySelectorAll('.dots').forEach(d=>{const n=+d.dataset.n;for(let i=0;i<5;i++){const s=document.createElement('s');if(i<n)s.className='f';d.appendChild(s)}});
document.getElementById('yr').textContent=new Date().getFullYear();

// Mobile menu
const toggle=document.getElementById('toggle'),nav=document.getElementById('nav');
toggle.addEventListener('click',()=>{const o=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',o)});
nav.addEventListener('click',e=>{if(e.target.tagName==='A'){nav.classList.remove('open');toggle.setAttribute('aria-expanded','false')}});

// Active link while scrolling
const links=[...nav.querySelectorAll('a')];
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){links.forEach(l=>l.classList.toggle('on',l.hash==='#'+e.target.id))}}),{rootMargin:'-40% 0px -55% 0px'});
document.querySelectorAll('section').forEach(s=>io.observe(s));

// Rotating role text
const words=['fast websites','responsive layouts','accessible forms','small useful tools'];
const el=document.getElementById('word');let wi=0,ci=words[0].length,del=true;
if(!matchMedia('(prefers-reduced-motion: reduce)').matches){
  (function tick(){
    const w=words[wi];
    if(del){ci--;if(ci<=0){del=false;wi=(wi+1)%words.length}}else{ci++;if(ci>=words[wi].length)del=true}
    el.textContent=words[wi].slice(0,Math.max(ci,0))||'\u00a0';
    setTimeout(tick,del&&ci>=words[wi].length-1?1800:del?40:80);
  })();
}

// Project rows expand
document.querySelectorAll('.proj button').forEach(b=>b.addEventListener('click',()=>{
  const p=b.parentElement,o=p.classList.toggle('open');b.setAttribute('aria-expanded',o);
}));

// Contact form validation
const form=document.getElementById('form');
form.addEventListener('submit',e=>{
  e.preventDefault();let bad=false;
  const rules={name:v=>v.trim()?'':'Enter your name.',email:v=>/^\S+@\S+\.\S+$/.test(v)?'':'Enter an email like name@example.com.',msg:v=>v.trim().length>=10?'':'Write at least 10 characters.'};
  for(const k in rules){const f=form.elements[k],m=rules[k](f.value);f.nextElementSibling.textContent=m;f.setAttribute('aria-invalid',!!m);if(m)bad=true}
  if(!bad){form.style.display='none';document.getElementById('ok').style.display='block'}
});
