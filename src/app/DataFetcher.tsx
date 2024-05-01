
async function DataFetcher(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        
        if (!response.ok){
            throw new Error('Problem during data fetching.')
        }
        const data = await response.json();
        return data;
    }
    catch (e) {
        console.error("Error encountered ", e);
    }
    
}

export default DataFetcher;
