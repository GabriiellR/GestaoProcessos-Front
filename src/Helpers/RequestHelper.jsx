import React, { useState, useEffect, useCallback } from 'react';
import SweetAlerts from './SweetAlertHelper';
import { GetToken, SaveToken } from './SessionHelper';

export default class RequestHelper {

    constructor() {
        this.urlPadrao = `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}`;
        this.url = '';
        this.method = '';
        this.headers = {};
        this.body = null
    }

    useGet() {
        this.setMethod("GET");
        return this;
    }

    usePost() {
        this.setMethod("POST");
        return this;
    }

    useDelete() {
        this.setMethod("DELETE");
        return this;
    }

    usePut() {
        this.setMethod("PUT");
        return this;
    }

    setMethod(method) {
        this.method = method;
        return this;
    }

    setUrl(url) {
        this.url = `${this.urlPadrao}/${url}`;
        return this;
    }

    useHeadersToken() {
        const token = GetToken();
        const headersToken = { "Authorization": `Bearer ${token}` };
        this.setHeaders(headersToken);
        return this;
    }

    useHeadersApplicationJson() {
        const headerApplicationJson = { "content-type": "Application/Json" };
        this.setHeaders(headerApplicationJson);
        return this;
    }

    setHeaders(headers) {
        this.headers = { ...this.headers, ...headers };
        return this;
    }

    setBody(body) {
        this.body = body;
        return this;
    }

    getOptions() {
        return {
            method: this.method,
            headers: this.headers,
            body: this.body ? JSON.stringify(this.body) : null,
        };
    }

    async build() {

        const response = await fetch(this.url, this.getOptions());

        if (!response || !response.data) {
            throw new Error(`Erro ao realizar a requisição`);
        }

        // const [data, setData] = useState(null);
        // const [loading, setLoading] = useState(true);
        // const [error, setError] = useState(null);

        // useEffect(() => {
        //     const fetchData = async () => {
        //         setLoading(true);
        //         try {
                   

        //             setData(result);
        //         } catch (error) {
        //             setError(error);
        //         } finally {
        //             setLoading(false);
        //         }
        //     };

        //     if (builder.url) {
        //         fetchData();
        //     }
        // }, [builder]);

        // return { data, loading, error };
    }
}