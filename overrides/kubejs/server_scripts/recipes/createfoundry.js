ServerEvents.recipes((event) => {
    event.remove({ id: "createfoundry:compacting/diamond_from_carbon" });

    event.remove({ id: "createfoundry:mixing/molten_netherite_from_ancient_debris_gold" });
    event.remove({ id: "createfoundry:mixing/melting/unit/carbon_from_charcoal" });
});