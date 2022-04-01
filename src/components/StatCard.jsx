const StatCard = () => {
  return (
    <div className="stat-card">
      <div className="value">200</div>
      <div className="label">Total Sale</div>

      {/* Sytling */}
      <style jsx>{`
        .stat-card {
          display: grid;
          place-content: center;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.16);
          height: 10vw;
        }
      `}</style>
    </div>
  );
};

export default StatCard;
