import {
  ProjectMediaType,
  ProjectPageConfig,
} from '../ProjectPageConfig'

import GameEngineHero from '../../assets/GameEngine/GameEngineHero.png'
import SpotLight from '../../assets/GameEngine/SpotLight.mp4' 
import MaterialEditor from '../../assets/GameEngine/MaterialEditorInEngine.mp4'
import PartcileSystemFire from '../../assets/GameEngine/ParticleSystemFire.mp4'
import LightsMoving from '../../assets/GameEngine/TestingScneewith6000dynamicLights.mp4'

export const GameEnginePage =
  new ProjectPageConfig(
  {
    Title:
      'Game Engine',

    Date:
      'February 2021 - Present',

    Technologies:
    [
      'C++',
      'Vulkan',
      'C#',
      "nvidia PhysX",
    ],

    HeroImage:
      GameEngineHero,

    GitHub:
      'http://github.com/marvkey/Proof/tree/release',
    Video :
    "https://www.youtube.com/playlist?list=PLUDEgKcScJv4",

    Documentation :
    "https://www.linkedin.com/feed/update/urn:li:activity:7497482412621201408/" ,



    WhatILearned:
      'I learned how important architecture becomes as a software project grows, since every new system needs to work with existing rendering, physics, scripting, assets, and gameplay code. I also gained a much deeper understanding of GPU programming, memory and performance optimization, debugging complex systems, and designing tools that make development easier rather than simply adding features.',

    What:
    {
      Text:
        'Built a custom game engine from the ground up using C++, Vulkan, C# scripting, NVIDIA PhysX, ECS architecture, custom rendering, audio, UI, input, and asset systems. The engine was used to complete playable games including OrbitBreak, an arcade style shooter, and Crossy Bro, a first person version of Crossy Road, and it is also the main focus of my YouTube channel, which has generated over 90,000 views.',

      Media:
      [
        {
          Type:
            ProjectMediaType.Video,

          Source:
            SpotLight,

          Caption:
            'Testing out Spot light effect in the game engine .',

          Fit:
            'contain',
        }, 
      ],
    },

    How:
    {
      Text:
        "Developed the engine as a collection of interconnected systems, including Forward+ lighting, GPU particles, NVIDIA PhysX physics, an ECS architecture, post processing, audio, asset management, input handling, scene persistence, and custom in game GUI systems. Integrated Mono to support C# scripting, allowing complete games and gameplay systems to be written in C#, while Vulkan graphics and compute pipelines handle demanding GPU workloads and custom ImGui editor tools provide control over engine systems and content.",
      Media:
      [
        {
          Type:
            ProjectMediaType.Video,

          Source:
            MaterialEditor,

          Caption:
            'Editing materials in the game engine.',

          Fit:
            'cover',
        },
      ],
    },

    Why:
    {
      Text:
        'I started the engine out of curiosity about how game engines actually work underneath tools like Unity and Unreal. It became a way to learn graphics programming, physics, software architecture, optimization, and how large software systems are designed to support real games.',

      Media:
      [
        {
          Type:
            ProjectMediaType.Video,

          Source:
            PartcileSystemFire,

          Caption:
            'Fire particle system in the game engine.',

          Fit:
            'contain',
        },
      ],
    },

    Results:
    {
      Text:
        'Implemented Forward+ lighting that improved lighting performance by up to 23× and allowed scenes with more than 20,000 dynamic lights. The engine has also successfully supported complete playable games, allowing its rendering, physics, audio, input, UI, and asset systems to be tested together in real gameplay.',

      Media:
      [
        {
          Type:
            ProjectMediaType.Video,

          Source:
            LightsMoving,

          Caption:
            'Testing scene with 6,000 dynamic lights. Turning of HDR and Gamma correction to show effect of lighting on the scene.',

          Fit:
            'contain',
        },
      ],
    },
  }
)