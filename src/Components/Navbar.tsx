import { useState } from 'react'

import {
  AppBar,
  Box,
  Button,
  Paper,
  Toolbar,
  Typography,
} from '@mui/material'

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'

import { projectCatalog } from '../Data/Projects'

interface NavbarProps
{
  DarkBackground?: boolean
}

function Navbar({ DarkBackground = false }: NavbarProps)
{
  const [ProjectsOpen, SetProjectsOpen] = useState(false)

  const [SubMenu, SetSubMenu] =
    useState<'hardware' | 'software' | null>(null)

  const HardwareProjects =
    projectCatalog.GetHardwareProjects()

  const SoftwareProjects =
    projectCatalog.GetSoftwareProjects()

  const HandleNavigate = (Section: string) =>
  {
    SetProjectsOpen(false)
    SetSubMenu(null)

    window.location.hash = Section
  }

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: 'transparent',

        px: {
          xs: 2,
          md: 5,
        },

        py: 1.5,

        zIndex: 20000,
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* Navigation - Left */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Button
            href="#about"
            sx={GetNavButtonStyle(DarkBackground)}
          >
            About Me
          </Button>

          <Button
            href="#skills"
            sx={GetNavButtonStyle(DarkBackground)}
          >
            Skills
          </Button>

          {/* Projects */}
          <Box
            onMouseEnter={() =>
            {
              SetProjectsOpen(true)
            }}

            onMouseLeave={() =>
            {
              SetProjectsOpen(false)
              SetSubMenu(null)
            }}

            sx={{
              position: 'relative',
            }}
          >
            <Button
              onClick={() =>
              {
                const FirstProject =
                  projectCatalog.GetAllProjects()[0]

                if (FirstProject)
                {
                  HandleNavigate(
                    FirstProject.Slug
                  )
                }
              }}

              sx={GetNavButtonStyle(DarkBackground)}
            >
              Projects
            </Button>

            {/* Main Dropdown */}
            {ProjectsOpen && (
              <Paper
                elevation={6}
                sx={{
                  position: 'absolute',

                  top: '100%',
                  left: 0,

                  width: '180px',

                  backgroundColor: '#0a1929',
                  color: 'white',

                  overflow: 'visible',

                  border: '1px solid #17385e',

                  borderRadius: 1,

                  zIndex: 20001,
                }}
              >
                {/* Hardware */}
                <Box
                  sx={{
                    position: 'relative',
                  }}

                  onMouseEnter={() =>
                  {
                    SetSubMenu('hardware')
                  }}
                >
                  <Box
                    onClick={() =>
                      HandleNavigate('hardware')
                    }

                    sx={DropdownItemStyle}
                  >
                    <Typography>
                      Hardware
                    </Typography>

                    <KeyboardArrowRightIcon />
                  </Box>

                  {SubMenu === 'hardware' && (
                    <Paper
                      elevation={6}
                      sx={{
                        position: 'absolute',

                        top: 0,
                        left: '100%',

                        width: '230px',

                        backgroundColor: '#0a1929',
                        color: 'white',

                        border: '1px solid #17385e',

                        borderRadius: 1,

                        zIndex: 20002,
                      }}
                    >
                      {HardwareProjects.map(
                        (Project) => (
                          <Box
                            key={Project.Slug}

                            onClick={() =>
                              HandleNavigate(
                                Project.Slug
                              )
                            }

                            sx={DropdownItemStyle}
                          >
                            <Typography>
                              {Project.Name}
                            </Typography>
                          </Box>
                        )
                      )}
                    </Paper>
                  )}
                </Box>

                {/* Software */}
                <Box
                  sx={{
                    position: 'relative',
                  }}

                  onMouseEnter={() =>
                  {
                    SetSubMenu('software')
                  }}
                >
                  <Box
                    onClick={() =>
                      HandleNavigate('software')
                    }

                    sx={DropdownItemStyle}
                  >
                    <Typography>
                      Software
                    </Typography>

                    <KeyboardArrowRightIcon />
                  </Box>

                  {SubMenu === 'software' && (
                    <Paper
                      elevation={6}
                      sx={{
                        position: 'absolute',

                        top: 0,
                        left: '100%',

                        width: '230px',

                        backgroundColor: '#0a1929',
                        color: 'white',

                        border: '1px solid #17385e',

                        borderRadius: 1,

                        zIndex: 20002,
                      }}
                    >
                      {SoftwareProjects.map(
                        (Project) => (
                          <Box
                            key={Project.Slug}

                            onClick={() =>
                              HandleNavigate(
                                Project.Slug
                              )
                            }

                            sx={DropdownItemStyle}
                          >
                            <Typography>
                              {Project.Name}
                            </Typography>
                          </Box>
                        )
                      )}
                    </Paper>
                  )}
                </Box>
              </Paper>
            )}
          </Box>

          {/* Contact */}
          <Button
            href="#contact"
            variant="contained"

            sx={{
              backgroundColor: '#fff',
              color: '#111',

              textTransform: 'none',

              fontWeight: 700,
              fontSize: '0.95rem',

              borderRadius: '24px',

              px: 2.8,
              py: 0.8,

              boxShadow:
                '0 2px 6px rgba(0,0,0,0.18)',

              '&:hover':
              {
                backgroundColor: '#f0f0f0',

                boxShadow:
                  '0 3px 8px rgba(0,0,0,0.22)',
              },
            }}
          >
            Contact Me
          </Button>
        </Box>

        {/* MN - Right */}
        <Typography
          variant="h6"
          onClick={() => HandleNavigate('')}
          sx={{
            fontWeight: 800,
            letterSpacing: 1,

            color: 'white',

            fontSize: '1.25rem',

            cursor: 'pointer',
          }}
        >
          MN
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

const GetNavButtonStyle = (DarkBackground: boolean) =>
({
  color:
    DarkBackground
      ? 'white'
      : '#111',

  textTransform: 'none',

  fontWeight: 700,

  fontSize: '1rem',

  px: 1.5,

  position: 'relative',

  '&::after':
  {
    content: '""',

    position: 'absolute',

    left: '50%',
    bottom: 2,

    width: 0,
    height: '2px',

    backgroundColor:
      DarkBackground
        ? 'white'
        : '#111',

    transform:
      'translateX(-50%)',

    transition:
      'width 0.2s ease',
  },

  '&:hover':
  {
    backgroundColor:
      'transparent',
  },

  '&:hover::after':
  {
    width: '70%',
  },
})

const DropdownItemStyle =
{
  display: 'flex',

  alignItems: 'center',
  justifyContent: 'space-between',

  minHeight: '48px',

  px: 2,
  py: 1,

  cursor: 'pointer',

  '&:hover':
  {
    backgroundColor: '#17385e',
  },
}

export default Navbar