import { Subject, Observable, Subscription } from 'rxjs';
import { EventTypes } from '../../EventTypes';
import { filter, map } from 'rxjs/operators';

interface EventI {
  type: EventTypes;
  data?: any;
}

class EventBus {
  private static instance?: EventBus = undefined;
  private events: Subject<EventI>;

  private constructor() {
    this.events = new Subject();
  }

  public static getInstance(): EventBus {
    if (this.instance === undefined) {
      this.instance = new EventBus();
    }

    return this.instance;
  }

  publish(event: EventI) {
    this.events.next(event);
  }

  subscribe(callback: any): Subscription {
    return this.events.subscribe(callback)
  }

  unsubscribe(subscription: Subscription) {
    subscription.unsubscribe()
  }

  // Subscribe to events of a certain type
  on<EventI>(eventType: EventTypes): Observable<EventI> {
    return this.events.pipe(
      filter((event) => event.type === eventType),
      map((event) => event.data)
    );
  }
}

export default EventBus.getInstance()