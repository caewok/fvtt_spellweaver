// Constants
// May switch some of these to settings at some point
export const CONSTANTS = {
    MODULE_ID: "spellweaver",
    SPELLWEAVER_CLASSES: ["Arcane Spellweaver",
        "Divine Spellweaver",
        "Natural Spellweaver",
        "Spellweaver"]
};
// used for logging before dev mode is set up
export const FORCE_DEBUG = false;
export function log(force, ...args) {
    var _a;
    try {
        let window = {}; // for typescript
        const isDebugging = (_a = window.DEV) === null || _a === void 0 ? void 0 : _a.getPackageDebugValue(CONSTANTS.MODULE_ID);
        if (force || isDebugging) {
            console.log(CONSTANTS.MODULE_ID, '|', ...args);
        }
    }
    catch (e) { }
}
