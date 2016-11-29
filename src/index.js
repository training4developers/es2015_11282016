'use strict';

function y() {

}

y();

var y = function(item) {
 return item.value > 2;
};

y();

items.map(y).find(item => item.id === 3);