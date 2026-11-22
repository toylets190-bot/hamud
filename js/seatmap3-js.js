(function(){try{
var $=function(q){return document.querySelector(q)};
var box=$('#seatMapBox'),X=window.SMX;if(!box||!X||typeof socQuote!=='function')return;
var types={},ho={},tm=false,mi=false,done=false,p3=null;
var brl2=function(v){return 'R$ '+Number(v).toFixed(2).replace('.',',')};
var esc=function(t){return String(t).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})};
var meia=function(){return X.sel.filter(function(i){return types[i]==='meia'}).length};
function dist(s){var dx=Math.max(345-s.x,0,s.x-910),dy=Math.max(315-s.y,0,s.y-625);return Math.round(Math.hypot(dx,dy)*105/565)}
/* totais reais: meia-entrada e taxa de conveniência entram no valor cobrado no pagamento */
var _sq=window.socQuote;
window.socQuote=function(pl,k,q){var r=_sq.apply(this,arguments),S=X.sel;if(!r||!S.length||q!==S.length||k!==chosenTicketSector)return r;
 var p=SECTOR_DATA[k].price,m=meia(),base=p*q,ratio=base?r.total/base:1,md=Math.round(m*p*.5*ratio*100)/100,net=Math.max(0,r.total-md),fee=(pl||net<=0)?0:Math.round(net*.1*100)/100,o=Object.assign({},r);
 o.total=Math.round((net+fee)*100)/100;o.saved=(r.saved||0)+md;o.fee=fee;o.md=md;o.lines=(r.lines||[]).concat(m?[m+' × meia-entrada (−50%)']:[]);return o};
X.after=function(){try{var P=$('#smPan'),S=X.sel,hd=P&&P.querySelector('.sm-hold');if(!hd||!S.length)return;
 var k=chosenTicketSector,pl=socPlan(),q=socQuote(pl,k,S.length),p=SECTOR_DATA[k].price,base=p*S.length,m=meia(),disc=Math.max(0,base-(q.total-(q.fee||0))),h='';
 S.forEach(function(id){var s=X.byId[id],t=types[id]==='meia';h+='<div class="sm3-row"><div><b>'+esc(X.lab(s))+'</b><small>≈ '+dist(s)+' m do gramado'+(s.pcd?' • ♿ acessível':'')+'</small></div><select data-ty="'+id+'" aria-label="Tipo de ingresso"><option value="int"'+(t?'':' selected')+'>Inteira</option><option value="meia"'+(t?' selected':'')+'>Meia-entrada</option></select><div class="sm3-pr">'+brl2(t?p/2:p)+'<button type="button" class="sm-chip" data-rm="'+id+'" aria-label="Remover lugar">✕</button></div><input data-ho="'+id+'" maxlength="40" placeholder="Nome do portador (opcional — ingresso nominal)" value="'+esc(ho[id]||'')+'"></div>'});
 h='<div class="sm3-lst">'+h+'</div><div class="sm3-tot"><div><span>Ingressos ('+S.length+')</span><span>'+brl2(base)+'</span></div>'+(disc>0?'<div class="g"><span>Descontos'+(pl?' (sócio'+(m?' + meia':'')+')':' (meia-entrada)')+'</span><span>−'+brl2(disc)+'</span></div>':'')+'<div><span>Taxa de conveniência'+(pl?' (isenta para sócio)':' (10%)')+'</span><span>'+brl2(q.fee||0)+'</span></div><div class="t"><span>Total a pagar</span><b>'+brl2(q.total)+'</b></div></div>'
 +(m?'<label class="sm3-ck"><input type="checkbox" id="sm3Mi"'+(mi?' checked':'')+'><span>Declaro que apresentarei na portaria documento que comprove o direito à meia-entrada.</span></label>':'')
 +'<label class="sm3-ck"><input type="checkbox" id="sm3Tm"'+(tm?' checked':'')+'><span>Li e aceito as regras de acesso ao estádio e a política de ingressos (simulação).</span></label>';
 hd.insertAdjacentHTML('beforebegin',h)}catch(e){console.warn(e)}};
box.addEventListener('change',function(e){var t=e.target;if(t.dataset&&t.dataset.ty){types[t.dataset.ty]=t.value;if(window.updateTicketSummary)updateTicketSummary();X.pan()}if(t.id==='sm3Tm')tm=t.checked;if(t.id==='sm3Mi')mi=t.checked});
box.addEventListener('input',function(e){var t=e.target;if(t.dataset&&t.dataset.ho)ho[t.dataset.ho]=t.value});
/* etapas */
box.insertAdjacentHTML('afterbegin','<div class="sm3-steps" id="sm3S" aria-label="Etapas da compra"></div>');
var ST=['Bloco','Seus dados','Pagamento','Ingresso'];
function steps(){var ov=$('#vpPayOv'),n=X.sel.length;if(n)done=false;var s=done&&!n?4:(ov&&ov.classList.contains('on'))?3:n?2:1,el=$('#sm3S');if(!el)return;
 el.innerHTML=ST.map(function(t,i){var c=i+1<s||s===4?'ok':i+1===s?'on':'';return '<span class="'+c+'"><b>'+(c==='ok'?'✓':i+1)+'</b>'+t+'</span>'}).join('')}
steps();setInterval(steps,700);
/* dados do comprador e nota de ingresso nominal */
var f=$('#ticketOrderForm');if(f){f.insertAdjacentHTML('beforebegin','<div class="sm3-note">🪪 O ingresso é nominal: leve um documento com foto. Cada lugar pode ter um portador diferente, e o nome é conferido na validação de entrada.</div>');
 var di=$('#ticketBuyerDoc'),ni=$('#ticketBuyerName');if(di)di.addEventListener('input',function(){if(/^[\d.\-]*$/.test(di.value)){var d=di.value.replace(/\D/g,'').slice(0,11);di.value=d.replace(/(\d{3})(\d)/,'$1.$2').replace(/(\d{3})\.(\d{3})(\d)/,'$1.$2.$3').replace(/(\d{3})\.(\d{3})\.(\d{3})(\d)/,'$1.$2.$3-$4')}});
 if(ni&&!ni.value){try{var u=userSession||{};ni.value=u.name||u.nome||''}catch(e){}}}
/* trava de compra: termos e declaração de meia */
var _h=window.handleTicketCheckout;
window.handleTicketCheckout=function(e){var S=X.sel,stop=function(m){if(e&&e.preventDefault)e.preventDefault();X.toast(m);return};
 if(S.length&&S.length===ticketQty){if(!tm)return stop('Aceite as regras de acesso e a política de ingressos para continuar.');if(meia()&&!mi)return stop('Confirme a declaração de meia-entrada para continuar.')}
 p3={n0:userSession.tickets.length,ids:S.slice(),ty:Object.assign({},types),ho:Object.assign({},ho),order:'PED-'+Date.now().toString(36).toUpperCase().slice(-6)+Math.floor(Math.random()*90+10)};
 return _h.apply(this,arguments)};
/* ingresso emitido: tipo, portador, pedido e PNG */
function png(card){var h=card.getAttribute('data-qr'),t=(userSession.tickets||[]).filter(function(x){return x.hash===h})[0]||{},c=document.createElement('canvas');c.width=900;c.height=340;var x=c.getContext('2d');
 x.fillStyle='#fff';x.fillRect(0,0,900,340);x.fillStyle='#1a3a6b';x.fillRect(0,0,900,92);x.fillStyle='#fff';x.font='900 32px Arial';x.fillText('SANTA CLARA EC',28,52);x.font='600 16px Arial';x.fillText((t.match||'Ingresso oficial')+' • Estádio Vale de Santa Clara',28,78);
 [['SETOR / LUGAR',t.sectorName||'—'],['PORTADOR',t.holder||t.name||'—'],['TIPO',t.tipo||'Inteira'],['PORTÃO',t.gate||'—'],['PEDIDO',t.order||'—']].forEach(function(w,i){var y=130+i*40;x.fillStyle='#6b7280';x.font='700 12px Arial';x.fillText(w[0],28,y);x.fillStyle='#111827';x.font='700 17px Arial';x.fillText(String(w[1]).slice(0,52),170,y)});
 x.strokeStyle='#9ca3af';x.setLineDash([6,5]);x.beginPath();x.moveTo(680,104);x.lineTo(680,320);x.stroke();
 var q=card.querySelector('.qr-box canvas');if(q)x.drawImage(q,705,120,160,160);x.fillStyle='#6b7280';x.font='600 11px monospace';x.fillText(h,705,300);x.font='11px Arial';x.fillText('Documento de demonstração, sem valor fiscal.',28,325);
 c.toBlob(function(b){var a=document.createElement('a');a.href=URL.createObjectURL(b);a.download='ingresso-'+h+'.png';document.body.appendChild(a);a.click();a.remove()})}
document.addEventListener('click',function(e){var b=e.target.closest('.sm3-dl');if(b)png(b.closest('.qr-card'))});
var qrW=$('#ticketQrWrapper');
if(qrW)new MutationObserver(function(){if(!p3||userSession.tickets.length<=p3.n0)return;var p=p3;p3=null;done=true;
 userSession.tickets.slice(p.n0).forEach(function(t,i){var id=p.ids[i],ty=p.ty[id]==='meia'?'Meia-entrada':'Inteira',h=(p.ho[id]||'').trim();t.tipo=ty;t.order=p.order;if(h)t.holder=h;if(ty!=='Inteira')t.sectorName+=' • '+ty});
 (window.socSave||function(){setStored('scec_user',userSession)})();
 var cards=document.querySelectorAll('#ticketQrWrapper .qr-card');
 p.ids.forEach(function(id,i){var c=cards[i];if(!c)return;var b=c.querySelector('b');if(b)b.textContent+=' • '+(p.ty[id]==='meia'?'Meia':'Inteira');var ph=(p.ho[id]||'').trim();if(ph){var s=document.createElement('span');s.className='qr-st';s.textContent='Portador: '+ph;c.insertBefore(s,c.querySelector('button'))}
  c.insertAdjacentHTML('beforeend','<button type="button" class="btn-outline sm3-dl">⬇ Baixar ingresso (PNG)</button>')});
 var ah=$('#ticketAuthHash'),pr=ah&&ah.parentNode;if(pr){var o=$('#ticketOrderRow');if(!o){o=document.createElement('p');o.id='ticketOrderRow';pr.insertAdjacentElement('afterend',o)}o.innerHTML='Pedido: <strong>'+p.order+'</strong>'}
 types={};ho={};tm=false;mi=false;
 X.toast('Pedido '+p.order+' confirmado. O comprovante foi enviado ao seu e-mail (simulação).')}).observe(qrW,{childList:true});
X.pan();
}catch(err){console.warn('seatmap3',err)}})();
