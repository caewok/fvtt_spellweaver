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
export const FORCE_DEBUG = FALSE;

export function log(force: boolean, ...args) {
  try {
    const isDebugging = window.DEV?.getPackageDebugValue(CONSTANTS.MODULE_ID);

    if (force || isDebugging) {
      console.log(CONSTANTS.MODULE_ID, '|', ...args);
    }
  } catch (e) {}
}