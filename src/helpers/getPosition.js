function getPosition(){
    return new Promise((resolve, reject)=>{
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(position=>{
                const location = {
                    lat:position.coords.latitude,
                    lng:position.coords.longitude
                }
                resolve(location);
            }, err=>reject(err.message))
        }
    })
}

export default getPosition;