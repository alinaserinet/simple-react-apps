import React, {useContext, useState} from 'react';

const AlertsStateContext = React.createContext();

export function useAlertsState() {
    const context = useContext(AlertsStateContext);
    return context;
}

export function AlertsProvider({children}) {
    const [alert, setAlert] = useState(null);

    function showAlert(value) {
        setAlert(value);
        setTimeout(() => {
            setAlert(null);
        },2000);
    }

    return (
        <AlertsStateContext.Provider value={{alert, showAlert}}>
            {children}
        </AlertsStateContext.Provider>
    )
}