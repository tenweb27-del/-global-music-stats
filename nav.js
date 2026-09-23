document.addEventListener("DOMContentLoaded",()=>{
  const navHTML = `
  <header id="mainHeader" style="padding:12px 18px;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid #1a1a1a;position:sticky;top:0;background:#080808;z-index:100;flex-wrap:wrap;gap:10px">
    <a href="index.html" style="font-weight:900;color:#fff;text-decoration:none;letter-spacing:1px">DIAMOND <span style="color:#1DB954">CHAINz</span></a>
    <nav style="display:flex;gap:6px;flex-wrap:wrap">
      <a href="index.html" class="nav-link">Home</a>
      <a href="charts.html" class="nav-link">Charts</a>
      <a href="arena.html" class="nav-link">Arena 🔥</a>
      <a href="fans.html" class="nav-link">Fan Portal</a>
      <a href="accelerator.html" class="nav-link">Accelerator 🚀</a>
      <a href="eloquence.html" class="nav-link">Eloquence 🌍</a>
      <a href="awards.html" class="nav-link" style="background:#d4af37;color:#000">DCMA Awards 💎</a>
      <a href="news.html" class="nav-link">News & Archives 🗄️</a>
      <a href="submit.html" class="nav-link" style="border-color:#1DB954;color:#1DB954">Submit Track</a>
    </nav>
  </header>
  <style>
    .nav-link{background:#121212;border:1px solid #222;color:#fff;padding:6px 10px;border-radius:999px;text-decoration:none;font-size:11px;font-weight:800}
    .nav-link:hover{border-color:#1DB954}
  </style>
  `;
  document.body.insertAdjacentHTML("afterbegin", navHTML);
});