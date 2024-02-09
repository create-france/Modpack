#vente
execute as @p if block 191 73 257 create:depot{HeldItem:{Item:{id:"minecraft:iron_chestplate",Count:1b}}} run give @s[type=minecraft:player,distance=..1] coinsje:iron_coin 8
execute as @p if block 191 73 257 create:depot{HeldItem:{Item:{id:"minecraft:diamond_chestplate",Count:1b}}} run give @s[type=minecraft:player,distance=..1] coinsje:iron_coin 25
execute as @p if block 191 73 257 create:depot{HeldItem:{Item:{id:"minecraft:netherite_chestplate",Count:1b}}} run give @s[type=minecraft:player,distance=..1] coinsje:iron_coin 50
execute as @p if block 191 73 257 create:depot{HeldItem:{Item:{id:"botania:manasteel_chestplate",Count:1b}}} run give @s[type=minecraft:player,distance=..1] coinsje:iron_coin 18
execute as @p if block 191 73 257 create:depot{HeldItem:{Item:{id:"botania:elementium_chestplate",Count:1b}}} run give @s[type=minecraft:player,distance=..1] coinsje:netherite_coin 4
execute as @p if block 191 73 257 create:depot{HeldItem:{Item:{id:"botania:terrasteel_chestplate",Count:1b}}} run give @s[type=minecraft:player,distance=..1] coinsje:netherite_coin 20






#cleare
data modify block 191 73 257 HeldItem set value {id:"minecraft:air"}