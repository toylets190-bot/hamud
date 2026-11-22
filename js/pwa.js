/* Santa Clara EC — js/pwa.js
   Registra o service worker (site funciona offline depois da 1ª visita) e liga o botão "Instalar como app"
   ao aviso nativo de instalação quando o navegador oferece. */
(function () {
  /* Arquivo único: o modo offline (service worker) só funciona publicando a pasta completa com sw.js. */
  var deferred = null;
  window.addEventListener('beforeinstallprompt', function (e) { e.preventDefault(); deferred = e; });
  window.addEventListener('appinstalled', function () { deferred = null; });
  window.addEventListener('load', function () {
    var original = window.exInstallOpen;
    window.exInstallOpen = function () {
      if (deferred) { deferred.prompt(); deferred.userChoice.finally(function () { deferred = null; }); }
      else if (original) original();
    };
  });
})();
