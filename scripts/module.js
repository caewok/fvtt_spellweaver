import { itemPatching } from './scripts/patching.ts';

/* ----------------
 * Initialize module
 */
Hooks.once('init', async function() {
  console.log("spellweaver|Initializing.");
  

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
  console.log("spellweaver|Readying.")

  if(!game.modules.get('lib-wrapper')?.active && game.user.isGM)
        ui.notifications.error("Module spellweaver requires the 'libWrapper' module. Please install and activate it.");
});
