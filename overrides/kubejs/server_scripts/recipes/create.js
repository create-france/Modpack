ServerEvents.recipes((event) => {
    event.remove({ id: "create:smelting/iron_ingot_from_crushed" });
    event.remove({ id: "create:smelting/copper_ingot_from_crushed" });
    event.remove({ id: "create:smelting/gold_ingot_from_crushed" });

    event.remove({ id: "create:haunting/infested_stone" });
    event.remove({ id: "create:haunting/infested_mossy_stone_bricks" });
    event.remove({ id: "create:haunting/infested_stone_bricks" });
    event.remove({ id: "create:haunting/infested_cracked_stone_bricks" });
    event.remove({ id: "create:haunting/infested_chiseled_stone_bricks" });
    event.remove({ id: "create:haunting/infested_deepslate" });

    event.remove({ id: "create:crushing/tuff" });
    event.remove({ id: "create:crushing/tuff_recycling" });

    event.remove({ id: "create:crafting/materials/zinc_ingot_from_compacting" });
    event.remove({ id: "create:crafting/materials/brass_ingot_from_compacting" });
    event.remove({ id: "create:crafting/materials/copper_ingot" });

    event.remove({ id: "create:mixing/brass_ingot" });

    event.remove({ id: "create:milling/cobblestone" });
});
