// Constants
// May switch some of these to settings at some point
export const CONSTANTS = {
  MODULE_ID : "spellweaver",
  SPELLWEAVER_CLASSES : ["Arcane Spellweaver",
		                     "Divine Spellweaver",
			                   "Natural Spellweaver",
			                   "Spellweaver"] 														 
};

// used for logging before dev mode is set up
export const FORCE_DEBUG = true;

export function log(...args) {
  try {
    let window:any = {}; // for typescript
    const isDebugging = window.DEV?.getPackageDebugValue(CONSTANTS.MODULE_ID);
    console.log(CONSTANTS.MODULE_ID, '|', `isDebugging: ${isDebugging}.`);

    if (FORCE_DEBUG || isDebugging) {
      console.log(CONSTANTS.MODULE_ID, '|', ...args);
    }
  } catch (e) {}
}
