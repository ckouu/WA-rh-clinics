import { useEffect, useState } from 'react'
import axios from 'axios';

export default function FetchCSVData() {
    const [csvData, setCsvData] = useState<{}[]>([]);

    useEffect(() => {
        fetchCSVData();
    }, []);

    const fetchCSVData = () => {
    const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSwKUfN0YkPJe4GPo3CDU_OTt_350S_HsDI6mAt0pEzuRIQi2A4s01S0RuMBcm4uCYLzjr2i8TUVC0k/pub?output=csv';

        axios.get(csvUrl)
            .then((response) => {
                const parsedCsvData = parseCSV(response.data);
                setCsvData(parsedCsvData);
                console.log(parsedCsvData);
            })
            .catch((error) => {
                console.error('Error fetching CSV data:', error);
            });
    }

    function parseCSV(csvText: string) {
        const rows = csvText.split(/\r?\n/);
        const headers = rows[0].split(',');
        const data = [];        
        for (let i = 1; i < rows.length; i++) {
            const rowData = rows[i].split(',');
            const rowObject: Record<string, any> = {};
            
            for (let j = 0; j < headers.length; j++) {
                const key = headers[j];

                if (key === "longitude" || key === "latitude") {
                    const numData = +rowData[j];
                    rowObject[key] = numData;
                } else if (key === "services") {
                    const services = rowData[j].split('/');
                    rowObject[key] = services;
                } else {
                    rowObject[key] = rowData[j];
                }
            }

            data.push(rowObject);
        }
        return data;
    }

    return csvData;

    
}