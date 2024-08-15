import React, { useState, useEffect, useCallback } from 'react';
import SweetAlerts from '../Helpers/SweetAlerts';

const RequestHelper = (props) => {
    const [error, setError] = useState(null);
    const [hasFetched, setHasFetched] = useState(false);

    const urlPadrao = `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}`;

    const handleDataFetched = useCallback((data) => {
        props.callbackReturn(data);
    }, [props.callbackReturn]);

    useEffect(() => {

        if (hasFetched) return;

        const fetchData = async () => {
            try {
                const myHeaders = new Headers();
                if (props.headers) {
                    props.headers.forEach((header) => {
                        myHeaders.append(header.key, header.value);
                    });
                }

                const requestOptions = {
                    method: props.method,
                    headers: myHeaders,
                };

                const response = await fetch(`${urlPadrao}/${props.url}`, requestOptions);

                if (!response || !response.ok) {
                    throw new Error(`Erro ao buscar os dados. - ${props.nome}`);
                }

                const data = await response.json();
                handleDataFetched(data);
                setHasFetched(true);

            } catch (error) {
                setError(error.message);
            }
        };

        fetchData();
    }, [props.method, props.url, props.headers, handleDataFetched, props.nome, hasFetched]); 

    return (
        <>
            {error && <SweetAlerts type="error" message={error} />}
        </>
    );
};

export default RequestHelper;
