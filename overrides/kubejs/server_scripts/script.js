// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {

	// removed

	event.remove({id: 'minecraft:diamond_from_blasting_diamond_ore'})
	event.remove({id: 'minecraft:diamond_from_smelting_diamond_ore'})
	event.remove({id: 'minecraft:diamond_from_smelting_deepslate_diamond_ore'})
	event.remove({id: 'minecraft:diamond_from_blasting_deepslate_diamond_ore'})
	event.remove({id: 'minecraft:iron_ingot_from_blasting_iron_ore'})
	event.remove({id: 'minecraft:iron_ingot_from_smelting_iron_ore'})
	event.remove({id: 'minecraft:iron_ingot_from_smelting_deepslate_iron_ore'})
	event.remove({id: 'minecraft:iron_ingot_from_blasting_deepslate_iron_ore'})
	event.remove({id: 'minecraft:gold_ingot_from_blasting_gold_ore'})
	event.remove({id: 'minecraft:gold_ingot_from_smelting_gold_ore'})
	event.remove({id: 'minecraft:gold_ingot_from_smelting_deepslate_gold_ore'})
	event.remove({id: 'minecraft:gold_ingot_from_blasting_deepslate_gold_ore'})
	event.remove({id: 'minecraft:gold_ingot_from_blasting_nether_gold_ore'})
	event.remove({id: 'minecraft:gold_ingot_from_smelting_nether_gold_ore'})
	event.remove({id: 'create:smelting/iron_ingot_from_crushed'})
	event.remove({id: 'create:smelting/copper_ingot_from_crushed'})
	event.remove({id: 'create:smelting/gold_ingot_from_crushed'})
	event.remove({mod: 'coinsje'})
	event.remove({mod: 'vs_eureka'})
	event.remove({id:'botania:mana_infusion/mana_powder_dye'})
	event.remove({mod: 'armourers_workshop'})
	event.remove({mod: 'theoneprobe'})
	event.remove({id: 'create:crafting/schematics/schematicannon'})
	event.remove({id: 'create:crafting/kinetics/windmill_bearing'})	
	event.remove({id: 'create:crafting/kinetics/mechanical_drill'})	
	event.remove({id: 'create:crafting/kinetics/empty_blaze_burner'})	
	event.remove({id: 'fabricaeexnihilo:sifting'})
	event.remove({id: 'fabricaeexnihilo:crucible/lava_from_stone'})
	event.remove({id: 'fabricaeexnihilo:crucible/lava_from_cobblestone'})
	event.remove({id: 'fabricaeexnihilo:crucible/lava_from_sand'})
	event.remove({id: 'fabricaeexnihilo:crucible/lava_from_obsidian'})
	event.remove({id: 'fabricaeexnihilo:crucible/lava_from_andesite'})
	event.remove({id: 'fabricaeexnihilo:crucible/lava_from_gravel'})
	event.remove({id: 'fabricaeexnihilo:crucible/lava_from_diorite'})
	event.remove({id: 'fabricaeexnihilo:crucible/lava_from_granite'})
	event.remove({id: 'fabricaeexnihilo:crucible/lava_from_netherrack'})
	event.remove({id: 'fabricaeexnihilo:crucible/lava_from_end_stone'})
	event.remove({id: 'fabricaeexnihilo:crucible/lava_from_dust'})
	event.remove({id: 'fabricaeexnihilo:crucible/lava_from_crushed_netherrack'})
	event.remove({id: 'fabricaeexnihilo:crucible/lava_from_crushed_end_stone'})
	event.remove({id: 'fabricaeexnihilo:crucible/lava_from_crushed_diorite'})
	event.remove({id: 'fabricaeexnihilo:crucible/lava_from_crushed_andesite'})
	event.remove({id: 'fabricaeexnihilo:crucible/lava_from_crushed_granite'})
	event.remove({id: 'fabricaeexnihilo:crucible/lava_from_crushed_netherrack'})
	event.remove({id: 'create:haunting/infested_stone'})
	event.remove({id: 'create:haunting/infested_mossy_stone_bricks'})
	event.remove({id: 'create:haunting/infested_stone_bricks'})
	event.remove({id: 'create:haunting/infested_cracked_stone_bricks'})
	event.remove({id: 'create:haunting/infested_chiseled_stone_bricks'})
	event.remove({id: 'create:haunting/infested_deepslate'})
	event.remove({id: 'create_sa:quartz_gem_crushing'})
	event.remove({id: 'create_enchantment_industry:crafting/enchanting_guide'})
	event.remove({id: 'fabricaeexnihilo:sieve/ore/redstone_from_dust'})
	event.remove({id: 'fabricaeexnihilo:sieve/ore/quartz_from_soul_sand'})
	event.remove({id: 'fabricaeexnihilo:sieve/ore/netherite_scrap_from_crushed_netherrack'})
	event.remove({id: 'fabricaeexnihilo:sieve/ore/lapis_lazuli_from_silt'})
	event.remove({id: 'fabricaeexnihilo:sieve/ore/lapis_lazuli_from_gravel'})
	event.remove({id: 'fabricaeexnihilo:sieve/ore/iron_from_sand'})
	event.remove({id: 'fabricaeexnihilo:sieve/ore/iron_from_red_sand'})
	event.remove({id: 'fabricaeexnihilo:sieve/ore/iron_from_gravel'})
	event.remove({id: 'fabricaeexnihilo:sieve/ore/iron_from_crushed_granite'})
	event.remove({id: 'fabricaeexnihilo:sieve/ore/gold_from_gravel'})
	event.remove({id: 'fabricaeexnihilo:sieve/ore/gold_from_crushed_netherrack'})
	event.remove({id: 'fabricaeexnihilo:sieve/ore/emerald_from_gravel'})
	event.remove({id: 'fabricaeexnihilo:sieve/ore/diamond_from_gravel'})
	event.remove({id: 'fabricaeexnihilo:sieve/ore/copper_from_gravel'})
	event.remove({id: 'fabricaeexnihilo:sieve/ore/copper_from_sand'})
	event.remove({id: 'fabricaeexnihilo:sieve/ore/coal_from_sand'})
	event.remove({id: 'fabricaeexnihilo:sieve/ore/coal_from_gravel'})
	event.remove({id: 'fabricaeexnihilo:sieve/ore/amethyst_from_crushed_calcite'})
	event.remove({id: 'fabricaeexnihilo:sieve/plant/nether_wart'})
	event.remove({id: 'fabricaeexnihilo:sieve/blaze_powder'})
	event.remove({id: 'fabricaeexnihilo:sieve/bone_meal'})
	event.remove({id: 'fabricaeexnihilo:sieve/glowstone'})
	event.remove({id: 'fabricaeexnihilo:sieve/gunpowder'})
	event.remove({id: 'fabricaeexnihilo:fluid_combiantion/stone'})
	event.remove({id: 'botania:petal_apothecary/orechid'})
	event.remove({id: 'create:crushing/tuff'})
	event.remove({id: 'create:crushing/tuff_recycling'})
	event.remove({id: 'saros_create_addon_fabric:iron_to_dia'})
	event.remove({id: 'minecraft:iron_ingot_from_nuggets'})
	event.remove({id: 'minecraft:gold_ingot_from_nuggets'})
	event.remove({id: 'minecraft:copper_ingot_from_nuggets'})
	event.remove({id: 'create:crafting/materials/zinc_ingot_from_compacting'})
	event.remove({id: 'create:crafting/materials/brass_ingot_from_compacting'})
	event.remove({id: 'create:mixing/brass_ingot'})
	event.remove({id: 'minecraft:iron_helmet'})
	event.remove({id: 'minecraft:golden_helmet'})
	event.remove({id: 'minecraft:diamond_helmet'})
	event.remove({id: 'minecraft:netherite_helmet_smithing'})
	event.remove({id: 'minecraft:iron_chestplate'})
	event.remove({id: 'minecraft:golden_chestplate'})
	event.remove({id: 'minecraft:diamond_chestplate'})
	event.remove({id: 'minecraft:netherite_chestplate_smithing'})
	event.remove({id: 'minecraft:iron_leggings'})
	event.remove({id: 'minecraft:golden_leggings'})	
	event.remove({id: 'minecraft:diamond_leggings'})
	event.remove({id: 'minecraft:netherite_leggings_smithing'})
	event.remove({id: 'minecraft:iron_boots'})
	event.remove({id: 'minecraft:golden_boots'})
	event.remove({id: 'minecraft:diamond_boots'})
	event.remove({id: 'minecraft:netherite_boots_smithing'})
	event.remove({id: 'botania:terra_pick'})
	event.remove({id: 'botania:manasteel_boots'})
	event.remove({id: 'botania:elementium_boots'})
	event.remove({id: 'botania:manasteel_leggings'})
	event.remove({id: 'botania:elementium_leggings'})
	event.remove({id: 'botania:manasteel_chestplate'})
	event.remove({id: 'botania:elementium_chestplate'})
	event.remove({id: 'botania:manasteel_helmet'})
	event.remove({id: 'botania:elementium_helmet'})
	event.remove({id: 'create:milling/cobblestone'})
	event.remove({id: 'create_deco_casing:recette_chromatic_compound'})
	event.remove({id: 'saros_create_addon_fabric:raw_dia'})
	event.remove({id: 'createfoundry:compacting/diamond_from_carbon'})
	event.remove({id: 'createfoundry:mixing/molten_netherite_from_ancient_debris_gold'})
	event.remove({id: 'fabricaeexnihilo:fluid_combiantion/obsidian'})
	event.remove({id: 'botania:mana_infusion/spruce_leaves_dupe'})
	event.remove({id: 'botania:mana_infusion/oak_leaves_dupe'})
	event.remove({id: 'botania:mana_infusion/jungle_leaves_dupe'})
	event.remove({id: 'botania:mana_infusion/dark_oak_leaves_dupe'})
	event.remove({id: 'botania:mana_infusion/birch_leaves_dupe'})
	event.remove({id: 'botania:mana_infusion/soul_sand_dupe'})
	event.remove({id: 'botania:mana_infusion/snowball_dupe'})
	event.remove({id: 'botania:mana_infusion/spruce_leaves_dupe'})
	event.remove({id: 'botania:mana_infusion/redstone_dupe'})
	event.remove({id: 'botania:mana_infusion/coal_dupe'})
	event.remove({id: 'botania:mana_infusion/lapis_lazuli_dupe'})
	event.remove({id: 'botania:mana_infusion/quartz_dupe'})
	event.remove({id: 'botania:mana_infusion/netherrack_dupe'})
	event.remove({id: 'botania:mana_infusion/gravel_dupe'})
	event.remove({id: 'botania:mana_infusion/grass'})
	event.remove({id: 'botania:mana_infusion/glowstone_dupe'})
	event.remove({id: 'botania:mana_infusion/flowering_azalea_leaves_dupe'})
	event.remove({id: 'botania:mana_infusion/azalea_leaves_dupe'})
	event.remove({id: 'botania:mana_infusion/acacia_leaves_dupe'})
	event.remove({id: 'createfoundry:mixing/melting/unit/carbon_from_charcoal'})
	event.remove({id: 'botania:petal_apothecary/loonium'})
	event.remove({id: 'botania:mana_mirror'})
	event.remove({id: 'botania:terra_plate/terrasteel_ingot'})
	event.remove({id: 'botania:mana_tablet_alt'})
	event.remove({id: 'botania:mana_tablet'})
	event.remove({id: 'fabricaeexnihilo:dolls/doll'})
	event.remove({id: 'fabricaeexnihilo:witch_water_entity/wither_skeleton'})
	event.remove({id: 'fabricaeexnihilo:witch_water_entity/warden'})
	event.remove({id: 'fabricaeexnihilo:witch_water_entity/shulker'})
	event.remove({id: 'fabricaeexnihilo:witch_water_entity/ghast'})
	event.remove({id: 'botania:mana_infusion/mana_cookie'})
	event.remove({id:'botania:spawner_claw'})
	event.remove({id: 'botania:petal_apothecary/dandelifeon'})
	event.remove({id:'botania:black_hole_talisman'})
	//schematicanon

	event.custom({
		"type": "minecraft:crafting_shaped",
		"pattern": [
		  " I ",
		  "LAL",
		  "SDS"
		],
		"key": {
		  "L": {
			"tag": "minecraft:logs"
		  },
		  "D": {
			"item": "minecraft:dispenser"
		  },
		  "S": {
			"item": "minecraft:smooth_stone"
		  },
		  "I": {
			"item": "minecraft:iron_block"
		  },
		  "A": {
			"item": "minecraft:nether_star"
		  }
		},
		"result": {
		  "item": "create:schematicannon"
		}  })


		event.custom({
			"type": "minecraft:crafting_shaped",
			"pattern": [
			  "SIS",
			  "IAI",
			  "SIS"
			],
			"key": {
			  "S": {
				"item": "botania:life_essence"
			  },
			  "I": {
				"item": "botania:dragonstone"
			  },
			  "A": {
				"item": "minecraft:nether_star"
			  }
			},
			"result": {
			  "item": "botania:black_hole_talisman"
			}  })
		  // moulin à vent
		  event.custom(
			{
				"type": "minecraft:crafting_shaped",
				"pattern": [
				  " B ",
				  "ACA",
				  "AIA"
				],
				"key": {
				  "B": {
					"tag": "minecraft:wooden_slabs"
				  },
				  "C": {
					"tag": "forge:stone"
				  },
				  "I": {
					"item": "create:shaft"
				  },
				  "A": {
					"item": "create:iron_sheet"
				  }
				},
				"result": {
				  "item": "create:windmill_bearing"
				}
			  })
			//blaze burner
			event.custom({
				"type": "minecraft:crafting_shaped",
				"pattern": [
				"BIB",
				"IAI",
				"BIB"
				],
				"key": {
				"A": {
					"item": "minecraft:campfire"
				},
				"I": {
					"item": "create:iron_sheet"
				},
				"B": {
					"item": "minecraft:netherrack"
				}
				},
				"result": {
				"item": "create:empty_blaze_burner"
				}
			})

			// blaze powder
			event.custom({
				"type": "create:mixing",
				"ingredients": [
				{
					"item": "minecraft:gold_nugget"
				},
				{
					"item": "minecraft:gold_nugget"
				},
				{
					"item": "minecraft:gold_nugget"
				},
				{
					"item": "minecraft:gold_nugget"
				},
				{
					"item": "minecraft:gold_nugget"
				},
				{
					"item": "minecraft:gunpowder"
				},
				{
					"item": "minecraft:gunpowder"
				},
				{
					"item": "minecraft:gunpowder"
				},
				{
					"item": "minecraft:gunpowder"
				},
				{
					"fluid": "minecraft:lava",
					"amount": 500
				}
				],
				"results": [
				{
					"item": "minecraft:blaze_powder",
					"amount": 2
				}
				],
				"heatRequirement": "heated"
		})
		
		//émeraude
	event.custom({
		"type": "create:mixing",
		"ingredients": [
		  {
			"item": "minecraft:iron_nugget"
		  },
		  {
			"item": "minecraft:quartz"
		  },
		  {
			"item": "create:experience_nugget"
		  },
		  {
			"item": "minecraft:amethyst_shard"
		  }
		],
		"results": [
		  {
			"fluid": "createfoundry:molten_emerald",
			"amount": 16200
		  }
		],
		"heatRequirement": "superheated"
	})
	  // dark bone
	  event.custom({
		"type": "create:mixing",
		"ingredients": [
		  {
			"item": "minecraft:coal"
		  },
		  {
			"item": "minecraft:coal"
		  },
		  {
			"item": "minecraft:coal"
		  },
		  {
			"item": "minecraft:coal"
		  },
		  {
			"item": "minecraft:coal"
		  },
		  {
			"item": "minecraft:coal"
		  },
		  {
			"item": "minecraft:coal"
		  },
		  {
			"item": "minecraft:coal"
		  },
		  {
			"item": "minecraft:bone"
		  }
		],
		"results": [
		  {
			"item": "kubejs:os"
		  }
		]
	})  
		// tete wither
		event.custom({
			"type": "create:mixing",
			"ingredients": [
			  {
				"item": "kubejs:os"
			  },
			  {
				"item": "kubejs:os"
			  },
			  {
				"item": "kubejs:os"
			  },
			  {
				"item": "kubejs:os"
			  },
			  {
				"item": "kubejs:os"
			  },
			  {
				"item": "kubejs:os"
			  },
			  {
				"item": "kubejs:os"
			  },
			  {
				"item": "kubejs:os"
			  },
			  
			  {
				"item": "minecraft:skeleton_skull"
			  }
			],
			"results": [
			  {
				"item": "minecraft:wither_skeleton_skull"
			  }
			],
			"heatRequirement": "heated"
		})  
		//sand
		event.custom({
			"type": "create:milling",
			"ingredients": [
			  {
				"item": "minecraft:gravel"
			  }
			],
			"results": [
			  {
				"item": "minecraft:sand"
			  }
			],
			"processingTime": 150
		  })

 
  //nether_shard
  event.custom({
	"type": "minecraft:crafting_shaped",
	"pattern": [
	  "   ",
	  " S ",
	  "   "
	],
	"key": {
	  "S": {
		"item": "minecraft:nether_star"
	  }
	},
	"result": {
	  "item": "progressivebosses:nether_star_shard",
	  "amount": 9
}})
//craft en attendant
event.custom({
	"type": "create:mechanical_crafting",
	"pattern": [
	  "BAA ",
	  "IECA",
	  "BAA "
	],
	"key": {
	  "A": {
		"item": "create:iron_sheet"
	  },
	  "I": {
		"item": "create:andesite_casing"
	  },
	  "B": {
		"item": "create:cogwheel"
	  },
	  "E": {
		"item": "create:precision_mechanism"
	  },
	  "C": {
		"item": "minecraft:iron_pickaxe"
	  },
	},
	"result": {
	  "item": "create:mechanical_drill"
	}
})
 //enchantguide
 event.custom({
	"type": "minecraft:crafting_shaped",
	"pattern": [
	  "AAA",
	  "BCB",
	  "BCB"
	],
	"key": {
	  
	  "C": {
		"item": "create:sturdy_sheet"
	  },
	  "B": {
		"item": "minecraft:netherite_scrap"
	  },
	  "A": {
		"item": "minecraft:red_dye"
	  }
	},
	"result": {
	  "item": "create_enchantment_industry:enchanting_guide"
	}
  })
//cendre
event.custom(
	{
		"type": "minecraft:crafting_shaped",
		"pattern": [
		  "AB ",
		  "   ",
		  "   "
		],
		"key": {
		  
		  "B": {
			"item": "minecraft:gunpowder"
		  },
		  "A": {
			"item": "minecraft:charcoal"
		  }
		},
		"result": {
		  "item": "supplementaries:ash"
		}
	  })
//craft dirt terre
event.custom(
	{
		"type": "create:splashing",
		"ingredients": [
		  {
			"item": "minecraft:coarse_dirt"
		  }
		],
		"results": [
		  {
			"item": "minecraft:dirt",
		  }
		]
	  }
)

//armure en mail

	event.custom({
		"type": "minecraft:crafting_shaped",
		"pattern": [
		  "AAA",
		  "ABA",
		  "AAA"
		],
		"key": {
		  "A": {
			"item": "minecraft:iron_bars"
		  },
		  "B": {
			"item": "minecraft:leather_helmet"
		  }
		},
		"result": {
		  "item": "minecraft:chainmail_helmet"
		}  })
		event.custom({
			"type": "minecraft:crafting_shaped",
			"pattern": [
			  "AAA",
			  "ABA",
			  "AAA"
			],
			"key": {
			  "A": {
				"item": "minecraft:iron_bars"
			  },
			  "B": {
				"item": "minecraft:leather_chestplate"
			  }
			},
			"result": {
			  "item": "minecraft:chainmail_chestplate"
			}  })
			event.custom({
				"type": "minecraft:crafting_shaped",
				"pattern": [
				  "AAA",
				  "ABA",
				  "AAA"
				],
				"key": {
				  "A": {
					"item": "minecraft:iron_bars"
				  },
				  "B": {
					"item": "minecraft:leather_leggings"
				  }
				},
				"result": {
				  "item": "minecraft:chainmail_leggings"
				}  })
				event.custom({
					"type": "minecraft:crafting_shaped",
					"pattern": [
					  "AAA",
					  "ABA",
					  "AAA"
					],
					"key": {
					  "A": {
						"item": "minecraft:iron_bars"
					  },
					  "B": {
						"item": "minecraft:leather_boots"
					  }
					},
					"result": {
					  "item": "minecraft:chainmail_boots"
					}  })
// armure en fer

event.custom({
	"type": "minecraft:crafting_shaped",
	"pattern": [
	  "AAA",
	  "ABA",
	  "AAA"
	],
	"key": {
	  "A": {
		"item": "create:iron_sheet"
	  },
	  "B": {
		"item": "minecraft:chainmail_helmet"
	  }
	},
	"result": {
	  "item": "minecraft:iron_helmet"
	}  })
	event.custom({
		"type": "minecraft:crafting_shaped",
		"pattern": [
		  "AAA",
		  "ABA",
		  "AAA"
		],
		"key": {
		  "A": {
			"item": "create:iron_sheet"
		  },
		  "B": {
			"item": "minecraft:chainmail_chestplate"
		  }
		},
		"result": {
		  "item": "minecraft:iron_chestplate"
		}  })
		event.custom({
			"type": "minecraft:crafting_shaped",
			"pattern": [
			  "AAA",
			  "ABA",
			  "AAA"
			],
			"key": {
			  "A": {
				"item": "create:iron_sheet"
			  },
			  "B": {
				"item": "minecraft:chainmail_leggings"
			  }
			},
			"result": {
			  "item": "minecraft:iron_leggings"
			}  })
			event.custom({
				"type": "minecraft:crafting_shaped",
				"pattern": [
				  "AAA",
				  "ABA",
				  "AAA"
				],
				"key": {
				  "A": {
					"item": "create:iron_sheet"
				  },
				  "B": {
					"item": "minecraft:chainmail_boots"
				  }
				},
				"result": {
				  "item": "minecraft:iron_boots"
				}  })

	//armure en or

	event.custom({
		"type": "minecraft:crafting_shaped",
		"pattern": [
		  "AAA",
		  "ABA",
		  "AAA"
		],
		"key": {
		  "A": {
			"item": "create:golden_sheet"
		  },
		  "B": {
			"item": "minecraft:iron_helmet"
		  }
		},
		"result": {
		  "item": "minecraft:golden_helmet"
		}  })
		event.custom({
			"type": "minecraft:crafting_shaped",
			"pattern": [
			  "AAA",
			  "ABA",
			  "AAA"
			],
			"key": {
			  "A": {
				"item": "create:golden_sheet"
			  },
			  "B": {
				"item": "minecraft:iron_chestplate"
			  }
			},
			"result": {
			  "item": "minecraft:golden_chestplate"
			}  })
			event.custom({
				"type": "minecraft:crafting_shaped",
				"pattern": [
				  "AAA",
				  "ABA",
				  "AAA"
				],
				"key": {
				  "A": {
					"item": "create:golden_sheet"
				  },
				  "B": {
					"item": "minecraft:iron_leggings"
				  }
				},
				"result": {
				  "item": "minecraft:golden_leggings"
				}  })
				event.custom({
					"type": "minecraft:crafting_shaped",
					"pattern": [
					  "AAA",
					  "ABA",
					  "AAA"
					],
					"key": {
					  "A": {
						"item": "create:golden_sheet"
					  },
					  "B": {
						"item": "minecraft:iron_boots"
					  }
					},
					"result": {
					  "item": "minecraft:golden_boots"
					}  })

			//armure en diamant

			event.custom({
				"type": "minecraft:crafting_shaped",
				"pattern": [
				  "AAA",
				  "ABA",
				  "AAA"
				],
				"key": {
				  "A": {
					"item": "minecraft:diamond"
				  },
				  "B": {
					"item": "minecraft:golden_helmet"
				  }
				},
				"result": {
				  "item": "minecraft:diamond_helmet"
				}  })
				event.custom({
					"type": "minecraft:crafting_shaped",
					"pattern": [
					  "AAA",
					  "ABA",
					  "AAA"
					],
					"key": {
					  "A": {
						"item": "minecraft:diamond"
					  },
					  "B": {
						"item": "minecraft:golden_chestplate"
					  }
					},
					"result": {
					  "item": "minecraft:diamond_chestplate"
					}  })
					event.custom({
						"type": "minecraft:crafting_shaped",
						"pattern": [
						  "AAA",
						  "ABA",
						  "AAA"
						],
						"key": {
						  "A": {
							"item": "minecraft:diamond"
						  },
						  "B": {
							"item": "minecraft:golden_leggings"
						  }
						},
						"result": {
						  "item": "minecraft:diamond_leggings"
						}  })
						event.custom({
							"type": "minecraft:crafting_shaped",
							"pattern": [
							  "AAA",
							  "ABA",
							  "AAA"
							],
							"key": {
							  "A": {
								"item": "minecraft:diamond"
							  },
							  "B": {
								"item": "minecraft:golden_boots"
							  }
							},
							"result": {
							  "item": "minecraft:diamond_boots"
							}  })



// armure en netherite
event.custom({
	"type": "minecraft:crafting_shaped",
	"pattern": [
	  "AAA",
	  "ABA",
	  "AAA"
	],
	"key": {
	  "A": {
		"item": "minecraft:netherite_ingot"
	  },
	  "B": {
		"item": "minecraft:diamond_helmet"
	  }
	},
	"result": {
	  "item": "minecraft:netherite_helmet"
	}  })
	event.custom({
		"type": "minecraft:crafting_shaped",
		"pattern": [
		  "AAA",
		  "ABA",
		  "AAA"
		],
		"key": {
		  "A": {
			"item": "minecraft:netherite_ingot"
		  },
		  "B": {
			"item": "minecraft:diamond_chestplate"
		  }
		},
		"result": {
		  "item": "minecraft:netherite_chestplate"
		}  })
		event.custom({
			"type": "minecraft:crafting_shaped",
			"pattern": [
			  "AAA",
			  "ABA",
			  "AAA"
			],
			"key": {
			  "A": {
				"item": "minecraft:netherite_ingot"
			  },
			  "B": {
				"item": "minecraft:diamond_leggings"
			  }
			},
			"result": {
			  "item": "minecraft:netherite_leggings"
			}  })
			event.custom({
				"type": "minecraft:crafting_shaped",
				"pattern": [
				  "AAA",
				  "ABA",
				  "AAA"
				],
				"key": {
				  "A": {
					"item": "minecraft:netherite_ingot"
				  },
				  "B": {
					"item": "minecraft:diamond_boots"
				  }
				},
				"result": {
				  "item": "minecraft:netherite_boots"
				}  })



// armure en manasteel

event.custom({
	"type": "minecraft:crafting_shaped",
	"pattern": [
	  "AAA",
	  "ABA",
	  "AAA"
	],
	"key": {
	  "A": {
		"item": "botania:manasteel_ingot"
	  },
	  "B": {
		"item": "minecraft:netherite_helmet"
	  }
	},
	"result": {
	  "item": "botania:manasteel_helmet"
	}  })
	event.custom({
		"type": "minecraft:crafting_shaped",
		"pattern": [
		  "AAA",
		  "ABA",
		  "AAA"
		],
		"key": {
		  "A": {
			"item": "botania:manasteel_ingot"
		  },
		  "B": {
			"item": "minecraft:netherite_chestplate"
		  }
		},
		"result": {
		  "item": "botania:manasteel_chestplate"
		}  })
		event.custom({
			"type": "minecraft:crafting_shaped",
			"pattern": [
			  "AAA",
			  "ABA",
			  "AAA"
			],
			"key": {
			  "A": {
				"item": "botania:manasteel_ingot"
			  },
			  "B": {
				"item": "minecraft:netherite_leggings"
			  }
			},
			"result": {
			  "item": "botania:manasteel_leggings"
			}  })

			event.custom({
				"type": "minecraft:crafting_shaped",
				"pattern": [
				  "AAA",
				  "ABA",
				  "AAA"
				],
				"key": {
				  "A": {
					"item": "botania:manasteel_ingot"
				  },
				  "B": {
					"item": "minecraft:netherite_boots"
				  }
				},
				"result": {
				  "item": "botania:manasteel_boots"
				}  })

//armure en elementium

event.custom({
	"type": "minecraft:crafting_shaped",
	"pattern": [
	  "AAA",
	  "ABA",
	  "AAA"
	],
	"key": {
	  "A": {
		"item": "botania:elementium_ingot"
	  },
	  "B": {
		"item": "botania:manasteel_helmet"
	  }
	},
	"result": {
	  "item": "botania:elementium_helmet"
	}  })
	event.custom({
		"type": "minecraft:crafting_shaped",
		"pattern": [
		  "AAA",
		  "ABA",
		  "AAA"
		],
		"key": {
		  "A": {
			"item": "botania:elementium_ingot"
		  },
		  "B": {
			"item": "botania:manasteel_chestplate"
		  }
		},
		"result": {
		  "item": "botania:elementium_chestplate"
		}  })
		event.custom({
			"type": "minecraft:crafting_shaped",
			"pattern": [
			  "AAA",
			  "ABA",
			  "AAA"
			],
			"key": {
			  "A": {
				"item": "botania:elementium_ingot"
			  },
			  "B": {
				"item": "botania:manasteel_leggings"
			  }
			},
			"result": {
			  "item": "botania:elementium_leggings"
			}  })
			event.custom({
				"type": "minecraft:crafting_shaped",
				"pattern": [
				  "AAA",
				  "ABA",
				  "AAA"
				],
				"key": {
				  "A": {
					"item": "botania:elementium_ingot"
				  },
				  "B": {
					"item": "botania:manasteel_boots"
				  }
				},
				"result": {
				  "item": "botania:elementium_boots"
				}  })

		//diamond chelou		
				event.custom({
					"type": "create:pressing",
					"ingredients": [
					  {
						"item": "create:refined_radiance"
					  }
					],
					"results": [
					  {
						"item": "saros_create_addon_fabric:pale_diamond"
					  }
					]
				  })

//generator cobblestone

event.custom({"type":"fabricaeexnihilo:fluid_combination",
"contained":"minecraft:water",
"other":"minecraft:lava",
"result":{"id":"item","stack":"minecraft:cobblestone"}})
//refined compound
event.custom({
	"type": "create:mixing",
	"ingredients": [
	{
		"item": "create:powdered_obsidian"
	},
	{
		"item": "create:powdered_obsidian"
	},
	{
		"item": "create:powdered_obsidian"
	},
	{
		"item": "create:powdered_obsidian"
	},
	{
		"item": "minecraft:glowstone_dust"
	},
	{
		"item": "minecraft:glowstone_dust"
	},
	{
		"item": "minecraft:glowstone_dust"
	},
	{
		"item": "create:polished_rose_quartz"
	},
	{
		"item": "create:polished_rose_quartz"
	},
	{
		"item": "create:polished_rose_quartz"
	},
	{
		"item": "create:polished_rose_quartz"
	},
	{
		"fluid": "createfoundry:molten_carbon",
		"amount": 16200
	},
	{
		"fluid": "minecraft:lava",
		"amount": 16200
	}
	],
	"results": [
	{
		"item": "create:chromatic_compound",
		"amount": 1
	}
	],
	"heatRequirement": "superheated"
})

//bonhomme en pain d'epice
event.custom({
	"type": "create:pressing",
	"ingredients": [
	  {
		"item": "kubejs:gingerdough"
	  }
	],
	"results": [
	  {
		"item": "kubejs:gingerbread_man"
	  }
	]
  })
//gingerdough
  event.custom({
	"type": "create:mixing",
	"ingredients": [
	{
		"item": "create:cinder_flour",
		"amount": 1
	},
	{
		"item": "create:wheat_flour",
		"amount": 1
	},
	{
		"item": "minecraft:sugar",
		"amount" : 1
	},
	{
		"fluid": "create:honey",
		"amount": 16200
	}

	],
	"results": [
	{
		"item": "kubejs:gingerdough",
		"amount": 1
	}
	],
	"heatRequirement": "heated"})

	//totem

	event.custom({
		"type": "botania:runic_altar",
		"ingredients": [

		  {
			"item": "create:experience_nugget"
		  },
		  {
			"item": "create:experience_nugget"
		  },
		  {
			"item": "create:experience_nugget"
		  },
		  {
			"item": "kubejs:gingerbread_man"
		  },
		  {
			"item": "botania:pixie_dust"
		  },
		  {
			"item": "botania:terrasteel_nugget"
		  },
		  {
			"item": "botania:terrasteel_nugget"
		  },
		  {
			"item": "minecraft:emerald"
		  },
		  {
			"item": "botania:terrasteel_nugget"
		  }
		],
		"mana": 50000,
		"output": {
		  "count": 1,
		  "item": "minecraft:totem_of_undying"
		}
	  })

//crane zombie

event.custom({
	"type": "minecraft:crafting_shaped",
	"pattern": [
	  "ABA",
	  "BCB",
	  "ABA"
	],
	"key": {

	  "A": {
		"item": "minecraft:rotten_flesh"
	  },
	  "B": {
		"item": "botania:cell_block"
	  },
	  "C": {
		"item": "botania:fel_pumpkin"
	}},
	"result": {
	  "item": "minecraft:zombie_head"
	} 
})


//crane skelet
event.custom({
	"type": "create:mixing",
	"ingredients": [
	{
		"item": "minecraft:zombie_head",
		"amount": 1
	},
	{
		"item": "minecraft:bone"
	},
	{
		"item": "minecraft:bone"
	},
	{
		"item": "minecraft:bone"
	},
	{
		"item": "minecraft:bone"
	},
	{
		"fluid": "create:potion",
		"nbt": {
			"Potion": "minecraft:strong_harming"
		  },
		"amount": 32400
	}

	],
	"results": [
	{
		"item": "minecraft:skeleton_skull",
		"amount": 1
	}
	],
	"heatRequirement": "heated"})

//gingenerdough
	event.custom({
		"type": "create:mixing",
		"ingredients": [
		{
			"item": "create:cinder_flour",
			"amount": 1
		},
		{
			"item": "create:wheat_flour",
			"amount": 1
		},
		{
			"item": "minecraft:sugar",
			"amount" : 1
		},
		{
			"fluid": "create:honey",
			"amount": 16200
		}
	
		],
		"results": [
		{
			"item": "kubejs:gingerdough",
			"amount": 1
		}
		],
		"heatRequirement": "heated"})
		
		
		//rotten flesh
		event.custom({
			"type": "create:mixing",
			"ingredients": [
			{
				"item": "minecraft:brown_mushroom"
			},
			{
				"item": "minecraft:red_mushroom"
			},
			{
				"item": "minecraft:poisonous_potato"
			},
			{
				"fluid": "create:potion",
				"nbt": {
					"Potion": "minecraft:awkward"
				  },
				"amount": 32400
			}
		
			],
			"results": [
			{
				"item": "minecraft:rotten_flesh",
				"amount": 1
			}]
})
		
	//netherstar		
event.custom({
	"type": "create:mixing",
	"ingredients": [
	  {
		"item": "minecraft:wither_skeleton_skull"
	  },
	  {
		"item": "minecraft:wither_skeleton_skull"
	  },
	  {
		"item": "minecraft:wither_skeleton_skull"
	  },
	  {
		"item": "saros_create_addon_fabric:pale_diamond"
	  },

	  {
		"fluid": "create:potion",
		"nbt": {
		  "Potion": "minecraft:harming",
		  "Bottle": "REGULAR"
		},
		"amount": 8100
	  },
	  {
		"item": "minecraft:crying_obsidian"
	  },
	  {
		"item": "minecraft:totem_of_undying"
	  }
	],
	"results": [
	  {
		"item": "minecraft:nether_star",
		"count": 1,
		"chance": 1.0
	  }
	],
	"heatRequirement": "superheated"
  })
	
  //crying obsidian


  event.custom({
	"type":"fabricaeexnihilo:alchemy",
 	"reactant":"#fabricaeexnihilo:witchwater","catalyst":{"item":"minecraft:obsidian"},
	 "result":{"id":"item",
 	"stack":"minecraft:crying_obsidian"}})


//echo shard

	 event.custom({
		"type":"fabricaeexnihilo:alchemy",
		 "reactant":"#fabricaeexnihilo:witchwater","catalyst":{"item":"minecraft:amethyst_shard"},
		 "result":{"id":"item",
		 "stack":"minecraft:echo_shard"}})



//molten carbon
	 event.custom({
		"type": "create:mixing",
		"ingredients": [
		  {
			"item": "botania:dark_quartz"
		  }
		],
		"results": [
		  {
			"fluid": "createfoundry:molten_carbon",
			"amount": 16200
		  }
		],
		"heatRequirement": "superheated"
	})

//terrasteel

	event.custom({
		"type": "botania:terra_plate",
		"ingredients": [
		  {
			"item": "botania:manasteel_ingot"
		  },
		  {
			"item": "progressivebosses:nether_star_shard"
		  },
		  {
			"item": "botania:mana_pearl"
		  },
		  {
			"item": "progressivebosses:nether_star_shard"
		  },
		  {
			"item": "botania:mana_diamond"
		  },
		  {
			"item": "progressivebosses:nether_star_shard"
		  }
		],
		"mana": 500000,
		"result": {
		  "item": "botania:terrasteel_ingot"
		}
	  })
//shulkershell
	  event.custom({
		"type": "minecraft:crafting_shaped",
		"pattern": [
		"BBB",
		"BAB",
		"BBB"
		],
		"key": {
		"A": {
			"item": "minecraft:scute"},

		"B": {
			"item": "fabricaeexnihilo:chorus_seeds"
		}},
		"result": {
		"item": "minecraft:shulker_shell"
		}
})


//mana tablet
event.custom({
	"type": "minecraft:crafting_shaped",
	"pattern": [
	"BCB",
	"CAC",
	"BCB"
	],
	"key": {
	"A": {
		"item": "botania:mana_diamond"},
	"C": {
		"item": "progressivebosses:nether_star_shard"},

	"B": {
		"item": "botania:livingrock"
	}},

	"result": {
	"item": "botania:mana_tablet"
	}
})
//xp
event.custom({
	"type": "create:mixing",
	"ingredients": [
	  {
		"item": "minecraft:prismarine_crystals"
	  },
	  {
		"item": "minecraft:quartz"
	  },
	  {
		"item": "minecraft:echo_shard"
	  },
	  {
		"item": "minecraft:ender_eye"
	  },
	  {
		"fluid": "createfoundry:molten_emerald",
		"amount": 8100
	  }
	],
	"results": [
	  {
		"fluid": "create_enchantment_industry:experience",
		"amount": 16200
	  }
	],
	"heatRequirement": "superheated"
})
//molten a partir nugget
event.custom({
	"type": "create:mixing",
	"ingredients": [
	  {
		"item": "create:copper_nugget"
	  },
	  {
		"item": "create:copper_nugget"
	  },
	  {
		"item": "create:copper_nugget"
	  },
	  {
		"item": "create:copper_nugget"
	  },
	  {
		"item": "create:copper_nugget"
	  },
	  {
		"item": "create:copper_nugget"
	  },
	  {
		"item": "create:copper_nugget"
	  },
	  {
		"item": "create:copper_nugget"
	  },
	  {
		"item": "create:copper_nugget"
	  },
	  {
		"item": "create:copper_nugget"
	  },
	  {
		"item": "create:copper_nugget"
	  },
	  {
		"item": "create:copper_nugget"
	  },
	  {
		"item": "create:copper_nugget"
	  },
	  {
		"item": "create:copper_nugget"
	  },
	  {
		"item": "create:copper_nugget"
	  },
	  {
		"item": "create:copper_nugget"
	  }
	],
	"results": [
	  {
		"fluid": "createfoundry:molten_copper",
		"amount": 8100
	  }
	],
	"heatRequirement": "heated"
})
event.custom({
	"type": "create:mixing",
	"ingredients": [
	  {
		"item": "minecraft:iron_nugget"
	  },
	  {
		"item": "minecraft:iron_nugget"
	  },
	  {
		"item": "minecraft:iron_nugget"
	  },
	  {
		"item": "minecraft:iron_nugget"
	  },
	  {
		"item": "minecraft:iron_nugget"
	  },
	  {
		"item": "minecraft:iron_nugget"
	  },
	  {
		"item": "minecraft:iron_nugget"
	  },
	  {
		"item": "minecraft:iron_nugget"
	  },
	  {
		"item": "minecraft:iron_nugget"
	  },
	  {
		"item": "minecraft:iron_nugget"
	  },
	  {
		"item": "minecraft:iron_nugget"
	  },
	  {
		"item": "minecraft:iron_nugget"
	  },
	  {
		"item": "minecraft:iron_nugget"
	  },
	  {
		"item": "minecraft:iron_nugget"
	  },
	  {
		"item": "minecraft:iron_nugget"
	  },
	  {
		"item": "minecraft:iron_nugget"
	  }
	],
	"results": [
	  {
		"fluid": "createfoundry:molten_iron",
		"amount": 8100
	  }
	],
	"heatRequirement": "heated"
})
event.custom({
	"type": "create:mixing",
	"ingredients": [
	  {
		"item": "create:zinc_nugget"
	  },
	  {
		"item": "create:zinc_nugget"
	  },
	  {
		"item": "create:zinc_nugget"
	  },
	  {
		"item": "create:zinc_nugget"
	  },
	  {
		"item": "create:zinc_nugget"
	  },
	  {
		"item": "create:zinc_nugget"
	  },
	  {
		"item": "create:zinc_nugget"
	  },
	  {
		"item": "create:zinc_nugget"
	  },
	  {
		"item": "create:zinc_nugget"
	  },
	  {
		"item": "create:zinc_nugget"
	  },
	  {
		"item": "create:zinc_nugget"
	  },
	  {
		"item": "create:zinc_nugget"
	  },
	  {
		"item": "create:zinc_nugget"
	  },
	  {
		"item": "create:zinc_nugget"
	  },
	  {
		"item": "create:zinc_nugget"
	  },
	  {
		"item": "create:zinc_nugget"
	  }

	],
	"results": [
	  {
		"fluid": "createfoundry:molten_zinc",
		"amount": 8100
	  }
	],
	"heatRequirement": "heated"
})
event.custom({
	"type": "create:mixing",
	"ingredients": [
	  {
		"item": "minecraft:gold_nugget"
	  },
	  {
		"item": "minecraft:gold_nugget"
	  },
	  {
		"item": "minecraft:gold_nugget"
	  },
	  {
		"item": "minecraft:gold_nugget"
	  },
	  {
		"item": "minecraft:gold_nugget"
	  },
	  {
		"item": "minecraft:gold_nugget"
	  },
	  {
		"item": "minecraft:gold_nugget"
	  },
	  {
		"item": "minecraft:gold_nugget"
	  },
	  {
		"item": "minecraft:gold_nugget"
	  },
	  {
		"item": "minecraft:gold_nugget"
	  },
	  {
		"item": "minecraft:gold_nugget"
	  },
	  {
		"item": "minecraft:gold_nugget"
	  },
	  {
		"item": "minecraft:gold_nugget"
	  },
	  {
		"item": "minecraft:gold_nugget"
	  },
	  {
		"item": "minecraft:gold_nugget"
	  },  
	  {
		"item": "minecraft:gold_nugget"
	  }

	],
	"results": [
	  {
		"fluid": "createfoundry:molten_gold",
		"amount": 8100
	  }
	],
	"heatRequirement": "heated"
})
event.custom({
	"type": "create:mixing",
	"ingredients": [
	  {
		"item": "saros_create_addon_fabric:diamond_nugget"
	  },
	  {
		"item": "saros_create_addon_fabric:diamond_nugget"
	  },
	  {
		"item": "saros_create_addon_fabric:diamond_nugget"
	  },
	  {
		"item": "saros_create_addon_fabric:diamond_nugget"
	  },
	  {
		"item": "saros_create_addon_fabric:diamond_nugget"
	  },
	  {
		"item": "saros_create_addon_fabric:diamond_nugget"
	  },
	  {
		"item": "saros_create_addon_fabric:diamond_nugget"
	  },
	  {
		"item": "saros_create_addon_fabric:diamond_nugget"
	  },
	  {
		"item": "saros_create_addon_fabric:diamond_nugget"
	  },
	  {
		"item": "saros_create_addon_fabric:diamond_nugget"
	  },
	  {
		"item": "saros_create_addon_fabric:diamond_nugget"
	  },
	  {
		"item": "saros_create_addon_fabric:diamond_nugget"
	  },
	  {
		"item": "saros_create_addon_fabric:diamond_nugget"
	  },
	  {
		"item": "saros_create_addon_fabric:diamond_nugget"
	  },
	  {
		"item": "saros_create_addon_fabric:diamond_nugget"
	  },

	  {
		"item": "saros_create_addon_fabric:diamond_nugget"
	  }

	],
	"results": [
	  {
		"fluid": "createfoundry:molten_diamond",
		"amount": 8100
	  }
	],
	"heatRequirement": "heated"
})
event.custom({
	"type": "create:mixing",
	"ingredients": [
	  {
		"item": "create:brass_nugget"
	  },
	  {
		"item": "create:brass_nugget"
	  },
	  {
		"item": "create:brass_nugget"
	  },
	  {
		"item": "create:brass_nugget"
	  },
	  {
		"item": "create:brass_nugget"
	  },
	  {
		"item": "create:brass_nugget"
	  },
	  {
		"item": "create:brass_nugget"
	  },
	  {
		"item": "create:brass_nugget"
	  },
	  {
		"item": "create:brass_nugget"
	  },
	  {
		"item": "create:brass_nugget"
	  },
	  {
		"item": "create:brass_nugget"
	  },
	  {
		"item": "create:brass_nugget"
	  },
	  {
		"item": "create:brass_nugget"
	  },
	  {
		"item": "create:brass_nugget"
	  },
	  {
		"item": "create:brass_nugget"
	  },
	  {
		"item": "create:brass_nugget"
	  },
	  {
		"item": "create:brass_nugget"
	  },
	  {
		"item": "create:brass_nugget"
	  }


	],
	"results": [
	  {
		"fluid": "createfoundry:molten_brass",
		"amount": 8100
	  }
	],
	"heatRequirement": "heated"
})


//molten nugget superheated

event.custom({
	"type": "create:mixing",
	"ingredients": [
	  {
		"item": "create:copper_nugget"
	  },
	  {
		"item": "create:copper_nugget"
	  },
	  {
		"item": "create:copper_nugget"
	  },
	  {
		"item": "create:copper_nugget"
	  },
	  {
		"item": "create:copper_nugget"
	  },
	  {
		"item": "create:copper_nugget"
	  },
	  {
		"item": "create:copper_nugget"
	  },
	  {
		"item": "create:copper_nugget"
	  },
	  {
		"item": "create:copper_nugget"
	  }
	],
	"results": [
	  {
		"fluid": "createfoundry:molten_copper",
		"amount": 8100
	  }
	],
	"heatRequirement": "superheated"
})
event.custom({
	"type": "create:mixing",
	"ingredients": [
	  {
		"item": "minecraft:iron_nugget"
	  },
	  {
		"item": "minecraft:iron_nugget"
	  },
	  {
		"item": "minecraft:iron_nugget"
	  },
	  {
		"item": "minecraft:iron_nugget"
	  },
	  {
		"item": "minecraft:iron_nugget"
	  },
	  {
		"item": "minecraft:iron_nugget"
	  },
	  {
		"item": "minecraft:iron_nugget"
	  },
	  {
		"item": "minecraft:iron_nugget"
	  },
	  {
		"item": "minecraft:iron_nugget"
	  }
	],
	"results": [
	  {
		"fluid": "createfoundry:molten_iron",
		"amount": 8100
	  }
	],
	"heatRequirement": "superheated"
})
event.custom({
	"type": "create:mixing",
	"ingredients": [
	  {
		"item": "create:zinc_nugget"
	  },
	  {
		"item": "create:zinc_nugget"
	  },
	  {
		"item": "create:zinc_nugget"
	  },
	  {
		"item": "create:zinc_nugget"
	  },
	  {
		"item": "create:zinc_nugget"
	  },
	  {
		"item": "create:zinc_nugget"
	  },
	  {
		"item": "create:zinc_nugget"
	  },
	  {
		"item": "create:zinc_nugget"
	  },
	  {
		"item": "create:zinc_nugget"
	  }
	],
	"results": [
	  {
		"fluid": "createfoundry:molten_zinc",
		"amount": 8100
	  }
	],
	"heatRequirement": "superheated"
})
event.custom({
	"type": "create:mixing",
	"ingredients": [
	  {
		"item": "minecraft:gold_nugget"
	  },
	  {
		"item": "minecraft:gold_nugget"
	  },
	  {
		"item": "minecraft:gold_nugget"
	  },
	  {
		"item": "minecraft:gold_nugget"
	  },
	  {
		"item": "minecraft:gold_nugget"
	  },
	  {
		"item": "minecraft:gold_nugget"
	  },
	  {
		"item": "minecraft:gold_nugget"
	  },
	  {
		"item": "minecraft:gold_nugget"
	  },
	  {
		"item": "minecraft:gold_nugget"
	  }


	],
	"results": [
	  {
		"fluid": "createfoundry:molten_gold",
		"amount": 8100
	  }
	],
	"heatRequirement": "superheated"
})
event.custom({
	"type": "create:mixing",
	"ingredients": [
	  {
		"item": "saros_create_addon_fabric:diamond_nugget"
	  },
	  {
		"item": "saros_create_addon_fabric:diamond_nugget"
	  },
	  {
		"item": "saros_create_addon_fabric:diamond_nugget"
	  },
	  {
		"item": "saros_create_addon_fabric:diamond_nugget"
	  },
	  {
		"item": "saros_create_addon_fabric:diamond_nugget"
	  },
	  {
		"item": "saros_create_addon_fabric:diamond_nugget"
	  },
	  {
		"item": "saros_create_addon_fabric:diamond_nugget"
	  },
	  {
		"item": "saros_create_addon_fabric:diamond_nugget"
	  },
	  {
		"item": "saros_create_addon_fabric:diamond_nugget"
	  }
	],
	"results": [
	  {
		"fluid": "createfoundry:molten_diamond",
		"amount": 8100
	  }
	],
	"heatRequirement": "superheated"
})
event.custom({
	"type": "create:mixing",
	"ingredients": [
	  {
		"item": "create:brass_nugget"
	  },
	  {
		"item": "create:brass_nugget"
	  },
	  {
		"item": "create:brass_nugget"
	  },
	  {
		"item": "create:brass_nugget"
	  },
	  {
		"item": "create:brass_nugget"
	  },
	  {
		"item": "create:brass_nugget"
	  },
	  {
		"item": "create:brass_nugget"
	  },
	  {
		"item": "create:brass_nugget"
	  },
	  {
		"item": "create:brass_nugget"
	  }

	],
	"results": [
	  {
		"fluid": "createfoundry:molten_brass",
		"amount": 8100
	  }
	],
	"heatRequirement": "superheated"
})


  //lava from block flint

  event.custom({
	"type":"fabricaeexnihilo:crucible",
  "input":{"item":"minecraft:flint"},
  "amount":1000,
  "fluid":"minecraft:lava",
  "requiresFireproofCrucible":true})

//craft copper_nugget
  event.custom({
	"type": "create:splashing",
	"ingredients": [
	  {
		"item": "minecraft:blackstone"
	  }
	],
	"results": [
	  {
		"chance": 0.25,
		"count": 5,
		"item": "create:copper_nugget"
	  },
	  {
		"chance": 0.5,
		"item": "fabricaeexnihilo:stone_pebble"
	  }
	]
  })

//zinc nugget

  event.custom({
	"type": "create:splashing",
	"ingredients": [
	  {
		"item": "minecraft:basalt"
	  }
	],
	"results": [
	  {
		"chance": 0.25,
		"count": 5,
		"item": "create:zinc_nugget"
	  },
	  {
		"chance": 0.5,
		"item": "fabricaeexnihilo:dripstone_pebble"
	  }
	]
  })

//enchant

event.custom({
	"type": "create:sequenced_assembly",
	"ingredient": {
	  "item": "minecraft:book"
	},
	"loops": 1,
	"results": [
	  {
		"item": "minecraft:dirt"
	  }
	],
	"sequence": [
	  {
		"type": "create:filling",
		"ingredients": [
		  {
			"item": "minecraft:book"
		  },
		  {
			"amount": 20000,
			"fluid": "create_enchantment_industry:experience",
			"nbt": {}
		  }
		],
		"results": [
		  {
			"item": "minecraft:writable_book"
		  }
		]
	  },
	  {
		"type": "create:mixing",
		"ingredients": [
		  {
			"item": "minecraft:writable_book"
		  },
		  {
			"item": "minecraft:lapis_lazuli"
		  }
		],
		"results": [
		  {
			"item": "minecraft:writable_book"
		  }
		]
	  }
	],
	"transitionalItem": {
	  "item": "minecraft:writable_book"
	}
  })
  
//enchant de base
event.custom({
	"type": "create:sequenced_assembly",
	"ingredient": {
	  "item": "minecraft:book"
	},
	"loops": 1,
	"results": [
		Item.of('minecraft:enchanted_book').enchant('create:potato_recovery', 1).withChance(0.5),
		Item.of('minecraft:enchanted_book').enchant('minecraft:fire_protection', 1).withChance(0.5),
		Item.of('minecraft:enchanted_book').enchant('minecraft:smite', 1).withChance(0.5),
		Item.of('minecraft:enchanted_book').enchant('minecraft:protection', 1).withChance(0.5),
		Item.of('minecraft:enchanted_book').enchant('minecraft:feather_falling', 1).withChance(0.5),
		Item.of('minecraft:enchanted_book').enchant('minecraft:feather_falling', 1).withChance(0.5),
		Item.of('minecraft:enchanted_book').enchant('minecraft:blast_protection', 1).withChance(0.5),
		Item.of('minecraft:enchanted_book').enchant('minecraft:projectile_protection', 1).withChance(0.5),
		Item.of('minecraft:enchanted_book').enchant('minecraft:respiration', 1).withChance(0.5),
		Item.of('minecraft:enchanted_book').enchant('minecraft:sweeping', 1).withChance(0.5),
		Item.of('minecraft:enchanted_book').enchant('minecraft:looting', 1).withChance(0.5),
		Item.of('minecraft:enchanted_book').enchant('minecraft:fire_aspect', 1).withChance(0.5),
		Item.of('minecraft:enchanted_book').enchant('minecraft:knockback', 1).withChance(0.5),
		Item.of('minecraft:enchanted_book').enchant('minecraft:bane_of_arthropods', 1).withChance(0.05),
		Item.of('minecraft:enchanted_book').enchant('minecraft:bane_of_arthropods', 1).withChance(0.05),
		Item.of('minecraft:enchanted_book').enchant('minecraft:sharpness', 1).withChance(0.05),
		Item.of('minecraft:enchanted_book').enchant('minecraft:soul_speed', 1).withChance(0.05),
		Item.of('minecraft:enchanted_book').enchant('minecraft:quick_charge', 1).withChance(0.05),
		Item.of('minecraft:enchanted_book').enchant('minecraft:frost_walker', 1).withChance(0.05),
		Item.of('minecraft:enchanted_book').enchant('minecraft:lure', 1).withChance(0.05),
		Item.of('minecraft:enchanted_book').enchant('minecraft:fortune', 1).withChance(0.05),
		Item.of('minecraft:enchanted_book').enchant('minecraft:power', 1).withChance(0.05),
		Item.of('minecraft:enchanted_book').enchant('minecraft:punch', 1).withChance(0.05),
		Item.of('minecraft:enchanted_book').enchant('minecraft:luck_of_the_sea', 1).withChance(0.05),
		Item.of('minecraft:enchanted_book').enchant('minecraft:loyalty', 1).withChance(0.05),
		Item.of('minecraft:enchanted_book').enchant('minecraft:impaling', 1).withChance(0.05),
		Item.of('minecraft:enchanted_book').enchant('minecraft:unbreaking', 1).withChance(0.05),
		Item.of('minecraft:enchanted_book').enchant('minecraft:efficiency', 1).withChance(0.05),
		Item.of('minecraft:enchanted_book').enchant('farmersdelight:backstabbing', 1).withChance(0.05),
		Item.of('minecraft:enchanted_book').enchant('minecraft:depth_strider', 1).withChance(0.05),
		Item.of('minecraft:enchanted_book').enchant('minecraft:riptide', 1).withChance(0.05),
		Item.of('minecraft:enchanted_book').enchant('minecraft:piercing', 1).withChance(0.05),
		Item.of('minecraft:enchanted_book').enchant('qu-enchantments:freezing_aspect', 1).withChance(0.05),
		Item.of('minecraft:enchanted_book').enchant('qu-enchantments:leeching_aspect', 1).withChance(0.05),
		Item.of('minecraft:enchanted_book').enchant('qu-enchantments:inane_aspect', 1).withChance(0.05),
		Item.of('minecraft:enchanted_book').enchant('qu-enchantments:molten_walker', 1).withChance(0.05),
		Item.of('minecraft:enchanted_book').enchant('qu-enchantments:reflection', 1).withChance(0.05),
		Item.of('minecraft:enchanted_book').enchant('qu-enchantments:accuracy', 1).withChance(0.05),
		Item.of('minecraft:enchanted_book').enchant('qu-enchantments:arrows_flight', 1).withChance(0.05),
		Item.of('minecraft:enchanted_book').enchant('qu-enchantments:shaped_glass', 1).withChance(0.05),
		Item.of('minecraft:enchanted_book').enchant('qu-enchantments:nightblood', 1).withChance(0.05),
		Item.of('minecraft:enchanted_book').enchant('qu-enchantments:skywalker', 1).withChance(0.05),
		Item.of('minecraft:enchanted_book').enchant('qu-enchantments:omen_of_immunity', 1).withChance(0.05),
		Item.of('minecraft:enchanted_book').enchant('qu-enchantments:strip_miner', 1).withChance(0.05),
		Item.of('minecraft:enchanted_book').enchant('spell_power:haste', 1).withChance(0.05),
		Item.of('minecraft:enchanted_book').enchant('spell_power:sunfire', 1).withChance(0.05),
		Item.of('minecraft:enchanted_book').enchant('spell_power:energize', 1).withChance(0.05),
		Item.of('minecraft:enchanted_book').enchant('spell_power:spell_power', 1).withChance(0.05),
		Item.of('minecraft:enchanted_book').enchant('spell_power:soulfrost', 1).withChance(0.05),
		Item.of('minecraft:enchanted_book').enchant('spell_power:critical_chance', 1).withChance(0.05),
		Item.of('minecraft:enchanted_book').enchant('spell_power:critical_damage', 1).withChance(0.05),
		Item.of('minecraft:enchanted_book').enchant('spell_power:magic_protection', 1).withChance(0.05)

	],
	"sequence": [
	  {
		"type": "create:filling",
		"ingredients": [
		  {
			"item": "minecraft:writable_book"
		  },
		  {
			"amount": 41000,
			"fluid": "create_enchantment_industry:experience",
			"nbt": {}
		  }
		],
		"results": [
		  {
			"item": "minecraft:writable_book"
		  }
		]
	  },
	  {
		"type": "create:deploying",
		"ingredients": [
		  {
			"item": "minecraft:writable_book"
		  },
		  {
			"item": "minecraft:lapis_lazuli"
		  }
		],
		"results": [
		  {
			"item": "minecraft:writable_book"
		  }
		]
	  },
	  {
		"type": "create:deploying",
		"ingredients": [
		  {
			"item": "minecraft:writable_book"
		  },
		  {
			"item": "minecraft:lapis_lazuli"
		  }
		],
		"results": [
		  {
			"item": "minecraft:writable_book"
		  }
		]
	  },
	  {
		"type": "create:deploying",
		"ingredients": [
		  {
			"item": "minecraft:writable_book"
		  },
		  {
			"item": "minecraft:lapis_lazuli"
		  }
		],
		"results": [
		  {
			"item": "minecraft:writable_book"
		  }
		]
	  },
	  {
		"type": "create:pressing",
		"ingredients": [
		  {
			"item": "minecraft:writable_book"
		  }
		],
		"results": [
		  {
			"item": "minecraft:writable_book"
		  }
		]
	  }
	],
	"transitionalItem": {
	  "item": "minecraft:writable_book"
	}
  })
  

  //enchant hard
  event.custom({
	"type": "create:sequenced_assembly",
	"ingredient": {
	  "item": "minecraft:book"
	},
	"loops": 1,
	"results": [
		Item.of('minecraft:enchanted_book').enchant('minecraft:silk_touch', 1).withChance(0.05),
		Item.of('minecraft:enchanted_book').enchant('minecraft:flame', 1).withChance(0.05),
		Item.of('minecraft:enchanted_book').enchant('minecraft:aqua_affinity', 1).withChance(0.05),
		Item.of('minecraft:enchanted_book').enchant('minecraft:infinity', 1).withChance(0.05),
		Item.of('minecraft:enchanted_book').enchant('minecraft:multishot', 1).withChance(0.05),
		Item.of('minecraft:enchanted_book').enchant('minecraft:channeling', 1).withChance(0.05),
		Item.of('minecraft:enchanted_book').enchant('supplementaries:stasis', 1).withChance(0.05),
		Item.of('minecraft:enchanted_book').enchant('minecraft:mending', 1).withChance(0.05),
		Item.of('minecraft:enchanted_book').enchant('qu-enchantments:bashing', 1).withChance(0.05),
		Item.of('minecraft:enchanted_book').enchant('qu-enchantments:speed_blessing', 1).withChance(0.05),
		Item.of('minecraft:enchanted_book').enchant('qu-enchantments:regeneration_blessing', 1).withChance(0.05),
		Item.of('minecraft:enchanted_book').enchant('qu-enchantments:aggression_blessing', 1).withChance(0.05),
		Item.of('minecraft:enchanted_book').enchant('qu-enchantments:fidelity', 1).withChance(0.05),
		Item.of('minecraft:enchanted_book').enchant('spell_engine:spell_infinity', 1).withChance(0.05)
	],
	"sequence": [
	  {
		"type": "create:deploying",
		"ingredients": [
			{
				"item": "minecraft:writable_book"
			  },
			  {
				"item": "create_enchantment_industry:hyper_experience_bottle"
			  }
		],
		"results": [
		  {
			"item": "minecraft:writable_book"
		  }
		]
	  },
	  {
		"type": "create:deploying",
		"ingredients": [
		  {
			"item": "minecraft:writable_book"
		  },
		  {
			"item": "progressivebosses:nether_star_shard"
		  }
		],
		"results": [
		  {
			"item": "minecraft:writable_book"
		  }
		]
	  },
	  {
		"type": "create:deploying",
		"ingredients": [
		  {
			"item": "minecraft:writable_book"
		  },
		  {
			"item": "progressivebosses:nether_star_shard"
		  }
		],
		"results": [
		  {
			"item": "minecraft:writable_book"
		  }
		]
	  },
	  {
		"type": "create:deploying",
		"ingredients": [
		  {
			"item": "minecraft:writable_book"
		  },
		  {
			"item": "progressivebosses:nether_star_shard"
		  }
		],
		"results": [
		  {
			"item": "minecraft:writable_book"
		  }
		]
	  },
	  {
		"type": "create:pressing",
		"ingredients": [
		  {
			"item": "minecraft:writable_book"
		  }
		],
		"results": [
		  {
			"item": "minecraft:writable_book"
		  }
		]
	  }
	],
	"transitionalItem": {
	  "item": "minecraft:writable_book"
	}
  })


 event.custom( {
	"type": "botania:petal_apothecary",
	"ingredients": [
	  {
		"tag": "botania:petals/black"
	  },
	  {
		"tag": "botania:petals/black"
	  },
	  {
		"tag": "botania:petals/black"
	  },
	  {
		"tag": "botania:petals/black"
	  },
	  {
		"tag": "botania:petals/black"
	  },
	  {
		"item": "botania:vine_ball"
	  }
	],
	"output": {
	  "item": "minecraft:ink_sac"
	},
	"reagent": {
		"item": "supplementaries:present"
	}
  })
//coal
  event.custom({
	"type": "create:filling",
	"ingredients": [
	  {
		"item": "minecraft:charcoal"
	  },
	  {
		"amount": 16200,
		"fluid": "createfoundry:molten_carbon",
		"nbt": {}
	  }
	],
	"results": [
	  {
		"item": "minecraft:coal"
	  }
	]
  })
// lapis lazuli

  event.custom({
	"type": "create:filling",
	"ingredients": [
	  {
		"item": "botania:mana_powder"
	  },
	  {
		"amount": 2100,
		"fluid": "fabricaeexnihilo:brine",
		"nbt": {}
	  }
	],
	"results": [
	  {
		"item": "minecraft:lapis_lazuli"
	  }
	]
  })
//gravel
  event.custom({
	"type": "create:milling",
	"ingredients": [
	  {
		"item": "minecraft:cobblestone"
	  }
	],
	"results": [
	  {
		"item": "minecraft:gravel"
	  }
	],
	"processingTime": 150
  })

//gem moult
event.custom(
	{
		"type": "create:sandpaper_polishing",
		"ingredients": [
		  {
			"item": "minecraft:diamond"
		  }
		],
		"results": [
		  {
			"item": "createfoundry:gem_mould_blueprint"
		  }
		]
	  }
)

event.custom(
	{
		"type": "create:sandpaper_polishing",
		"ingredients": [
		  {
			"item": "minecraft:emerald"
		  }
		],
		"results": [
		  {
			"item": "createfoundry:gem_mould_blueprint"
		  }
		]
	  }
)
//ingot moult
event.custom(
	{
		"type": "create:sandpaper_polishing",
		"ingredients": [
		  {
			"item": "minecraft:iron_ingot"
		  }
		],
		"results": [
		  {
			"item": "createfoundry:ingot_mould_blueprint"
		  }
		]
	  }
)

//moul coke
event.custom(
	{
		"type": "create:sandpaper_polishing",
		"ingredients": [
		  {
			"item": "minecraft:coal"
		  }
		],
		"results": [
		  {
			"item": "createfoundry:coke_mould_blueprint"
		  }
		]
	  }
)
//poudre obsidian
event.custom({
	
		"type": "botania:mana_infusion",
		"input": {
		  "item": "botania:mana_powder"
		},
		"mana": 12000,
		"output": {
		  "item": "create:powdered_obsidian"
		}
})
//membrane phantom
event.custom({
	"type": "minecraft:crafting_shaped",
	"pattern": [
	  " A ",
	  "AAA",
	  " A "
	],
	"key": {
	  "A": {
		"item": "minecraft:leather"
	  }
	},
	"result": {
	  "item": "minecraft:phantom_membrane"
	}






})

//farine nether
event.custom({
	"type": "create:milling",
	"ingredients": [
	  {
		"item": "minecraft:netherrack"
	  }
	],
	"results": [
	  {
		"item": "create:cinder_flour",
		"chance": 0.25
	  }
	],
	"processingTime": 300
  })

//etape sturdy moule ingot

		  event.custom(
			{
				"type": "create:item_application",
				"ingredients": [
				  {
					"item": "minecraft:crying_obsidian"
				  },
				  {
					"item": "createfoundry:ingot_mould_blueprint"
				  }
				],
				"results": [
					Item.of('create:unprocessed_obsidian_sheet', '{SequencedAssembly:{Progress:0.33333334f,Step:1,id:"createfoundry:sequenced_assembly/ingot_mould"}}')
		
				]
			  })
//netherrack
			  event.custom({
				"type": "create:filling",
				"ingredients": [
				  {
					"item": "minecraft:cobblestone"
				  },
				  {
					"fluid": "create:potion",
					"nbt": {
					  "Bottle": "REGULAR",
					  "Potion": "minecraft:healing"
					},
					"amount": 8100
				  }
				],
				"results": [
				  {
					"item": "minecraft:netherrack"
				  }
				]
			  })
//water from agriculture
			  event.custom({"type":"fabricaeexnihilo:crucible",
			  "input":{"tag":"c:crops"},
			  "amount":8100,"fluid":"minecraft:water",
			  "requiresFireproofCrucible":false})
//netherite
			  event.custom({
				"type": "create:mixing",
				"ingredients": [
					{
						"amount": 4050,
						"fluid": "createfoundry:molten_ancient_debris",
						"nbt": {}
					  },
					  {
						"amount": 4050,
						"fluid": "createfoundry:molten_gold",
						"nbt": {}
					  }
			
				],
				"results": [
				  {
					"fluid": "createfoundry:molten_netherite",
					"amount": 4050
				  }
				],
				"heatRequirement": "superheated"})
//monnaie
				event.custom({
					"type": "minecraft:crafting_shaped",
					"pattern": [
					  "AA ",
					  "AA ",
					  "   "
					],
					"key": {
					  "A": {
						"item": "coinsje:copper_coin"
					  }
					},
					"result": {
					  "item": "coinsje:iron_coin"
					}})

					event.custom({
						"type": "minecraft:crafting_shaped",
						"pattern": [
						  "AA ",
						  "AA ",
						  "   "
						],
						"key": {
						  "A": {
							"item": "coinsje:iron_coin"
						  }
						},
						"result": {
						  "item": "coinsje:gold_coin"
						}})
						event.custom({
							"type": "minecraft:crafting_shaped",
							"pattern": [
							  "AA ",
							  "AA ",
							  "   "
							],
							"key": {
							  "A": {
								"item": "coinsje:gold_coin"
							  }
							},
							"result": {
							  "item": "coinsje:diamond_coin"
							}})
							event.custom({
								"type": "minecraft:crafting_shaped",
								"pattern": [
								  "AA ",
								  "AA ",
								  "   "
								],
								"key": {
								  "A": {
									"item": "coinsje:diamond_coin"
								  }
								},
								"result": {
								  "item": "coinsje:netherite_coin"
								}})
//stack coin
								event.custom({
									"type": "minecraft:crafting_shaped",
									"pattern": [
									  "AAA",
									  "AAA",
									  "AAA"
									],
									"key": {
									  "A": {
										"item": "coinsje:copper_coin"
									  }
									},
									"result": {
									  "item": "coinsje:copper_coin_pile"
									}})
				
									event.custom({
										"type": "minecraft:crafting_shaped",
										"pattern": [
										  "AAA",
										  "AAA",
										  "AAA"
										],
										"key": {
										  "A": {
											"item": "coinsje:iron_coin"
										  }
										},
										"result": {
										  "item": "coinsje:iron_coin_pile"
										}})
										event.custom({
											"type": "minecraft:crafting_shaped",
											"pattern": [
											  "AAA",
											  "AAA",
											  "AAA"
											],
											"key": {
											  "A": {
												"item": "coinsje:gold_coin"
											  }
											},
											"result": {
											  "item": "coinsje:gold_coin_pile"
											}})

											event.custom({
												"type": "minecraft:crafting_shaped",
												"pattern": [
												  "AAA",
												  "AAA",
												  "AAA"
												],
												"key": {
												  "A": {
													"item": "coinsje:diamond_coin"
												  }
												},
												"result": {
												  "item": "coinsje:diamond_coin_pile"
												}})
												event.custom({
													"type": "minecraft:crafting_shaped",
													"pattern": [
													  "AAA",
													  "AAA",
													  "AAA"
													],
													"key": {
													  "A": {
														"item": "coinsje:netherite_coin"
													  }
													},
													"result": {
													  "item": "coinsje:netherite_coin_pile"
													}})

//destack coin

event.custom({
	"type": "minecraft:crafting_shaped",
	"pattern": [
	  "A  ",
	  "   ",
	  "   "
	],
	"key": {
	  "A": {
		"item": "coinsje:netherite_coin_pile"
	  }
	},
	"result": {
	  "item": "coinsje:netherite_coin",
	  "count": 9
	}})
	event.custom({
		"type": "minecraft:crafting_shaped",
		"pattern": [
		  "A  ",
		  "   ",
		  "   "
		],
		"key": {
		  "A": {
			"item": "coinsje:diamond_coin_pile"
		  }
		},
		"result": {
		  "item": "coinsje:diamond_coin",
		  "count": 9
		}})			  
		event.custom({
			"type": "minecraft:crafting_shaped",
			"pattern": [
			  "A  ",
			  "   ",
			  "   "
			],
			"key": {
			  "A": {
				"item": "coinsje:gold_coin_pile"
			  }
			},
			"result": {
			  "item": "coinsje:gold_coin",
			  "count": 9
			}})
			event.custom({
				"type": "minecraft:crafting_shaped",
				"pattern": [
				  "A  ",
				  "   ",
				  "   "
				],
				"key": {
				  "A": {
					"item": "coinsje:copper_coin_pile"
				  }
				},
				"result": {
				  "item": "coinsje:copper_coin",
				  "count": 9
				}})
				event.custom({
					"type": "minecraft:crafting_shaped",
					"pattern": [
					  "A  ",
					  "   ",
					  "   "
					],
					"key": {
					  "A": {
						"item": "coinsje:iron_coin_pile"
					  }
					},
					"result": {
					  "item": "coinsje:iron_coin",
					  "count": 9
					}})

					event.custom({
						"type": "minecraft:crafting_shaped",
						"pattern": [
						  "A  ",
						  "   ",
						  "   "
						],
						"key": {
						  "A": {
							"item": "coinsje:netherite_coin"
						  }
						},
						"result": {
						  "item": "coinsje:diamond_coin",
						  "count": 4
						}})
						event.custom({
							"type": "minecraft:crafting_shaped",
							"pattern": [
							  "A  ",
							  "   ",
							  "   "
							],
							"key": {
							  "A": {
								"item": "coinsje:diamond_coin"
							  }
							},
							"result": {
							  "item": "coinsje:gold_coin",
							  "count": 4
							}})
							event.custom({
								"type": "minecraft:crafting_shaped",
								"pattern": [
								  "A  ",
								  "   ",
								  "   "
								],
								"key": {
								  "A": {
									"item": "coinsje:gold_coin"
								  }
								},
								"result": {
								  "item": "coinsje:iron_coin",
								  "count": 4
								}})

								event.custom({
									"type": "minecraft:crafting_shaped",
									"pattern": [
									  "A  ",
									  "   ",
									  "   "
									],
									"key": {
									  "A": {
										"item": "coinsje:iron_coin"
									  }
									},
									"result": {
									  "item": "coinsje:copper_coin",
									  "count": 4
									}})
//molten redstone
event.custom({
	"type": "create:mixing",
	"ingredients": [
	  {
		"tag": "minecraft:redstone_ores"
	  }
	],
	"results": [
	  {
		"fluid": "createfoundry:molten_redstone",
		"amount": 81000
	  }
	],
	"heatRequirement": "superheated"
})

//molten lapis_lazuli
event.custom({
	"type": "create:mixing",
	"ingredients": [
	  {
		"tag": "minecraft:lapis_ores"
	  }
	],
	"results": [
	  {
		"fluid": "createfoundry:molten_lapis",
		"amount": 81000
	  }
	],
	"heatRequirement": "superheated"
})

//boule de noel
event.custom({
	"type": "create:mixing",
	"ingredients": [
	{
		"item": "minecraft:snowball"
	},
	{
		"item": "minecraft:snowball"
	},
	{
		"item": "minecraft:snowball"
	},
	{
		"item": "minecraft:snowball"
	},
	{
		"item": "create:golden_sheet"
	},
	{
		"item": "minecraft:redstone"
	},
	{
		"item": "minecraft:redstone"
	},
	{
		"item": "minecraft:redstone"
	},
	{
		"item": "minecraft:redstone"
	},

	],
	"results": [
	{
		"item": "kubejs:boule_de_noel",
		"amount": 2
	}
	],
	





})
//noel
event.custom({
	"type": "minecraft:crafting_shaped",
	"pattern": [
	  "ABA",
	  "BCB",
	  "ABA"
	],
	"key": {
	  "A": {
		"item": "minecraft:snowball"
	  },
	  "B": {
		"item": "minecraft:redstone"
	  },
	  "C": {
		"item": "create:golden_sheet"
	  }
	},
	"result": {
	  "item": "kubejs:boule_de_noel",
	  "count": 1
	}})

})






ServerEvents.tags('item', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})