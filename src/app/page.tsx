import Header from "../app/Components/Header";
import Content from "../app/Components/Content";
import Footer from "../app/Components/Footer";
import "../app/CSS/global.css";
export default function Home() {
  return (
    <div className="layout">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
