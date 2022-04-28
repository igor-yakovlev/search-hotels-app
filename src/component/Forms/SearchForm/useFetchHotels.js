import { useEffect, useState } from "react";


const API__HOTELS = 'https://engine.hotellook.com/api/v2/cache.json';


export function useFetchHotels(params) {
  const [data, setData] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      const url = new URL(`${API__HOTELS}`);

      if(params) {
        Object.entries(params).forEach(param => url.searchParams.append(...param))
        console.log(url);
        const response = await fetch(url.href, {method: 'GET'})
        .then(res => res.json());

        setData(response);
      }

    }

    fetchData()
  }, [params]);


  return data;
}

