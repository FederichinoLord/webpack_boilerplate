console.log("hello from webpack")

import Sortable from 'sortablejs';
console.log(Sortable);
var el = document.getElementById('items');
var sortable = Sortable.create(el);
console.log(el);