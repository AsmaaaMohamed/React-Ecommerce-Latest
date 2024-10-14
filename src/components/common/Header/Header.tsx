
import styles from "./styles.module.css";
import TopHeader from "./HeaderParts/TopHeader";
import MidHeader from "./HeaderParts/MidHeader";
import SearchHeader from "./HeaderParts/SearchHeader";
import MainMenu from "./HeaderParts/MainMenu";

const Header = () => {
  return (
    <div className={`relative ${styles.rtsHeaderOneAreaOne}`}>
      <TopHeader/>
      <MidHeader/>
      <SearchHeader/>
      <MainMenu/>
      
    </div>
  );
};

export default Header;
