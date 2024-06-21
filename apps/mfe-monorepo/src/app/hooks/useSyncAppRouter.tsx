import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
type RouteEvent = CustomEvent<string>;

const useSyncAppRouter = ({basepath} : {basepath: string}) => {
    const location = useLocation();
    const navigate = useNavigate();

    // const newPath = `${basename}${
    //     location.pathname === '/'? '': location.pathname
    // }`;

    useEffect(()=>{
        //window.dispatchEvent(new CustomEvent('shell' , {detail : location.pathname}));

        const appNavigated = ({detail}: RouteEvent)=>{
            if(detail === location.pathname){
                return;
            }
            navigate(detail);
        };

        window.addEventListener('app', appNavigated as EventListener);

        return () => {
            window.removeEventListener('app', appNavigated as EventListener);
        };
    }, [location, basepath, navigate]);


    useEffect(()=>{
        if(location.pathname.startsWith(basepath)){
            window.dispatchEvent(
                new CustomEvent('shell', { detail : location.pathname.replace(basepath,'')})
            );
        }
    }, [location, basepath])

    useEffect(() => {
        
		window.dispatchEvent(new CustomEvent('home' , {detail : "from home to contact"}));

        const shellNavigated = ({detail}: any)=>{
            console.log(" From contact ", detail)
        };

        window.addEventListener('contact', shellNavigated as EventListener);
		//eventBus.publish({ type: EventTypes.USER_LOGOUT, data: { userName: "Jai" } })
        // below line commited to portrait route navigation can be achieved using events, it can be deleted if not required
        navigate('/contact/form');
		return () => {
			window.removeEventListener('contact', shellNavigated as EventListener);
		};
	}, []);
};

export default useSyncAppRouter;
