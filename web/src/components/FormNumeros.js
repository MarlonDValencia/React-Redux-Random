import React,{useState,useEffect} from 'react'
import { connect } from 'react-redux';
import { fetchRandomWithNum } from '../actions';
import { useSelector, useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

const FormNumeros = () => {
  const dispatch = useDispatch()
  const loading = useSelector((state) => (state.view.loading))
  const result = useSelector((state) => state.random.result.randomList)
    const [state, setState] = useState({
        num1:"0",
        num2:"5"
    });
    const [limite,setLimite] = useState(false)

    useEffect(() => {
      if (state) {
        dispatch(fetchRandomWithNum(state));
        setLimite(false)
      }
    }, [state])
  

    const onSubmit = (e) => {
      e.preventDefault();
    if(state.num1<=state.num2){
      setLimite(true)
      dispatch(fetchRandomWithNum(state));
      Swal.fire(
        'Resultado',
        `${result}`,
        'success'
      )
      dispatch(fetchRandomWithNum(state));
    }
    };

    return (
        <div className="container form-control">
          <br/>
        <form onSubmit={onSubmit}>
            <label className='label-text'>Limite inferior</label>
            <br/>
            <input className="form-control" type='number' min="0" max="100" defaultValue="0" onChange={(e) => setState({...state,num1: e.target.value})}/>
            <br/>
            <label className='label-text'>Limite superior</label>
            <br/>
            <input className="form-control" type='number' min="0" max="100" defaultValue="5" onChange={(e) => setState({...state,num2: e.target.value})}/>
            <br />
      <button className='btn btn-primary' type="submit" >
        Enviar
      </button>
    </form>
    </div>

    )
}
export default FormNumeros
