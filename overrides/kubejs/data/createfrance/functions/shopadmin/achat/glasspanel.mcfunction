execute as @p if block 196 73 263 create:depot{HeldItem:{Item:{id:"coinsje:iron_coin",Count:32b}}} run give @s[type=minecraft:player,distance=..1] minecraft:glass_pane 64
data modify block 196 73 263 HeldItem set value {id:"minecraft:air"}
