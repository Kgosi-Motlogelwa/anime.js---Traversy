anime({
  targets: "div.box",
  translateY: [
    { value: 100, duration: 1200 },
    { value: 0, duration: 1200 },
  ],
  rotate: { value: "1turn", easeInOutSine: 1200 },
  delay: anime.stagger(1200),
});

// anime({
//   targets: "div.box.blue",
//   translateY: [
//     { value: 100, duration: 1200, delay: 2400 },
//     { value: 0, duration: 1200 },
//   ],
//   rotate: { value: "1turn", easeInOutSine: 1200, delay: 2400 },
// });

// anime({
//   targets: "div.box.green",
//   translateY: [
//     { value: 100, duration: 1200, delay: 4800 },
//     { value: 0, duration: 1200 },
//   ],
//   rotate: { value: "1turn", easeInOutSine: 1200, delay: 4800 },
// });

// anime({
//   targets: "div.box.yellow",
//   translateY: [
//     { value: 100, duration: 1200, delay: 7200 },
//     { value: 0, duration: 1200 },
//   ],
//   rotate: { value: "1turn", easeInOutSine: 1200, delay: 7200 },
// });
