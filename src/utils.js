import { eventChannel } from 'redux-saga'

function snapshotToList(snapshot){
    var result = [];
    snapshot.forEach(function(data){
        var _t = data.val();
        _t.id = data.key;
        result.push(_t);
    });
    return result;
}

export function getSubordinateRole(role){
    switch(role){
        case 'admin':
        return ['preceptor'];
        case 'preceptor':
        return ['expert', 'executive'];
        default:
        return null;
    }
};

export function createEventChannel(ref, isList = true) {
    const listener = eventChannel(
        emit => {
            ref.on(
                'value', 
                snapshot => emit(isList ? snapshotToList(snapshot) : snapshot.val())
            );
            return () => ref.off(listener);
        }
    );
    return listener;
};