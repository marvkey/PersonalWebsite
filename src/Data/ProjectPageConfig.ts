export enum ProjectMediaType
{
  Image = 'image',
  Video = 'video',
}

export interface ProjectMedia
{
  Type: ProjectMediaType

  Source: string

  Caption?: string

  // Use "cover" for normal photos
  // Use "contain" for schematics, CAD, diagrams, etc.
  Fit?: 'cover' | 'contain'
}

export interface ProjectSection
{
  Text: string

  Media?: ProjectMedia[]
}

export interface ProjectPageSettings
{
  Title: string

  Date: string

  Technologies: string[]

  HeroImage: string

  GitHub?: string

  Documentation?: string

  Video?: string
  TestItOut?: string

  WhatILearned: string

  What: ProjectSection

  How: ProjectSection

  Why: ProjectSection

  Results: ProjectSection
}

export class ProjectPageConfig
{
  Title: string

  Date: string

  Technologies: string[]

  HeroImage: string

  GitHub?: string

  Documentation?: string

  Video?: string
  TestItOut?: string


  WhatILearned: string

  What: ProjectSection

  How: ProjectSection

  Why: ProjectSection

  Results: ProjectSection

  constructor(Settings: ProjectPageSettings)
  {
    this.Title = Settings.Title

    this.Date = Settings.Date

    this.Technologies = Settings.Technologies

    this.HeroImage = Settings.HeroImage

    this.GitHub = Settings.GitHub

    this.Documentation = Settings.Documentation
    this.TestItOut = Settings.TestItOut

    this.Video = Settings.Video

    this.WhatILearned = Settings.WhatILearned

    this.What = Settings.What

    this.How = Settings.How

    this.Why = Settings.Why

    this.Results = Settings.Results
  }
}