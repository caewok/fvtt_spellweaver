export async function doItemRoll(wrapped, 
                                 options = { showFullCard: false, 
                                             createWorkflow: true, 
                                             versatile: false, 
                                             configureDialog: true, 
                                             event }) {
  const SPELLWEAVER_CLASSES = ["Arcane Spellweaver",
                               "Divine Spellweaver",
                               "Natural Spellweaver",
                               "Spellweaver"];                                           
                                             
  // check if this is a spell and who is rolling it
  if("spell" === this.type && this.options.hasProperty("actor") {
		const has_spellweaver_class = this.actor.items.some(i => "class" === i.type && SPELLWEAVER_CLASSES.includes(i.data.name));
	  console.log(`${MODULE_ID}|Checking for spellweaver class.`);
		if(has_spellweaver_class) {
			console.log(`${MODULE_ID}|Spellweaver rolled a spell.`);
	
			 // do spellweaver stuff
		}       
		
  }
                              
  // any item roll will be wrapped
  console.log(`${MODULE_ID}|rolling item`, this);
  const roll = await wrapped(options);
  
  // If user canceled or other error, resulting roll may be undefined.
  // Otherwise, should be chat content for the roll
  console.log(`${MODULE_ID}|roll result`, roll);
  return roll;                                 
}