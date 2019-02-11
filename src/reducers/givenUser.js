export default function (state=null, action) {
    switch(action.type){
        case 'user_submit':
            return action.payload;
            break;
    }
    return state;
}