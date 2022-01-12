

export const fetchRandom = (state) => (dispatch) => {

    dispatch({ type: "view-loading" });

    return fetch(`https://lista-random-ddh-bsr.herokuapp.com/r`, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(state) // body data type must match "Content-Type" header
    }).then(response => response.json())
      .then(json => {
          console.log(json);
          dispatch({ type: "random-result", data: json });
          dispatch({ type: "view-loaded" });
        dispatch(GetAll());
        })
}


export const fetchRandomWithNum = (state) => (dispatch) => {

    dispatch({ type: "view-loading" });

    console.log("hola",state);

    return fetch(`https://lista-random-ddh-bsr.herokuapp.com/r/withNum`, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(state) // body data type must match "Content-Type" header
    }).then(response => response.json())
      .then(json => {
          console.log(json);
          dispatch({ type: "random-result", data: json });
          dispatch({ type: "view-loaded" });
          dispatch(GetAll())
        })
}

export const GetAll = () => (dispatch) => {

    dispatch({ type: "view-loading" });

    return fetch(`https://lista-random-ddh-bsr.herokuapp.com/r`, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json())
      .then(json => {
          dispatch({ type: "random-result-all", data: json });
          dispatch({ type: "view-loaded" });
        })
}
