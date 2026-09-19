const els=document.querySelectorAll('.reveal');
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('on');io.unobserve(e.target)}}),{threshold:.08});
els.forEach(el=>io.observe(el));
setTimeout(()=>els.forEach(el=>el.classList.add('on')),1400);
addEventListener('scroll',()=>{const h=document.documentElement;document.getElementById('progress').style.width=((h.scrollTop/(h.scrollHeight-h.clientHeight))*100)+'%'},{passive:true});
document.getElementById('serviceForm').addEventListener('submit',e=>{e.preventDefault();const name=document.getElementById('name').value.trim();const year=document.getElementById('year').value.trim();const vehicle=document.getElementById('vehicle').value.trim();const service=document.getElementById('service').value;const issue=document.getElementById('issue').value.trim();const msg=`Hi Emanuel, my name is ${name}. I need mobile mechanic service in Nashville. Vehicle: ${year} ${vehicle}. Service: ${service}. Issue: ${issue}`;location.href='sms:+17544238475?&body='+encodeURIComponent(msg)});
