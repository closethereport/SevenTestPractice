/**
 * @file
 * Contains JS function
 */

(function ($, Drupal, drupalSettings) {
  'use strict';
  Drupal.behaviors.jsDrupalupTest = {
    attach: function (context, settings) {
      $('.js-var').once('jsDrupalupTest').append('<div id="grid">' + drupalSettings.js_example.title + '</div>');
      console.log(drupalSettings.js_example.title);
    }
  };

})(jQuery, Drupal, drupalSettings);

