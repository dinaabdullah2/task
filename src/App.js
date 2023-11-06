import LoginForm from "./components/template/LoginForm";
import VideoPlayer from "./components/template/VideoPlayer";
import Footer from "./components/template/Footer";
import Navbar from "./components/template/Navbar";

function App() {
  return (
    <div className=" flex min-h-screen flex-col  md:bg-[url('./../src/assets/image/background.png')] gap-5 bg-no-repeat p-4  bg- md:p-12 background">
      <Navbar />
      <LoginForm />
      <Footer />
      <VideoPlayer />
    </div>
  );
}

export default App;
