/* ======== Preloader ======== */
$(window).load(function () {
  var preloaderDelay = 350,
    preloaderFadeOutTime = 800;

  function hidePreloader() {
    var loadingAnimation = $("#loading-animation"),
      preloader = $("#preloader");
    loadingAnimation.fadeOut();
    preloader.delay(preloaderDelay).fadeOut(preloaderFadeOutTime);
  }

  hidePreloader();
});
