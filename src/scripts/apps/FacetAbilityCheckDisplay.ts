import { log } from "../constants.js";

export class FacetAbilityCheckDisplay extends FormApplication {
  constructor(object, options) {
    super(object, options);
  }
  
  static get defaultOptions() {
  
    // @ts-ignore 
    return mergeObject(super.defaultOptions, {
      title: "Spellweaver|Facet Ability Check",
      template: "modules/spellweaver/templates/facet-ability-check.html",
      classes: ['form'],
      id: "spellweaver-facet-check",
      width: 500,
      height: "auto",
      resizable: true,
      scrollY: [".tab.facet-check"],
      tabs: [{ navSelector: ".tabs", contentSelector: ".content", initial: "facet-check" }]
    });
  }
  
  get title() {
    return "Spellweaver|Facet Ability Check";
  }

  async _updateObject(event, formData) {
    return;
  }

  getData() {
   let data = super.getData();
   log("FacetAbilityCheckDisplay data", data);
   data.isGM = game.user.isGM;
   
//   let out = {dc: 5, numEnhancements: 2, numModifications: 3};

     return data;
  }

  activateListeners(html) {
    super.activateListeners(html);
  }

}
