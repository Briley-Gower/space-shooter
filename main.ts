controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile2 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . . 1 5 . . . . . . . 
        . . . . . . . 5 5 . . . . . . . 
        . . . . . . . 5 5 . . . . . . . 
        . . . . . . . 5 5 . . . . . . . 
        `, mySprite, 0, -75)
    music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprites.destroy(Asteriod)
    Asteriod.startEffect(effects.fire)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(mySprite, effects.disintegrate, 500)
    scene.cameraShake(4, 500)
    info.changeLifeBy(-1)
})
let Asteriod: Sprite = null
let projectile2: Sprite = null
let mySprite: Sprite = null
effects.starField.startScreenEffect()
mySprite = sprites.create(img`
    ....................
    ....................
    ....................
    .........ff.........
    ........ffff........
    .......ff22ff.......
    ......ff2222f.......
    .....ff222222f......
    .....f2222222ff.....
    ....f222222222ff....
    ....fff2222222ff....
    .....fdffffffff.....
    .....fddddddddf.....
    .....f11111111f.....
    ....ff11fff111f.....
    ...fff1ff99f11ff....
    ..ff5f1f999f11fff...
    ..f55f1fffff11f5ff..
    ..ffff11111111ffff..
    .....f11111111f.....
    .....f11111111f.....
    .....ff111111ff.....
    .....ffffffffff.....
    ....f888888888ff....
    ...ff8888888888f....
    ...f88888888888ff...
    ...f888888888888f...
    ...fffffffff888ff...
    ............ffff....
    ....................
    `, SpriteKind.Player)
mySprite.setPosition(77, 105)
controller.moveSprite(mySprite, 100, 0)
mySprite.setStayInScreen(true)
game.onUpdateInterval(1000, function () {
    Asteriod = sprites.createProjectileFromSide(img`
        . . . . . . . c c c a c . . . . 
        . . c c b b b a c a a a c . . . 
        . c c a b a c b a a a b c c . . 
        . c a b c f f f b a b b b a . . 
        . c a c f f f 8 a b b b b b a . 
        . c a 8 f f 8 c a b b b b b a . 
        c c c a c c c c a b c f a b c c 
        c c a a a c c c a c f f c b b a 
        c c a b 6 a c c a f f c c b b a 
        c a b c 8 6 c c a a a b b c b c 
        c a c f f a c c a f a c c c b . 
        c a 8 f c c b a f f c b c c c . 
        . c b c c c c b f c a b b a c . 
        . . a b b b b b b b b b b b c . 
        . . . c c c c b b b b b c c . . 
        . . . . . . . . c b b c . . . . 
        `, 0, 50)
    Asteriod.x = randint(0, scene.screenWidth())
    Asteriod.setKind(SpriteKind.Enemy)
})
