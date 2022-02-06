import Layout from "../components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <style jsx global>
        {`
          body {
            max-width: 520px;
            width: 100%;
            margin: 0 auto;
          }
        `}
      </style>
    </>
  );
}
