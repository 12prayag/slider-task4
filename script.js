document.addEventListener('DOMContentLoaded', function () {
      var splide = new Splide('.main-splide', {
            perPage: 1,
            type: 'fade',
            autoplay: true,
            interval: 3000,

            // paginationDirection: 'ttb',
            // drag: 'free',
            // snap: true,

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
      arrows: false,

});

towsilderv2.mount();

//////////////////////////////////////////////////////////////////////////


// You need to transpile this code
// import Splide from '@splidejs/splide';
// import { Video } from '@splidejs/splide-extension-video';

// const splide = new Splide('.splide', {
//       heightRatio: 0.5625,
//       cover: true,
//       video: {
//             loop: true,
//       },
// });

// splide.mount({ Video });



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