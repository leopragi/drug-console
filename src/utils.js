function snapshotToList(snapshot){
    var result = [];
    snapshot.forEach(function(data){
        var _t = data.val();
        _t.id = data.key;
        result.push(_t);
    });
    return result;
}

export function firebaseReadFromRef(ref, isList = true){
    return new Promise((resolve, reject) => {
        ref.on('value', (snapshot) => {
            if(snapshot){
                return resolve(isList ? snapshotToList(snapshot) : snapshot.val());
            }
            else{
                return reject(new Error("error !"))
            }
        })
    }) 
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