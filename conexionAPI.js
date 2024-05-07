import React, { useState, useEffect } from 'react';
import axios from 'axios';

function datosAPI() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/datos');
                setData(response.data);
            } catch (error) {
                console.error('Error al recuperar los datos:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Datos de la API:</h1>
            <ul>
                {data.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default datosAPI;