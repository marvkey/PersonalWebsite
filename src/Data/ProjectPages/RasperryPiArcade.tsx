import {
    ProjectMediaType,
  ProjectPageConfig,
} from '../ProjectPageConfig'

 import ArcadeImage from '../../assets/Arcade/Retro Arcade Console on Wooden Desk.png'
 import ArcadeSchematic from '../../assets/Arcade/ArduinoSchematic-1.png'
 import BaseOfTheArcade from '../../assets/Arcade/BaseOfTheArcade.jpeg'
 import ScreenArcade from '../../assets/Arcade/ScreenOfArcade.jpeg'
 import PacmanGame from '../../assets/Arcade/PacmanWorking.mp4'
 import SuperMarioGame from '../../assets/Arcade/Super mario Working.mp4'
// import ArcadeCAD from '../../assets/Arcade/ArcadeCAD.png'
// import ArcadeTesting from '../../assets/Arcade/ArcadeTesting.mp4'

export const RaspberryPiArcadePage =
  new ProjectPageConfig(
  {
    Title:
      'Arcade Station',

    Date:
      'January 2026 - April 2026',

    Technologies:
    [
      'RaspberryPi',
      'Python',
      'OnShape (3D CAD)',
    ],

    HeroImage:
      ArcadeImage,

    
     Documentation:
       'https://drive.google.com/drive/folders/1J7YStaxt_dT6WmXgKhBF10AuvCdLsMK-?usp=sharing',
     Video:
       'https://www.youtube.com/watch?v=b7eiP34KCfs',

    WhatILearned:
      'Gained practical experience in CAD, 3D printing optimization, Raspberry Pi hardware, electrical wiring, GPIO control, and Python audio processing, while learning the importance of prototyping before committing to a full design. I also learned how real world hardware and software integration introduces unexpected problems such as component fit, wiring constraints, signal reliability, and noisy real world data that require repeated testing and design compromises.',

    What:
    {
      Text:
        'Designed and built a compact Raspberry Pi powered arcade system with a 7inch display, joystick, eight arcade buttons, and custom 3D printed enclosure. The system runs retro games through RetroPie and includes GPIO controlled buzzers for gameplay feedback.',

      
      Media:
      [
        {
          Type:
            ProjectMediaType.Image,

          Source:
            ArcadeSchematic,

          Caption:
            'Arcaded wiring schematic showing the Raspberry Pi, GPIO connections, and buzzer feedback system.',

          Fit:
            "contain",
        },
      ],
      
    },

    How:
    {
      Text:
        'Designed and iterated the enclosure in CAD, using smaller prototype prints to verify component fit before producing the final two piece enclosure. Integrated the Raspberry Pi, USB encoder, controls, display, and buzzers, while developing a Python audio processing system using RMS, FFT frequency analysis, and onset detection to trigger physical feedback from game sounds.',

      
      Media:
      [
        {
          Type:
            ProjectMediaType.Image,

          Source:
            BaseOfTheArcade,

          Caption:
            'Base of the arcade console.',

          Fit:
            'contain',
        },

        {
          Type:
            ProjectMediaType.Image,

          Source:
            ScreenArcade,

          Caption:
            'Screen of the arcade console.',

          Fit:
            'contain',
        },


      ],
      
    },

    Why:
    {
      Text:
        'Created the project out of an interest in combining gaming with hands on engineering, while learning how mechanical design, electronics, programming, and 3D printing can be integrated into one complete product. The goal was to turn a Raspberry Pi into a custom arcade machine rather than simply running games on a standard computer.',

      Media:
      [
        {
          Type:
            ProjectMediaType.Video,

          Source:
            PacmanGame,

          Caption:
            'Testing Paccman on the arcade console ',

          Fit:
            'cover',
        },
      ],
    },

    Results:
    {
      Text:
        'Successfully produced a functional arcade system with working physical controls, display, and retro game emulation. The buzzer feedback concept also worked when a clean audio signal was available, although inconsistent system audio capture prevented it from operating reliably during longer gameplay sessions.',

      Media:
      [
        {
          Type:
            ProjectMediaType.Video,

          Source:
            SuperMarioGame,

          Caption:
            'Testing Super Mario on the arcade console',

          Fit:
            'cover',
        },
      ],
    },
  }
)