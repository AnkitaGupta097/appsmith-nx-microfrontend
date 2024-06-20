import { Observable, Subscription } from 'rxjs';
import { EventTypes } from '../../EventTypes';
interface EventI {
    type: EventTypes;
    data?: any;
}
declare class EventBus {
    private static instance?;
    private events;
    private constructor();
    static getInstance(): EventBus;
    publish(event: EventI): void;
    subscribe(callback: any): Subscription;
    unsubscribe(subscription: Subscription): void;
    on<EventI>(eventType: EventTypes): Observable<EventI>;
}
declare const _default: EventBus;
export default _default;
