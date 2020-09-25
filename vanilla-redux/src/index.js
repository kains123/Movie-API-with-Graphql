import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.getElementById("number");

number.innerText = 0;

//9. 이런식으로 변수를 써주는 이유는 string으로 사용하면, 잘못 쓸 우려가 많다. 
const ADD = "ADD";
const MINUS = "MINUS";

const countModifier = (count = 0, action) => {
  //8. 깔끔함을 위해 주로 swich문을 사용한다. 
  switch (action.type) {
    case "ADD":
      return count + 1;
    case "MINUS":
      return count - 1;
    default:
      return count;
  }
};
//6. return해주는 값이 그 값의 나중 state가 된다. 
//2. 저장할 장소를 생성하면 반드시 reducer를 만들어 주어야 한다. data를 변경하고 수정하는 역할을 한다. 
//3. count modifier랑 소통하기 위해서는 action을 이용해야한다. 

const onChange = () => {
  number.innerText = countStore.getState();
};

countStore.subscribe(onChange);
//7.subscribe는 어떤 변화가 생겼는지 알려주는 역할을 한다 subscribe는 변화가 생겼을 때, 계속 실행해주는 느낌?

const handleAdd = () => {
  countStore.dispatch({ type: ADD });
}

const handleMinus = () => {
  countStore.dispatch({ type: MINUS });
}
const constStore = createStore(countModifier);
//1.먼저 data를 저장할 장소를 생성한다. (createStore를 가져온다.)
//dispatch, subscribe, getState, replaceReducer, Symbol
//console.log(countStore.getState())와 같이 현재 상태를 출력해줄 수 있다. 
//4. dispatch를 이용하여 countModifier랑 소통해보자.
//5. countStore.dispatch({type: "HELLO"});
add.addEventListener("click", () => handleAdd);
minus.addEventListener("click", () => handleMinus);
//8.action은 무조건 type으로 설정해주어야한다.
