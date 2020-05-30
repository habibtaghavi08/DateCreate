import {useState, useEffect} from 'react';
import * as api from './api'

function useActivitySearch(categories, radius, location) {
    const [activities, setActivity] = useState([]);
    const [amountActResults, setActAmountResults] = useState();
    const [searchActParams, setActSearchParams] = useState({categories, radius, location});

    useEffect(() => {
        setActivity([]);
        const fetchData = async () => {
            try {
                const rawData = await api.get('/businesses/search', searchActParams);
                const resp = await rawData.json();
                setActivity(resp.activities);
                setActAmountResults(resp.total);
            } catch (e) {
                console.error(e);
            }

        };
        fetchData();
    }, [searchActParams]);
    return [activities, amountActResults, searchActParams, setActSearchParams];
};

export default useActivitySearch; 