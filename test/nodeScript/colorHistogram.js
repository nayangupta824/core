'use strict';

let Image = require('../..');


let image = new Image(1,2,[230, 83, 120, 255, 100, 140, 13, 1]);


let histogram=image.getColorHistogram({maxSlots:16, useAlpha:true});

console.log(histogram);



