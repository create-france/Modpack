ServerEvents.recipes((event) => {

  // dark bone
  event.custom({
    type: "create:mixing",
    ingredients: [
      {
        item: "minecraft:coal",
      },
      {
        item: "minecraft:coal",
      },
      {
        item: "minecraft:coal",
      },
      {
        item: "minecraft:coal",
      },
      {
        item: "minecraft:coal",
      },
      {
        item: "minecraft:coal",
      },
      {
        item: "minecraft:coal",
      },
      {
        item: "minecraft:coal",
      },
      {
        item: "minecraft:bone",
      },
    ],
    results: [
      {
        item: "kubejs:os",
      },
    ],
  });

  // tete wither
  event.custom({
    type: "create:mixing",
    ingredients: [
      {
        item: "kubejs:os",
      },
      {
        item: "kubejs:os",
      },
      {
        item: "kubejs:os",
      },
      {
        item: "kubejs:os",
      },
      {
        item: "kubejs:os",
      },
      {
        item: "kubejs:os",
      },
      {
        item: "kubejs:os",
      },
      {
        item: "kubejs:os",
      },

      {
        item: "minecraft:skeleton_skull",
      },
    ],
    results: [
      {
        item: "minecraft:wither_skeleton_skull",
      },
    ],
    heatRequirement: "heated",
  });

  //diamond chelou
  event.custom({
    type: "create:pressing",
    ingredients: [
      {
        item: "create:refined_radiance",
      },
    ],
    results: [
      {
        item: "saros_create_addon_fabric:pale_diamond",
      },
    ],
  });

  //generator cobblestone

  event.custom({
    type: "fabricaeexnihilo:fluid_combination",
    contained: "minecraft:water",
    other: "minecraft:lava",
    result: { id: "item", stack: "minecraft:cobblestone" },
  });
  //refined compound
  event.custom({
    type: "create:mixing",
    ingredients: [
      {
        item: "create:powdered_obsidian",
      },
      {
        item: "create:powdered_obsidian",
      },
      {
        item: "create:powdered_obsidian",
      },
      {
        item: "create:powdered_obsidian",
      },
      {
        item: "minecraft:glowstone_dust",
      },
      {
        item: "minecraft:glowstone_dust",
      },
      {
        item: "minecraft:glowstone_dust",
      },
      {
        item: "create:polished_rose_quartz",
      },
      {
        item: "create:polished_rose_quartz",
      },
      {
        item: "create:polished_rose_quartz",
      },
      {
        item: "create:polished_rose_quartz",
      },
      {
        fluid: "createfoundry:molten_carbon",
        amount: 16200,
      },
      {
        fluid: "minecraft:lava",
        amount: 16200,
      },
    ],
    results: [
      {
        item: "create:chromatic_compound",
        amount: 1,
      },
    ],
    heatRequirement: "superheated",
  });

  //bonhomme en pain d'epice
  event.custom({
    type: "create:pressing",
    ingredients: [
      {
        item: "kubejs:gingerdough",
      },
    ],
    results: [
      {
        item: "kubejs:gingerbread_man",
      },
    ],
  });
  //gingerdough
  event.custom({
    type: "create:mixing",
    ingredients: [
      {
        item: "create:cinder_flour",
        amount: 1,
      },
      {
        item: "create:wheat_flour",
        amount: 1,
      },
      {
        item: "minecraft:sugar",
        amount: 1,
      },
      {
        fluid: "create:honey",
        amount: 16200,
      },
    ],
    results: [
      {
        item: "kubejs:gingerdough",
        amount: 1,
      },
    ],
    heatRequirement: "heated",
  });

  //totem

  event.custom({
    type: "botania:runic_altar",
    ingredients: [
      {
        item: "create:experience_nugget",
      },
      {
        item: "create:experience_nugget",
      },
      {
        item: "create:experience_nugget",
      },
      {
        item: "kubejs:gingerbread_man",
      },
      {
        item: "botania:pixie_dust",
      },
      {
        item: "botania:terrasteel_nugget",
      },
      {
        item: "botania:terrasteel_nugget",
      },
      {
        item: "minecraft:emerald",
      },
      {
        item: "botania:terrasteel_nugget",
      },
    ],
    mana: 50000,
    output: {
      count: 1,
      item: "minecraft:totem_of_undying",
    },
  });

  //crane zombie

  event.custom({
    type: "minecraft:crafting_shaped",
    pattern: ["ABA", "BCB", "ABA"],
    key: {
      A: {
        item: "minecraft:rotten_flesh",
      },
      B: {
        item: "botania:cell_block",
      },
      C: {
        item: "botania:fel_pumpkin",
      },
    },
    result: {
      item: "minecraft:zombie_head",
    },
  });

  //crane skelet
  event.custom({
    type: "create:mixing",
    ingredients: [
      {
        item: "minecraft:zombie_head",
        amount: 1,
      },
      {
        item: "minecraft:bone",
      },
      {
        item: "minecraft:bone",
      },
      {
        item: "minecraft:bone",
      },
      {
        item: "minecraft:bone",
      },
      {
        fluid: "create:potion",
        nbt: {
          Potion: "minecraft:strong_harming",
        },
        amount: 32400,
      },
    ],
    results: [
      {
        item: "minecraft:skeleton_skull",
        amount: 1,
      },
    ],
    heatRequirement: "heated",
  });

  //gingenerdough
  event.custom({
    type: "create:mixing",
    ingredients: [
      {
        item: "create:cinder_flour",
        amount: 1,
      },
      {
        item: "create:wheat_flour",
        amount: 1,
      },
      {
        item: "minecraft:sugar",
        amount: 1,
      },
      {
        fluid: "create:honey",
        amount: 16200,
      },
    ],
    results: [
      {
        item: "kubejs:gingerdough",
        amount: 1,
      },
    ],
    heatRequirement: "heated",
  });

  //rotten flesh
  event.custom({
    type: "create:mixing",
    ingredients: [
      {
        item: "minecraft:brown_mushroom",
      },
      {
        item: "minecraft:red_mushroom",
      },
      {
        item: "minecraft:poisonous_potato",
      },
      {
        fluid: "create:potion",
        nbt: {
          Potion: "minecraft:awkward",
        },
        amount: 32400,
      },
    ],
    results: [
      {
        item: "minecraft:rotten_flesh",
        amount: 1,
      },
    ],
  });

  //netherstar
  event.custom({
    type: "create:mixing",
    ingredients: [
      {
        item: "minecraft:wither_skeleton_skull",
      },
      {
        item: "minecraft:wither_skeleton_skull",
      },
      {
        item: "minecraft:wither_skeleton_skull",
      },
      {
        item: "saros_create_addon_fabric:pale_diamond",
      },

      {
        fluid: "create:potion",
        nbt: {
          Potion: "minecraft:harming",
          Bottle: "REGULAR",
        },
        amount: 8100,
      },
      {
        item: "minecraft:crying_obsidian",
      },
      {
        item: "minecraft:totem_of_undying",
      },
    ],
    results: [
      {
        item: "minecraft:nether_star",
        count: 1,
        chance: 1.0,
      },
    ],
    heatRequirement: "superheated",
  });

  //crying obsidian

  event.custom({
    type: "fabricaeexnihilo:alchemy",
    reactant: "#fabricaeexnihilo:witchwater",
    catalyst: { item: "minecraft:obsidian" },
    result: { id: "item", stack: "minecraft:crying_obsidian" },
  });

  //echo shard

  event.custom({
    type: "fabricaeexnihilo:alchemy",
    reactant: "#fabricaeexnihilo:witchwater",
    catalyst: { item: "minecraft:amethyst_shard" },
    result: { id: "item", stack: "minecraft:echo_shard" },
  });

  //molten carbon
  event.custom({
    type: "create:mixing",
    ingredients: [
      {
        item: "botania:dark_quartz",
      },
    ],
    results: [
      {
        fluid: "createfoundry:molten_carbon",
        amount: 16200,
      },
    ],
    heatRequirement: "superheated",
  });

  //terrasteel

  event.custom({
    type: "botania:terra_plate",
    ingredients: [
      {
        item: "botania:manasteel_ingot",
      },
      {
        item: "progressivebosses:nether_star_shard",
      },
      {
        item: "botania:mana_pearl",
      },
      {
        item: "progressivebosses:nether_star_shard",
      },
      {
        item: "botania:mana_diamond",
      },
      {
        item: "progressivebosses:nether_star_shard",
      },
    ],
    mana: 500000,
    result: {
      item: "botania:terrasteel_ingot",
    },
  });
  //shulkershell
  event.custom({
    type: "minecraft:crafting_shaped",
    pattern: ["BBB", "BAB", "BBB"],
    key: {
      A: {
        item: "minecraft:scute",
      },

      B: {
        item: "fabricaeexnihilo:chorus_seeds",
      },
    },
    result: {
      item: "minecraft:shulker_shell",
    },
  });

  //mana tablet
  event.custom({
    type: "minecraft:crafting_shaped",
    pattern: ["BCB", "CAC", "BCB"],
    key: {
      A: {
        item: "botania:mana_diamond",
      },
      C: {
        item: "progressivebosses:nether_star_shard",
      },

      B: {
        item: "botania:livingrock",
      },
    },

    result: {
      item: "botania:mana_tablet",
    },
  });
  //xp
  event.custom({
    type: "create:mixing",
    ingredients: [
      {
        item: "minecraft:prismarine_crystals",
      },
      {
        item: "minecraft:quartz",
      },
      {
        item: "minecraft:echo_shard",
      },
      {
        item: "minecraft:ender_eye",
      },
      {
        fluid: "createfoundry:molten_emerald",
        amount: 8100,
      },
    ],
    results: [
      {
        fluid: "create_enchantment_industry:experience",
        amount: 16200,
      },
    ],
    heatRequirement: "superheated",
  });
  //molten a partir nugget
  event.custom({
    type: "create:mixing",
    ingredients: [
      {
        item: "create:copper_nugget",
      },
      {
        item: "create:copper_nugget",
      },
      {
        item: "create:copper_nugget",
      },
      {
        item: "create:copper_nugget",
      },
      {
        item: "create:copper_nugget",
      },
      {
        item: "create:copper_nugget",
      },
      {
        item: "create:copper_nugget",
      },
      {
        item: "create:copper_nugget",
      },
      {
        item: "create:copper_nugget",
      },
      {
        item: "create:copper_nugget",
      },
      {
        item: "create:copper_nugget",
      },
      {
        item: "create:copper_nugget",
      },
      {
        item: "create:copper_nugget",
      },
      {
        item: "create:copper_nugget",
      },
      {
        item: "create:copper_nugget",
      },
      {
        item: "create:copper_nugget",
      },
    ],
    results: [
      {
        fluid: "createfoundry:molten_copper",
        amount: 8100,
      },
    ],
    heatRequirement: "heated",
  });
  event.custom({
    type: "create:mixing",
    ingredients: [
      {
        item: "minecraft:iron_nugget",
      },
      {
        item: "minecraft:iron_nugget",
      },
      {
        item: "minecraft:iron_nugget",
      },
      {
        item: "minecraft:iron_nugget",
      },
      {
        item: "minecraft:iron_nugget",
      },
      {
        item: "minecraft:iron_nugget",
      },
      {
        item: "minecraft:iron_nugget",
      },
      {
        item: "minecraft:iron_nugget",
      },
      {
        item: "minecraft:iron_nugget",
      },
      {
        item: "minecraft:iron_nugget",
      },
      {
        item: "minecraft:iron_nugget",
      },
      {
        item: "minecraft:iron_nugget",
      },
      {
        item: "minecraft:iron_nugget",
      },
      {
        item: "minecraft:iron_nugget",
      },
      {
        item: "minecraft:iron_nugget",
      },
      {
        item: "minecraft:iron_nugget",
      },
    ],
    results: [
      {
        fluid: "createfoundry:molten_iron",
        amount: 8100,
      },
    ],
    heatRequirement: "heated",
  });
  event.custom({
    type: "create:mixing",
    ingredients: [
      {
        item: "create:zinc_nugget",
      },
      {
        item: "create:zinc_nugget",
      },
      {
        item: "create:zinc_nugget",
      },
      {
        item: "create:zinc_nugget",
      },
      {
        item: "create:zinc_nugget",
      },
      {
        item: "create:zinc_nugget",
      },
      {
        item: "create:zinc_nugget",
      },
      {
        item: "create:zinc_nugget",
      },
      {
        item: "create:zinc_nugget",
      },
      {
        item: "create:zinc_nugget",
      },
      {
        item: "create:zinc_nugget",
      },
      {
        item: "create:zinc_nugget",
      },
      {
        item: "create:zinc_nugget",
      },
      {
        item: "create:zinc_nugget",
      },
      {
        item: "create:zinc_nugget",
      },
      {
        item: "create:zinc_nugget",
      },
    ],
    results: [
      {
        fluid: "createfoundry:molten_zinc",
        amount: 8100,
      },
    ],
    heatRequirement: "heated",
  });
  event.custom({
    type: "create:mixing",
    ingredients: [
      {
        item: "minecraft:gold_nugget",
      },
      {
        item: "minecraft:gold_nugget",
      },
      {
        item: "minecraft:gold_nugget",
      },
      {
        item: "minecraft:gold_nugget",
      },
      {
        item: "minecraft:gold_nugget",
      },
      {
        item: "minecraft:gold_nugget",
      },
      {
        item: "minecraft:gold_nugget",
      },
      {
        item: "minecraft:gold_nugget",
      },
      {
        item: "minecraft:gold_nugget",
      },
      {
        item: "minecraft:gold_nugget",
      },
      {
        item: "minecraft:gold_nugget",
      },
      {
        item: "minecraft:gold_nugget",
      },
      {
        item: "minecraft:gold_nugget",
      },
      {
        item: "minecraft:gold_nugget",
      },
      {
        item: "minecraft:gold_nugget",
      },
      {
        item: "minecraft:gold_nugget",
      },
    ],
    results: [
      {
        fluid: "createfoundry:molten_gold",
        amount: 8100,
      },
    ],
    heatRequirement: "heated",
  });
  event.custom({
    type: "create:mixing",
    ingredients: [
      {
        item: "saros_create_addon_fabric:diamond_nugget",
      },
      {
        item: "saros_create_addon_fabric:diamond_nugget",
      },
      {
        item: "saros_create_addon_fabric:diamond_nugget",
      },
      {
        item: "saros_create_addon_fabric:diamond_nugget",
      },
      {
        item: "saros_create_addon_fabric:diamond_nugget",
      },
      {
        item: "saros_create_addon_fabric:diamond_nugget",
      },
      {
        item: "saros_create_addon_fabric:diamond_nugget",
      },
      {
        item: "saros_create_addon_fabric:diamond_nugget",
      },
      {
        item: "saros_create_addon_fabric:diamond_nugget",
      },
      {
        item: "saros_create_addon_fabric:diamond_nugget",
      },
      {
        item: "saros_create_addon_fabric:diamond_nugget",
      },
      {
        item: "saros_create_addon_fabric:diamond_nugget",
      },
      {
        item: "saros_create_addon_fabric:diamond_nugget",
      },
      {
        item: "saros_create_addon_fabric:diamond_nugget",
      },
      {
        item: "saros_create_addon_fabric:diamond_nugget",
      },

      {
        item: "saros_create_addon_fabric:diamond_nugget",
      },
    ],
    results: [
      {
        fluid: "createfoundry:molten_diamond",
        amount: 8100,
      },
    ],
    heatRequirement: "heated",
  });
  event.custom({
    type: "create:mixing",
    ingredients: [
      {
        item: "create:brass_nugget",
      },
      {
        item: "create:brass_nugget",
      },
      {
        item: "create:brass_nugget",
      },
      {
        item: "create:brass_nugget",
      },
      {
        item: "create:brass_nugget",
      },
      {
        item: "create:brass_nugget",
      },
      {
        item: "create:brass_nugget",
      },
      {
        item: "create:brass_nugget",
      },
      {
        item: "create:brass_nugget",
      },
      {
        item: "create:brass_nugget",
      },
      {
        item: "create:brass_nugget",
      },
      {
        item: "create:brass_nugget",
      },
      {
        item: "create:brass_nugget",
      },
      {
        item: "create:brass_nugget",
      },
      {
        item: "create:brass_nugget",
      },
      {
        item: "create:brass_nugget",
      },
      {
        item: "create:brass_nugget",
      },
      {
        item: "create:brass_nugget",
      },
    ],
    results: [
      {
        fluid: "createfoundry:molten_brass",
        amount: 8100,
      },
    ],
    heatRequirement: "heated",
  });

  //molten nugget superheated

  event.custom({
    type: "create:mixing",
    ingredients: [
      {
        item: "create:copper_nugget",
      },
      {
        item: "create:copper_nugget",
      },
      {
        item: "create:copper_nugget",
      },
      {
        item: "create:copper_nugget",
      },
      {
        item: "create:copper_nugget",
      },
      {
        item: "create:copper_nugget",
      },
      {
        item: "create:copper_nugget",
      },
      {
        item: "create:copper_nugget",
      },
      {
        item: "create:copper_nugget",
      },
    ],
    results: [
      {
        fluid: "createfoundry:molten_copper",
        amount: 8100,
      },
    ],
    heatRequirement: "superheated",
  });
  event.custom({
    type: "create:mixing",
    ingredients: [
      {
        item: "minecraft:iron_nugget",
      },
      {
        item: "minecraft:iron_nugget",
      },
      {
        item: "minecraft:iron_nugget",
      },
      {
        item: "minecraft:iron_nugget",
      },
      {
        item: "minecraft:iron_nugget",
      },
      {
        item: "minecraft:iron_nugget",
      },
      {
        item: "minecraft:iron_nugget",
      },
      {
        item: "minecraft:iron_nugget",
      },
      {
        item: "minecraft:iron_nugget",
      },
    ],
    results: [
      {
        fluid: "createfoundry:molten_iron",
        amount: 8100,
      },
    ],
    heatRequirement: "superheated",
  });
  event.custom({
    type: "create:mixing",
    ingredients: [
      {
        item: "create:zinc_nugget",
      },
      {
        item: "create:zinc_nugget",
      },
      {
        item: "create:zinc_nugget",
      },
      {
        item: "create:zinc_nugget",
      },
      {
        item: "create:zinc_nugget",
      },
      {
        item: "create:zinc_nugget",
      },
      {
        item: "create:zinc_nugget",
      },
      {
        item: "create:zinc_nugget",
      },
      {
        item: "create:zinc_nugget",
      },
    ],
    results: [
      {
        fluid: "createfoundry:molten_zinc",
        amount: 8100,
      },
    ],
    heatRequirement: "superheated",
  });
  event.custom({
    type: "create:mixing",
    ingredients: [
      {
        item: "minecraft:gold_nugget",
      },
      {
        item: "minecraft:gold_nugget",
      },
      {
        item: "minecraft:gold_nugget",
      },
      {
        item: "minecraft:gold_nugget",
      },
      {
        item: "minecraft:gold_nugget",
      },
      {
        item: "minecraft:gold_nugget",
      },
      {
        item: "minecraft:gold_nugget",
      },
      {
        item: "minecraft:gold_nugget",
      },
      {
        item: "minecraft:gold_nugget",
      },
    ],
    results: [
      {
        fluid: "createfoundry:molten_gold",
        amount: 8100,
      },
    ],
    heatRequirement: "superheated",
  });
  event.custom({
    type: "create:mixing",
    ingredients: [
      {
        item: "saros_create_addon_fabric:diamond_nugget",
      },
      {
        item: "saros_create_addon_fabric:diamond_nugget",
      },
      {
        item: "saros_create_addon_fabric:diamond_nugget",
      },
      {
        item: "saros_create_addon_fabric:diamond_nugget",
      },
      {
        item: "saros_create_addon_fabric:diamond_nugget",
      },
      {
        item: "saros_create_addon_fabric:diamond_nugget",
      },
      {
        item: "saros_create_addon_fabric:diamond_nugget",
      },
      {
        item: "saros_create_addon_fabric:diamond_nugget",
      },
      {
        item: "saros_create_addon_fabric:diamond_nugget",
      },
    ],
    results: [
      {
        fluid: "createfoundry:molten_diamond",
        amount: 8100,
      },
    ],
    heatRequirement: "superheated",
  });
  event.custom({
    type: "create:mixing",
    ingredients: [
      {
        item: "create:brass_nugget",
      },
      {
        item: "create:brass_nugget",
      },
      {
        item: "create:brass_nugget",
      },
      {
        item: "create:brass_nugget",
      },
      {
        item: "create:brass_nugget",
      },
      {
        item: "create:brass_nugget",
      },
      {
        item: "create:brass_nugget",
      },
      {
        item: "create:brass_nugget",
      },
      {
        item: "create:brass_nugget",
      },
    ],
    results: [
      {
        fluid: "createfoundry:molten_brass",
        amount: 8100,
      },
    ],
    heatRequirement: "superheated",
  });

  //lava from block flint

  event.custom({
    type: "fabricaeexnihilo:crucible",
    input: { item: "minecraft:flint" },
    amount: 1000,
    fluid: "minecraft:lava",
    requiresFireproofCrucible: true,
  });

  //craft copper_nugget
  event.custom({
    type: "create:splashing",
    ingredients: [
      {
        item: "minecraft:blackstone",
      },
    ],
    results: [
      {
        chance: 0.25,
        count: 5,
        item: "create:copper_nugget",
      },
      {
        chance: 0.5,
        item: "fabricaeexnihilo:stone_pebble",
      },
    ],
  });

  //zinc nugget

  event.custom({
    type: "create:splashing",
    ingredients: [
      {
        item: "minecraft:basalt",
      },
    ],
    results: [
      {
        chance: 0.25,
        count: 5,
        item: "create:zinc_nugget",
      },
      {
        chance: 0.5,
        item: "fabricaeexnihilo:dripstone_pebble",
      },
    ],
  });

  //enchant

  event.custom({
    type: "create:sequenced_assembly",
    ingredient: {
      item: "minecraft:book",
    },
    loops: 1,
    results: [
      {
        item: "minecraft:dirt",
      },
    ],
    sequence: [
      {
        type: "create:filling",
        ingredients: [
          {
            item: "minecraft:book",
          },
          {
            amount: 20000,
            fluid: "create_enchantment_industry:experience",
            nbt: {},
          },
        ],
        results: [
          {
            item: "minecraft:writable_book",
          },
        ],
      },
      {
        type: "create:mixing",
        ingredients: [
          {
            item: "minecraft:writable_book",
          },
          {
            item: "minecraft:lapis_lazuli",
          },
        ],
        results: [
          {
            item: "minecraft:writable_book",
          },
        ],
      },
    ],
    transitionalItem: {
      item: "minecraft:writable_book",
    },
  });

  //enchant de base
  event.custom({
    type: "create:sequenced_assembly",
    ingredient: {
      item: "minecraft:book",
    },
    loops: 1,
    results: [
      Item.of("minecraft:enchanted_book")
        .enchant("create:potato_recovery", 1)
        .withChance(0.5),
      Item.of("minecraft:enchanted_book")
        .enchant("minecraft:fire_protection", 1)
        .withChance(0.5),
      Item.of("minecraft:enchanted_book")
        .enchant("minecraft:smite", 1)
        .withChance(0.5),
      Item.of("minecraft:enchanted_book")
        .enchant("minecraft:protection", 1)
        .withChance(0.5),
      Item.of("minecraft:enchanted_book")
        .enchant("minecraft:feather_falling", 1)
        .withChance(0.5),
      Item.of("minecraft:enchanted_book")
        .enchant("minecraft:feather_falling", 1)
        .withChance(0.5),
      Item.of("minecraft:enchanted_book")
        .enchant("minecraft:blast_protection", 1)
        .withChance(0.5),
      Item.of("minecraft:enchanted_book")
        .enchant("minecraft:projectile_protection", 1)
        .withChance(0.5),
      Item.of("minecraft:enchanted_book")
        .enchant("minecraft:respiration", 1)
        .withChance(0.5),
      Item.of("minecraft:enchanted_book")
        .enchant("minecraft:sweeping", 1)
        .withChance(0.5),
      Item.of("minecraft:enchanted_book")
        .enchant("minecraft:looting", 1)
        .withChance(0.5),
      Item.of("minecraft:enchanted_book")
        .enchant("minecraft:fire_aspect", 1)
        .withChance(0.5),
      Item.of("minecraft:enchanted_book")
        .enchant("minecraft:knockback", 1)
        .withChance(0.5),
      Item.of("minecraft:enchanted_book")
        .enchant("minecraft:bane_of_arthropods", 1)
        .withChance(0.05),
      Item.of("minecraft:enchanted_book")
        .enchant("minecraft:bane_of_arthropods", 1)
        .withChance(0.05),
      Item.of("minecraft:enchanted_book")
        .enchant("minecraft:sharpness", 1)
        .withChance(0.05),
      Item.of("minecraft:enchanted_book")
        .enchant("minecraft:soul_speed", 1)
        .withChance(0.05),
      Item.of("minecraft:enchanted_book")
        .enchant("minecraft:quick_charge", 1)
        .withChance(0.05),
      Item.of("minecraft:enchanted_book")
        .enchant("minecraft:frost_walker", 1)
        .withChance(0.05),
      Item.of("minecraft:enchanted_book")
        .enchant("minecraft:lure", 1)
        .withChance(0.05),
      Item.of("minecraft:enchanted_book")
        .enchant("minecraft:fortune", 1)
        .withChance(0.05),
      Item.of("minecraft:enchanted_book")
        .enchant("minecraft:power", 1)
        .withChance(0.05),
      Item.of("minecraft:enchanted_book")
        .enchant("minecraft:punch", 1)
        .withChance(0.05),
      Item.of("minecraft:enchanted_book")
        .enchant("minecraft:luck_of_the_sea", 1)
        .withChance(0.05),
      Item.of("minecraft:enchanted_book")
        .enchant("minecraft:loyalty", 1)
        .withChance(0.05),
      Item.of("minecraft:enchanted_book")
        .enchant("minecraft:impaling", 1)
        .withChance(0.05),
      Item.of("minecraft:enchanted_book")
        .enchant("minecraft:unbreaking", 1)
        .withChance(0.05),
      Item.of("minecraft:enchanted_book")
        .enchant("minecraft:efficiency", 1)
        .withChance(0.05),
      Item.of("minecraft:enchanted_book")
        .enchant("farmersdelight:backstabbing", 1)
        .withChance(0.05),
      Item.of("minecraft:enchanted_book")
        .enchant("minecraft:depth_strider", 1)
        .withChance(0.05),
      Item.of("minecraft:enchanted_book")
        .enchant("minecraft:riptide", 1)
        .withChance(0.05),
      Item.of("minecraft:enchanted_book")
        .enchant("minecraft:piercing", 1)
        .withChance(0.05),
      Item.of("minecraft:enchanted_book")
        .enchant("qu-enchantments:freezing_aspect", 1)
        .withChance(0.05),
      Item.of("minecraft:enchanted_book")
        .enchant("qu-enchantments:leeching_aspect", 1)
        .withChance(0.05),
      Item.of("minecraft:enchanted_book")
        .enchant("qu-enchantments:inane_aspect", 1)
        .withChance(0.05),
      Item.of("minecraft:enchanted_book")
        .enchant("qu-enchantments:molten_walker", 1)
        .withChance(0.05),
      Item.of("minecraft:enchanted_book")
        .enchant("qu-enchantments:reflection", 1)
        .withChance(0.05),
      Item.of("minecraft:enchanted_book")
        .enchant("qu-enchantments:accuracy", 1)
        .withChance(0.05),
      Item.of("minecraft:enchanted_book")
        .enchant("qu-enchantments:arrows_flight", 1)
        .withChance(0.05),
      Item.of("minecraft:enchanted_book")
        .enchant("qu-enchantments:shaped_glass", 1)
        .withChance(0.05),
      Item.of("minecraft:enchanted_book")
        .enchant("qu-enchantments:nightblood", 1)
        .withChance(0.05),
      Item.of("minecraft:enchanted_book")
        .enchant("qu-enchantments:skywalker", 1)
        .withChance(0.05),
      Item.of("minecraft:enchanted_book")
        .enchant("qu-enchantments:omen_of_immunity", 1)
        .withChance(0.05),
      Item.of("minecraft:enchanted_book")
        .enchant("qu-enchantments:strip_miner", 1)
        .withChance(0.05),
      Item.of("minecraft:enchanted_book")
        .enchant("spell_power:haste", 1)
        .withChance(0.05),
      Item.of("minecraft:enchanted_book")
        .enchant("spell_power:sunfire", 1)
        .withChance(0.05),
      Item.of("minecraft:enchanted_book")
        .enchant("spell_power:energize", 1)
        .withChance(0.05),
      Item.of("minecraft:enchanted_book")
        .enchant("spell_power:spell_power", 1)
        .withChance(0.05),
      Item.of("minecraft:enchanted_book")
        .enchant("spell_power:soulfrost", 1)
        .withChance(0.05),
      Item.of("minecraft:enchanted_book")
        .enchant("spell_power:critical_chance", 1)
        .withChance(0.05),
      Item.of("minecraft:enchanted_book")
        .enchant("spell_power:critical_damage", 1)
        .withChance(0.05),
      Item.of("minecraft:enchanted_book")
        .enchant("spell_power:magic_protection", 1)
        .withChance(0.05),
    ],
    sequence: [
      {
        type: "create:filling",
        ingredients: [
          {
            item: "minecraft:writable_book",
          },
          {
            amount: 41000,
            fluid: "create_enchantment_industry:experience",
            nbt: {},
          },
        ],
        results: [
          {
            item: "minecraft:writable_book",
          },
        ],
      },
      {
        type: "create:deploying",
        ingredients: [
          {
            item: "minecraft:writable_book",
          },
          {
            item: "minecraft:lapis_lazuli",
          },
        ],
        results: [
          {
            item: "minecraft:writable_book",
          },
        ],
      },
      {
        type: "create:deploying",
        ingredients: [
          {
            item: "minecraft:writable_book",
          },
          {
            item: "minecraft:lapis_lazuli",
          },
        ],
        results: [
          {
            item: "minecraft:writable_book",
          },
        ],
      },
      {
        type: "create:deploying",
        ingredients: [
          {
            item: "minecraft:writable_book",
          },
          {
            item: "minecraft:lapis_lazuli",
          },
        ],
        results: [
          {
            item: "minecraft:writable_book",
          },
        ],
      },
      {
        type: "create:pressing",
        ingredients: [
          {
            item: "minecraft:writable_book",
          },
        ],
        results: [
          {
            item: "minecraft:writable_book",
          },
        ],
      },
    ],
    transitionalItem: {
      item: "minecraft:writable_book",
    },
  });

  //enchant hard
  event.custom({
    type: "create:sequenced_assembly",
    ingredient: {
      item: "minecraft:book",
    },
    loops: 1,
    results: [
      Item.of("minecraft:enchanted_book")
        .enchant("minecraft:silk_touch", 1)
        .withChance(0.05),
      Item.of("minecraft:enchanted_book")
        .enchant("minecraft:flame", 1)
        .withChance(0.05),
      Item.of("minecraft:enchanted_book")
        .enchant("minecraft:aqua_affinity", 1)
        .withChance(0.05),
      Item.of("minecraft:enchanted_book")
        .enchant("minecraft:infinity", 1)
        .withChance(0.05),
      Item.of("minecraft:enchanted_book")
        .enchant("minecraft:multishot", 1)
        .withChance(0.05),
      Item.of("minecraft:enchanted_book")
        .enchant("minecraft:channeling", 1)
        .withChance(0.05),
      Item.of("minecraft:enchanted_book")
        .enchant("supplementaries:stasis", 1)
        .withChance(0.05),
      Item.of("minecraft:enchanted_book")
        .enchant("minecraft:mending", 1)
        .withChance(0.05),
      Item.of("minecraft:enchanted_book")
        .enchant("qu-enchantments:bashing", 1)
        .withChance(0.05),
      Item.of("minecraft:enchanted_book")
        .enchant("qu-enchantments:speed_blessing", 1)
        .withChance(0.05),
      Item.of("minecraft:enchanted_book")
        .enchant("qu-enchantments:regeneration_blessing", 1)
        .withChance(0.05),
      Item.of("minecraft:enchanted_book")
        .enchant("qu-enchantments:aggression_blessing", 1)
        .withChance(0.05),
      Item.of("minecraft:enchanted_book")
        .enchant("qu-enchantments:fidelity", 1)
        .withChance(0.05),
      Item.of("minecraft:enchanted_book")
        .enchant("spell_engine:spell_infinity", 1)
        .withChance(0.05),
    ],
    sequence: [
      {
        type: "create:deploying",
        ingredients: [
          {
            item: "minecraft:writable_book",
          },
          {
            item: "create_enchantment_industry:hyper_experience_bottle",
          },
        ],
        results: [
          {
            item: "minecraft:writable_book",
          },
        ],
      },
      {
        type: "create:deploying",
        ingredients: [
          {
            item: "minecraft:writable_book",
          },
          {
            item: "progressivebosses:nether_star_shard",
          },
        ],
        results: [
          {
            item: "minecraft:writable_book",
          },
        ],
      },
      {
        type: "create:deploying",
        ingredients: [
          {
            item: "minecraft:writable_book",
          },
          {
            item: "progressivebosses:nether_star_shard",
          },
        ],
        results: [
          {
            item: "minecraft:writable_book",
          },
        ],
      },
      {
        type: "create:deploying",
        ingredients: [
          {
            item: "minecraft:writable_book",
          },
          {
            item: "progressivebosses:nether_star_shard",
          },
        ],
        results: [
          {
            item: "minecraft:writable_book",
          },
        ],
      },
      {
        type: "create:pressing",
        ingredients: [
          {
            item: "minecraft:writable_book",
          },
        ],
        results: [
          {
            item: "minecraft:writable_book",
          },
        ],
      },
    ],
    transitionalItem: {
      item: "minecraft:writable_book",
    },
  });

  event.custom({
    type: "botania:petal_apothecary",
    ingredients: [
      {
        tag: "botania:petals/black",
      },
      {
        tag: "botania:petals/black",
      },
      {
        tag: "botania:petals/black",
      },
      {
        tag: "botania:petals/black",
      },
      {
        tag: "botania:petals/black",
      },
      {
        item: "botania:vine_ball",
      },
    ],
    output: {
      item: "minecraft:ink_sac",
    },
    reagent: {
      item: "supplementaries:present",
    },
  });
  //coal
  event.custom({
    type: "create:filling",
    ingredients: [
      {
        item: "minecraft:charcoal",
      },
      {
        amount: 16200,
        fluid: "createfoundry:molten_carbon",
        nbt: {},
      },
    ],
    results: [
      {
        item: "minecraft:coal",
      },
    ],
  });
  // lapis lazuli

  event.custom({
    type: "create:filling",
    ingredients: [
      {
        item: "botania:mana_powder",
      },
      {
        amount: 2100,
        fluid: "fabricaeexnihilo:brine",
        nbt: {},
      },
    ],
    results: [
      {
        item: "minecraft:lapis_lazuli",
      },
    ],
  });
  //gravel
  event.custom({
    type: "create:milling",
    ingredients: [
      {
        item: "minecraft:cobblestone",
      },
    ],
    results: [
      {
        item: "minecraft:gravel",
      },
    ],
    processingTime: 150,
  });

  //gem moult
  event.custom({
    type: "create:sandpaper_polishing",
    ingredients: [
      {
        item: "minecraft:diamond",
      },
    ],
    results: [
      {
        item: "createfoundry:gem_mould_blueprint",
      },
    ],
  });

  event.custom({
    type: "create:sandpaper_polishing",
    ingredients: [
      {
        item: "minecraft:emerald",
      },
    ],
    results: [
      {
        item: "createfoundry:gem_mould_blueprint",
      },
    ],
  });
  //ingot moult
  event.custom({
    type: "create:sandpaper_polishing",
    ingredients: [
      {
        item: "minecraft:iron_ingot",
      },
    ],
    results: [
      {
        item: "createfoundry:ingot_mould_blueprint",
      },
    ],
  });

  //moul coke
  event.custom({
    type: "create:sandpaper_polishing",
    ingredients: [
      {
        item: "minecraft:coal",
      },
    ],
    results: [
      {
        item: "createfoundry:coke_mould_blueprint",
      },
    ],
  });
  //poudre obsidian
  event.custom({
    type: "botania:mana_infusion",
    input: {
      item: "botania:mana_powder",
    },
    mana: 12000,
    output: {
      item: "create:powdered_obsidian",
    },
  });
  //membrane phantom
  event.custom({
    type: "minecraft:crafting_shaped",
    pattern: [" A ", "AAA", " A "],
    key: {
      A: {
        item: "minecraft:leather",
      },
    },
    result: {
      item: "minecraft:phantom_membrane",
    },
  });

  //farine nether
  event.custom({
    type: "create:milling",
    ingredients: [
      {
        item: "minecraft:netherrack",
      },
    ],
    results: [
      {
        item: "create:cinder_flour",
        chance: 0.25,
      },
    ],
    processingTime: 300,
  });

  //etape sturdy moule ingot

  event.custom({
    type: "create:item_application",
    ingredients: [
      {
        item: "minecraft:crying_obsidian",
      },
      {
        item: "createfoundry:ingot_mould_blueprint",
      },
    ],
    results: [
      Item.of(
        "create:unprocessed_obsidian_sheet",
        '{SequencedAssembly:{Progress:0.33333334f,Step:1,id:"createfoundry:sequenced_assembly/ingot_mould"}}'
      ),
    ],
  });
  //netherrack
  event.custom({
    type: "create:filling",
    ingredients: [
      {
        item: "minecraft:cobblestone",
      },
      {
        fluid: "create:potion",
        nbt: {
          Bottle: "REGULAR",
          Potion: "minecraft:healing",
        },
        amount: 8100,
      },
    ],
    results: [
      {
        item: "minecraft:netherrack",
      },
    ],
  });
  //water from agriculture
  event.custom({
    type: "fabricaeexnihilo:crucible",
    input: { tag: "c:crops" },
    amount: 8100,
    fluid: "minecraft:water",
    requiresFireproofCrucible: false,
  });
  //netherite
  event.custom({
    type: "create:mixing",
    ingredients: [
      {
        amount: 4050,
        fluid: "createfoundry:molten_ancient_debris",
        nbt: {},
      },
      {
        amount: 4050,
        fluid: "createfoundry:molten_gold",
        nbt: {},
      },
    ],
    results: [
      {
        fluid: "createfoundry:molten_netherite",
        amount: 4050,
      },
    ],
    heatRequirement: "superheated",
  });
  //monnaie
  event.custom({
    type: "minecraft:crafting_shaped",
    pattern: ["AA ", "AA ", "   "],
    key: {
      A: {
        item: "coinsje:copper_coin",
      },
    },
    result: {
      item: "coinsje:iron_coin",
    },
  });

  event.custom({
    type: "minecraft:crafting_shaped",
    pattern: ["AA ", "AA ", "   "],
    key: {
      A: {
        item: "coinsje:iron_coin",
      },
    },
    result: {
      item: "coinsje:gold_coin",
    },
  });
  event.custom({
    type: "minecraft:crafting_shaped",
    pattern: ["AA ", "AA ", "   "],
    key: {
      A: {
        item: "coinsje:gold_coin",
      },
    },
    result: {
      item: "coinsje:diamond_coin",
    },
  });
  event.custom({
    type: "minecraft:crafting_shaped",
    pattern: ["AA ", "AA ", "   "],
    key: {
      A: {
        item: "coinsje:diamond_coin",
      },
    },
    result: {
      item: "coinsje:netherite_coin",
    },
  });
  //stack coin
  event.custom({
    type: "minecraft:crafting_shaped",
    pattern: ["AAA", "AAA", "AAA"],
    key: {
      A: {
        item: "coinsje:copper_coin",
      },
    },
    result: {
      item: "coinsje:copper_coin_pile",
    },
  });

  event.custom({
    type: "minecraft:crafting_shaped",
    pattern: ["AAA", "AAA", "AAA"],
    key: {
      A: {
        item: "coinsje:iron_coin",
      },
    },
    result: {
      item: "coinsje:iron_coin_pile",
    },
  });
  event.custom({
    type: "minecraft:crafting_shaped",
    pattern: ["AAA", "AAA", "AAA"],
    key: {
      A: {
        item: "coinsje:gold_coin",
      },
    },
    result: {
      item: "coinsje:gold_coin_pile",
    },
  });

  event.custom({
    type: "minecraft:crafting_shaped",
    pattern: ["AAA", "AAA", "AAA"],
    key: {
      A: {
        item: "coinsje:diamond_coin",
      },
    },
    result: {
      item: "coinsje:diamond_coin_pile",
    },
  });
  event.custom({
    type: "minecraft:crafting_shaped",
    pattern: ["AAA", "AAA", "AAA"],
    key: {
      A: {
        item: "coinsje:netherite_coin",
      },
    },
    result: {
      item: "coinsje:netherite_coin_pile",
    },
  });

  //destack coin

  event.custom({
    type: "minecraft:crafting_shaped",
    pattern: ["A  ", "   ", "   "],
    key: {
      A: {
        item: "coinsje:netherite_coin_pile",
      },
    },
    result: {
      item: "coinsje:netherite_coin",
      count: 9,
    },
  });
  event.custom({
    type: "minecraft:crafting_shaped",
    pattern: ["A  ", "   ", "   "],
    key: {
      A: {
        item: "coinsje:diamond_coin_pile",
      },
    },
    result: {
      item: "coinsje:diamond_coin",
      count: 9,
    },
  });
  event.custom({
    type: "minecraft:crafting_shaped",
    pattern: ["A  ", "   ", "   "],
    key: {
      A: {
        item: "coinsje:gold_coin_pile",
      },
    },
    result: {
      item: "coinsje:gold_coin",
      count: 9,
    },
  });
  event.custom({
    type: "minecraft:crafting_shaped",
    pattern: ["A  ", "   ", "   "],
    key: {
      A: {
        item: "coinsje:copper_coin_pile",
      },
    },
    result: {
      item: "coinsje:copper_coin",
      count: 9,
    },
  });
  event.custom({
    type: "minecraft:crafting_shaped",
    pattern: ["A  ", "   ", "   "],
    key: {
      A: {
        item: "coinsje:iron_coin_pile",
      },
    },
    result: {
      item: "coinsje:iron_coin",
      count: 9,
    },
  });

  event.custom({
    type: "minecraft:crafting_shaped",
    pattern: ["A  ", "   ", "   "],
    key: {
      A: {
        item: "coinsje:netherite_coin",
      },
    },
    result: {
      item: "coinsje:diamond_coin",
      count: 4,
    },
  });
  event.custom({
    type: "minecraft:crafting_shaped",
    pattern: ["A  ", "   ", "   "],
    key: {
      A: {
        item: "coinsje:diamond_coin",
      },
    },
    result: {
      item: "coinsje:gold_coin",
      count: 4,
    },
  });
  event.custom({
    type: "minecraft:crafting_shaped",
    pattern: ["A  ", "   ", "   "],
    key: {
      A: {
        item: "coinsje:gold_coin",
      },
    },
    result: {
      item: "coinsje:iron_coin",
      count: 4,
    },
  });

  event.custom({
    type: "minecraft:crafting_shaped",
    pattern: ["A  ", "   ", "   "],
    key: {
      A: {
        item: "coinsje:iron_coin",
      },
    },
    result: {
      item: "coinsje:copper_coin",
      count: 4,
    },
  });
  //molten redstone
  event.custom({
    type: "create:mixing",
    ingredients: [
      {
        tag: "minecraft:redstone_ores",
      },
    ],
    results: [
      {
        fluid: "createfoundry:molten_redstone",
        amount: 81000,
      },
    ],
    heatRequirement: "superheated",
  });

  //molten lapis_lazuli
  event.custom({
    type: "create:mixing",
    ingredients: [
      {
        tag: "minecraft:lapis_ores",
      },
    ],
    results: [
      {
        fluid: "createfoundry:molten_lapis",
        amount: 81000,
      },
    ],
    heatRequirement: "superheated",
  });

  //boule de noel
  event.custom({
    type: "create:mixing",
    ingredients: [
      {
        item: "minecraft:snowball",
      },
      {
        item: "minecraft:snowball",
      },
      {
        item: "minecraft:snowball",
      },
      {
        item: "minecraft:snowball",
      },
      {
        item: "create:golden_sheet",
      },
      {
        item: "minecraft:redstone",
      },
      {
        item: "minecraft:redstone",
      },
      {
        item: "minecraft:redstone",
      },
      {
        item: "minecraft:redstone",
      },
    ],
    results: [
      {
        item: "kubejs:boule_de_noel",
        amount: 2,
      },
    ],
  });

  //copper backtank
  event.custom({
    type: "minecraft:crafting_shaped",
    pattern: [" I ", "LAL", "SDS"],
    key: {
      L: {
        item: "minecraft:copper_block",
      },
      D: {
        item: "create:precision_mechanism",
      },
      S: {
        item: "minecraft:piston",
      },
      I: {
        item: "create:rose_quartz_lamp",
      },
      A: {
        item: "minecraft:nether_star",
      },
    },
    result: {
      item: "create:copper_backtank",
    },
  });

  //noel
  event.custom({
    type: "minecraft:crafting_shaped",
    pattern: ["ABA", "BCB", "ABA"],
    key: {
      A: {
        item: "minecraft:snowball",
      },
      B: {
        item: "minecraft:redstone",
      },
      C: {
        item: "create:golden_sheet",
      },
    },
    result: {
      item: "kubejs:boule_de_noel",
      count: 1,
    },
  });

  event.custom({
    type: "minecraft:crafting_shaped",
    pattern: ["ABA", "BCB", "ABA"],
    key: {
      A: {
        item: "botania:terrasteel_ingot",
      },
      B: {
        item: "minecraft:netherite_ingot",
      },
      C: {
        item: "minecraft:nether_star",
      },
    },
    result: {
      item: "simple_backpack:backpack",
      count: 1,
    },
  });
});

ServerEvents.tags("item", (event) => {
  // Get the #forge:cobblestone tag collection and add Diamond Ore to it
  // event.get('forge:cobblestone').add('minecraft:diamond_ore')
  // Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
  // event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
});
