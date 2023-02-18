import { buildBabelLoader } from "../loaders/buildBabelLoader"

export const buildLoaders = (options:any) => {
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

    return [
        fileLoader,
        codeBabelLoader,
        tsxCodeBabelLoader
    ]
}