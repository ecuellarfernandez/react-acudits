const fetchData = async (url)=>{
    try{
        const res = await fetch(url, {headers:{'Accept':'application/json'}});
        const data = await res.json();
        return data;
    }catch(e){
        console.log(e);
    }
}

export default fetchData;