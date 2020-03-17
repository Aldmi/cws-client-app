export default function GetMaxId(valuesWithId) {   
    const ids= valuesWithId.map(val => val.id);
    const maxId= Math.max(...ids);
    return maxId;
};