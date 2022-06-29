import { useState } from 'react';
import PropTypes from 'prop-types';

function FormComponent(props) {
  const [title, setTitle] = useState('');
  const [offset, setOffset] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !offset) {
      return;
    }
    props.onAddItem({title, offset});
    setTitle('');
    setOffset('');
  };

  return (
    <form onSubmit={handleSubmit} className="form-wrapper">
      <div className="title-input_wrapper">
        <label htmlFor="titleId">Название</label>
        <input name="title" id="titleId"
               value={title}
               onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="offset-input_wrapper">
        <label htmlFor="offsetId">Временная зона</label>
        <input name="offset" id="offsetId"
               value={offset}
               onChange={(e) => setOffset(e.target.value)}
               placeholder="+/-07:00"
        />
      </div>
      <button type="submit">ОК</button>
    </form>
  )
}

export default FormComponent;

FormComponent.propTypes = {
  onAddItem: PropTypes.func.isRequired,
};
