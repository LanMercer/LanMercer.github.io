document.addEventListener('DOMContentLoaded', function() {
  // 在搜索页面和归档页面不显示侧边栏搜索卡片
  var path = window.location.pathname;
  if (path === '/search/' || path === '/search' || path === '/archives/' || path === '/archives') return;

  var aside = document.querySelector('#aside-content');
  if (!aside) return;
  var firstCard = aside.querySelector('.card-widget');
  var searchCard = document.createElement('div');
  searchCard.className = 'card-widget card-search';
  searchCard.innerHTML = '<div class="item-headline"><i class="fas fa-search"></i><span>搜索</span></div><input type="text" class="card-search-input" id="sidebar-search-input" placeholder="输入关键词..." autocomplete="off"><button class="card-search-btn" id="sidebar-search-btn">搜索</button>';
  aside.insertBefore(searchCard, firstCard);
  document.getElementById('sidebar-search-btn').addEventListener('click', function() {
    var kw = document.getElementById('sidebar-search-input').value.trim();
    if (kw) window.location.href = '/search/?q=' + encodeURIComponent(kw);
  });
  document.getElementById('sidebar-search-input').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      var kw = e.target.value.trim();
      if (kw) window.location.href = '/search/?q=' + encodeURIComponent(kw);
    }
  });
});
