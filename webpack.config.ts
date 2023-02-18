import { createConfig } from "./config/webpack/createConfig"
import { BuildEnv, WebpackPaths } from "./config/webpack/types"
import path from 'path'

export default (env:BuildEnv) => {

    const mode = env?.mode || 'development'
    const isDev = mode === 'development'
    const port = env.port || 3000
    const paths:WebpackPaths = {
        entry:path.resolve(__dirname, 'src', 'index.tsx'),
        src:path.resolve(__dirname, 'src'),
        html:path.resolve(__dirname, 'public', 'index.html'),
        build:path.resolve(__dirname, 'dist'),
    }
    const options = {
        mode,
        port,
        paths,
        isDev
    }
    const config = createConfig(options)
    return config
}