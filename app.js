const $=s=>document.querySelector(s);
fetch('jobs.json').then(r=>r.json()).then(jobs=>{
 if($('#list')){const locs=[...new Set(jobs.map(j=>j.location))];locs.forEach(l=>$('#loc').insertAdjacentHTML('beforeend',`<option>${l}</option>`));
  const render=()=>{const q=$('#q').value.toLowerCase(),f=$('#fn').value,l=$('#loc').value,r=$('#rm').value;
   const out=jobs.filter(j=>(!f||j.function===f)&&(!l||j.location===l)&&(!r||j.remote===r)&&(!q||JSON.stringify(j).toLowerCase().includes(q)));
   $('#count').textContent=`共 ${out.length} 筆職缺`;
   $('#list').innerHTML=out.map(j=>`<a class="job" href="job.html?id=${j.id}"><h3>${j.title}</h3><div class="meta">${j.company}・${j.location}・${j.salary}</div><div><span class="tag">${j.function}</span>${j.remote==='部分遠端'?'<span class="tag r">可部分遠端</span>':''}<span class="meta">來源：${j.source}</span></div><div class="ai">🤖 ${j.ai_skill}</div></a>`).join('');};
  ['#q','#fn','#loc','#rm'].forEach(s=>$(s).addEventListener('input',render));render();}
 if($('#detail')){const j=jobs.find(x=>x.id==new URLSearchParams(location.search).get('id'));
  $('#detail').innerHTML=j?`<span class="tag">${j.function}</span><h1 style="margin:8px 0">${j.title}</h1><p class="meta">${j.company}・${j.location}・遠端：${j.remote}</p><p><b>薪資：</b>${j.salary}</p><p><b>需要的 AI 能力：</b>${j.ai_skill}</p><p class="meta">來源：${j.source}・收錄日 ${j.found}</p><a class="btn" href="${j.url}" target="_blank" rel="noopener">到原始職缺頁應徵 →</a>`:'找不到這個職缺。';document.title=j?`${j.title}｜${j.company}｜AI職缺台灣`:document.title;}
});
