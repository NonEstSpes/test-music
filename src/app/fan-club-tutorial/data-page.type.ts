export interface DataPageType {
  header: string
  beforeImage: string
  afterImage: string
  button: string
  list?: ListPage
  passToImage: string
}

export interface ListPage {
  head: string
  body: string[]
}
