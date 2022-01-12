import React, { useState, useEffect } from 'react'
import { fetchRandom } from '../actions';
import { useSelector, useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

const From = () => {
  const dispatch = useDispatch()
  const loading = useSelector((state) => (state.view.loading))
  const result = useSelector((state) => state.random.result.randomList)
  const [state, setState] = useState(false);

  useEffect(() => {
    if (state) {
      dispatch(fetchRandom(state));
      setState(false)
    }
  }, [state])

  const onSubmit = (e) => {
    setState(true)
    setState({ ...state, list: '' })
    e.preventDefault();
    dispatch(fetchRandom(state));
    Swal.fire(
      'Resultado',
      `${result}`,
      'success'
    )

  };
  return <div className='contenedor-from'>
    <form onSubmit={onSubmit}>
      <br />
      <div className="form-floating container">
        <textarea id="list" className='form-control'
          value={state.list}
          onChange={(e) => setState({ ...state, list: e.target.value })}></textarea>
        <label for="floatingTextarea">Ingrese una lista de palabras separadas por coma: </label>

        <br />
        <button type="submit" disabled={loading} className='btn btn-primary'>
          Enviar
        </button>
      </div>
    </form>
  </div>
}

export default From;
