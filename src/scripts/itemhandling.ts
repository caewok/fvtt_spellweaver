import { CONSTANTS } from "./constants.js";
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
		console.log(`${CONSTANTS.MODULE_ID}|Checking for spellweaver class.`);
		if(has_spellweaver_class) {
			console.log(`${CONSTANTS.MODULE_ID}|Spellweaver rolled a spell.`);

			 // do spellweaver stuff
		}       
	
	}
                              
  // any item roll will be wrapped
  console.log(`${CONSTANTS.MODULE_ID}|rolling item`, this);
  const roll = await wrapped(options);
  
  // If user canceled or other error, resulting roll may be undefined.
  // Otherwise, should be chat content for the roll
  console.log(`${CONSTANTS.MODULE_ID}|roll result`, roll);
  return roll;                                 
}
