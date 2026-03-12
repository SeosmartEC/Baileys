declare module 'music-metadata' {
    export interface IAudioMetadata {
        format: {
            duration?: number
            sampleRate?: number
            numberOfChannels?: number
            bitrate?: number
            codec?: string
            container?: string
        }
        common: Record<string, unknown>
        quality: Record<string, unknown>
        native: Record<string, unknown>
    }

    export function parseBuffer(
        buffer: Buffer,
        mimeType?: string,
        options?: Record<string, unknown>
    ): Promise<IAudioMetadata>

    export function parseFile(
        filePath: string,
        options?: Record<string, unknown>
    ): Promise<IAudioMetadata>

    export function parseStream(
        stream: NodeJS.ReadableStream,
        mimeType?: string,
        options?: Record<string, unknown>
    ): Promise<IAudioMetadata>
}
