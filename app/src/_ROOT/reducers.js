import {combineReducers} from 'redux';

import PagesReducer from '../components/FaceBook/_Reducer';

const rootReducer = combineReducers({
  pages: PagesReducer
});

export default rootReducer;
