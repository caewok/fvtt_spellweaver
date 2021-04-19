import { itemPatching } from './scripts/patching.js';
import { CONSTANTS, log } from "./scripts/constants.js";
/* ----------------
 * Initialize module
 */
Hooks.once('init', async function () {
    log(`Initializing.`);
});
/* ----------------
 * Setup module.
 * Do anything after initialization but before ready
 */
Hooks.once('setup', async function () {
    log(`Setting up.`);
    itemPatching();
});
/* ----------------
 * When ready
 */
Hooks.once('ready', async function () {
    var _a;
    log(`Readying.`);
    if (!((_a = game.modules.get('lib-wrapper')) === null || _a === void 0 ? void 0 : _a.active) && game.user.isGM)
        ui.notifications.error(`Module ${CONSTANTS.MODULE_ID} requires the 'libWrapper' module. Please install and activate it.`);
});
/* ----------------
 * Other hooks
 */
Hooks.once('devModeReady', ({ registerPackageDebugFlag }) => {
    // https://github.com/League-of-Foundry-Developers/foundryvtt-devMode
    log(`Readying devMode hook.`);
    registerPackageDebugFlag('${CONSTANTS.MODULE_ID}');
});
