export var setSearchText = (searchText) => {
    return {
      type: 'SET_SEARCH_TEXT',
      searchText  
        };
    };
export var addTodo = (text) => {
    return { 
        type: 'ADD_TODO',
        text
    };
};