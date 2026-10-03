import { useEffect, useState } from 'react'

import './App.css'

import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import ProjectPage from './Components/ProjectPage'

import { RCAircraftPage } from './Data/ProjectPages/RCAircraft'
import { RaspberryPiArcadePage } from './Data/ProjectPages/RasperryPiArcade'
import { VexRoboticsPage } from './Data/ProjectPages/VexRobotics'
import { GameEnginePage } from './Data/ProjectPages/GameEngine'
import { CrossyBroPage } from './Data/ProjectPages/CrossyBro'
import { OrbitBreak } from './Data/ProjectPages/OrbitBreak'
import Contact from './Components/Contact'
import Skills from './Components/Skills'
import About from './Components/About'

function App()
{
  const GetCurrentPage = () =>
  {
    return window.location.hash.replace('#', '')
  }

  const [CurrentPage, SetCurrentPage] =
    useState(GetCurrentPage())

  useEffect(() =>
  {
    const HandleHashChange = () =>
    {
      SetCurrentPage(
        GetCurrentPage()
      )

      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }

    window.addEventListener(
      'hashchange',
      HandleHashChange
    )

    return () =>
    {
      window.removeEventListener(
        'hashchange',
        HandleHashChange
      )
    }
  }, [])

  const RenderPage = () =>
  {
    switch (CurrentPage)
    {
      case 'rc-aircraft':
      {
        return (
          <ProjectPage
            Data={RCAircraftPage}
            CurrentSlug="rc-aircraft"
          />
        )
      }

      case 'raspberry-pi-arcade':
      {
        return (
          <ProjectPage
            Data={RaspberryPiArcadePage}
            CurrentSlug="raspberry-pi-arcade"
          />
        )
      }

      case 'vex-robotics':
      {
        return (
          <ProjectPage
            Data={VexRoboticsPage}
            CurrentSlug="vex-robotics"
          />
        )
      }

      case 'crossy-bro':
      {
        return (
          <ProjectPage
            Data={CrossyBroPage}
            CurrentSlug="crossy-bro"
          />
        )
      }

      case 'game-engine':
      {
        return (
          <ProjectPage
            Data={GameEnginePage}
            CurrentSlug="game-engine"
          />
        )
      }
      case 'orbitbreak':
      {
        return (
          <ProjectPage
            Data={OrbitBreak}
            CurrentSlug="orbitbreak"
          />
        )
      }
      
      case 'contact':
      {
        return <Contact />
      }

      case 'skills':
      {
        return <Skills />
      }
      case 'about':
      {
        return <About />
      }
      default:
      {
        return <Hero />
      }
    }
  }
/*
  const IsProjectPage =
    CurrentPage === 'rc-aircraft' ||
    CurrentPage === 'raspberry-pi-arcade' ||
    CurrentPage === 'vex-robotics' ||
    CurrentPage === 'game-engine' ||
    CurrentPage === 'crossy-bro' ||
    CurrentPage === 'orbitbreak' ||
    CurrentPage === 'contact' ||
    CurrentPage === 'skills' ||
    CurrentPage === 'about'
*/
  return (
    <>
      <Navbar
        DarkBackground={true}
      />

      {RenderPage()}
    </>
  )
}
export default App  