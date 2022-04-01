const STATDATA = {
  totals: [
    { label: "Total Sales", value: 200000 },
    { label: "Monthly Sales", value: 10000 },
    { label: "Daily Sales", value: 30000 },
  ],
  recentSales: [
    { id: "0x1", name: "Samsung Z Flip", quantity: 1, price: 4500 },
    { id: "0x2", name: "iPhone x", quantity: 1, price: 6000 },
    { id: "0x3", name: "Infinix Hot 5", quantity: 1, price: 1500 },
    { id: "0x4", name: "Smart Sound System", quantity: 1, price: 6000 },
    { id: "0x5", name: "Kings Bed", quantity: 1, price: 2000 },
  ],
};

const IndexPage = () => {
  return (
    <main className="index">
      {STATDATA.totals.map((x, key) => (
        <div key={key} className="stat card">
          <div className="value">
            GHC{x.value.toLocaleString({ type: "currency" })}
          </div>
          <div className="label">{x.label}</div>
        </div>
      ))}

      {/* Recent Sale */}
      <div className="recent-sales card">
        <div className="card__header">
          <h2>Recent Sales</h2>
          <button>View All Sales</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {STATDATA.recentSales.map((x, key) => (
              <tr key={key} className="product">
                <td>{x.id}</td>
                <td>{x.name}</td>
                <td>{x.quantity}</td>
                <td>{x.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Styling */}
      <style jsx>{`
        .index {
          position: relative;
          background-color: rgb(250, 248, 243);
          padding: 50px;
          display: grid;
          grid-template-columns: repeat(
            auto-fit,
            minmax(calc((100% - 100px) / 3), 1fr)
          );
          grid-template-rows: repeat(3, 1fr);
          gap: 50px;
          height: 100vh;
        }

        .stat {
          display: grid;
          place-content: center;
        }

        .card {
          background-color: #fff;
          padding: 20px;
          border-radius: 20px;
        }

        .recent-sales {
          grid-column: 1/-1;
        }

        .value {
          font-size: 2rem;
        }

        table {
          width: 100%;
        }

        th, td {
          padding: 10px 0px;
        }

        th {
          text-align: left;
        }

        /* Responsiveness */
        @media (max-width: 1240px) {
          .recent-sales {
            grid-column: 2/-1;
            grid-row: 1/-1;
          }
        }

        @media (max-width: 900px) {
          .index {
            grid-template-columns: 1fr;
            grid-template-rows: auto;
          }
          .recent-sales {
            grid-column: auto;
            grid-row: auto;
          }
        }
      `}</style>
    </main>
  );
};

export default IndexPage;
