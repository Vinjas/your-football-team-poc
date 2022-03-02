const getSpainTeams = (competitionID) => {
    const spainID = '2224';
    const URL = `https://api.football-data.org/v2/teams?areas=${spainID}`;
    const headers = { 
    'X-Auth-Token': '231b9d0a04bd43aab7cf199102889609' 
    };
    
    return fetch(URL, {
        method: 'get',
        headers: headers
    })
    .then((response) => response.json());
}

export default getSpainTeams;