import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
type RouteEvent = CustomEvent<string>;

const useSyncGlobalRouter = ({basename} : {basename: string}) => {
    const location = useLocation();
    const navigate = useNavigate();

    const newPath = `${basename}${
        location.pathname === '/'? '': location.pathname
    }`;

    useEffect(()=>{
        window.dispatchEvent(new CustomEvent('app' , {detail : newPath}));

        const shellNavigated = ({detail}: RouteEvent)=>{
            if(detail === location.pathname){
                return;
            }
            navigate(detail);
        };

        window.addEventListener('shell', shellNavigated as EventListener);

        return () => {
            window.removeEventListener('shell', shellNavigated as EventListener);
        };
    }, [location]);

    useEffect(()=>{
        
        window.dispatchEvent(new CustomEvent('contact' , {detail : "from Contact to Home"}));

        const shellNavigated = ({detail}: any)=>{
            console.log(" From Home ", detail)
        };

        window.addEventListener('home', shellNavigated as EventListener);

        return () => {
            window.removeEventListener('home', shellNavigated as EventListener);
        };
    }, []);
};

export default useSyncGlobalRouter;
