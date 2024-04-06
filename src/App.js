import { useState } from "react";
import RecommendClothes from "./layouts/recommendClothes/recommendClothes";

function App() {
  const [value, setValue] = useState();
  const [temp, setTemp] = useState({
    온도: null,
    대기상태: "",
  });

  const handleChange = (e) => {
    //number로 형 변환
    setValue(+e.target.value);
  };

  const handleClick = () => {
    setTemp((prev) => ({
      ...prev,
      온도: value,
    }));
  };

  return (
    <div>
      <RecommendClothes temp={temp} />
      <input onChange={handleChange} />
      <button onClick={handleClick}>확인</button>
    </div>
  );
}

export default App;
