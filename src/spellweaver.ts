import { itemPatching } from './scripts/patching.js';
import { CONSTANTS, log, FORCE_DEBUG } from "./scripts/constants.js";

/* ----------------
 * Initialize module
 */
Hooks.once('init', async function() {
  log(FORCE_DEBUG, `Initializing.`);
  

});

/* ----------------
 * Setup module. 
 * Do anything after initialization but before ready
 */
Hooks.once('setup', async function() {
  log(FORCE_DEBUG, `Setting up.`);
  itemPatching();
});


/* ----------------
 * When ready
 */
Hooks.once('ready', async function() {
  log(FORCE_DEBUG, `Readying.`)

  if(!game.modules.get('lib-wrapper')?.active && game.user.isGM)
        ui.notifications.error(`Module ${CONSTANTS.MODULE_ID} requires the 'libWrapper' module. Please install and activate it.`);
});


/* ----------------
 * Other hooks
 */
Hooks.once('devModeReady', ({ registerPackageDebugFlag }) => {
  // https://github.com/League-of-Foundry-Developers/foundryvtt-devMode
  registerPackageDebugFlag('${CONSTANTS.MODULE_ID}');
});
