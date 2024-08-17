import { InputGroup, Form, Button, Row } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import FormBase from "./FormBase";

import RequestHelper from "../../Helpers/RequestHelper";
import SessionHelper from "../../Helpers/SessionHelper";


export default (() => {

    const SalvarDados = () => {
        const usuario = document.getElementById('usuario');
        const senha = document.getElementById('senha');

        const { response, loading, error } = new RequestHelper()
                                            .usePost()
                                            .setUrl('auth')
                                            .setBody({ "usuario": usuario, "senha": senha })
                                            .useHeadersApplicationJson()
                                            .build();
    }

    return (<>
        <FormBase salvarDados={SalvarDados}
            elementos={
                [
                    <Row className="mb-3">
                        <InputGroup key={"usuario"} hasValidation>
                            <InputGroup.Text id="usuario">Usuário</InputGroup.Text>
                            <Form.Control
                                required
                                placeholder="Usuário"
                                aria-label="usuario"
                                aria-describedby="usuario"
                            />
                        </InputGroup>
                        <Form.Control.Feedback type="invalid"><small>Informe um usuário.</small></Form.Control.Feedback>
                    </Row>,

                    <Row className="mb-3">
                        <InputGroup key={"senha"} hasValidation>
                            <InputGroup.Text id="usuario">Senha</InputGroup.Text>
                            <Form.Control
                                required
                                type="password"
                                placeholder="Senha"
                                aria-label="senha"
                                aria-describedby="senha"
                            />
                        </InputGroup>
                    </Row>,

                    <Button type="submit" variant="light">
                        <FontAwesomeIcon icon={faArrowCircleRight} /> Entrar</Button>
                ]
            } />

    </>)
});