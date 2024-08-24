import { InputGroup, Form, Button, Row } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import FormBase from "./FormBase";
import { Toast } from "../../Helpers/SweetAlertHelper";
import RequestHelper from "../../Helpers/RequestHelper";
import { SaveToken } from "../../Helpers/SessionHelper";


export default (() => {

    const SalvarDados = async () => {

        const usuario = document.getElementById('usuario').value;
        const senha = document.getElementById('senha').value;

        const requestHelper = new RequestHelper()
            .usePost()
            .setUrl('administracao/auth')
            .setBody({ "login": usuario, "senha": senha })
            .useHeadersApplicationJson();

        const response = await requestHelper.build();

        if (!response || !response.data) {
            Toast('error', `Login ou senha inválidos.`);
            return;
        }

        Toast("success", "Login realizado com sucesso", (async () => {
            await SaveToken(response.data);
            window.location.href = "/";
        }));
    }

    return (<>
        <FormBase salvarDados={SalvarDados}
            elementos={
                [
                    <Row className="mb-3">
                        <InputGroup key={"usuario"} hasValidation>
                            <InputGroup.Text>Usuário</InputGroup.Text>
                            <Form.Control
                                required
                                placeholder="Usuário"
                                aria-label="usuario"
                                aria-describedby="usuario"
                                id="usuario"
                            />
                        </InputGroup>
                        <Form.Control.Feedback type="invalid"><small>Informe um usuário.</small></Form.Control.Feedback>
                    </Row>,

                    <Row className="mb-3">
                        <InputGroup key={"senha"} hasValidation>
                            <InputGroup.Text>Senha</InputGroup.Text>
                            <Form.Control
                                required
                                type="password"
                                placeholder="Senha"
                                aria-label="senha"
                                aria-describedby="senha"
                                id="senha"
                            />
                        </InputGroup>
                    </Row>,

                    <Button type="submit" variant="light">
                        <FontAwesomeIcon icon={faArrowCircleRight} /> Entrar</Button>
                ]
            } />

    </>)
});