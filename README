Modular UI Kata
===============

Description
-----------

This started off life as a piece of production code, very heavily linked to the HTML, the CSS, and other included JS files. This was used as a training kata to help the teams work out how to take legacy JavaScript code and move to a more modular testable script architecture.


Notes
-----

1.  CSS and JavaScript Source Files are contained in the [src] folder
2.  Test files are contained in the [tests] folder, one simple test has been setup in both Jasmine and on in QUnit, just use one testing framework.
3.  JSHamcrest has been integrated into both which provides better syntactic asserts amongst other things.
4.  I have provided a sample test in each framework that asserts that the carousel loads the first image slide within an acceptable amount of time. 
5.  I've included the original CSS files but don't concentrate on those we want to concentrate on the behaviour, today.


Possible Goals
--------------

1.  Find a way to safely make the Carousel module have less dependencies
2.  Find a way to safely make the Carousel framework independant, i.e. no mootools or jQuery
3.  Find ways to lock down the Required Behavior through the implementation of tests and make it ready for refactoring
4.  Look refactor the module to progressivly enhance the webpage by either;
  a.  make initial HTML a single empty HTML element or
  b.  provide the default slide HTML in the webpage and then "Enhance" the component by adding the additional behaviour to load extra slides on demand.