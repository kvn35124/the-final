import config from '../config'


export const Query = (query: string, values?: any) => {
    return new Promise((resolve, reject) => {
        connection.query(query, values, (err, results) => {
            if(err) reject(err);
            resolve(results);
        })
    })
};