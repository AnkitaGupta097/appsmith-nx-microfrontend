// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { eventBus, EventTypes } from '@mfe-monorepo/event-bus';

import NxWelcome from './nx-welcome';
import { useEffect } from 'react';



export function App() {

  useEffect(() => {
    // Subscribe to an event
    // const subscription = eventBus.on<string>(EventTypes.USER_LOGIN)
    //   .subscribe((data: any) => {
    //     // Perform actions in response to the event
    //     console.log("event listened in temp-mf", data)
    //   });



    // eventBus.publish({ type: EventTypes.USER_LOGOUT, data: { userName: "Ankita" } })



    return () => {
      // Clean up subscriptions
      // subscription.unsubscribe();
    };
  }, []);

  return (
    <div>
      <NxWelcome title="temp-mf" />
    </div>
  );
}

export default App;
