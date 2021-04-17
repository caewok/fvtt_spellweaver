var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export function doItemRoll(wrapped, options = { showFullCard: false,
    createWorkflow: true,
    versatile: false,
    configureDialog: true,
    event }) {
    return __awaiter(this, void 0, void 0, function* () {
        // any item roll will be wrapped
        console.log("spellweaver|rolling item", this);
        const roll = yield wrapped(options);
        // If user canceled or other error, resulting roll may be undefined.
        // Otherwise, should be chat content for the roll
        console.log("spellweaver|roll result", roll);
        return roll;
    });
}
