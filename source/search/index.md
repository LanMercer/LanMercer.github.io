---
title: 搜索
date: 2024-01-01 00:00:00
type: page
top_img: /images/banner.jpg
---

<div id="search-page-container">
  <input type="text" id="search-input" placeholder="输入关键词搜索文章..." autocomplete="off">
  <div id="search-results"></div>
</div>

<script>
(function() {
  var searchInput = document.getElementById('search-input');
  var searchResults = document.getElementById('search-results');
  var searchData = [];

  // Load search data
  fetch('/search.xml')
    .then(function(res) { return res.text(); })
    .then(function(xmlText) {
      var parser = new DOMParser();
      var xmlDoc = parser.parseFromString(xmlText, 'text/xml');
      var entries = xmlDoc.querySelectorAll('entry');
      entries.forEach(function(entry) {
        var title = entry.querySelector('title') ? entry.querySelector('title').textContent : '';
        var content = entry.querySelector('content') ? entry.querySelector('content').textContent : '';
        var url = entry.querySelector('url') ? entry.querySelector('url').textContent : '';
        searchData.push({ title: title, content: content, url: url });
      });
    })
    .catch(function(err) {
      console.log('Search data load failed:', err);
      searchResults.innerHTML = '<p style="color:#999">搜索数据加载失败，请稍后重试。</p>';
    });

  function doSearch(keyword) {
    if (!keyword.trim()) {
      searchResults.innerHTML = '';
      return;
    }
    var kw = keyword.toLowerCase();
    var matches = [];
    searchData.forEach(function(item) {
      var titleScore = item.title.toLowerCase().indexOf(kw) !== -1 ? 2 : 0;
      var contentScore = item.content.toLowerCase().indexOf(kw) !== -1 ? 1 : 0;
      if (titleScore + contentScore > 0) {
        matches.push({
          title: item.title,
          url: item.url,
          score: titleScore + contentScore,
          snippet: getSnippet(item.content, kw)
        });
      }
    });
    matches.sort(function(a, b) { return b.score - a.score; });
    renderResults(matches, keyword);
  }

  function getSnippet(content, kw) {
    var idx = content.toLowerCase().indexOf(kw);
    if (idx === -1) return content.substring(0, 120) + '...';
    var start = Math.max(0, idx - 50);
    var end = Math.min(content.length, idx + 100);
    var snippet = content.substring(start, end);
    if (start > 0) snippet = '...' + snippet;
    if (end < content.length) snippet = snippet + '...';
    return snippet;
  }

  function renderResults(matches, keyword) {
    if (matches.length === 0) {
      searchResults.innerHTML = '<p style="color:#999;padding:1rem 0">未找到包含 "' + escapeHtml(keyword) + '" 的文章。</p>';
      return;
    }
    var html = '<div style="margin-top:1rem">';
    html += '<p style="color:#666;font-size:0.9rem;margin-bottom:1rem">找到 ' + matches.length + ' 篇相关文章</p>';
    matches.forEach(function(item) {
      html += '<div style="padding:1rem;border-bottom:1px solid #eee">';
      html += '<a href="' + item.url + '" style="font-size:1.1rem;font-weight:600;color:#2e7d32;text-decoration:none">' + escapeHtml(item.title) + '</a>';
      html += '<p style="color:#666;font-size:0.85rem;margin-top:0.4rem;line-height:1.6">' + escapeHtml(item.snippet) + '</p>';
      html += '</div>';
    });
    html += '</div>';
    searchResults.innerHTML = html;
  }

  function escapeHtml(text) {
    return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  // Check URL parameter for auto-search
  var urlParams = new URLSearchParams(window.location.search);
  var autoQuery = urlParams.get('q');
  if (autoQuery) {
    searchInput.value = autoQuery;
  }

  var timeout;
  searchInput.addEventListener('input', function(e) {
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      doSearch(e.target.value);
    }, 300);
  });

  searchInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      clearTimeout(timeout);
      doSearch(searchInput.value);
    }
  });

  // Auto-search if query in URL
  if (autoQuery) {
    setTimeout(function() {
      doSearch(autoQuery);
    }, 500);
  }
})();
</script>

<style>
#search-page-container {
  max-width: 700px;
  margin: 0 auto;
}
#search-input {
  width: 100%;
  padding: 0.8rem 1.2rem;
  font-size: 1rem;
  border: 2px solid #c8dcc8;
  border-radius: 8px;
  outline: none;
  transition: border-color 0.3s;
  font-family: inherit;
}
#search-input:focus {
  border-color: #4caf50;
}
#search-results a:hover {
  text-decoration: underline !important;
}
</style>
