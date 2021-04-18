var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { CONSTANTS, log } from "./constants.js";
export function doItemRoll(wrapped, options = { showFullCard: false,
    createWorkflow: true,
    versatile: false,
    configureDialog: true,
    event }) {
    return __awaiter(this, void 0, void 0, function* () {
        // check if this is a spell and who is rolling it
        if ("spell" === this.data.type && this.options.hasOwnProperty("actor")) {
            // options.actor.items is a Map
            const has_spellweaver_class = [...this.options.actor.items].some(i => "class" === i.type && CONSTANTS.SPELLWEAVER_CLASSES.includes(i.data.name));
            log(false, `Checking for spellweaver class.`);
            if (has_spellweaver_class) {
                log(false, `Spellweaver rolled a spell.`);
                // do spellweaver stuff
            }
        }
        // any item roll will be wrapped
        log(false, `rolling item`, this);
        const roll = yield wrapped(options);
        // If user canceled or other error, resulting roll may be undefined.
        // Otherwise, should be chat content for the roll
        log(false, `roll result`, roll);
        return roll;
    });
}
