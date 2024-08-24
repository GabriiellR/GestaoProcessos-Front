import { GetToken, SaveToken } from './SessionHelper';
import { Toast } from './SweetAlertHelper';

export default class RequestHelper {

    constructor() {
        this.urlPadrao = `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/api`;
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
        const headerApplicationJson = { "Content-Type": "application/json" };
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

        try {
            this.ExibirPreloader();

            const response = await fetch(this.url, this.getOptions());

            if (!response.ok) {
                throw new Error(`Erro ao realizar requisição ${response.status}: ${response.statusText}`);
            }

            const data = await response.json();
            return data;

        } catch (error) {
            Toast('error', error.message);
        } finally {
            this.RemoverPreloader();
        }
    }

    ExibirPreloader() {
        document.body.style.backgroundColor = '#fff';
        document.body.style.opacity = 0.7;
        document.body.style.pointerEvents = 'none';
        document.body.style.cursor = 'wait';
    }

    RemoverPreloader() {
        document.body.style.backgroundColor = 'transparent';
        document.body.style.opacity = 1;
        document.body.style.pointerEvents = 'auto';
        document.body.style.cursor = 'default';
    }
}