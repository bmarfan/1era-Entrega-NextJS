import Header from "../components/Productos/Header";

export default function RootLayout({ children }) {
    return (
      <>
          <Header/>
          {children}
      </>
    );
  }
  