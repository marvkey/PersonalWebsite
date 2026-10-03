import {
  ProjectMediaType,
  ProjectPageConfig,
} from '../ProjectPageConfig'

import VexRobot from '../../assets/VexRobots/Robotics Lab Build in Focus.png'
import RobotMoving from '../../assets/vexRobots/RobotMoving.mp4'
import RobotPickingup from '../../assets/vexRobots/RobotPickingUpItem.mp4'
import RobotArmMovmentTest from '../../assets/vexRobots/RobotArmMovement.mp4'
import RobotMovingMaze from '../../assets/vexRobots/RobotMovingMaze.mov'

export const VexRoboticsPage =
  new ProjectPageConfig(
  {
    Title:
      'VEX Robotics',

    Date:
      'January 2025 - April 2025',

    Technologies:
    [
      'C++',
      'VEXcode EXP',
      'VEX EXP Robotics',
    ],

    HeroImage:
      VexRobot,

    Documentation:
      'https://drive.google.com/drive/folders/https://drive.google.com/drive/folders/1QKItYE_SClgGubIEQN3-pc7foiuLJiqD?usp=sharing',

    // No GitHub property = no GitHub button

    WhatILearned:
      'I learned that real world robotics behaves differently from simulations because sensors, motors, and physical components are not always perfectly consistent. Reliable performance depends on careful sensor placement, calibration, repeated testing, and adjusting the design to account for real world variation.',

    What:
    {
      Text:
        'Led a three person team in designing and programming multiple VEX robots for autonomous navigation and mechanical manipulation, including a powered arm and bucket robot, maze navigation, and a sensor guided course',

      Media:
      [
        {
          Type:
            ProjectMediaType.Video,

          Source:
            RobotMoving,

          Caption:
            'The VEX robot in motion during testing.',

          Fit:
            'contain',
        },
      ],
    },

    How:
    {
      Text:
        'Programmed the robots in C++ using distance, optical, vision, and bumper sensors to make navigation decisions. We also adjusted motor speeds, turn angles, sensor placement, and mechanical components through repeated physical testing.',

      Media:
      [
        {
          Type:
            ProjectMediaType.Video,

          Source:
            RobotMovingMaze,

          Caption:
            'The VEX robot navigating a maze during testing.',

          Fit:
            'cover',
        },
      ],
    },

    Why:
    {
      Text:
        'The projects were created to explore how software, sensors, motors, and mechanical systems work together to control a physical robot. They also gave us experience with autonomous decision making and solving practical robotics problems.',

      Media:
      [
        {
          Type:
            ProjectMediaType.Video,

          Source:
            RobotArmMovmentTest,

          Caption:
            'Testing the movement of the VEX robot arm during development.',

          Fit:
            'cover',
        },
      ],
    },

    Results:
    {
      Text:
        'Successfully demonstrated autonomous maze navigation, sensor guided path movement, and controller operated control of a powered arm and bucket. Testing revealed issues with motor strength, turning accuracy, and faulty drive motors, which were improved through mechanical changes and software adjustments',

      Media:
      [
        {
          Type:
            ProjectMediaType.Video,

          Source:
            RobotPickingup,

          Caption:
            'The VEX robot picking up an item during testing.',

          Fit:
            'cover',
        },
      ],
    },
  }
)