import {useState} from 'react';

const HOCCalculation = OriginalComponent => {
  function newComponent() {
    const [money, setMoney] = useState(10);
    const handelClick = () => {
      setMoney(money * 2);
    };
    return <OriginalComponent handelClick={handelClick} money={money} />;
  }
  return newComponent;
};

export default HOCCalculation;
