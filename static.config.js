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

    const articles = dataFiles.map((fileName) => yaml.load(`${DATA_PATH}/${fileName}`));

    const articleRoutes = articles.map((article) => {
      return {
        path: `/${article.permalink}`,
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
        path: '/articles',
        component: 'src/containers/Blog',
        getData: () => ({
          articles,
        }),
        children: articleRoutes,
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
      ...articleRoutes,
    ]
  },
}
