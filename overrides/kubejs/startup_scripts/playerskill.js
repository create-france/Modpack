// Let's assume we have these tiers for `undead_killer` skill
const KILLER_TIERS = {
    wood: 0,
    stone: 1,
    iron: 2,
    gold: 3,
    diamond: 4,
    netherite: 5,
  };
  
  SkillEvents.registration(event => {
    event.add('nether_access', 'basic', skill => {
      skill.initialValue(false)
        .description('Allows you to access the nether');

    });
    event.add('end_access', 'basic', skill => {
      skill.initialValue(false)
        .description('Allows you to access the end');

    });
  });