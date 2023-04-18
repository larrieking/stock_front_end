import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [ stocks, setStocks ] = useState([]);

  useEffect(() => {
    const fetchata = async () => {


      const response = await fetch(
          'http://localhost:8081/api/stocks', {method: 'get', mode: 'no-cors', headers: {     "Content-Type": "application/json"   }});
      const data = await response.json();

      //use only 100 sample data
      setStocks( data.slice( 0,100) )

    }

    // Call the function
    fetchata();
  }, []);

  return (
      <div className="App">
        <h1>List of Stocks</h1>
        <table>
          <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>CURRENT PRICE</th>

            <th>CREATED DATE</th>
            <th>LAST MODIFIED DATE</th>
          </tr>
          </thead>
          <tbody>
          {
            stocks.map( (stock,key) =>
                <tr key={key}>
                  <td className='table-data'>{ stock.id}</td>
                  <td className='table-data'>{stock.name }</td>

                  <td className='table-data'>{ stock.currentPrice}</td>
                  <td className='table-data'>{stock.createdDate }</td>
                  <td className='table-data'>{stock.lastModifiedDate }</td>
                </tr>
            )
          }
          </tbody>
        </table>
      </div>
  );
}