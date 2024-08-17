import { useState } from "react";
import { Form } from "react-bootstrap"

export default ((props) => {

  const [validated, setValidated] = useState(false);

  const ValidarCampos = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();

    if (form.checkValidity() === false) {
      setValidated(true);
      return false;
    }

    props.salvarDados();
  };

  return (<>
    <Form noValidate validated={validated} onSubmit={ValidarCampos}>
      {props.elementos.map((elementos) => elementos)}
    </Form>
  </>
  )
})