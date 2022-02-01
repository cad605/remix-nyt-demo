export interface Article {
  section: string
  subsection: string
  title: string
  abstract: string
  url: string
  uri: string
  byline: string
  item_type: string
  updated_date: string
  created_date: string
  published_date: string
  material_type_facet: ''
  kicker: string
  des_facet: Array<string>
  org_facet: Array<string>
  per_facet: Array<string>
  geo_facet: Array<string>
  multimedia: Array<MultiMedia>
  short_url: string
}

export interface MultiMedia {
  url: string
  format: string
  height: number
  width: number
  type: string
  subtype: string
  caption: string
  copyright: string
}
