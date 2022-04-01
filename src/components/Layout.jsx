import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      {children}
      {/* Sytling */}
      <style jsx>{`
        .layout {
          display: grid;
          grid-template-columns: 100px auto;
          width: 100%;
          height: 100vh;
        }
      `}</style>

      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        html {
          width: 100%;
          height: 100vh;
        }

        body {
          margin: 0;
          width: 100%;
          height: 100vh;
        }
      `}</style>
    </div>
  );
};

export default Layout;
