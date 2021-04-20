export class FacetAbilityCheckDisplay extends FormApplication {
  constructor(object, options) {
    super(object, options);
  }
  
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      title: "Spellweaver|Facet Ability Check",
      template: "modules/spellweaver/templates/facet-ability-check.html",
      resizable: true,
      tabs: [{ navSelector: ".tabs", contentSelector: ".content", initial: "stats" }]
    });
  }
  
  get title() {
    return "Spellweaver|Facet Ability Check";
  }
}