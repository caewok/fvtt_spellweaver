import { CONSTANTS, log } from "./constants.js";
import { FacetAbilityCheck } from "./facetabilitycheck.js";


export async function doItemRoll(wrapped, 
                                 options = { showFullCard: false, 
                                             createWorkflow: true, 
                                             versatile: false, 
                                             configureDialog: true, 
                                             event }) {
                                          
                                             
  // check if this is a spell and who is rolling it
	if("spell" === this.data.type && this.options.hasOwnProperty("actor")) {
		// options.actor.items is a Map
		const has_spellweaver_class:boolean = [...this.options.actor.items].some(i => "class" === i.type && CONSTANTS.SPELLWEAVER_CLASSES.includes(i.data.name));
		log(`Checking for spellweaver class.`);
		if(has_spellweaver_class) {
			log(`Spellweaver rolled a spell.`);
			// do spellweaver stuff
			
			let facet_check: FacetAbilityCheck = new FacetAbilityCheck();
			facet_check.showFacetAbilityCheck();
		}       
	
	}
                              
  // any item roll will be wrapped
  log(`rolling item`, this);
  const roll = await wrapped(options);
  
  // If user canceled or other error, resulting roll may be undefined.
  // Otherwise, should be chat content for the roll
  log(`roll result`, roll);
  return roll;                                 
}
