import presentation1 from '../../configurations/presentation1.json';
import presentation2 from '../../configurations/presentation2.json';

const initialState = {presentationName: presentation1};

let mainReducerController = (state=initialState, action) => {
  switch (action.type) {

    case 'OPEN_PRESENTATION_1': {
      return {
        ...state,
        presentationName: presentation1
      }
    }

    case 'OPEN_PRESENTATION_2': {
      return {
        ...state,
        presentationName: presentation2
      }
    }
  }
}

const mainReducer = (state=initialState, action) => {

  state = mainReducerController(state,action);

  return state;
}


export default mainReducer