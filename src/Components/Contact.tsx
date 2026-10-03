import {
  Box,
  Button,
  Container,
  Typography,
} from '@mui/material'

import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import YouTubeIcon from '@mui/icons-material/YouTube'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

function Contact()
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
        minHeight: '100vh',

        background:
          'linear-gradient(135deg, #06111f 0%, #02070d 100%)',

        color: 'white',

        display: 'flex',
        alignItems: 'center',

        pt: 12,
        pb: 8,
      }}
    >
      <Container
        maxWidth="md"
      >
        {/* HEADER */}
        <Box
          sx={{
            textAlign: 'center',

            mb: 6,
          }}
        >
          <Typography
            sx={{
              color: '#32a9ff',

              fontWeight: 700,

              letterSpacing: 2,

              textTransform: 'uppercase',

              mb: 1,
            }}
          >
            Contact
          </Typography>

          <Typography
            component="h1"

            sx={{
              fontSize:
              {
                xs: '3rem',
                md: '4.5rem',
              },

              fontWeight: 800,

              mb: 2,
            }}
          >
            Let's Get In Touch
          </Typography>

          <Typography
            sx={{
              color: '#a9b7c5',

              fontSize:
              {
                xs: '1rem',
                md: '1.15rem',
              },

              maxWidth: '650px',

              mx: 'auto',

              lineHeight: 1.7,
            }}
          >
            Whether you want to talk about engineering,
            software, one of my projects, or an opportunity,
            feel free to reach out.
          </Typography>
        </Box>

        {/* EMAIL CARD */}
        <Box
          sx={{
            backgroundColor:
              'rgba(8, 25, 43, 0.9)',

            border:
              '1px solid #17446d',

            borderRadius: 3,

            p:
            {
              xs: 3,
              md: 4,
            },

            mb: 3,

            textAlign: 'center',
          }}
        >
          <EmailOutlinedIcon
            sx={{
              fontSize: '3rem',

              color: '#32a9ff',

              mb: 2,
            }}
          />

          <Typography
            variant="h5"

            sx={{
              fontWeight: 800,

              mb: 3,
            }}
          >
            Email Me
          </Typography>

          <Box
            sx={{
              display: 'grid',

              gridTemplateColumns:
              {
                xs: '1fr',
                sm: '1fr 1fr',
              },

              gap: 2,
            }}
          >
            {/* SCHOOL EMAIL */}
            <Box
              sx={EmailCardStyle}
            >
              <Typography
                sx={{
                  color: '#32a9ff',

                  fontWeight: 700,

                  mb: 0.5,
                }}
              >
                School
              </Typography>

              <Typography
                sx={{
                  color: '#d1d9e2',

                  mb: 2,

                  wordBreak: 'break-word',
                }}
              >
                mmn14@sfu.ca
              </Typography>

              <Button
                href="mailto:mmn14@sfu.ca"

                endIcon={
                  <ArrowForwardIcon />
                }

                sx={EmailButtonStyle}
              >
                Email School
              </Button>
            </Box>

            {/* PERSONAL EMAIL */}
            <Box
              sx={EmailCardStyle}
            >
              <Typography
                sx={{
                  color: '#32a9ff',

                  fontWeight: 700,

                  mb: 0.5,
                }}
              >
                Personal
              </Typography>

              <Typography
                sx={{
                  color: '#d1d9e2',

                  mb: 2,

                  wordBreak: 'break-word',
                }}
              >
                marvnwadike1@gmail.com
              </Typography>

              <Button
                href="mailto:marvnwadike1@gmail.com"

                endIcon={
                  <ArrowForwardIcon />
                }

                sx={EmailButtonStyle}
              >
                Email Personal
              </Button>
            </Box>
          </Box>
        </Box>

        {/* SOCIAL LINKS */}
        <Box
          sx={{
            display: 'grid',

            gridTemplateColumns:
            {
              xs: '1fr',
              sm: 'repeat(3, 1fr)',
            },

            gap: 2,
          }}
        >
          {/* GITHUB */}
          <Box
            onClick={() =>
              OpenLink(
                'https://github.com/marvkey'
              )
            }

            sx={SocialCardStyle}
          >
            <GitHubIcon
              sx={SocialIconStyle}
            />

            <Typography
              sx={{
                fontWeight: 800,
              }}
            >
              GitHub
            </Typography>

            <Typography
              sx={SocialTextStyle}
            >
              View my code
            </Typography>
          </Box>

          {/* LINKEDIN */}
          <Box
            onClick={() =>
              OpenLink(
                'https://linkedin.com/in/marvelous-nwadike'
              )
            }

            sx={SocialCardStyle}
          >
            <LinkedInIcon
              sx={SocialIconStyle}
            />

            <Typography
              sx={{
                fontWeight: 800,
              }}
            >
              LinkedIn
            </Typography>

            <Typography
              sx={SocialTextStyle}
            >
              Connect with me
            </Typography>
          </Box>

          {/* YOUTUBE */}
          <Box
            onClick={() =>
              OpenLink(
                'https://www.youtube.com/@valousN'
              )
            }

            sx={SocialCardStyle}
          >
            <YouTubeIcon
              sx={SocialIconStyle}
            />

            <Typography
              sx={{
                fontWeight: 800,
              }}
            >
              YouTube
            </Typography>

            <Typography
              sx={SocialTextStyle}
            >
              Watch my projects
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

const EmailCardStyle =
{
  backgroundColor:
    'rgba(4, 15, 27, 0.65)',

  border:
    '1px solid #17446d',

  borderRadius: 2,

  p: 2.5,
}

const EmailButtonStyle =
{
  backgroundColor:
    '#ffffff',

  color:
    '#07111f',

  textTransform:
    'none',

  fontWeight:
    800,

  px: 2.5,

  py: 1,

  borderRadius: 2,

  '&:hover':
  {
    backgroundColor:
      '#dbeeff',
  },
}

const SocialCardStyle =
{
  backgroundColor:
    'rgba(8, 25, 43, 0.9)',

  border:
    '1px solid #17446d',

  borderRadius: 3,

  p: 3,

  textAlign: 'center',

  cursor: 'pointer',

  transition:
    'all 0.2s ease',

  '&:hover':
  {
    transform:
      'translateY(-5px)',

    backgroundColor:
      '#0d2741',

    borderColor:
      '#32a9ff',
  },
}

const SocialIconStyle =
{
  fontSize: '2.3rem',

  color: '#32a9ff',

  mb: 1.5,
}

const SocialTextStyle =
{
  color: '#94a6b8',

  fontSize: '0.9rem',

  mt: 0.5,
}

export default Contact