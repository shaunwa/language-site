import axios from 'axios'
import yaml from 'yamljs'
import { promisify } from 'util'
import fs from 'fs'
const readdir = promisify(fs.readdir)

const DATA_PATH = 'data'

export default {
  getSiteData: () => ({
    title: 'React Static',
  }),
  getRoutes: async () => {
    const { data: posts } = await axios.get('https://jsonplaceholder.typicode.com/posts')

    // The real code
    const dataFiles = await readdir(DATA_PATH)

    const articleRoutes = dataFiles.map((fileName) => {
      const article = yaml.load(`${DATA_PATH}/${fileName}`)
      return {
        path: `/articles${article.permalink}`,
        component: 'src/containers/Article',
        getData: () => ({ article }),
      }
    })

    return [
      {
        path: '/',
        component: 'src/containers/Home',
      },
      {
        path: '/about',
        component: 'src/containers/About',
      },
      {
        path: '/blog',
        component: 'src/containers/Blog',
        getData: () => ({
          posts,
        }),
        children: posts.map((post) => ({
          path: `/post/${post.id}`,
          component: 'src/containers/Post',
          getData: () => ({
            post,
          }),
        })),
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
      ...articleRoutes,
    ]
  },
}
