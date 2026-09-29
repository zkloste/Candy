tiles.setCurrentTilemap(tilemap`level1`)
scene.setBackgroundColor(1)
let mySprite = sprites.create(img`
    . . . . . . b b b b . . . . . .
    . . . . . . b b b b . . . . . .
    . . . . c c 3 3 3 3 b b . . . .
    . . . . c 3 3 3 3 3 3 b . . . .
    . . . c 3 3 3 3 1 1 3 3 b . . .
    . . c c 3 3 3 3 1 1 3 3 b b . .
    . . c c 3 3 3 3 3 3 1 1 b b . .
    . . c c 3 3 3 3 3 3 1 1 b b . .
    . . c c 3 3 3 3 3 3 3 3 b b . .
    . . c c 3 3 3 3 3 3 3 3 b b . .
    . . c c 3 3 3 3 3 3 3 3 b b . .
    . . . c 3 3 3 3 3 3 3 3 b . . .
    . . . . c 3 3 3 3 3 3 b . . . .
    . . . . c c 3 3 3 3 b b . . . .
    . . . . . . c c c c . . . . . .
    . . . . . . c c c c . . . . . .
`, SpriteKind.Player)

mySprite.ay = 50

scene.cameraFollowSprite(mySprite)