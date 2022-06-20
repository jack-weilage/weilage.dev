export const wait = async (ms: number): Promise<void> => new Promise(resolve => setTimeout(resolve, ms))
export const defaults = <T>(input: object, defaults: T): T => ({ ...defaults, ...input })
export const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max)