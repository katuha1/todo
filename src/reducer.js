export default function (state, action) {
    switch (action.type) {
        case 'addTodo':
            return [
                ...state,
                { id: Date.now(), title: action.payload, completed: false }
            ]

        case 'remove':
            return state.filter(el => el.id !== action.payload)

        case 'toggle':
            return state.map((el) => {
                if (el.id === action.payload) {
                    el.completed = !el.completed
                }
                return el
            })

        case 'edit':
            return state.map((el) => {
                if (el.id === action.payload.id) {
                    if (action.payload.title.match(/[^$]\S/)) {
                        el.title = action.payload.title
                    }
                }
                return el
            })

        default:
            return state;
    }
}