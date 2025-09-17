import Greeting from "./components/Greeting";
import Card from "./components/Card";
import Counter from "./components/Counter";
import Logical from "./components/Logical";


function App() {


  const handleIncrease = () => {
    console.log("💢더하기 버튼 클릭!!")
  }

  return (
    <div className="App">
      <Logical />
      <Greeting username="김진아" />
      <Greeting username="박성혜" />
      <Greeting username="홍순민" />
      <Card />
      <Counter onIncreaseClick={handleIncrease}/>
      {/* 미션: 숫자가 5씩 증가하는 Counter 컴포넌트 만들기 */}
      <Counter step={5} onIncreaseClick={handleIncrease} />
    </div>
  );
}

export default App;
