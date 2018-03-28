var expect = require('expect');
var actions = require('actions');

describe('Actions',() => {
    it('Should generate search text action',() => {
        var action = {
            type: 'SET_SEARCH_TEXT',
            searchText : 'Some search text'
        }
        var res = actions.setSearchText(action.searchText);
        expect(res).toEqual(action);
    });
    it('should generate add Todo action',() => {
        var action = {
            type:'ADD_TODO',
            text: 'Eat banana'
        }
        var res = actions.addTodo(action.text);
        expect(res).toEqual(action);
    });
});