(function () {
  var elToggle = document.querySelector('.site-nav-toggle');
  var navItems = document.querySelectorAll('.site-nav-item');
  var navItemCnt = navItems.length;
  var checkToggle = function () {
    if (elToggle.offsetHeight > 0) {
      hideExtraNav();
    } else {
      showExtraNav();
    }
  };
  var toggleNav = function () {
    if (elToggle.dataset.toggle === '＋') {
      elToggle.dataset.toggle = '－';
      elToggle.innerHTML = '＋';
      hideExtraNav();
    } else {
      elToggle.dataset.toggle = '＋';
      elToggle.innerHTML = '－';
      showExtraNav();
    }
  };
  var hideExtraNav = function () {
    for (var i = 1, len = navItemCnt; i < len; i++) {
      navItems[i].style.display = 'none';
    }
  };

  var showExtraNav = function () {
    for (var i = 1, len = navItemCnt; i < len; i++) {
      navItems[i].style.display = 'block';
    }
  };

  elToggle.onclick = function (e) {
    e.preventDefault();
    toggleNav();
  };

  window.addEventListener('resize', checkToggle);
  
  checkToggle();
})();