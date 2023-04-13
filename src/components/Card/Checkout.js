import { useRef, useState } from "react";

import "./Checkout.css";
import Card from "./Card";

const isEmpty = (value) => value.trim() === "";

const Checkout = (props) => {
  const [didSubmit, setDidSubmit] = useState(false);
  const [check, setCheck] = useState(false);

  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    phoneNumber: true,
    email: true,
    pickUp: true,
    dropOff: true,
    date: true,
    time: true,
  });

  const nameInputRef = useRef();
  const phoneNumberInputRef = useRef();
  const emailInputRef = useRef();
  const pickUpInputRef = useRef();
  const dropOffInputRef = useRef();
  const dateInputRef = useRef();
  const timeInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredPhoneNumber = phoneNumberInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPickUpLocation = pickUpInputRef.current.value;
    const enteredDropOffLocation = dropOffInputRef.current.value;
    const enteredDate = dateInputRef.current.value;
    const enteredTime = timeInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredPhoneNumberIsValid = !isEmpty(enteredPhoneNumber);
    const enteredEmailIsValid = !isEmpty(enteredEmail);
    const enteredPickUpLocationIsValid = !isEmpty(enteredPickUpLocation);
    const enteredDropOffIsValid = !isEmpty(enteredDropOffLocation);
    const enteredDateIsValid = !isEmpty(enteredDate);
    const enteredTimeIsValid = !isEmpty(enteredTime);

    setFormInputsValidity({
      name: enteredNameIsValid,
      phoneNumber: enteredPhoneNumberIsValid,
      email: enteredEmailIsValid,
      pickUp: enteredPickUpLocationIsValid,
      dropOff: enteredDropOffIsValid,
      date: enteredDateIsValid,
      time: enteredTimeIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredNameIsValid &&
      enteredPhoneNumberIsValid &&
      enteredEmailIsValid &&
      enteredPickUpLocationIsValid &&
      enteredDropOffIsValid &&
      enteredDateIsValid &&
      enteredTimeIsValid;

    if (!formIsValid) {
      return;
    }
  };

  const onConfirmData = () => {
    setCheck(false);
    setDidSubmit(true);
  };

  const onCancel = () => {
    setCheck(true);
    setDidSubmit(false);
  };

  const didSubmitModalContent = (
    <div className="didSubmit">
      <p>Successfully sent the data!</p>
      <div className="action">
        <button type="button" className="close" onClick={onCancel}>
          Close
        </button>
      </div>
    </div>
  );

  const nameControlClasses = formInputsValidity.name
    ? "control"
    : "control invalid";

  const phoneNumberControlClasses = formInputsValidity.phoneNumber
    ? "control"
    : "control invalid";

  const emailControlClasses = formInputsValidity.email
    ? "control"
    : "control invalid";

  const pickUpControlClasses = formInputsValidity.pickUp
    ? "control"
    : "control invalid";
  const DropControlClasses = formInputsValidity.dropOff
    ? "control"
    : "control invalid";
  const dateControlClasses = formInputsValidity.date
    ? "control"
    : "control invalid";
  const timeControlClasses = formInputsValidity.time
    ? "control"
    : "control invalid";

  return (
    <>
      {!check && <div className="backdrop" />}
      <Card className="modal">
        {!check && (
          <div className="section__title">
            <h2 className="section__description">Book a Taxi</h2>
          </div>
        )}
        {didSubmit &&
          formInputsValidity.name &&
          formInputsValidity.phoneNumber &&
          formInputsValidity.email &&
          formInputsValidity.pickUp &&
          formInputsValidity.dropOff &&
          formInputsValidity.date &&
          formInputsValidity.time &&
          didSubmitModalContent}

        {!check && (
          <form className="form" onSubmit={confirmHandler}>
            <div className={nameControlClasses}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" ref={nameInputRef} />
              {!formInputsValidity.name && <p>Please enter a valid name!</p>}
            </div>
            <div className={phoneNumberControlClasses}>
              <label htmlFor="number">Phone Number</label>
              <input type="tel" id="number" ref={phoneNumberInputRef} />
              {!formInputsValidity.phoneNumber && (
                <p>Please enter a valid phone number!</p>
              )}
            </div>
            <div className={emailControlClasses}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" ref={emailInputRef} />
              {!formInputsValidity.email && (
                <p>Please enter a valid email (includes @)!</p>
              )}
            </div>
            <div className={pickUpControlClasses}>
              <label htmlFor="pickup">Pickup Location</label>
              <input type="text" id="pickup" ref={pickUpInputRef} />
              {!formInputsValidity.pickUp && (
                <p>Please enter a valid location!</p>
              )}
            </div>
            <div className={DropControlClasses}>
              <label htmlFor="drop">Drop-off location</label>
              <input type="text" id="drop" ref={dropOffInputRef} />
              {!formInputsValidity.dropOff && (
                <p>Please enter a valid location!</p>
              )}
            </div>
            <div className={dateControlClasses}>
              <label htmlFor="date">Date</label>
              <input type="date" id="date" ref={dateInputRef} />
              {!formInputsValidity.date && <p>Please enter a valid date!</p>}
            </div>
            <div className={timeControlClasses}>
              <label htmlFor="time">Time</label>
              <input type="time" id="time" ref={timeInputRef} />
              {!formInputsValidity.time && <p>Please enter a valid time!</p>}
            </div>
            <div>
              <textarea>Additional requirements</textarea>
            </div>

            <div className="actions">
              <button type="button" onClick={onCancel}>
                Cancel
              </button>
              <button className="submit" onClick={onConfirmData}>
                Confirm
              </button>
            </div>
          </form>
        )}
      </Card>
    </>
  );
};

export default Checkout;
