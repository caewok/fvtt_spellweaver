import { FacetAbilityCheckDisplay } from "./apps/FacetAbilityCheckDisplay.js";
export class FacetAbilityCheck {
    showFacetAbilityCheck() {
        new FacetAbilityCheckDisplay(this, {}).render(true);
    }
}
