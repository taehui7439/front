import RecommendClothes from "./layouts/recommendClothes/recommendClothes";

function App() {
  const info = {
    성별: '남성',
    나이: '10대',
    체질: '평균',
    날씨: '봄',
    강수: false,
    미세먼지: true,
  }
  /*
  const [info, setInfo] = useState({
    성별: '남성',
    나이: '10대',
    체질: '평균',
    날씨: '봄',
    강수: false,
    미세먼지: true,
  });
  */

  return (
    <div>
      <RecommendClothes info={info} />
    </div>
  );
}

export default App;
