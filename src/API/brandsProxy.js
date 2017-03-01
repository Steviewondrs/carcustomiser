const URL = 'https://car-api.firebaseio.com/rest.json';

export default async function fetchBrands() {
    try {
        let response = await fetch( URL, {
            method: 'GET',
            mode: 'no-cors',
            cache: 'default'
        });
        
        return response.json();
    } catch ( error ) {
        console.log( 'loading failed', error );
        throw new Error( error );
    }
}