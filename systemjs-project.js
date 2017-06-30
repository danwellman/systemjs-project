import stringUtils from 'app/stringUtils.js';
import $ from 'jquery';
import minicolors from 'claviska/jquery-minicolors';
import 'minicolors.css';
import numberUtils from 'app/amd/utils.js';
import dateUtils from 'app/cjs/dateUtils.js';

console.log(stringUtils.reverse('I put my thing down, flip it and reverse it'));
console.log(stringUtils.empty(' '));
console.log(stringUtils.empty('x'));
console.log(stringUtils.truncate('A long time ago in a galaxy far, far away', 15));
console.log(stringUtils.anagram('hot banana'));

console.log('jQuery version: ', $.fn.jquery);
$('#colorPicker').minicolors();

console.log(numberUtils.cube(10));

let testDate = new Date(1999, 11, 31);
console.log(dateUtils.isFuture(testDate));
