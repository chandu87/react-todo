var expect = require('expect');
var reducers = require('reducers');
var df = require('deep-freeze-strict');

describe('Reducers',() => {
    describe('serachTextReducer', () => {
        it('it should set searchtext',() => {
            var action = {
                type: 'SET_SEARCH_TEXT',
                searchText : 'dog'
            };
            var res = reducers.setSearchTextReducer(df(''),df(action));
            expect(res).toEqual(action.searchText);
        });
    });
    describe('showcompletedReducer',() => {
        it('should toggle completed',() => {
            var action = {
                type : 'TOGGLE_SHOW_COMPLETED'

            };
            var res = reducers.showCompletedReducer(false,action);
            expect(res).toEqual(true);
        });
    });
    describe('todos reducer',() => {
        it('should add new todo',() => {
            var action = { 
                type: 'ADD_TODO',
                text: 'walk the cat'
            };
            var res = reducers.addTodoReducer(df([]),df(action));

            expect(res.length).toEqual(1);
            expect(res[0].text).toEqual(action.text);
        });
        it('should toggle todo', () =>{
            let todos = [{
                id: '123',
                text:'sample text',
                completed:true,
                createdAt: 123,
                completedAt: 125
            }];
            const action = {
                type : 'TOGGLE_TODO',
                id : '123'
            };
            const res = reducers.addTodoReducer(df(todos), df(action));

            expect(res[0].completed).toEqual(false);
            expect(res[0].completedAt).toEqual(undefined);

        })
    });
});