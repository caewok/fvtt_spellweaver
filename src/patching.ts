import { doItemRoll } from "./itemhandling";

/* 
 * Patch item.roll() to intercept spellcasting rolls. 
 */
export let itemPatching = () => {
  if(!globalThis.libWrapper) {
    ui.notifications.error("libWrapper package not found.");
  }

  globalThis.libWrapper.register("spellweaver", "CONFIG.Item.entityClass.prototype.roll", doItemRoll, "MIXED");
};
