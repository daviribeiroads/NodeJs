import { randomUUID } from "node:crypto"

export class DatabaseMemory {
    #videos = new Map()

    list() {
        return Array.from(this.#videos.values())
    }

    create(videos) {
        const videoId = randomUUID()

        this.#videos.set(videoId, videos)
    }

    update(id, video) {
        this.#videos.set(id, videos)
    }

    delete(id) {
        this.#videos.delete(id)
    }
}