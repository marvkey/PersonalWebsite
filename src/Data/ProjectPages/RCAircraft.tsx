import {
  ProjectMediaType,
  ProjectPageConfig,
} from '../ProjectPageConfig'

import PlaneImage from '../../assets/Plane/FullPlane.png'
import Schematic from '../../assets/Plane/Schematic.png'
import WingsTesting from '../../assets/Plane/WingsTesting.mp4'
import MotorTesting from '../../assets/Plane/MotorTesting.mov'
import PlaneMoving from '../../assets/Plane/MovementTesting.mp4'

export const RCAircraftPage =
  new ProjectPageConfig(
  {
    Title:
      'RC Aircraft',

    Date:
      'January 2026 - April 2026',

    Technologies:
    [
      'CAD',
      'Electronics',
      'RC Systems',
    ],

    HeroImage:
      PlaneImage,

    Documentation:
      'https://drive.google.com/drive/folders/1xYh50hDw3JafDNOkkVlkYPKaef41zhtD',

    // No GitHub property = no GitHub button

    WhatILearned:
      'I gained hands on experience with power distribution, motor and ESC compatibility, receiver configuration, soldering, component placement, and mechanical troubleshooting. I also learned that real world engineering introduces far more edge cases than computer simulations, requiring compromises, creative fixes, and constant consideration of how components physically fit, connect, and interact within the system.',

    What:
    {
      Text:
        'Designed and built a 1.5 m fixed wing radio controlled aircraft featuring dual brushless motors and independent control of the ailerons, elevator, and rudder. The project combined mechanical design, electronics, and control systems into a complete RC aircraft prototype.',

      Media:
      [
        {
          Type:
            ProjectMediaType.Image,

          Source:
            Schematic,

          Caption:
            'Electrical schematic for the aircraft control and power system.',

          Fit:
            'contain',
        },
      ],
    },

    How:
    {
      Text:
        'Calculated the aircraft’s wing dimensions, power requirements, battery capacity, and electronic specifications before constructing the airframe from foam board and reinforced wood. Integrated motors, ESCs, servos, an 8 channel receiver, and a UBEC, then iteratively modified components such as the motor mounts, wheels, wings, and receiver mapping during testing.',

      Media:
      [
        {
          Type:
            ProjectMediaType.Video,

          Source:
            WingsTesting,

          Caption:
            'Testing the wings of the aircraft during the development process.',

          Fit:
            'cover',
        },
      ],
    },

    Why:
    {
      Text:
        'Driven by curiosity about the engineering and mathematics behind flight, including how wingspan, aircraft dimensions, weight, and throttle affect whether an aircraft can generate enough lift and thrust to fly. The project also provided an opportunity to learn how electrical components work together in a real electromechanical system.',

      Media:
      [
        {
          Type:
            ProjectMediaType.Video,

          Source:
            MotorTesting,

          Caption:
            'Testing the thrust produced by the dual brushless motors during ground testing.',

          Fit:
            'cover',
        },
      ],
    },

    Results:
    {
      Text:
        'Successfully achieved functional throttle and control surface operation, with the motors producing enough thrust to move the aircraft during ground testing. A full flight test was not performed because we did not have the required certification to legally operate the aircraft in Canada.',

      Media:
      [
        {
          Type:
            ProjectMediaType.Video,

          Source:
            PlaneMoving,

          Caption:
            'The aircraft in motion during ground testing.',

          Fit:
            'cover',
        },
      ],
    },
  }
)