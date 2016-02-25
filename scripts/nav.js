'use strict';

$(function(){
    // Create a navigation item (a link) for each page (uses Jquery and the "Pages" defined in index.html )
    for ( var path in Pages ) {
      var title = Pages[path][1];
      $('.header ul.nav').append(
        '<li ' + 'ng-class="{active: (locationPath==\'' + path + '\')}">' +'<a href="#' + path + '">' + title + '</a>' + '</li>');
    }
	/*creates: <li ng-class="{active: (locationPath=='/about')}"><a href="#/about">About</a></li>    for each of the members in Pages*/
  });
