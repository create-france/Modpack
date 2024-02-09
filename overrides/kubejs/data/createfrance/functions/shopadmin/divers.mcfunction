#vente
execute as @p if block 171 73 257 create:depot{HeldItem:{Item:{id:"minecraft:nether_star",Count:1b}}} run give @s[type=minecraft:player,distance=..1] coinsje:netherite_coin 10
#execute as @p if block 171 73 257 create:depot{HeldItem:{Item:{id:"minecraft:",Count:b}}} run give @s[type=minecraft:player,distance=..1] coinsje:copper_coin 10





#cleare
data modify block 171 73 257 HeldItem set value {id:"minecraft:air"}