(function () {
  if (window.__afslgSite) return; window.__afslgSite = true; var IN_PRE = false; try { IN_PRE = window.self !== window.top && window.parent.location.origin === location.origin && window.frameElement && window.frameElement.getAttribute('aria-hidden') === 'true'; } catch (e) {}
  function vtQuiet(e) { var vt = e && e.viewTransition; if (!vt) return; ['ready', 'finished', 'updateCallbackDone'].forEach(function (k) { vt[k] && vt[k].catch && vt[k].catch(function () {}); }); }
  addEventListener('pagereveal', vtQuiet); addEventListener('pageswap', vtQuiet);
  addEventListener('unhandledrejection', function (e) { if (e.reason && /ViewTransition|Transition was aborted/i.test(String(e.reason.message || e.reason))) e.preventDefault(); });
  var RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var root = document.documentElement;
  var css = document.createElement('style');
  css.textContent =
    '@view-transition{navigation:auto}::view-transition-old(root),::view-transition-new(root){animation-duration:.25s}' +
    'html.afslg-busy.afslg-mouse,html.afslg-busy.afslg-mouse *{cursor:none!important;}' +
    '#afslg-cur{position:fixed;z-index:99999;width:24px;height:24px;margin:-12px 0 0 -12px;pointer-events:none;display:none;}' +
    '#afslg-cur.on{display:block;}' +
    '#afslg-cur.touch{margin:-44px 0 0 -14px;width:28px;height:28px;}' +
    '#afslg-cur i{position:absolute;inset:0;border-radius:50%;border:3px solid rgba(50,80,42,0.22);border-top-color:#32502A;border-right-color:#AACC4A;box-sizing:border-box;animation:afslgSpin .7s linear infinite;}' +
    '@keyframes afslgSpin{to{transform:rotate(360deg)}}' +
    'html.afslg-boot main{opacity:0!important;} html.afslg-boot body{background:#FDFCF8!important;} main{transition:opacity .35s ease;}' +
    '[style*="border-radius: 50%"]:has(> i[class*="ph-arrow"]){transition:box-shadow .35s cubic-bezier(.22,1,.36,1),transform .35s cubic-bezier(.22,1,.36,1)!important;}' +
    '[data-shine]{overflow:hidden!important;isolation:isolate;}' +
    '[data-shine]::after{content:"";position:absolute;inset:-20%;z-index:2;pointer-events:none;background:linear-gradient(110deg,rgba(255,255,255,0) 25%,rgba(255,255,255,0.06) 38%,rgba(255,255,255,0.16) 50%,rgba(255,255,255,0.06) 62%,rgba(255,255,255,0) 75%);filter:blur(14px);transform:translateX(-110%);}' +
    'article:hover [data-shine]::after,a:hover [data-shine]::after{transform:translateX(110%);transition:transform 1.2s cubic-bezier(.22,1,.36,1);}' +
    '[data-shine] img{transition:filter .6s ease,transform 1s cubic-bezier(.22,1,.36,1)!important;}' +
    'article:hover [data-shine] img,a:hover [data-shine] img{filter:brightness(1.1) saturate(1.06);transform:scale(1.012);}' +
    '@keyframes afslgLupa{0%{transform:none}30%{transform:rotate(-16deg) scale(1.15) translate(-1px,-1px)}60%{transform:rotate(9deg) scale(1.1)}80%{transform:rotate(-4deg) scale(1.12)}100%{transform:scale(1.1)}}' +
    'button[aria-label="Buscar"] > i{display:inline-block;transition:transform .35s cubic-bezier(.22,1,.36,1);}' +
    'button[aria-label="Buscar"]:hover > i{animation:afslgLupa .7s cubic-bezier(.22,1,.36,1) forwards;}' +
    '[data-arrc]{position:relative;overflow:hidden;}' +
    'a:hover [data-arrc][data-tone="dark"][style]:has(> i[class*="ph-arrow"]),[data-arrc][data-tone="dark"][style]:has(> i[class*="ph-arrow"]):hover{box-shadow:0 0 0 1px rgba(50,80,42,0.30),0 0 10px rgba(50,80,42,0.16),0 6px 16px rgba(23,51,31,0.18)!important;}' +
    '[data-arrc] > i{transition:transform .5s cubic-bezier(.22,1,.36,1),opacity .35s ease;}' +
    '[data-arrc] > i[data-arr-in]{position:absolute;opacity:0;transform:translateX(-160%);}' +
    '[data-arrc="d"] > i[data-arr-in]{transform:translate(-140%,140%);}' +
    'a:hover [data-arrc] > i:not([data-arr-in]),[data-arrc]:hover > i:not([data-arr-in]){opacity:0;transform:translateX(160%);}' +
    'a:hover [data-arrc="d"] > i:not([data-arr-in]),[data-arrc="d"]:hover > i:not([data-arr-in]){transform:translate(140%,-140%);}' +
    'a:hover [data-arrc] > i[data-arr-in],[data-arrc]:hover > i[data-arr-in]{opacity:1;transform:none;}' +
    'a:hover [style*="border-radius: 50%"]:has(> i[class*="ph-arrow"]),[style*="border-radius: 50%"]:has(> i[class*="ph-arrow"]):hover{box-shadow:0 0 0 1px rgba(232,240,60,0.6),0 0 12px rgba(221,234,44,0.30),0 6px 18px rgba(170,204,74,0.22)!important;transform:scale(1.05);}' +
    '[data-rv="wait"]{opacity:0;transform:translateY(56px);}' +
    '[data-rv="wait-fade"]{opacity:0;}' +
    '[data-rv="in"]{opacity:1;transform:none;transition:opacity .9s cubic-bezier(.16,.8,.3,1),transform 1.1s cubic-bezier(.16,.8,.3,1);}' +
    '@media (prefers-reduced-motion: reduce){[data-rv]{opacity:1!important;transform:none!important;transition:none!important}}';
  document.head.appendChild(css);

  // Spinner that follows the cursor (desktop) or appears where you tap (mobile).
  var cur = document.createElement('div'); cur.id = 'afslg-cur'; cur.setAttribute('aria-hidden', 'true'); cur.innerHTML = '<i></i>';
  var mx = -100, my = -100;
  function place() { cur.style.left = mx + 'px'; cur.style.top = my + 'px'; }
  function mountCur() { (document.body || root).appendChild(cur); place(); }
  document.body ? mountCur() : document.addEventListener('DOMContentLoaded', mountCur);
  addEventListener('pointermove', function (e) { if (e.pointerType === 'touch') return; mx = e.clientX; my = e.clientY; root.classList.add('afslg-mouse'); cur.classList.remove('touch'); place(); if (root.classList.contains('afslg-busy')) cur.classList.add('on'); }, { passive: true });
  function busy(on) { root.classList.toggle('afslg-busy', on); cur.classList.toggle('on', on && mx > -50); }

  busy(true);
  root.classList.add('afslg-boot');
  var ready = false;
  var settled = false;
  function done() {
    if (ready) return; ready = true; window.__afslgReady = true;
    if (!RM) { var hasHero = !!document.querySelector('[data-rv-skip]'); setTimeout(function () { Array.prototype.forEach.call(document.querySelectorAll('[data-nav-badge]'), function (b) { b.animate && b.animate([{ transform: 'scale(0)', opacity: 0 }, { transform: 'scale(1.35)', opacity: 1, offset: 0.55 }, { transform: 'scale(0.9)', offset: 0.78 }, { transform: 'scale(1)' }], { duration: 750, easing: 'cubic-bezier(.3,.7,.4,1)', fill: 'backwards' }); }); }, hasHero ? 1700 : 500); Array.prototype.forEach.call(document.querySelectorAll('[data-nav-badge]'), function (b) { b.animate && b.animate([{ opacity: 0 }, { opacity: 0 }], { duration: hasHero ? 1700 : 500 }); }); } try { dispatchEvent(new Event('afslg:ready')); } catch (e) {} busy(false); root.classList.remove('afslg-boot'); requestAnimationFrame(function () { root.classList.add('afslg-done'); }); warm();
    Array.prototype.forEach.call(document.querySelectorAll('[data-rv]'), function (p) { p.removeAttribute('data-rv'); });
    seen = new WeakSet(); queue = [];
    scan(); settled = true; flush();
  }

  function warm() {
    var go = function () { var seen = {}; Array.prototype.forEach.call(document.querySelectorAll('a[href*=".dc.html"]'), function (a) { var u = new URL(a.href, location.href); u.hash = ''; u.search = ''; if (seen[u.href] || u.href === location.href.split(/[?#]/)[0]) return; seen[u.href] = 1; var l = document.createElement('link'); l.rel = 'prefetch'; l.href = u.href; document.head.appendChild(l); }); };
    if (!IN_PRE) (window.requestIdleCallback || function (f) { setTimeout(f, 1500); })(go, { timeout: 4000 });
  }
  // ---- Entrance animations ----
  var seen = new WeakSet(), queue = [];
  function host(k) {
    var el = k, g = 0;
    while (el && g++ < 4 && (el.classList.contains('sc-host') || getComputedStyle(el).display === 'contents') && el.firstElementChild) el = el.firstElementChild;
    return el;
  }
  function usable(c) {
    if (c.offsetHeight < 8 || c.offsetWidth < 8) return false;
    var cs = getComputedStyle(c);
    if (cs.position === 'fixed') return false;
    if (cs.position === 'absolute' && !(c.textContent || '').trim()) return false;
    if (c.tagName === 'STYLE' || c.tagName === 'SCRIPT') return false;
    return true;
  }
  function parts(sec) {
    var el = sec;
    for (var d = 0; d < 6; d++) {
      var kids = Array.prototype.filter.call(el.children, usable);
      if (kids.length >= 2) return kids;
      if (kids.length === 1) { el = kids[0]; continue; }
      break;
    }
    return el === sec ? [] : [el];
  }
  var userT = -1e9; ['click','input','change','keyup'].forEach(function (ev) { addEventListener(ev, function (e) { userT = performance.now(); var m = document.querySelector('main'); if (ev === 'keyup' || !m || !m.children[0] || !m.children[0].contains(e.target)) return; setTimeout(function () { queue = queue.filter(function (p) { if (p.__rvIdx > 0 && p.__rvIdx <= 2 && p.isConnected) { p.__rvDelay = Math.min(p.__rvDelay || 0, 280); play(p); return false; } return true; }); }, 60); }, true); });
  function scan() {
    if (RM) return;
    var main = document.querySelector('main'); if (!main) return;
    Array.prototype.forEach.call(main.children, function (k, i) {
      var sec = host(k); if (!sec || sec.offsetHeight < 40 || sec.hasAttribute('data-rv-skip')) return;
      if (i === 1 && main.children[0] && !main.children[0].querySelector('[data-rv-skip]') && !main.children[0].hasAttribute('data-rv-skip')) { Array.prototype.forEach.call(k.querySelectorAll('[data-rv]'), function (p) { p.removeAttribute('data-rv'); p.style.opacity = ''; p.style.transform = ''; }); return; } // first block after an internal header (listing grids) shows immediately
      var ps = parts(sec); if (!ps.length) return;
      ps.forEach(function (p, j) {
        if (seen.has(p) || p.hasAttribute('data-rv')) return;
        for (var a = p.parentElement; a && a !== sec; a = a.parentElement) if (seen.has(a)) return;
        var sub = p.querySelectorAll('*'); for (var q = 0; q < sub.length && q < 400; q++) if (seen.has(sub[q])) return;
        seen.add(p);
        var live = settled && performance.now() - userT < 1800;
        if (settled && !live && p.getBoundingClientRect().top < innerHeight * 0.9) return;
        p.setAttribute('data-rv', i === 0 ? 'wait-fade' : 'wait');
        p.__rvDelay = Math.min(j, 6) * (live ? 70 : 110); p.__rvIdx = i;
        if (live) { play(p); return; }
        queue.push(p);
      });
    });
    if (ready) flush();
  }
  function play(p) {
    if (p.getAttribute('data-rv') === 'in') return;
    p.style.transitionDelay = (p.__rvDelay || 0) + 'ms';
    requestAnimationFrame(function () {
      p.setAttribute('data-rv', 'in');
      setTimeout(function () { if (p.getAttribute('data-rv') === 'in') { p.removeAttribute('data-rv'); p.style.transitionDelay = ''; } }, 1300 + (p.__rvDelay || 0));
    });
  }
  function flush() {
    queue = queue.filter(function (p) {
      if (!p.isConnected) return false;
      if (p.getAttribute('data-rv') !== 'wait' && p.getAttribute('data-rv') !== 'wait-fade') return false;
      var r = p.getBoundingClientRect();
      if (r.top < innerHeight * 0.9 && r.bottom > 0) { play(p); return false; }
      return true;
    });
  }
  var rafQ = false;
  addEventListener('scroll', function () { if (!rafQ) { rafQ = true; requestAnimationFrame(function () { rafQ = false; if (ready) flush(); }); } }, { passive: true });
  setInterval(function () { if (ready && queue.length) flush(); }, 300);

  // Mark sections as soon as they are built, so nothing pops in un-animated.
  var scanT = null, quietT = null, t0 = performance.now(), MAX = 6000;
  var mo = new MutationObserver(function () {
    clearTimeout(scanT); scanT = setTimeout(scan, 30);
    clearTimeout(quietT); quietT = setTimeout(checkReady, 380);
  });
  mo.observe(root, { childList: true, subtree: true });
  setTimeout(scan, 50);
  function checkReady() {
    if (ready) return;
    var fontsOk = !document.fonts || document.fonts.status === 'loaded';
    var main = document.querySelector('main');
    var built = main && main.children.length && Array.prototype.every.call(main.children, function (k) { var el = host(k); var cs = getComputedStyle(el); return cs.position === 'absolute' || cs.position === 'fixed' || el.offsetHeight > 30; }); if (built && document.querySelector('.sc-placeholder, .sc-streaming-html, .sc-streaming-js')) built = false;
    var imgs = true; if (main) Array.prototype.forEach.call(main.querySelectorAll('img'), function (im) { var r = im.getBoundingClientRect(); if (r.top < innerHeight && r.bottom > 0 && r.width > 0 && !im.complete) imgs = false; });
    if ((fontsOk && built && imgs) || performance.now() - t0 > MAX) done(); else quietT = setTimeout(checkReady, 120);
  }
  quietT = setTimeout(checkReady, 450);
  setTimeout(done, MAX);
  setTimeout(function () { mo.disconnect(); }, 8000);

  // Duplicate arrow icons inside arrow circles so hover can swap them.
  function arrows() {
    var c = document.querySelectorAll('[style*="border-radius: 50%"]:has(> i[class*="ph-arrow"]):not([data-arrc])');
    for (var i = 0; i < c.length; i++) { var ic = c[i].querySelector(':scope > i'); if (!ic) continue; c[i].setAttribute('data-arrc', /up-right/.test(ic.className) ? 'd' : 'h'); var bgs = (c[i].getAttribute('style') || '') + getComputedStyle(c[i]).backgroundImage + getComputedStyle(c[i]).backgroundColor; if (/50, 80, 42|23, 51, 31|#32502A|#17331F/i.test(bgs)) c[i].setAttribute('data-tone', 'dark'); var cl = ic.cloneNode(true); cl.setAttribute('data-arr-in', ''); cl.setAttribute('aria-hidden', 'true'); c[i].appendChild(cl); }
  }
  new MutationObserver(function () { clearTimeout(arrows._t); arrows._t = setTimeout(arrows, 120); }).observe(root, { childList: true, subtree: true });
  setTimeout(arrows, 300);

  // ---- Internal navigation: spinner at cursor / tap point ----
  addEventListener('pointerdown', function (e) {
    if (e.pointerType !== 'touch') return;
    var a = e.target.closest && e.target.closest('a[href],button'); if (!a) return;
    mx = e.clientX; my = e.clientY; cur.classList.add('touch'); place();
  }, { passive: true, capture: true });
  document.addEventListener('click', function (e) {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    var a = e.target.closest && e.target.closest('a[href]'); if (!a) return;
    var href = a.getAttribute('href') || '';
    if (a.target === '_blank' || a.hasAttribute('download') || !/\.dc\.html/.test(href)) return;
    var url = new URL(a.href, location.href);
    if (url.pathname === location.pathname && url.search === location.search) return;
    if (mx < -50) { var r = a.getBoundingClientRect(); mx = r.left + r.width / 2; my = r.top + r.height / 2; place(); }
    busy(true);
  }, true);
  // Keep the current page on screen while the next one is built off-screen; swap only when it is ready.
  var pend = null;
  function clearPend() { if (!pend) return; clearInterval(pend.t); pend.f.remove(); pend = null; }
  addEventListener('click', function (e) {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    var a = e.target.closest && e.target.closest('a[href]'); if (!a) return;
    var href = a.getAttribute('href') || '';
    if (a.target === '_blank' || a.hasAttribute('download') || !/\.dc\.html/.test(href)) return;
    var url = new URL(a.href, location.href);
    if (url.origin !== location.origin || url.pathname === location.pathname) return;
    e.preventDefault();
    if (pend && pend.u === url.href) return;
    clearPend(); busy(true);
    var f = document.createElement('iframe');
    f.setAttribute('aria-hidden', 'true'); f.tabIndex = -1;
    f.style.cssText = 'position:fixed;left:0;top:0;width:' + innerWidth + 'px;height:' + innerHeight + 'px;border:0;opacity:0;pointer-events:none;z-index:-1;visibility:hidden;';
    f.src = url.href; document.body.appendChild(f);
    var t0 = performance.now(), go = function () { clearInterval(pend.t); location.href = url.href; };
    pend = { u: url.href, f: f, t: setInterval(function () { var ok = false; try { ok = !!(f.contentWindow && f.contentWindow.__afslgReady); } catch (er) { ok = true; } if (ok || performance.now() - t0 > 6000) go(); }, 80) };
  });
  addEventListener('pagehide', clearPend);
  addEventListener('pageshow', function (e) { if (e.persisted) { clearPend && clearPend(); busy(false); root.classList.remove('afslg-boot'); root.classList.add('afslg-done'); } });

  // Prefetch internal pages on hover / touch so the next page opens almost instantly.
  var pre = {};
  function prefetch(e) {
    var a = e.target.closest && e.target.closest('a[href]'); if (!a || !/\.dc\.html/.test(a.getAttribute('href') || '')) return;
    var u = new URL(a.href, location.href); u.hash = ''; if (pre[u.href] || u.href === location.href.split('#')[0]) return; pre[u.href] = 1;
    var l = document.createElement('link'); l.rel = 'prefetch'; l.href = u.href; document.head.appendChild(l);
  }
  addEventListener('pointerover', prefetch, { passive: true });
  addEventListener('touchstart', prefetch, { passive: true, capture: true });
})();
