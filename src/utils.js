function snapshotToList(snapshot){
    var result = [];
    snapshot.forEach(function(data){
        var _t = data.val();
        _t.id = data.key;
        result.push(_t);
    });
    return result;
}

export function firebaseReadFromRef(ref){
    return new Promise((resolve, reject) => {
        ref.on('value', (snapshot) => {
            if(snapshot){
                return resolve(snapshotToList(snapshot));
            }
            else{
                return reject(new Error("error !"))
            }
        })
    }) 
}