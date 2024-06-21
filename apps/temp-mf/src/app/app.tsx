// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { eventBus, EventTypes } from '@mfe-monorepo/event-bus';

import NxWelcome from './nx-welcome';
import { useEffect } from 'react';



export function App() {

  useEffect(() => {

    eventBus.publish({ type: EventTypes.USER_LOGIN, data: { userName: "Ankita" } })

  }, []);

  return (
    <div>
      <NxWelcome title="temp-mf" />
    </div>
  );
}

export default App;
