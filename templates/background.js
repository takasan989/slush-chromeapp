chrome.app.runtime.onLaunched.addListener(function() {
  var width = 500;
  var height = 300;

  chrome.app.window.create('app/index.html', {
    id: 'main',
    bounds: {
      width: width,
      height: height
    }
  });
});
