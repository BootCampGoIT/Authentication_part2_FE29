import { combineReducers } from 'redux';
import tasks, { filter } from './todoReducer';
import loader from './loaderReducer';
import error from './errorReducer';
import auth from './authReducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage' 

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ["email", "token", "databaseId", "isAuth"],
  }

const rootReducer = combineReducers({
    auth: persistReducer(authPersistConfig, auth),
    tasks,
    filter,
    loader,
    error
})
export default rootReducer;