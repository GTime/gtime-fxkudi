import Layout from "../components/Layout";

const ApplicationEntry = ({ Component, pageProps }) => {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default ApplicationEntry;
