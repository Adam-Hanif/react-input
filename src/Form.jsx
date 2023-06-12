import React from "react";
import { useState } from "react";

function Form() {
  const [value, setValue] = useState("");
  const [blur, setBlur] = useState(false);
  const [sended, setSended] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      console.log(value);
      setValue("");
      setBlur(false);
      setSended(true);
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
    setSended(false);
  };
  const handleBlur = () => {
    setBlur(true);
    setSended(false);
  };
  return (
    <div className="Form">
      <div className="block_input">
        <form className="form_input" onSubmit={handleSubmit}>
          <input
            className={!value && blur ? "is-error" : "input"}
            type="text"
            value={value}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <button
            className={!value ? "form_btn" : "button"}
            disabled={!value}
          >
            Отправить
          </button>
        </form>
        {!value && blur ? (
          <p style={{ color: "red", fontSize: "20px" }}>
            Поле ввода не должно быть пустым
          </p>
        ) : null}
        {sended ? (
          <p style={{ color: "green", fontSize: "20px" }}>
            Сообщение отправленно
          </p>
        ) : null}
      </div>
    </div>
  );
}

export default Form;
