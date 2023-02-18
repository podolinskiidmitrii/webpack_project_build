export type BuildMode = 'production' | 'development'

export interface WebpackPaths {
    entry: string
    build: string
    html: string
    src: string
}

export interface BuildEnv{
    mode: BuildMode
    port: number
    apiUrl: string
}

export interface BuildOptions{
    mode:BuildMode
    paths:WebpackPaths
    isDev: boolean
    port: number

}