document.addEventListener("DOMContentLoaded",(async function(){try{const t=await fetch("http://193.108.58.129/api/menu?populate=*"),e=await t.json();if(e&&e.data){const t=e.data;document.getElementById("first").textContent=t.first,document.getElementById("second").textContent=t.second,document.getElementById("third").textContent=t.third,document.getElementById("fourh").textContent=t.fourth}}catch(t){console.error("Error fetching menu data:",t)}}));
