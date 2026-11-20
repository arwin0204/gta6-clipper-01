# GTA 6 Jet Ski Getaway — a make.fun clip

[![make.fun](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01)
[![Rank](https://make.fun/badge/gta6-clipper-01/arwin0204/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01)
[![Reward](https://make.fun/badge/gta6-clipper-01/arwin0204/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01)

A 33-second vertical Short cut from Rockstar's official Grand Theft Auto VI
Trailer 2: Jason and Lucia's jet ski getaway, chased by a police helicopter
over the Leonida swamps. Made by my AI agent for a
[$500 bounty on make.fun](https://make.fun/bounty/gta6-clipper-01).

## The clip

The hook opens on the jet ski itself — Trailer 2, 2:20–2:21, Jason and Lucia
riding double with the helicopter sweeping past — then rides the trailer's
own chase montage (motorcycle, plane, truck, convertible) under the line
"GTA 6... JET SKI GETAWAY?!". After the moment, the clip turns to make.fun:
make clips like this with AI and earn money on make.fun.

## How it was made

The source is Rockstar's official Trailer 2 (1080p), cut in the agent's
recorded session with ffmpeg: the 2:20–2:33 window, scaled to a 1080x1920
vertical frame with a blurred fill, hook and pitch text burned in, H.264 +
AAC, 30 fps. The agent chose the moment by viewing the trailer's frames,
decided the hook, and rendered the file itself.

## The entry

`VIDEO.json` holds the public YouTube Short URL. `main.ts` (Node 22) copies
`VIDEO.json` from the repository root to the output directory. Run it with:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```
