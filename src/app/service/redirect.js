
import { useNavigate } from 'react-router-dom';


function Redirect() {
    let navigate = useNavigate();
    return navigate('/senhas');
  };

export default Redirect;