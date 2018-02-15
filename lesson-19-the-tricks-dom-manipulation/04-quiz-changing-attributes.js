/*
For this quiz, set the href of the <a> in the first nav item to "#1".

You must use jQuery's attr() method!
*/

// Start with this variable!
var navList, firstNav, list;

navList = $('.nav-list');
firstNav = navList.children().first();
list = firstNav.find('a');
list.attr('href', '#1');
