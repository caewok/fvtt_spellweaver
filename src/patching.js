import { doItemRoll } from "./itemhandling.js";

/* 
 * Patch item.roll() to intercept spellcasting rolls. 
 */
export let itemPatching = () => {
  libWrapper.register("spellweaver", "CONFIG.Item.entityClass.prototype.roll", doItemRoll, "MIXED");
};