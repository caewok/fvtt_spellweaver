import { itemPatching } from './scripts/patching.js';
import * as CONSTANTS from './scripts/constants.js';

/* ----------------
 * Initialize module
 */
Hooks.once('init', async function() {
  console.log(`${CONSTANTS.MODULE_ID}|Initializing.`);
  

});

/* ----------------
 * Setup module. 
 * Do anything after initialization but before ready
 */
Hooks.once('setup', async function() {
  console.log(`${CONSTANTS.MODULE_ID}|Setting up.`);
  itemPatching();
});


/* ----------------
 * When ready
 */
Hooks.once('ready', async function() {
  console.log(`${CONSTANTS.MODULE_ID}|Readying.`)

  if(!game.modules.get('lib-wrapper')?.active && game.user.isGM)
        ui.notifications.error(`Module ${CONSTANTS.MODULE_ID} requires the 'libWrapper' module. Please install and activate it.`);
});
