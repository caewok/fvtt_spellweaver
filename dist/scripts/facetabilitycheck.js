import { FacetAbilityCheckDisplay } from "./apps/FacetAbilityCheckDisplay.js";
export class FacetAbilityCheck {
    // actor stats
    constructor(spell, actor) {
        this.actor = actor;
        this.spell = spell;
        this.numEnhancements = 0;
        this.numModifications = 0;
        this.spell_level = spell.data.data.level;
        this.spell_slot = this.spell_level;
        this.calculateDC();
    }
    showFacetAbilityCheck() {
        new FacetAbilityCheckDisplay(this, {}).render(true);
    }
    calculateDC() {
        // fix
        this.dc = this.spell_level + this.numEnhancements + this.numModifications;
    }
}
