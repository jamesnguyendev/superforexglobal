import Header from "../components/header";
import Footer from "../components/footer";

export default function RootLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
