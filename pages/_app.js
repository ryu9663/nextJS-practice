import NavBar from "../components/NavBar";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <NavBar />
      <Component {...pageProps} />
      <span>"하이하이"</span>
      <style jsx global>{`
        a {
          color: white;
        }
      `}</style>
    </div>
  );
}
