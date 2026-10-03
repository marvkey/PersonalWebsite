import {
  Box,
  Container,
  Typography,
} from '@mui/material'

import CodeIcon from '@mui/icons-material/Code'
import MemoryIcon from '@mui/icons-material/Memory'
import BuildIcon from '@mui/icons-material/Build'
import TerminalIcon from '@mui/icons-material/Terminal'

interface SkillCategory
{
  Title: string
  Description: string
  Icon: React.ReactNode
  Skills: string[]
}

function Skills()
{
  const SkillCategories: SkillCategory[] =
  [
    {
      Title:
        'Software Development',

      Description:
        'Languages, frameworks, and technologies I use to build software, games, tools, and interactive applications.',

      Icon:
        <CodeIcon />,

      Skills:
      [
        'C++',
        'C#',
        'Python',
        'TypeScript',
        'React',
        'Vulkan',
        'Unity',
        'Unreal Engine',
      ],
    },

    {
      Title:
        'Engineering & Hardware',

      Description:
        'Technologies and skills I use for embedded systems, electronics, prototyping, and engineering projects.',

      Icon:
        <MemoryIcon />,

      Skills:
      [
        'Arduino',
        'Raspberry Pi',
        'Electronics',
        'Circuit Design',
        'CAD',
        '3D Printing',
        'RC Systems',
        'Prototyping',
      ],
    },

    {
      Title:
        'Tools & Systems',

      Description:
        'Development tools and systems I use when building, debugging, documenting, and managing projects.',

      Icon:
        <BuildIcon />,

      Skills:
      [
        'Git',
        'GitHub',
        'ImGui',
        'NVIDIA PhysX',
        'Visual Studio',
        'VS Code',
      ],
    },

    {
      Title:
        'Game Engine Development',

      Description:
        'Areas I have worked on while developing my custom C++ and Vulkan game engine.',

      Icon:
        <TerminalIcon />,

      Skills:
      [
        'Rendering',
        'Forward+ Lighting',
        'GPU Particles',
        'Entity Component Systems',
        'Physics Integration',
        'Input Systems',
        'Asset Management',
        'Post Processing',
      ],
    },
  ]

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
      <Container
        maxWidth="lg"
      >
        {/* HEADER */}
        <Box
          sx={{
            textAlign: 'center',

            mb: 7,
          }}
        >
          <Typography
            sx={{
              color: '#32a9ff',

              fontWeight: 700,

              letterSpacing: 2,

              textTransform:
                'uppercase',

              mb: 1,
            }}
          >
            Skills
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
            Technologies I Work With
          </Typography>

          <Typography
            sx={{
              color: '#a9b7c5',

              fontSize:
              {
                xs: '1rem',
                md: '1.15rem',
              },

              maxWidth: '720px',

              mx: 'auto',

              lineHeight: 1.7,
            }}
          >
            My experience spans software development,
            game engine programming, embedded systems,
            electronics, and hands on engineering projects.
          </Typography>
        </Box>

        {/* SKILL CATEGORIES */}
        <Box
          sx={{
            display: 'grid',

            gridTemplateColumns:
            {
              xs: '1fr',
              md: 'repeat(2, 1fr)',
            },

            gap: 3,
          }}
        >
          {SkillCategories.map(
            (Category) => (
              <Box
                key={Category.Title}

                sx={CategoryCardStyle}
              >
                {/* ICON */}
                <Box
                  sx={{
                    width: '52px',
                    height: '52px',

                    display: 'flex',

                    alignItems: 'center',
                    justifyContent: 'center',

                    backgroundColor:
                      'rgba(50, 169, 255, 0.12)',

                    border:
                      '1px solid #245f94',

                    borderRadius: 2,

                    color: '#32a9ff',

                    mb: 2,

                    '& svg':
                    {
                      fontSize: '2rem',
                    },
                  }}
                >
                  {Category.Icon}
                </Box>

                {/* TITLE */}
                <Typography
                  sx={{
                    fontSize: '1.5rem',

                    fontWeight: 800,

                    mb: 1,
                  }}
                >
                  {Category.Title}
                </Typography>

                {/* DESCRIPTION */}
                <Typography
                  sx={{
                    color: '#94a6b8',

                    lineHeight: 1.6,

                    mb: 3,
                  }}
                >
                  {Category.Description}
                </Typography>

                {/* SKILLS */}
                <Box
                  sx={{
                    display: 'flex',

                    flexWrap: 'wrap',

                    gap: 1,
                  }}
                >
                  {Category.Skills.map(
                    (Skill) => (
                      <Box
                        key={Skill}

                        sx={SkillStyle}
                      >
                        {Skill}
                      </Box>
                    )
                  )}
                </Box>
              </Box>
            )
          )}
        </Box>
      </Container>
    </Box>
  )
}

const CategoryCardStyle =
{
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

  transition:
    'all 0.2s ease',

  '&:hover':
  {
    transform:
      'translateY(-4px)',

    borderColor:
      '#32a9ff',

    backgroundColor:
      '#0b2239',
  },
}

const SkillStyle =
{
  backgroundColor:
    'rgba(50, 169, 255, 0.08)',

  border:
    '1px solid #245f94',

  borderRadius: '20px',

  px: 1.8,
  py: 0.8,

  color: '#d6e8f7',

  fontSize: '0.9rem',

  fontWeight: 600,
}

export default Skills