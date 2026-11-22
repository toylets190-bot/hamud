/* Menu do celular montado a partir de nav.desktop-nav (fonte única). Links que só existiam no menu antigo vão para "Mais". */
(function(){try{
var m=document.getElementById('mobileMenu'),nav=document.querySelector('nav.desktop-nav');if(!m||!nav)return;
var old=[].slice.call(m.querySelectorAll('a')).map(function(a){return{h:a.getAttribute('href'),t:a.textContent.trim()}}),cta=m.querySelector('button.btn-primary'),seen={},out='';
function link(h,t){seen[h]=1;return '<a href="'+h+'" data-mm>'+t+'</a>'}
[].slice.call(nav.children).forEach(function(n){
 if(n.tagName==='A'){out+=link(n.getAttribute('href'),n.textContent.trim())}
 else if(n.classList.contains('nav-g')){var gb=n.querySelector('.nav-gb'),items='';
  n.querySelectorAll('.nav-dd a').forEach(function(a){var b=a.querySelector('b'),i=a.querySelector('.nd-i');items+=link(a.getAttribute('href'),(i?i.textContent+' ':'')+(b?b.textContent:a.textContent.trim()))});
  out+='<details class="mm-g"><summary>'+(gb?gb.firstChild.textContent.trim():'Menu')+'</summary>'+items+'</details>'}});
var extra='';old.forEach(function(o){if(o.h&&!seen[o.h]){extra+=link(o.h,o.t);seen[o.h]=1}});
if(extra)out+='<details class="mm-g"><summary>Mais</summary>'+extra+'</details>';
m.innerHTML=out;if(cta)m.appendChild(cta);
m.addEventListener('click',function(e){if(e.target.closest('a[data-mm]')&&window.toggleMobileMenu)toggleMobileMenu()});
}catch(e){console.warn('menu-unico',e)}})();
