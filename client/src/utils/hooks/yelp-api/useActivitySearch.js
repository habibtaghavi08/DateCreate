import {useState, useEffect} from 'react';
import * as api from './api'

function useActivitySearch(start_date, categories, radius, location, limit) {
    const [events, setEvents] = useState([]);
    const [amounteventResults, seteventAmountResults] = useState();
    const [searcheventParams, seteventSearchParams] = useState({start_date, categories, radius, location, limit});

    useEffect(() => {
        setEvents([]);
        const fetchData = async () => {
            try {
                const rawData = await api.get('/events', searcheventParams);
                const resp = await rawData.json();
                setEvents(resp.events);
                seteventAmountResults(resp.total);
            } catch (e) {
                console.error(e);
            }

        };
        fetchData();
    }, [searcheventParams]);
    return [events, amounteventResults, searcheventParams, seteventSearchParams];
};

export default useActivitySearch; 