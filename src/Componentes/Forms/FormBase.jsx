import { useState } from "react";
import { Form } from "react-bootstrap"

export default ((props) => {

  const [validated, setValidated] = useState(false);

  const ValidarCampos = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
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