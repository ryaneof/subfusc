(function () {
  var elToggle = document.querySelector('.site-nav-toggle');
  var navItems = document.querySelectorAll('.site-nav-item');
  var navItemCnt = navItems.length;
  var checkToggle = function () {
    if (elToggle.offsetHeight > 0) {
      hideExtraNavs();
    } else {
      showAllNavs();
    }
  };
  var toggleNav = function () {
    if (elToggle.dataset.toggle === '＋') {
      elToggle.dataset.toggle = '－';
      elToggle.innerHTML = '＋';
      hideExtraNavs();
    } else {
      elToggle.dataset.toggle = '＋';
      elToggle.innerHTML = '－';
      showAllNavs();
    }
  };
  var hideExtraNavs = function () {
    var hidden = 0;

    for (var i = 0, len = navItemCnt; i < len; i++) {
      if (navItems[i].className.indexOf('active') === -1) {
        hidden++;
        navItems[i].style.display = 'none'; 
      } else {
        navItems[i].style.display = 'block'; 
      }
    }

    if (hidden === navItemCnt) {
      navItems[0].style.display = 'block';
    }
  };

  var showAllNavs = function () {
    for (var i = 0, len = navItemCnt; i < len; i++) {
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