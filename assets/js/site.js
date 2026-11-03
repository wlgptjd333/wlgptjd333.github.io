// 밝게·어둡게 바꾸기 (선택은 이 브라우저에만 저장)
(function () {
  var root = document.documentElement;
  var btn = document.querySelector('.theme-toggle');
  if (!btn) return;
  btn.addEventListener('click', function () {
    var dark = root.dataset.theme
      ? root.dataset.theme === 'dark'
      : window.matchMedia('(prefers-color-scheme: dark)').matches;
    var next = dark ? 'light' : 'dark';
    root.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch (e) {}
  });
})();

// 프로젝트 분류 버튼 (주소 #app 처럼 바로 열기도 가능)
(function () {
  var buttons = document.querySelectorAll('.filter');
  var cards = document.querySelectorAll('#project-grid .project');
  if (!buttons.length || !cards.length) return;

  function apply(filter) {
    var found = false;
    buttons.forEach(function (b) {
      var on = b.dataset.filter === filter;
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
      if (on) found = true;
    });
    if (!found) return apply('all');
    cards.forEach(function (c) {
      c.hidden = filter !== 'all' && c.dataset.category !== filter;
    });
  }

  buttons.forEach(function (b) {
    b.addEventListener('click', function () {
      apply(b.dataset.filter);
      history.replaceState(null, '', b.dataset.filter === 'all' ? location.pathname : '#' + b.dataset.filter);
    });
  });

  apply(location.hash ? location.hash.slice(1) : 'all');
})();
