<?php

namespace Drupal\drupalup_jsset\Controller;

use Drupal\Core\Controller\ControllerBase;

/**
 * Output of our JS page.
 */
class DrupalupJssetController extends ControllerBase {

  public function jsPage() 
  {
    drupal_add_js('modules/drupalup_jsset-master/js/lol.js');
  }

}