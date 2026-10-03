import {
  Box,
  Container,
  Typography,
} from '@mui/material'

import ProfileImage from '../assets/profilePic.jpg'

function About()
{
  return (
    <Box
      sx={{
        minHeight: '100vh',

        background:
          'linear-gradient(135deg, #06111f 0%, #02070d 100%)',

        color: 'white',

        pt: 13,
        pb: 10,
      }}
    >
      <Container maxWidth="lg">

        <Box
          sx={{
            display: 'grid',

            gridTemplateColumns:
            {
              xs: '1fr',
              md: '0.75fr 1.25fr',
            },

            gap:
            {
              xs: 5,
              md: 7,
            },

            alignItems: 'start',
          }}
        >

          {/* IMAGE */}
          <Box
            sx={{
              display: 'flex',

              justifyContent:
              {
                xs: 'center',
                md: 'flex-start',
              },

              position:
              {
                md: 'sticky',
              },

              top:
              {
                md: '120px',
              },
            }}
          >
            <Box
              component="img"

              src={ProfileImage}

              alt="Marvelous Nwadike"

              sx={{
                width: '100%',

                maxWidth: '420px',

                maxHeight: '650px',

                objectFit: 'cover',

                objectPosition: 'center top',

                borderRadius: 4,

                border:
                  '1px solid #245f94',

                backgroundColor:
                  '#091827',

                boxShadow:
                  '0 20px 50px rgba(0, 0, 0, 0.35)',
              }}
            />
          </Box>

          {/* TEXT */}
          <Box>
            <Typography
              sx={{
                color: '#32a9ff',

                fontWeight: 700,

                letterSpacing: 2,

                textTransform: 'uppercase',

                mb: 1,
              }}
            >
              About Me
            </Typography>

            <Typography
              component="h1"

              sx={{
                fontSize:
                {
                  xs: '2.8rem',
                  md: '4rem',
                },

                fontWeight: 800,

                mb: 4,
              }}
            >
              Hi, I'm Marvelous.
            </Typography>

            <Typography sx={AboutTextStyle}>
              I'm a Mechatronics Engineering student at Simon
              Fraser University, and for as long as I can
              remember, I've been curious about how things work.
            </Typography>

            <Typography sx={AboutTextStyle}>
              Growing up, while most people around me were
              amazed by technology, I was usually wondering how
              someone managed to build it in the first place.
              That curiosity eventually turned into more than
              five years of programming in C++ and C#, and later
              into one of my longest running projects building
              my own game engine. Through it, I've learned about
              rendering, physics, input systems, asset management,
              particle systems, and many of the lower level
              systems that make games work behind the scenes.
              I also started a YouTube channel to document the
              process and share what I learn along the way.
            </Typography>

            <Typography sx={AboutTextStyle}>
              I'm most interested in the space where software
              meets the real world. My projects have included
              an RC aircraft, a Raspberry Pi arcade station,
              VEX robotics, and Arduino based systems. What I
              enjoy most is taking an idea, figuring out how all
              the pieces need to work together, then building,
              testing, and improving it until it becomes a
              complete system.
            </Typography>

            <Typography sx={AboutTextStyle}>
              Outside of engineering, sports are a big part of
              my life. I love both playing and watching football,
              I'm a big Chelsea fan, and Messi has been one of
              my favourite players since I was young. I also
              follow basketball closely, especially the Golden
              State Warriors. Whether I'm on the pitch, working
              on a project, or debugging my engine at 2 a.m.,
              I enjoy the same thing: pushing myself, improving,
              and seeing how far I can take something.
            </Typography>
              
            <Typography
              sx={{
                ...AboutTextStyle,

                color: 'white',

                fontWeight: 600,

                fontSize:
                {
                  xs: '1.1rem',
                  md: '1.2rem',
                },

                mb: 0,
              }}
            >
              At the end of the day, my goal is simple: to keep
              building, keep learning, and hopefully live up to
              the name I was given at birth, "Marvelous".
            </Typography>
          </Box>

        </Box>

      </Container>
    </Box>
  )
}

const AboutTextStyle =
{
  color: '#b7c4d1',

  fontSize:
  {
    xs: '1rem',
    md: '1.08rem',
  },

  lineHeight: 1.85,

  mb: 3,
}

export default About