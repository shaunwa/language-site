import yaml from 'yamljs'
import { promisify } from 'util'
import fs from 'fs'
const readdir = promisify(fs.readdir)

const ARTICLES_PATH = 'data/articles';

export default {
  getSiteData: () => ({
    title: 'React Static',
  }),
  getRoutes: async () => {
    const dataFiles = await readdir(ARTICLES_PATH)

    const articles = dataFiles.map((fileName) => yaml.load(`${ARTICLES_PATH}/${fileName}`));
    const sortedArticles = articles.sort((one, two) => one.articleNumber < two.articleNumber);
    const articleRoutes = sortedArticles.map((article, index) => {
      const nextPath = index === 0 ? null : sortedArticles[index - 1].permalink;
      const previousPath = index === sortedArticles.length - 1 ? null : sortedArticles[index + 1].permalink;
      return {
        path: `/${article.permalink}`,
        component: 'src/packages/articles/Article',
        getData: () => ({
          article: {
            previousPath,
            nextPath,
            ...article,
          }
        }),
      }
    })

    return [
      {
        path: '/',
        component: 'src/packages/home/Home',
      },
      {
        path: '/conoceme',
        component: 'src/packages/about/About',
      },
      {
        path: '/contacta',
        component: 'src/packages/contact/Contact',
      },
      {
        path: '/articulos',
        component: 'src/packages/articles/ArticlesList',
        getData: () => ({
          articles,
        }),
        children: articleRoutes,
      },
      {
        is404: true,
        component: 'src/packages/404/404',
      },
      ...articleRoutes,
    ]
  },
}
