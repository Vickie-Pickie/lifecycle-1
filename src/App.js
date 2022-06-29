import './App.css';
import FormComponent from './FormComponent';
import { useState} from 'react';
import ClockItem from './ClockItem';

function App() {
  const [clock, setClock] = useState([]);

  const handleAddItem = (item) => {
   setClock([...clock, {
     title: item.title,
     offset: item.offset,
   }]);
  };

  const handleDeleteItem = (item) => {
    const index = clock.indexOf(item);
    if (index === -1) {
      return;
    }

    const clockCopy = [...clock];
    clockCopy.splice(index, 1);
    setClock(clockCopy);
  };

  return (
    <div className="App">
      <FormComponent onAddItem={handleAddItem}/>
      <ul className="clocks-list">
        {
          clock.map((item, index) => <ClockItem item={item} key={index} onDelete={handleDeleteItem}/>)
        }
      </ul>
    </div>
  );
}

export default App;
