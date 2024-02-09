DimensionSkillEvents.register((event) => {
  // Player cannot access the nether until they have gained the access_nether skill
  event.restrict("minecraft:the_nether", (restrict) =>
    restrict.inaccessible().if(player => player.cannot('nether_access'))
  );
  event.restrict("minecraft:the_end", (restrict) =>
  restrict.inaccessible().if(player => player.cannot('end_access'))
);


});