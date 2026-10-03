import {
  ProjectMediaType,
  ProjectPageConfig,
} from '../ProjectPageConfig'

import Hero from '../../assets/OrbitBreak/Hero.png'
import Galaga from '../../assets/OrbitBreak/galga.gif' 
import InitialTemlate from '../../assets/OrbitBreak/InitialTemplate.mp4'
import GameTestRun from '../../assets/OrbitBreak/GameTestRun.mp4'
import FinalRun from '../../assets/OrbitBreak/GamePlay.mp4'

export const OrbitBreak =
  new ProjectPageConfig(
  {
    Title:
      'Orbit Break',

    Date:
      'October 2025',

    Technologies:
    [
      'C++',
      'Vulkan',
      'C#',
    ],

    HeroImage:
      Hero,

    GitHub:
      'https://github.com/marvkey/OrbitBreak',
    Video :
    "https://youtu.be/3yEm0WjEXpo",

    TestItOut:
    "https://proofstudio.itch.io/orbit-break",



    WhatILearned:
      'I learned that trying to build a real game can expose engine problems much faster than isolated feature testing. The project taught me the importance of correctly managing object and component lifetimes, cleaning up invalid references, and making sure engine systems remain synchronized when objects are created or destroyed.',

    What:
    {
      Text:
        'Built OrbitBreak, a space arcade game inspired by Galaga, where the player controls a rocket, avoids incoming hazards, earns score, and uses abilities such as SpeedBoost, Shield, and Laser to survive longer.',

      Media:
      [
        {
          Type:
            ProjectMediaType.Image,

          Source:
            Galaga,

          Caption:
            'Galaga the game that inspired OrbitBreak. The player controls a spaceship and must avoid incoming hazards while shooting enemies to earn points',

          Fit:
            'cover',
        }, 
      ],
    },

    How:
    {
      Text:
        "Created the game inside my custom Proof Engine using C# scripting for player movement, obstacle behavior, scoring, collisions, power ups, UI, and gameplay flow. The entire project was developed as a 6 hour challenge to see if the engine was capable of supporting a complete game under a strict time limit.",
      Media:
      [
        {
          Type:
            ProjectMediaType.Video,

          Source:
            InitialTemlate,

          Caption:
            'Initial template for the game.',

          Fit:
            'cover',
        },
      ],
    },

    Why:
    {
      Text:
        'I had built many individual engine systems, but I had never actually used the engine to create a complete game. I wanted to test whether those systems could work together in a real project and quickly expose problems that normal engine testing had not revealed.',

      Media:
      [
        {
          Type:
            ProjectMediaType.Video,

          Source:
            GameTestRun,

          Caption:
            'Testing out the game ',

          Fit:
            'contain',
        },
      ],
    },

    Results:
    {
      Text:
        'The 6 hour challenge was not completed within the time limit because development exposed a critical scripting bug in the engine. When an object with a script was deleted, the script component could remain inside the engine\'s internal script list without a valid world object, eventually causing the scene to crash and forcing me to stop and debug the engine itself.',

      Media:
      [
        {
          Type:
            ProjectMediaType.Video,

          Source:
            FinalRun,

          Caption:
            'Final gameplay run of OrbitBreak.',

          Fit:
            'contain',
        },
      ],
    },
  }
)