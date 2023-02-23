import { basename, extname } from 'path'

export const filename = (path: string) => basename(path, extname(path))