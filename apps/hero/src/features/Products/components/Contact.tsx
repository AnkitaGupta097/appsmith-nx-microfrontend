import useSyncGlobalRouter from '../../../hooks/useSyncGlobalRouter';
import { createMemoryRouter, Link, Outlet, RouterProvider } from 'react-router-dom';
import ContactChat from './ContactChat';
import ContactForm from './ContactForm';
import styles from "./ProductHero.module.css";
import { tinyemitter }   from '@mfe-monorepo/event-bus';
import React from 'react';

const ContactInfo =() => { 
  return (<div>contact
    <div>
        <Link to="form">Contact Form</Link>
    </div>
    <div>
        <Link to="chat">Contact Chat</Link>
    </div>
    <div>
        <button onClick={RouterToHost}> Return to Host </button>
    </div>
    </div>);
};

const RouterToHost = () => {
    tinyemitter.emit('navigateToHost', "event emitted from Contact");
     return <Outlet />
 }

const RouterHandler = () =>{
    useSyncGlobalRouter({basename: '/contact'});
    return <Outlet />
}

const router = createMemoryRouter(
    [
        {
            path: '/',
            element: <RouterHandler />,
            children: [
                {
                    index: true,
                    element: <ContactInfo />
                },
                {
                    path: 'form',
                    element: <ContactForm />
                },
                {
                    path: 'chat',
                    element: <ContactChat />
                }
            ]
        }
    ],
    { initialEntries: [location.pathname.replace('/contact','') || '/']}
);

const Contact =() => {
    tinyemitter.on('contact', function(arg1: any){
        console.log("Event Handled in Contact, Message from Use Cart is => ", arg1);
    });
    return (<RouterProvider router={router} />);
  };


export default Contact;
