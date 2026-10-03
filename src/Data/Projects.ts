export enum ProjectCategory 
{
  Hardware = 'hardware',
  Software = 'software',
}
export interface Project {
  Name: string
  Slug: string // url-friendly version of the name, used for routing
  Category: ProjectCategory
}

const projects: Project[] = 
[
  {
    Name: 'RC Aircraft',
    Slug: 'rc-aircraft',
    Category: ProjectCategory.Hardware,
  },

  {
    Name: 'Raspberry Pi Arcade',
    Slug: 'raspberry-pi-arcade',
    Category: ProjectCategory.Hardware,
  },

  {
    Name: 'Game Engine',
    Slug: 'game-engine',
    Category: ProjectCategory.Software,
  },

  {
    Name: 'VEX Robotics',
    Slug: 'vex-robotics',
    Category: ProjectCategory.Hardware,
  },

  {
    Name: 'Crossy Bro',
    Slug: 'crossy-bro',
    Category: ProjectCategory.Software,
  },

  {
    Name: 'OrbitBreak',
    Slug: 'orbitbreak',
    Category: ProjectCategory.Software,
  },
]

class ProjectCatalog 
{
  GetAllProjects(): Project[] 
  {
    return projects
  }

  GetHardwareProjects(): Project[] 
  {
    return projects.filter
    (
      (project) => project.Category === ProjectCategory.Hardware
    )
  }

  GetSoftwareProjects(): Project[] 
  {
    return projects.filter
    (
      (project) => project.Category === ProjectCategory.Software
    )
  }

  GetProjectsByCategory(category: ProjectCategory): Project[] 
  {
    return projects.filter(
      (project) => project.Category === category
    )
  }

  GetProjectBySlug(slug: string): Project | undefined 
  {
    return projects.find(
      (project) => project.Slug === slug
    )
  }
}

export const projectCatalog = new ProjectCatalog()