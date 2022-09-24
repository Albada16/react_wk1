var animation = bodymovin.loadAnimation({
    container: document.getElementById('city'), // Required
    path: '../blt.json', // Required
    renderer: 'svg/canvas/html', // Required
    loop: false, // Optional
    autoplay: true, // Optional
    name: "Hello World", // Name for future reference. Optional.
  })