import {
  Box,
  IconButton,
  Typography,
} from '@mui/material'

import EmailIcon from '@mui/icons-material/Email'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import YouTubeIcon from '@mui/icons-material/YouTube'

import ProfileImage from '../assets/ProfilePic.png' 

function Hero()
{
  const OpenLink = (Url: string) =>
  {
    window.open(
      Url,
      '_blank',
      'noopener,noreferrer'
    )
  }

  return (
    <Box
      sx={{
        position: 'relative',

        minHeight: '100vh',

        overflow: 'hidden',

        backgroundColor: '#06111f',

        color: 'white',
      }}
    >
      {/* RIGHT DARK SECTION */}
      <Box
        sx={{
          position: 'absolute',

          top: 0,
          right: 0,
          bottom: 0,

          width: '58%',

          background:
            'linear-gradient(135deg, #02070d 0%, #000000 100%)',

          clipPath:
            'polygon(50% 0, 100% 0, 100% 100%, 41% 100%)',

          display:
          {
            xs: 'none',
            md: 'block',
          },
        }}
      />

      {/* SUBTLE BLUE GLOW */}
      <Box
        sx={{
          position: 'absolute',

          width: '500px',
          height: '500px',

          left: '-200px',
          bottom: '-200px',

          borderRadius: '50%',

          background:
            'rgba(50, 169, 255, 0.08)',

          filter: 'blur(80px)',

          pointerEvents: 'none',
        }}
      />

      {/* HERO TEXT */}
      <Box
        sx={{
          position:
          {
            xs: 'relative',
            md: 'absolute',
          },

          left:
          {
            xs: 0,
            md: '4vw',
          },

          top:
          {
            md: '50%',
          },

          transform:
          {
            md: 'translateY(-50%)',
          },

          width:
          {
            xs: '100%',
            md: '48%',
          },

          px:
          {
            xs: 3,
            md: 0,
          },

          pt:
          {
            xs: 15,
            md: 0,
          },

          zIndex: 2,

          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography
          sx={{
            color: '#32a9ff',

            fontSize:
            {
              xs: '1.4rem',
              md: '1.8rem',
            },

            fontWeight: 700,

            mb: 1,
          }}
        >
          Hi, I am
        </Typography>

        <Typography
          component="h1"

          sx={{
            fontSize:
            {
              xs: '3rem',
              md: 'clamp(3rem, 3.7vw, 3.8rem)',
            },

            fontWeight: 800,

            lineHeight: 1.05,

            whiteSpace:
            {
              xs: 'normal',
              md: 'nowrap',
            },

            mb: 1.5,
          }}
        >
          Marvelous Nwadike
        </Typography>

        <Typography
          sx={{
            color: '#a9b7c5',

            fontSize:
            {
              xs: '1rem',
              md: '1.2rem',
            },

            fontWeight: 400,

            whiteSpace:
            {
              xs: 'normal',
              md: 'nowrap',
            },

            alignSelf:
            {
              md: 'center',
            },

            mb: 4,
          }}
        >
          Mechatronics Engineering Student / Software Developer
        </Typography>

        {/* SOCIAL ICONS */}
        <Box
          sx={{
            display: 'flex',

            gap: 1.5,

            alignSelf:
            {
              xs: 'flex-start',
              md: 'center',
            },
          }}
        >
          <IconButton
            href="mailto:mmn14@sfu.ca"
            sx={SocialButtonStyle}
          >
            <EmailIcon />
          </IconButton>

          <IconButton
            onClick={() =>
              OpenLink(
                'https://github.com/marvkey'
              )
            }
            sx={SocialButtonStyle}
          >
            <GitHubIcon />
          </IconButton>

          <IconButton
            onClick={() =>
              OpenLink(
                'https://linkedin.com/in/marvelous-nwadike'
              )
            }
            sx={SocialButtonStyle}
          >
            <LinkedInIcon />
          </IconButton>

          <IconButton
            onClick={() =>
              OpenLink(
                'https://www.youtube.com/@valousN'
              )
            }
            sx={SocialButtonStyle}
          >
            <YouTubeIcon />
          </IconButton>
        </Box>
      </Box>

      {/* PROFILE IMAGE */}
      <Box
        component="img"

        src={ProfileImage}

        alt="Marvelous Nwadike"

        sx={{
          position: 'absolute',

          right:
          {
            md: '7vw',
          },

          bottom: 0,

          height:
          {
            md: '82vh',
          },

          maxHeight: '850px',

          objectFit: 'contain',

          display:
          {
            xs: 'none',
            md: 'block',
          },

          zIndex: 2,
        }}
      />
    </Box>
  )
}

const SocialButtonStyle =
{
  width: '52px',
  height: '52px',

  color: '#ffffff',

  backgroundColor:
    'rgba(8, 25, 43, 0.95)',

  border:
    '1px solid #245f94',

  borderRadius: 1.5,

  transition:
    'all 0.2s ease',

  '&:hover':
  {
    color: '#32a9ff',

    backgroundColor:
      '#0d2741',

    borderColor:
      '#32a9ff',

    transform:
      'translateY(-3px)',
  },
}

export default Hero