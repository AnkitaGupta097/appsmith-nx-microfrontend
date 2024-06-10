import useSyncGlobalRouter from 'apps/hero/src/hooks/useSyncGlobalRouter';
import { createMemoryRouter, Link, Outlet, RouterProvider } from 'react-router-dom';
import ContactChat from './ContactChat';
import ContactForm from './ContactForm';
import styles from "./ProductHero.module.css";

const ContactInfo =() => {
  return (<div>contact
    <div>
        <Link to="form">Contact Form</Link>
    </div>
    <div>
        <Link to="chat">Contact Chat</Link>
    </div>
    <div>
        <Link to="/">Return to Home</Link>
    </div>
    </div>);
};


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
    return (<RouterProvider router={router} />);
  };


export default Contact;
