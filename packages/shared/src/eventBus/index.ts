import { EventBusEvents } from "./events";
import { Subscriber } from "./types";

class EventBus {
  private events: {
    [K in keyof EventBusEvents]?: Array<Subscriber<EventBusEvents[K]>>
  } = {}

  constructor() {
    if (typeof window !== 'undefined') {
      const global = window as any
      if (!global.__GLOBAL_EVENT_BUS__) {
        global.__GLOBAL_EVENT_BUS__ = this
      }
      return global.__GLOBAL_EVENT_BUS__
    }
  }

  on<T extends keyof EventBusEvents>(
    event: T,
    callback: Subscriber<EventBusEvents[T]>
  ): () => void {
    if (!this.events[event]) {
      this.events[event] = []
    }

    this.events[event]?.push(callback as Subscriber<any>)

    return () => this.off(event, callback)
  }

  off<T extends keyof EventBusEvents>(
    event: T,
    callback: Subscriber<EventBusEvents[T]>
  ): void {
    const subscribers = this.events[event]
    if (subscribers) {
      const index = subscribers.indexOf(callback as Subscriber<any>)
      if (index > -1) {
        subscribers.splice(index, 1)
      }
    }
  }

  emit<T extends keyof EventBusEvents>(
    event: T,
    payload: EventBusEvents[T]
  ): void {
    const subscribers = this.events[event]
    if (subscribers) {
      subscribers.forEach((callback) => {
        try {
          callback(payload)
        } catch (error) {
          console.error(`Error in event listener for "${String(event)}":`, error)
        }
      })
    }
  }

  clear(): void {
    this.events = {}
  }
}

export const eventBus = new EventBus()
