/*global Sly */

var sly;
var $example;
var $frame;

function sliderload() {
  'use strict';

  // Detect IE.
  // Feature detection of "transform-style: preserve-3d" doesn't work, so this
  // is the only way how to fall back to a 2D front page example in IE that
  // doesn't have a full support of 3D transforms across the board.
  document.getElementsByTagName('html')[0].className += ' ' +
    (~window.navigator.userAgent.indexOf('MSIE') ? 'ie' : 'no-ie');

  // ==========================================================================
  //   Header example
  // ==========================================================================
  $example = $('#example');
  $frame = $example.find('.frame');
  window.frr = $frame;
  sly = new Sly($frame, {
    slidee: $frame.find('ul'),
    horizontal: 1,
    itemNav: 'forceCentered',
    activateMiddle: true,
    smart: true,
    activateOn: 'click',
    mouseDragging: 1,
    touchDragging: 1,
    releaseSwing: 1,

    scrollBar: $example.find('.scrollbar'),
    scrollBy: 1,
    minHandleSize: 20,
    pagesBar: null,
    dragHandle: true,
    dynamicHandle: false,
    activatePageOn: 'click',
    speed: 900,
    moveBy: 600,
    elasticBounds: 1,
    clickBar: 1,

    // Buttons
    forward: $example.find('.forward'),
    backward: $example.find('.backward'),
    prev: $example.find('.prev'),
    next: $example.find('.next'),
    prevPage: $example.find('.prevPage'),
    nextPage: $example.find('.nextPage'),

    cycleBy:       'items',  // Enable automatic cycling by 'items' or 'pages'.
    cycleInterval: 5000,  // Delay between cycles in milliseconds.
    pauseOnHover:  false, // Pause cycling when mouse hovers over the FRAME.
    startPaused:   false // Whether to start in paused sate.
  }).init();
  $('.filterFramework li.slideLi img:first-child').click(function(){
    var self = $(this).parent();
    if(self.hasClass('active')) {
      self
          .parent()
          .find('.active')
          .removeClass('active').attr('style', "");
      return;
    }
    self
        .parent()
        .find('.active')
        .removeClass('active').attr('style', "");
    self.addClass('active');
    var img = self.find('img'),
        selfWidth = 0;
    if(!img) return;
    img.each(function(){
      selfWidth += +$(this).outerWidth()+6;
    });
    self.css({
      width: selfWidth
    });
  });
  $('.activateSlider').click(function(){
    var item = $(this).attr('data-id');
    sly.activate(item);
  });
}
