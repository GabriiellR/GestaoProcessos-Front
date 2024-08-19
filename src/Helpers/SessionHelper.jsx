import { Toast } from "./SweetAlertHelper";

export function GetToken() {
    var token = localStorage.getItem('token');

    if (!token) {
        Toast('error', "Faça login e tente novamente", (() => {
            window.location.href = window.location.origin + "/login"
        }));
        return;
    }

    return token;
}

export function SaveToken(token) {
    localStorage.setItem("token", token);
}

export function ValidateToken() {

}

export function ParseJwt(token) {
    try {
        return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
        return null;
    }
}


// // COMPONENTE RESPONSAVEL POR REALIZAR OPERACOES REFERENTE AO TOKEN;
