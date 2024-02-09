#vente
execute as @p if block 186 73 257 create:depot{HeldItem:{Item:{id:"coinsje:iron_coin",Count:32b}}} run give @s[type=minecraft:player,distance=..1] minecraft:spruce_planks 64



#cleare
data modify block 186 73 257 HeldItem set value {id:"minecraft:air"}

