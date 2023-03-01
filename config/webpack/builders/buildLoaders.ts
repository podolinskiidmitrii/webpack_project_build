import { buildBabelLoader } from '../loaders/buildBabelLoader'
import { buildCssLoaders } from '../loaders/buildCssLoaders'

export const buildLoaders = (options: any) => {
  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  }

  const tsxCodeBabelLoader = buildBabelLoader({ ...options, isTsx: true })
  const codeBabelLoader = buildBabelLoader({ ...options, isTsx: false })
  const cssLoaders = buildCssLoaders(options.isDev)

  return [fileLoader, codeBabelLoader, tsxCodeBabelLoader, cssLoaders]
}
