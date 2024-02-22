ServerEvents.recipes((event) => {
  event.remove({ id: "minecraft:diamond_from_blasting_diamond_ore" });
  event.remove({ id: "minecraft:diamond_from_smelting_diamond_ore" });
  event.remove({ id: "minecraft:diamond_from_smelting_deepslate_diamond_ore" });
  event.remove({ id: "minecraft:diamond_from_blasting_deepslate_diamond_ore" });

  event.remove({ id: "minecraft:iron_ingot_from_blasting_iron_ore" });
  event.remove({ id: "minecraft:iron_ingot_from_smelting_iron_ore" });
  event.remove({ id: "minecraft:iron_ingot_from_smelting_deepslate_iron_ore" });
  event.remove({ id: "minecraft:iron_ingot_from_blasting_deepslate_iron_ore" });

  event.remove({ id: "minecraft:gold_ingot_from_blasting_gold_ore" });
  event.remove({ id: "minecraft:gold_ingot_from_smelting_gold_ore" });
  event.remove({ id: "minecraft:gold_ingot_from_smelting_deepslate_gold_ore" });
  event.remove({ id: "minecraft:gold_ingot_from_blasting_deepslate_gold_ore" });
  event.remove({ id: "minecraft:gold_ingot_from_blasting_nether_gold_ore" });
  event.remove({ id: "minecraft:gold_ingot_from_smelting_nether_gold_ore" });

  event.remove({ id: "minecraft:iron_ingot_from_nuggets" });
  event.remove({ id: "minecraft:gold_ingot_from_nuggets" });
  event.remove({ id: "minecraft:copper_ingot_from_nuggets" });

  event.remove({ id: "minecraft:netherite_helmet_smithing" });
  event.remove({ id: "minecraft:netherite_chestplate_smithing" });
  event.remove({ id: "minecraft:netherite_leggings_smithing" });
  event.remove({ id: "minecraft:netherite_boots_smithing" });
});
