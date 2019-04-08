const redux = require('redux');
const {setSearchTextReducer,showCompletedReducer,addTodoReducer} = require('reducers');

export const configure = () => {
    const reducer = redux.combineReducers({
        searchText : setSearchTextReducer,
        showCompleted : showCompletedReducer,
        addTodo : addTodoReducer
    });
    const store = redux.createStore(reducer, redux.compose(
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));
    return store;
}