export async function doItemRoll(wrapped, 
                                 options = { showFullCard: false, 
                                             createWorkflow: true, 
                                             versatile: false, 
                                             configureDialog: true, 
                                             event }) {
  // any item roll will be wrapped
  console.log("spellweaver|rolling item", this);
  const roll = await wrapped(options);
  
  // If user canceled or other error, resulting roll may be undefined.
  // Otherwise, should be chat content for the roll
  console.log("spellweaver|roll result", roll);
  return roll;                                 
}