
import './Login.css';
import FormLogin from "../../Componentes/Forms/FormLogin";
import ParticlesApp from '../../Componentes/Particles/ParticlesApp';

export default (() => {

    return (<>
        <ParticlesApp />
        <div className='wrapper-content'>
            <div className="content">
                <div className="login">
                    <div className="login-content">
                        <div className="titulo">LOGIN</div>
                        <FormLogin />
                    </div>
                </div>
            </div>
        </div>
    </>)
})