var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { itemPatching } from './patching';
const MODULE_ID = 'spellweaver';
const VERBOSE = true;
/* ----------------
 * Initialize module
 */
Hooks.once('init', function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(`${MODULE_ID}|Initializing.`);
    });
});
/* ----------------
 * Setup module.
 * Do anything after initialization but before ready
 */
Hooks.once('setup', function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(`${MODULE_ID}|Setting up.`);
        itemPatching();
    });
});
/* ----------------
 * When ready
 */
Hooks.once('ready', function () {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        console.log(`${MODULE_ID}|Readying.`);
        if (!((_a = game.modules.get('lib-wrapper')) === null || _a === void 0 ? void 0 : _a.active) && game.user.isGM)
            ui.notifications.error(`Module ${MODULE_ID} requires the 'libWrapper' module. Please install and activate it.`);
    });
});
