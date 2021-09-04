import HeaderContainer from "./components/header/HeaderContainer";
import './styles/fonts/fonts.css';
import './styles/main/main.css';
import BannerSwiper from "./components/banerSwiper/BannerSwiper";
import images from "./components/banerSwiper/data/images/images";
import GetInfoForm from "./components/getInfoForm/GetInfoForm";
function App() {
  return (
    <div className="App">
        <HeaderContainer/>
        <BannerSwiper images={images}/>
        <GetInfoForm/>
    </div>
  )
}

export default App;
