import { CONSTANTS, log } from "./constants.js";
export async function doItemRoll(wrapped, 
                                 options = { showFullCard: false, 
                                             createWorkflow: true, 
                                             versatile: false, 
                                             configureDialog: true, 
                                             event }) {
                                          
                                             
  // check if this is a spell and who is rolling it
	if("spell" === this.data.type && this.options.hasOwnProperty("actor")) {
		// options.actor.items is a Map
		const has_spellweaver_class = [...this.options.actor.items].some(i => "class" === i.type && CONSTANTS.SPELLWEAVER_CLASSES.includes(i.data.name));
		log(false, `Checking for spellweaver class.`);
		if(has_spellweaver_class) {
			log(false, `Spellweaver rolled a spell.`);

			 // do spellweaver stuff
		}       
	
	}
                              
  // any item roll will be wrapped
  log(false, `rolling item`, this);
  const roll = await wrapped(options);
  
  // If user canceled or other error, resulting roll may be undefined.
  // Otherwise, should be chat content for the roll
  log(false, `roll result`, roll);
  return roll;                                 
}
