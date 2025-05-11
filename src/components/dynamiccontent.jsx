import React, { useState, useEffect } from 'react';

// 1. Evento onClick - Cambiar color del texto
function ButtonClickEvent() {
  const [color, setColor] = useState('black');

  const handleClick = () => {
    setColor(color === 'black' ? 'blue' : 'black'); // Cambia el color entre negro y azul
  };

  return (
    <div>
      <p style={{ color: color }}>Este es un texto que cambia de color</p>
      <button onClick={handleClick} className="btn btn-primary">
        Cambiar color
      </button>
    </div>
  );
}

// 2. Evento onChange - Mostrar texto ingresado
function InputChangeEvent() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value); // Actualiza el estado con el valor del input
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        className="form-control"
        placeholder="Escribe algo..."
      />
      <p>Texto ingresado: {inputValue}</p>
    </div>
  );
}

// 3. Evento onFocus - Cambiar borde de input
function FocusEvent() {
  const [focus, setFocus] = useState(false);

  const handleFocus = () => setFocus(true);
  const handleBlur = () => setFocus(false);

  return (
    <input
      type="text"
      className={`form-control ${focus ? 'border-primary' : ''}`}
      placeholder="Haz clic o enfócalo"
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );
}

// 4. Evento onSubmit - Validación de formulario
function FormSubmitEvent() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Nombre requerido';
    if (!formData.email) newErrors.email = 'Correo electrónico requerido';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Formulario enviado');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="form-control"
        />
        {errors.name && <div className="text-danger">{errors.name}</div>}
      </div>
      <div>
        <label>Correo electrónico:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="form-control"
        />
        {errors.email && <div className="text-danger">{errors.email}</div>}
      </div>
      <button type="submit" className="btn btn-primary">Enviar</button>
    </form>
  );
}

// 5. Evento onMouseOver - Cambiar opacidad de imagen
function MouseOverEvent() {
  const [opacity, setOpacity] = useState(1);

  const handleMouseOver = () => setOpacity(0.7); // Reduce la opacidad
  const handleMouseOut = () => setOpacity(1); // Restaura la opacidad

  return (
    <img
      src="https://via.placeholder.com/300"
      alt="Imagen"
      style={{ opacity }}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      className="img-fluid"
    />
  );
}

// 6. Evento onKeyUp - Mostrar texto en tiempo real
function KeyUpEvent() {
  const [inputValue, setInputValue] = useState('');

  const handleKeyUp = (e) => {
    setInputValue(e.target.value); // Actualiza el estado con el valor del input
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onKeyUp={handleKeyUp}
        className="form-control"
        placeholder="Escribe algo..."
      />
      <p>Texto ingresado: {inputValue}</p>
    </div>
  );
}

export default function DynamicContent() {
  return (
    <div>
      <ButtonClickEvent />
      <InputChangeEvent />
      <FocusEvent />
      <FormSubmitEvent />
      <MouseOverEvent />
      <KeyUpEvent />
    </div>
  );
}