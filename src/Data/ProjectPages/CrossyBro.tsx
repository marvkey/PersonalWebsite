import {
  ProjectMediaType,
  ProjectPageConfig,
} from '../ProjectPageConfig'

import Hero from '../../assets/CrossyBro/Hero.png'
import CrossyRoadGif from '../../assets/CrossyBro/CrossyRoadGif.gif' 
import TreeSpawenSystem from '../../assets/CrossyBro/The tree spawner.mp4'
import LaneSpawner from '../../assets/CrossyBro/The lane spawner.mp4'
import CurrentFInalTest from '../../assets/CrossyBro/CurrentFinalBuildofgame.mp4'

export const CrossyBroPage =
  new ProjectPageConfig(
  {
    Title:
      'Crossy Bro',

    Date:
      'August 2026 - Present',

    Technologies:
    [
      'C++',
      'Vulkan',
      'C#',
    ],

    HeroImage:
      Hero,

    GitHub:
      'https://github.com/marvkey/CrossyBro',

    Documentation :
    "https://www.linkedin.com/feed/update/urn:li:activity:7497482412621201408/" ,



    WhatILearned:
      'I learned that building a complete game exposes engine problems that individual feature tests often miss, especially interactions between physics, movement, collision, parenting, audio, and scene logic. Solving problems such as keeping the player stable on moving logs and making vehicles behave consistently helped me improve both the game itself and the underlying engine systems.',

    What:
    {
      Text:
        'Built Crossy Bro, a first person reinterpretation of Crossy Road using my custom Proof Engine. The game challenges the player to cross roads, rivers, and train tracks while avoiding moving cars and trains and using floating logs to cross water.',

      Media:
      [
        {
          Type:
            ProjectMediaType.Image,

          Source:
            CrossyRoadGif,

          Caption:
            'Crosssy road the offficial game I made a firt person version of using my Game engine.',

          Fit:
            'cover',
        }, 
      ],
    },

    How:
    {
      Text:
        "Built the level around an 8 by 8 grid system and created gameplay systems for moving traffic, trains, floating logs, player collision, and level progression. I also implemented log riding by attaching the player to moving logs, vehicle rotation and movement logic, police siren audio, a custom HUD, vignette effects, menus, and the supporting gameplay code through the engine's C# scripting system.",
      Media:
      [
        {
          Type:
            ProjectMediaType.Video,

          Source:
            TreeSpawenSystem,

          Caption:
            'Testign out spawnign trees at different frequency density',

          Fit:
            'cover',
        },
      ],
    },

    Why:
    {
      Text:
        'I wanted to prove that Proof Engine could support a complete playable game rather than only isolated rendering and engine features. Recreating a familiar game in first person also gave me a clear design target while forcing me to solve movement, collision, moving platforms, UI, audio, and gameplay problems inside my own engine.',

      Media:
      [
        {
          Type:
            ProjectMediaType.Video,

          Source:
            LaneSpawner,

          Caption:
            'Testing the lane spawner system with cars gogin different directions and density.',

          Fit:
            'cover',
        },
      ],
    },

    Results:
    {
      Text:
        'Crossy Bro is roughly 95% complete and is fully playable, with the main gameplay systems, levels, UI, audio, and obstacles working together. Testing the game has also exposed a few remaining engine bugs, including cases where the player can occasionally slip through a moving log during a jump, which I am currently working to resolve.',

      Media:
      [
        {
          Type:
            ProjectMediaType.Video,

          Source:
            CurrentFInalTest,

          Caption:
            'Current final state of the game.',

          Fit:
            'contain',
        },
      ],
    },
  }
)