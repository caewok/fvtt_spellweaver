import { FacetAbilityCheckDisplay } from "./apps/FacetAbilityCheckDisplay.js";

export class FacetAbilityCheck {
  actor: {};
  spell: {};
  spellFacet: string;
  numEnhancements: number;
  numModifications: number;
  dc: number;
  totalPoints: number;
  
  public showFacetAbilityCheck() {
    new FacetAbilityCheckDisplay(this).render(true);
  }
}
