#vente
execute as @p if block 166 73 260 create:depot{HeldItem:{Item:{id:"minecraft:coal",Count:64b}}} run give @s[type=minecraft:player,distance=..1] coinsje:iron_coin 5 
execute as @p if block 166 73 260 create:depot{HeldItem:{Item:{id:"minecraft:diamond",Count:64b}}} run give @s[type=minecraft:player,distance=..1] coinsje:diamond_coin 5
execute as @p if block 166 73 260 create:depot{HeldItem:{Item:{id:"minecraft:emerald",Count:64b}}} run give @s[type=minecraft:player,distance=..1] coinsje:diamond_coin 8
execute as @p if block 166 73 260 create:depot{HeldItem:{Item:{id:"minecraft:lapis_lazuli",Count:64b}}} run give @s[type=minecraft:player,distance=..1] coinsje:iron_coin 14
execute as @p if block 166 73 260 create:depot{HeldItem:{Item:{id:"minecraft:quartz",Count:64b}}} run give @s[type=minecraft:player,distance=..1] coinsje:iron_coin 4
execute as @p if block 166 73 260 create:depot{HeldItem:{Item:{id:"minecraft:amethyst_shard",Count:64b}}} run give @s[type=minecraft:player,distance=..1] coinsje:iron_coin 8
execute as @p if block 166 73 260 create:depot{HeldItem:{Item:{id:"minecraft:iron_ingot",Count:64b}}} run give @s[type=minecraft:player,distance=..1] coinsje:iron_coin 8
execute as @p if block 166 73 260 create:depot{HeldItem:{Item:{id:"minecraft:copper_ingot",Count:64b}}} run give @s[type=minecraft:player,distance=..1] coinsje:iron_coin 6
execute as @p if block 166 73 260 create:depot{HeldItem:{Item:{id:"minecraft:gold_ingot",Count:64b}}} run give @s[type=minecraft:player,distance=..1] coinsje:iron_coin 10
execute as @p if block 166 73 260 create:depot{HeldItem:{Item:{id:"minecraft:netherite_ingot",Count:64b}}} run give @s[type=minecraft:player,distance=..1] coinsje:netherite_coin 5
execute as @p if block 166 73 260 create:depot{HeldItem:{Item:{id:"botania:manasteel_ingot",Count:64b}}} run give @s[type=minecraft:player,distance=..1] coinsje:iron_coin 12
execute as @p if block 166 73 260 create:depot{HeldItem:{Item:{id:"botania:terrasteel_ingot",Count:16b}}} run give @s[type=minecraft:player,distance=..1] coinsje:diamond_coin 8
execute as @p if block 166 73 260 create:depot{HeldItem:{Item:{id:"botania:elementium_ingot",Count:64b}}} run give @s[type=minecraft:player,distance=..1] coinsje:diamond_coin 4
execute as @p if block 166 73 260 create:depot{HeldItem:{Item:{id:"botania:gaia_ingot",Count:1b}}} run give @s[type=minecraft:player,distance=..1] coinsje:netherite_coin 2
execute as @p if block 166 73 260 create:depot{HeldItem:{Item:{id:"create:andesite_alloy",Count:64b}}} run give @s[type=minecraft:player,distance=..1] coinsje:iron_coin 3
execute as @p if block 166 73 260 create:depot{HeldItem:{Item:{id:"create:zinc_ingot",Count:64b}}} run give @s[type=minecraft:player,distance=..1] coinsje:iron_coin 2
execute as @p if block 166 73 260 create:depot{HeldItem:{Item:{id:"create:brass_ingot",Count:64b}}} run give @s[type=minecraft:player,distance=..1] coinsje:iron_coin 8
execute as @p if block 166 73 260 create:depot{HeldItem:{Item:{id:"create:refined_radiance",Count:64b}}} run give @s[type=minecraft:player,distance=..1] coinsje:iron_coin 10




#cleare
data modify block 166 73 260 HeldItem set value {id:"minecraft:air"}