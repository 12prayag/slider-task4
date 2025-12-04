document.addEventListener('DOMContentLoaded', function () {
      var splide = new Splide('.main-splide', {
            perPage: 1,
            type: 'fade',
            autoplay: true,
            interval: 3000,

      });
      splide.mount();
});

/////////////////////////////////////////////////////////////////////////

var towslider = new Splide('.tow-silder', {
      type: 'loop',
      perpage: 1,
      autoplay: true,
      pagination: false,
      arrows:false,
});

towslider.mount();

////////////////////////////////////////////////////////////////////////

var towsilderv2 = new Splide('.tow-silder-v2', {
      type: 'loop',
      autoplay: true,
      perpage: 1,
      pagination: false,
      arrows:false,
});

towsilderv2.mount();

//////////////////////////////////////////////////////////////////////////






//////////////////////////////////////////////////////////////////////////

// document.addEventListener('DOMContentLoaded', function () {
//       new Splide('#splide', {
//             type: 'loop',
//             perPage: 3,
//             focus: 'center',
//             autoplay: true,
//             interval: 3000,
//             flickMaxPages: 3,
//             updateOnMove: true,
//             pagination: false,
//             padding: '10%',
//             throttle: 300,
//             breakpoints: {
//                   1440: {
//                         perPage: 1,
//                         padding: '30%'
//                   }
//             }
//       }).mount();
// });

//////////////////////////////////////////////////////////////////////////