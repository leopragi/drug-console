import { eventChannel } from 'redux-saga'
import _ from 'lodash';

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

export function getSuperiorRole(role){
    switch(role){
        case 'admin':
        return 'endUser';
        case 'preceptor':
        return 'admin';
        case 'expert': case 'executive':
        return 'preceptor';
        default:
        return null;
    }    
}

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


export function searchByText(collection, text, exclude) {
    text = _.toLower(text);
    return _.filter(collection, function(object) {
      return _(object).omit(exclude).some(function(string) {
        return _(string).toLower().includes(text);
      });
    });
  }