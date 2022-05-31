import * as prismic from '@prismicio/client'
import fetch from 'node-fetch'

const routes = [
  {
    type: 'page',
    path: '/:uid',
  },
]

const repoName = 'IgnewsMrc'
const endpoint = prismic.getEndpoint(repoName)
const client = prismic.createClient(endpoint, { routes, fetch })

const init = async () => {
  const pages = await client.getAllByType('page', {
    orderings: {
      field: 'document.first_publication_date',
      direction: 'desc',
    },
    lang: 'en-us',
  })
  console.log(pages)
}

init()