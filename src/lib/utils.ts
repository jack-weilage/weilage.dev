import { basename, extname } from 'node:path'

export const filename = (path: string) => basename(path, extname(path))
