/*
 * Star Wars Republic Legends
 * 
 * I made some editing changes to make my own Star Wars 
 * opening telling my own story.
 * Iv'e been a Star Wars fan All my life and enjoy the series
 * I hope you enjoy this while grading it
 * This is based on the old republic on a story I made myself
 * before the SkyWalker saga and certain things before it
 * A legend never told in the history of the jedi 
 * Saw this for the first time in class and thought
 * I could do a little something with this.
 * This code was inspired from another person I just made some changes
 * Stuff the person used:
 * - CSS (animation, transform)
 * - HTML audio (the opening theme)
 * - SVG (the Star Wars logo from wikimedia.org)
 *   http://commons.wikimedia.org/wiki/File:Star_Wars_Logo.svg
 * - JavaScript (to sync the animation/audio)  
 * http://www.sitepoint.com/css3-starwars-scrolling-text/ 
 *
 * Sound copyright by The Walt Disney Company.
 * 
 *
 * 2026 by Eli Chance
 */
/*StarWars = (function() {
  
  /* 
   * Constructor
   */
  /*function StarWars(args) {
    // Context wrapper
    this.el = $(args.el);
    
    // Audio to play the opening crawl
    this.audio = document.querySelector('audio');
    
    // Start the animation
    this.start = this.el.find('.start');
    
    // The animation wrapper
    this.animation = this.el.find('.animation');
    
    // Remove animation and shows the start screen
    this.reset();

    // Start the animation on click
    this.start.bind('click', $.proxy(function() {
      this.start.hide();
      this.audio.play();
      this.el.append(this.animation);
    }, this));
    
    // Reset the animation and shows the start screen
    $(this.audio).bind('ended', $.proxy(function() {
      this.audio.currentTime = 0;
      this.reset();
    }, this));
  }
  
  /*
   * Resets the animation and shows the start screen.
   */
 /* StarWars.prototype.reset = function() {
    this.start.show();
    this.cloned = this.animation.clone(true);
    this.animation.remove();
    this.animation = this.cloned;
  };

  return StarWars;
})();

const intro = new StarWars({
  el : '.starwars'
});*/
/*
* Star Wars Intro Crawl
* 2026 by Eli Chance
*/
const StarWars = (function() {

/*
* Constructor
*/
function StarWars(args) {
// Context wrapper
this.el = document.querySelector(args.el);

// Audio to play the opening crawl
this.audio = document.querySelector('audio');

// Start the animation
this.start = document.querySelector('.start');

// The animation wrapper
this.animation = document.querySelector('.animation');

// Store a clean reference to the animation content so we can reset it perfectly
this.cloned = this.animation.cloneNode(true);

// Remove animation and shows the start screen initially
this.reset();

// Start the animation on click
this.start.addEventListener('click', () => {
this.start.style.display = 'none';
if (this.audio) {
this.audio.play();
}
this.el.appendChild(this.animation);
});

// Reset the animation and shows the start screen when audio finishes
if (this.audio) {
this.audio.addEventListener('ended', () => {
this.audio.currentTime = 0;
this.reset();
});
}
}

/*
* Resets the animation and shows the start screen
*/
StarWars.prototype.reset = function() {
this.start.style.display = 'block';

if (this.animation && this.animation.parentNode) {
this.animation.parentNode.removeChild(this.animation);
}

// Reset to a fresh template copy so animations restart nicely next time
this.animation = this.cloned.cloneNode(true);
};

return StarWars;
})();

const intro = new StarWars({
el: '.starwars'
});

/*I made changes to the original code a bit to I guess modify it to where it would work with css because certain functions weren't working at first*/