export async function doItemRoll(wrapped, 
                                 options = { showFullCard: false, 
                                             createWorkflow: true, 
                                             versatile: false, 
                                             configureDialog: true, 
                                             event }) {

  console.log("spellweaver|rolling item", this);
  const roll = await wrapped(options);
  console.log("spellweaver|roll result", roll);
  return roll;                                 
}