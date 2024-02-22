ServerEvents.recipes((event) => {
    event.remove({ id: "saros_create_addon_fabric:iron_to_dia" });

    event.remove({ id: "saros_create_addon_fabric:raw_dia" });
});