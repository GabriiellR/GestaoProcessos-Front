import { InputGroup, Form, Button, Row } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import FormBase from "./FormBase";

import RequestHelper from "../../Helpers/RequestHelper";
import SessionHelper from "../../Helpers/SessionHelper";


export default (() => {

    const SalvarDados = () => {
        const usuario = document.getElementById('usuario').value;
        const senha = document.getElementById('senha').value;

        const response = new RequestHelper()
                             .usePost()
                             .setUrl('auth')
                             .setBody({ "usuario": usuario, "senha": senha })
                             .useHeadersApplicationJson()
                             .build();

        console.log(usuario);
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