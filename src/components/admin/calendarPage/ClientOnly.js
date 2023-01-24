import React from "react";

//ERROR de rehibratación 
//https://github.com/mui/material-ui/issues/15073
const ClientOnly = ({ children, ...delegated }) => {

    const [hasMounted, setHasMounted] = React.useState(false);

    React.useEffect(() => {
        setHasMounted(true);
    }, []);

    if (!hasMounted) return null

    return (
        <React.Fragment {...delegated}>
            {children}
        </React.Fragment>
    );
}

export default ClientOnly