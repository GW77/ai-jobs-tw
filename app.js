const $=s=>document.querySelector(s);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const safeUrl=u=>/^https?:\/\//.test(u)?u:'#';
fetch('jobs.json').then(r=>r.json()).then(jobs=>{
 if($('#list')){
  $('#s-n').textContent=jobs.length;$('#s-c').textContent=new Set(jobs.map(j=>j.company)).size;$('#s-r').textContent=jobs.filter(j=>j.remote==='部分遠端').length;
  [...new Set(jobs.map(j=>j.location))].forEach(l=>$('#loc').insertAdjacentHTML('beforeend',`<option>${esc(l)}</option>`));
  const render=()=>{const q=$('#q').value.trim().toLowerCase(),f=$('#fn').value,l=$('#loc').value,r=$('#rm').value;
   const out=jobs.filter(j=>(!f||j.function===f)&&(!l||j.location===l)&&(!r||j.remote===r)&&(!q||JSON.stringify(j).toLowerCase().includes(q)));
   $('#count').textContent=`共 ${out.length} 筆職缺`;
   $('#list').innerHTML=out.length?out.map(j=>`<a class="job" href="job.html?id=${encodeURIComponent(j.id)}"><h3>${esc(j.title)}</h3><div class="meta">${esc(j.company)}・${esc(j.location)}・${esc(j.salary)}</div><div class="tags"><span class="tag">${esc(j.function)}</span>${j.remote==='部分遠端'?'<span class="tag r">可部分遠端</span>':''}<span class="meta">來源：${esc(j.source)}</span></div><div class="ai"><b>AI 能力：</b>${esc(j.ai_skill)}</div></a>`).join(''):'<p class="empty">沒有符合的職缺，換個條件試試，或訂閱電子報收新職缺。</p>';};
  ['#q','#fn','#loc','#rm'].forEach(s=>$(s).addEventListener('input',render));render();}
 if($('#detail')){const j=jobs.find(x=>String(x.id)===new URLSearchParams(location.search).get('id'));
  $('#detail').innerHTML=j?`<span class="tag">${esc(j.function)}</span><h1>${esc(j.title)}</h1><p class="meta">${esc(j.company)}・${esc(j.location)}・遠端：${esc(j.remote)}</p><dl><div><dt>薪資</dt><dd>${esc(j.salary)}</dd></div><div><dt>需要的 AI 能力</dt><dd>${esc(j.ai_skill)}</dd></div></dl><p class="meta">來源：${esc(j.source)}・收錄日 ${esc(j.found)}</p><a class="btn lg" href="${esc(safeUrl(j.url))}" target="_blank" rel="noopener">到原始職缺頁應徵 →</a>`:'<h1>找不到這個職缺</h1><p><a href="index.html">回職缺列表</a></p>';
  if(j)document.title=`${j.title}｜${j.company}｜AI職缺台灣`;}
}).catch(()=>{const l=$('#list');if(l)l.innerHTML='<p class="empty">職缺載入失敗，請稍後重新整理。</p>';});
