import { itemPatching } from './scripts/patching.ts';

const MODULE_ID = 'spellweaver';

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
