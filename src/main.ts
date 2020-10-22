import { Aurelia } from 'aurelia-framework';
import { PLATFORM } from 'aurelia-pal';
import '../static/style.scss';

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()

  aurelia.use.developmentLogging(!IS_PRODUCTION ? 'debug' : 'none');

  aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app')));
}
