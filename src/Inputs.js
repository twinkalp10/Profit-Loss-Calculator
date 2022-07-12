import React, { useRef } from "react";
import Result from "./Result";
import "./style.css";

const Inputs = () => {
  const inputBuy = useRef(null);
  const inputSell = useRef(null);
  const inputQuantity = useRef(null);
  const [formData, setFormData] = React.useState({
    sellingValue: "",
    buyingValue: "",
    quantityValue: "",
  });

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (isNaN(formData.buyingValue)) {
      alert("enter only numbers as a buy");
      inputBuy.current.focus();
      setFormData((prevData) => ({ ...prevData, buyingValue: "" }));
      return;
    }
    if (isNaN(formData.sellingValue)) {
      alert("enter only numbers as a sell");
      inputSell.current.focus();
      setFormData((prevData) => ({ ...prevData, sellingValue: "" }));
      return;
    }
    if (isNaN(formData.quantityValue)) {
      alert("enter only numbers as a quantity");
      inputQuantity.current.focus();
      setFormData((prevData) => ({ ...prevData, quantityValue: "" }));
      return;
    }
    if (Number(formData.buyingValue) === 0) {
      alert("buying value should be more than 0");
      inputBuy.current.focus();
      setFormData((prevData) => ({ ...prevData, buyingValue: "" }));
      return;
    }
    if (Number(formData.sellingValue) === 0) {
      alert("selling value should be more than 0");
      inputSell.current.focus();
      setFormData((prevData) => ({ ...prevData, sellingValue: "" }));
      return;
    }
    if (Number(formData.quantityValue) === 0) {
      alert("Quantity should be more than 0");
      inputQuantity.current.focus();
      setFormData((prevData) => ({ ...prevData, quantityValue: "" }));
      return;
    }
  }

  return (
    <main>
      <h2>Profit and Loss Calculator</h2>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="buyingValue" className="form--label">
          Cost Price:
        </label>
        <input
          type="text"
          required
          placeholder="buying price"
          name="buyingValue"
          id="buyingValue"
          ref={inputBuy}
          className="form--input"
          value={formData.buyingValue}
          onChange={(event) => handleChange(event)}
        />
        <label htmlFor="sellingValue" className="form--label">
          Selling Price:
        </label>
        <input
          type="text"
          required
          placeholder="selling price"
          name="sellingValue"
          id="sellingValue"
          ref={inputSell}
          className="form--input"
          value={formData.sellingValue}
          onChange={(event) => handleChange(event)}
        />

        <label htmlFor="quantityValue" className="form--label">
          Total Quantity:
        </label>
        <input
          type="text"
          required
          placeholder="quantity"
          name="quantityValue"
          id="quantityValue"
          className="form--input"
          value={formData.quantityValue}
          onChange={(event) => handleChange(event)}
        />

        <Result
          buy={formData.buyingValue}
          sell={formData.sellingValue}
          quantity={formData.quantityValue}
        />
      </form>
    </main>
  );
};

export default Inputs;
