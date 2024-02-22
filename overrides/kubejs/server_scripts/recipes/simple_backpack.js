ServerEvents.recipes((event) => {
    event.remove({ output: "simple_backpack:backpack" });
    event.remove({ output: "simple_backpack:simple_bundle" });
    event.remove({ output: "simple_backpack:void_bundle" });
});