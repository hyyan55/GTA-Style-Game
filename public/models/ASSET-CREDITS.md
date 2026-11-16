# SHADOW CITY — 3D asset credits

## Player and pedestrians

- Model: **Casual Male**, Quaternius Ultimate Animated Character Pack
- Format: rigged glTF with embedded character animations
- License: **CC0 1.0 Universal**
- Official pack and license: https://quaternius.com/packs/ultimatedanimatedcharacter.html
- Runtime file: `public/models/Casual_Male.gltf`

The character loader uses the model's embedded idle, walk, run and jump clips when available, with the procedural rig retained as a fallback.

## Vehicles

- Models: `SportsCar.fbx`, `SUV.fbx`, `NormalCar1.fbx`, `Cop.fbx`
- Artist: Quaternius
- Pack: Cars Pack (November 2018)
- License: **CC0 1.0 Universal**
- Official pack: https://quaternius.com/packs/cars.html
- Runtime directory: `public/models/vehicles/`

CC0 deed: https://creativecommons.org/publicdomain/zero/1.0/

The game code and third-party model assets have separate licensing. The downloader retrieves the original character and vehicle model files into the local public asset directory before every production build.
