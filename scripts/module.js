import { itemPatching } from './patching.js';

const MODULE_ID = 'spellweaver';
const VERBOSE = true;

/* ----------------
 * Initialize module
 */
Hooks.once('init', async function() {
  console.log(`${MODULE_ID}|Initializing.`);
  

});

/* ----------------
 * Setup module. 
 * Do anything after initialization but before ready
 */
Hooks.once('setup', async function() {
  console.log(`${MODULE_ID}|Setting up.`);
  itemPatching();
});


/* ----------------
 * When ready
 */
Hooks.once('ready', async function() {
  console.log(`${MODULE_ID}|Readying.`)

  if(!game.modules.get('lib-wrapper')?.active && game.user.isGM)
        ui.notifications.error(`Module ${MODULE_ID} requires the 'libWrapper' module. Please install and activate it.`);
});
