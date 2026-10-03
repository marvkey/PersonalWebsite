import {
  Box,
  Button,
  Container,
  IconButton,
  Typography,
} from '@mui/material'

import GitHubIcon from '@mui/icons-material/GitHub'
import DescriptionIcon from '@mui/icons-material/Description'
import YouTubeIcon from '@mui/icons-material/YouTube'
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

import {
  ProjectMediaType,
} from '../Data/ProjectPageConfig'

import type {
  ProjectPageConfig,
  ProjectSection,
} from '../Data/ProjectPageConfig'

import { projectCatalog } from '../Data/Projects'

interface ProjectPageProps
{
  Data: ProjectPageConfig

  CurrentSlug: string
}

function ProjectPage(
  {
    Data,
    CurrentSlug,
  }: ProjectPageProps
)
{
  const Projects =
    projectCatalog.GetAllProjects()

  const CurrentProjectIndex =
    Projects.findIndex(
      (Project) =>
        Project.Slug === CurrentSlug
    )

  const PreviousProject =
    CurrentProjectIndex > 0
      ? Projects[CurrentProjectIndex - 1]
      : undefined

  const NextProject =
    CurrentProjectIndex >= 0 &&
    CurrentProjectIndex < Projects.length - 1
      ? Projects[CurrentProjectIndex + 1]
      : undefined

  const NavigateToProject =
    (Slug: string) =>
    {
      window.location.hash = Slug
    }

  return (
    <Box
      sx={{
        minHeight: '100vh',

        background:
          'linear-gradient(135deg, #06111f 0%, #02070d 100%)',

        color: 'white',

        pt: 10,
        pb: 8,

        position: 'relative',
      }}
    >

      {/* LEFT PROJECT ARROW */}
      <IconButton
        disabled={!PreviousProject}

        onClick={() =>
        {
          if (PreviousProject)
          {
            NavigateToProject(
              PreviousProject.Slug
            )
          }
        }}

        sx={{
          ...NavigationArrowStyle,

          left:
          {
            xs: 8,
            md: 20,
          },
        }}
      >
        <ArrowBackIosNewIcon />
      </IconButton>

      {/* RIGHT PROJECT ARROW */}
      <IconButton
        disabled={!NextProject}

        onClick={() =>
        {
          if (NextProject)
          {
            NavigateToProject(
              NextProject.Slug
            )
          }
        }}

        sx={{
          ...NavigationArrowStyle,

          right:
          {
            xs: 8,
            md: 20,
          },
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>

      <Container maxWidth="lg">

        {/* TOP SECTION */}
        <Box
          sx={{
            display: 'grid',

            gridTemplateColumns:
            {
              xs: '1fr',
              md: '1.15fr 0.85fr',
            },

            gap: 4,

            mb: 5,
          }}
        >

          {/* LEFT */}
          <Box>

            {/* Project Title */}
            <Typography
              component="h1"
              sx={{
                fontSize:
                {
                  xs: '2.8rem',
                  md: '4rem',
                },

                fontWeight: 800,

                mb: 3,
              }}
            >
              {Data.Title}
            </Typography>

            {/* Links */}
            <Box
              sx={{
                display: 'flex',

                flexWrap: 'wrap',

                gap: 2,

                mb: 3,
              }}
            >
              {Data.GitHub && (
                <Button
                  href={Data.GitHub}
                  target="_blank"

                  startIcon={
                    <GitHubIcon />
                  }

                  sx={LinkButtonStyle}
                >
                  GitHub
                </Button>
              )}

              {Data.Documentation && (
                <Button
                  href={Data.Documentation}
                  target="_blank"

                  startIcon={
                    <DescriptionIcon />
                  }

                  sx={LinkButtonStyle}
                >
                  Documentation
                </Button>
              )}

               {Data.TestItOut && (
                <Button
                  href={Data.TestItOut}
                  target="_blank"

                  startIcon={
                    <VideogameAssetIcon />
                  }

                  sx={LinkButtonStyle}
                >
                  Test It Out
                </Button>
              )}

              {Data.Video && (
                <Button
                  href={Data.Video}
                  target="_blank"

                  startIcon={
                    <YouTubeIcon />
                  }

                  sx={LinkButtonStyle}
                >
                  Video
                </Button>
              )}
            </Box>

            {/* Hero Image */}
            <Box
              component="img"

              src={Data.HeroImage}

              alt={Data.Title}

              sx={{
                width: '100%',

                maxHeight: '450px',

                objectFit: 'cover',

                backgroundColor: '#091827',

                border:
                  '1px solid #17446d',

                borderRadius: 3,

                display: 'block',
              }}
            />
          </Box>

          {/* RIGHT */}
          <Box>

            {/* Project Overview */}
            <Box
              sx={CardStyle}
            >
              <Typography
                variant="h5"

                sx={{
                  fontWeight: 800,

                  textAlign: 'center',

                  mb: 3,
                }}
              >
                Project Overview
              </Typography>

              <Typography
                sx={{
                  mb: 2,

                  textAlign: 'center',
                }}
              >
                <strong>
                  Date:
                </strong>{' '}

                {Data.Date}
              </Typography>

              <Typography
                sx={{
                  textAlign: 'center',
                }}
              >
                <strong>
                  Technologies:
                </strong>{' '}

                {Data.Technologies.join(', ')}
              </Typography>
            </Box>

            {/* What I Learned */}
            <Box
              sx={{
                ...CardStyle,

                mt: 3,

                background:
                  'linear-gradient(135deg, #7a111b 0%, #b51625 100%)',

                border:
                  '1px solid #ff3545',
              }}
            >
              <Typography
                variant="h5"

                sx={{
                  fontWeight: 800,

                  textAlign: 'center',

                  mb: 2,
                }}
              >
                What I Learned
              </Typography>

              <Typography
                sx={{
                  lineHeight: 1.7,

                  textAlign: 'center',
                }}
              >
                {Data.WhatILearned}
              </Typography>
            </Box>

          </Box>

        </Box>

        {/* PROJECT SECTIONS */}

        <ProjectSectionComponent
          Number="01"
          Title="What"
          Section={Data.What}
        />

        <ProjectSectionComponent
          Number="02"
          Title="How"
          Section={Data.How}
        />

        <ProjectSectionComponent
          Number="03"
          Title="Why"
          Section={Data.Why}
        />

        <ProjectSectionComponent
          Number="04"
          Title="Results"
          Section={Data.Results}
        />

      </Container>
    </Box>
  )
}

interface ProjectSectionProps
{
  Number: string

  Title: string

  Section: ProjectSection
}

function ProjectSectionComponent(
  {
    Number,
    Title,
    Section,
  }: ProjectSectionProps
)
{
  return (
    <Box
      sx={{
        ...CardStyle,

        display: 'grid',

        gridTemplateColumns:
        {
          xs: '1fr',

          md:
            Section.Media &&
            Section.Media.length > 0
              ? '0.8fr 1.2fr'
              : '1fr',
        },

        gap: 4,

        mb: 3,
      }}
    >

      {/* TEXT */}
      <Box>
        <Typography
          sx={{
            color: '#32a9ff',

            fontWeight: 700,

            mb: 0.5,
          }}
        >
          {Number}
        </Typography>

        <Typography
          sx={{
            fontSize:
            {
              xs: '2.5rem',
              md: '3rem',
            },

            fontWeight: 800,

            mb: 2,
          }}
        >
          {Title}
        </Typography>

        <Typography
          sx={{
            color: '#d1d9e2',

            lineHeight: 1.7,

            fontSize: '1rem',
          }}
        >
          {Section.Text}
        </Typography>
      </Box>

      {/* MEDIA */}
      {Section.Media &&
       Section.Media.length > 0 && (
        <Box
          sx={{
            display: 'grid',

            gridTemplateColumns:
            {
              xs: '1fr',

              sm:
                Section.Media.length > 1
                  ? 'repeat(2, 1fr)'
                  : '1fr',
            },

            gap: 2,

            alignItems: 'start',
          }}
        >
          {Section.Media.map(
            (Media, Index) => (
              <Box
                key={Index}
              >

                {/* IMAGE */}
                {Media.Type ===
                  ProjectMediaType.Image && (
                  <Box
                    component="img"

                    src={Media.Source}

                    alt={
                      Media.Caption ??
                      `${Title} image`
                    }

                    sx={{
                      width: '100%',

                      height: '450px',

                      objectFit:
                        Media.Fit ??
                        'cover',

                      backgroundColor:
                        Media.Fit === 'contain'
                          ? '#ffffff'
                          : '#091827',

                      borderRadius: 2,

                      border:
                        '1px solid #17446d',

                      display: 'block',
                    }}
                  />
                )}

                {/* VIDEO */}
                {Media.Type ===
                  ProjectMediaType.Video && (
                  <Box
                    component="video"

                    src={Media.Source}

                    controls

                    sx={{
                      width: '100%',

                      height: '450px',

                      objectFit:
                        Media.Fit ??
                        'contain',

                      backgroundColor:
                        '#000',

                      borderRadius: 2,

                      border:
                        '1px solid #17446d',

                      display: 'block',
                    }}
                  />
                )}

                {/* CAPTION */}
                {Media.Caption && (
                  <Typography
                    sx={{
                      mt: 1,

                      color: '#94a6b8',

                      fontSize:
                        '0.85rem',

                      textAlign:
                        'center',
                    }}
                  >
                    {Media.Caption}
                  </Typography>
                )}

              </Box>
            )
          )}
        </Box>
      )}

    </Box>
  )
}

const NavigationArrowStyle =
{
  position: 'fixed',

  top: '50%',

  transform:
    'translateY(-50%)',

  zIndex: 15000,

  width:
  {
    xs: 42,
    md: 52,
  },

  height:
  {
    xs: 42,
    md: 52,
  },

  color: 'white',

  backgroundColor:
    'rgba(8, 25, 43, 0.9)',

  border:
    '1px solid #245f94',

  transition:
    'all 0.2s ease',

  '&:hover':
  {
    backgroundColor:
      '#123b61',

    transform:
      'translateY(-50%) scale(1.08)',
  },

  '&.Mui-disabled':
  {
    color:
      'rgba(255, 255, 255, 0.25)',

    backgroundColor:
      'rgba(8, 25, 43, 0.4)',

    borderColor:
      'rgba(36, 95, 148, 0.3)',
  },
}

const CardStyle =
{
  backgroundColor:
    'rgba(8, 25, 43, 0.9)',

  border:
    '1px solid #17446d',

  borderRadius: 3,

  p:
  {
    xs: 2.5,
    md: 3,
  },
}

const LinkButtonStyle =
{
  color: 'white',

  border:
    '1px solid #245f94',

  px: 2,

  py: 1,

  '&:hover':
  {
    backgroundColor:
      '#12304f',
  },
}

export default ProjectPage