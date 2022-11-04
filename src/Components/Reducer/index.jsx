export const ACTIONS = {
    Add_TODO: 'add',
    DELETE: 'delete',
    EDIT: 'edit',
    IS_DONE: 'toggle',
    SELECT_ALL: 'select',
    DONE_EDITED: 'edited',
}

export function reducer (todo,action) {
    switch (action.type) {
        case ACTIONS.Add_TODO:
            return [...todo, newTodo(action.payload.text)]
        case ACTIONS.IS_DONE:
            return todo.map(item=>{
                if(item.id === action.payload.id) {
                    return {...item, isCompleted: !item.isCompleted}
                }
                return item
            })
            case ACTIONS.DELETE:
                return todo.filter(item=>!item.isCompleted)
            case ACTIONS.EDIT:
                return todo.map(item=>{
                    if(item.id === action.payload.id) {
                        return {...item, isEditMode: !item.isEditMode}
                    }
                    return item
                })
             case ACTIONS.DONE_EDITED:
                return todo.map(item=>{
                    if(item.id === action.payload.id) {
                        if(action.payload.newText) {
                       return {...item, text:action.payload.newText}
                    }
                }
                    return item
                })
            case ACTIONS.SELECT_ALL:             
                return todo.map(item=>{
                   return {...item, isCompleted: !action.payload.checkedAll}
                })
            
            default:
                 return todo
    }

}

function newTodo (text) {
    return {text:text, id: Math.random(),isCompleted:false,isEditMode: false}
}