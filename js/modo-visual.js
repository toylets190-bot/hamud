/* Modo de exibição: Auto | PC | Celular (guardado no navegador).
   • No computador, "Celular" abre uma moldura de celular com o próprio site (?frame=1) para testar tudo.
   • No celular, "PC" força o layout largo (viewport 1280). */
(function(){try{
var de=document.documentElement;
if(new URLSearchParams(location.search).get('frame')==='1'){de.classList.add('is-frame');return}
var KEY='scec_view',get=function(){try{return localStorage.getItem(KEY)||'auto'}catch(e){return'auto'}},put=function(v){try{localStorage.setItem(KEY,v)}catch(e){}};
var vp=document.querySelector('meta[name=viewport]'),VP0=vp?vp.content:'',phone=/Android|iPhone|iPad|iPod|Mobi/i.test(navigator.userAgent);
var DEV=[['iPhone SE',375,667],['iPhone 14',390,844],['Galaxy S23',412,915],['iPad mini',768,1024]],dev=1,land=false,stage=null;
function dims(){var d=DEV[dev];return land?[d[2],d[1]]:[d[1],d[2]]}
function fit(){if(!stage)return;var d=dims(),w=d[0]+24,h=d[1]+46,side=innerWidth>760?298:0,top=innerWidth>760?0:150,sc=Math.min(1,(innerHeight-32-top)/h,(innerWidth-32-side)/w),ph=stage.querySelector('.ph'),wr=stage.querySelector('.ph-wrap'),f=stage.querySelector('iframe');
 f.style.width=d[0]+'px';f.style.height=d[1]+'px';ph.style.transform='scale('+sc+')';wr.style.width=w*sc+'px';wr.style.height=h*sc+'px'}
function src(){return location.href.split('#')[0].split('?')[0]+'?frame=1'+location.hash}
function openStage(){if(stage)return;stage=document.createElement('div');stage.id='phoneStage';
 stage.innerHTML='<div class="ph-side"><h2>Modo celular</h2><p>O site roda aqui como em um celular de verdade. Teste menu, ingressos, loja e sócio.</p><div class="ph-dev">'+DEV.map(function(d,i){return '<button type="button" class="ph-b'+(i===dev?' on':'')+'" data-dev="'+i+'">'+d[0]+'</button>'}).join('')+'</div><button type="button" class="ph-b" data-a="rot">⟳ Girar tela</button><button type="button" class="ph-b" data-a="reload">↻ Recarregar</button><button type="button" class="ph-b pc" data-a="pc">🖥️ Voltar ao PC</button></div><div class="ph-wrap"><div class="ph"><i class="ph-notch"></i><iframe title="Site em modo celular" allow="clipboard-write"></iframe></div></div>';
 stage.querySelector('iframe').src=src();de.style.overflow='hidden';document.body.appendChild(stage);fit();
 stage.addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;
  if(b.dataset.dev){dev=+b.dataset.dev;land=false;stage.querySelectorAll('[data-dev]').forEach(function(x){x.classList.toggle('on',x===b)});fit()}
  else if(b.dataset.a==='rot'){land=!land;fit()}
  else if(b.dataset.a==='reload'){stage.querySelector('iframe').src=src()}
  else if(b.dataset.a==='pc'){put('pc');apply()}})}
function closeStage(){if(!stage)return;stage.remove();stage=null;de.style.overflow=''}
function apply(){var m=get();
 if(vp)vp.content=(m==='pc'&&phone)?'width=1280':VP0;
 var eff=m==='auto'?(phone?'mobile':'pc'):m;
 document.querySelectorAll('.vs button').forEach(function(b){b.classList.toggle('on',b.dataset.v===eff)});
 var mm=document.querySelector('.mm-view');if(mm)mm.textContent=m==='pc'?'📱 Voltar à versão celular':'🖥️ Ver versão PC';
 if(m==='mobile'&&!phone)openStage();else closeStage()}
var tb=document.querySelector('.topbar-nav'),th=document.getElementById('themeToggleBtn');
if(tb){var sw=document.createElement('div');sw.className='vs';sw.setAttribute('role','group');sw.setAttribute('aria-label','Modo de exibição');
 sw.innerHTML='<button type="button" data-v="pc">🖥️ PC</button><button type="button" data-v="mobile">📱 Celular</button>';
 tb.insertBefore(sw,th||null);sw.addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;put(b.dataset.v);apply()})}
var m=document.getElementById('mobileMenu');
if(m&&phone){var b=document.createElement('button');b.type='button';b.className='btn-outline mm-view';b.style.cssText='width:100%;margin-top:12px';
 b.onclick=function(){put(get()==='pc'?'auto':'pc');apply();if(window.toggleMobileMenu&&m.classList.contains('open'))toggleMobileMenu()};m.appendChild(b)}
addEventListener('resize',fit);addEventListener('keydown',function(e){if(e.key==='Escape'&&stage){put('pc');apply()}});
apply();
}catch(e){console.warn('modo-visual',e)}})();
