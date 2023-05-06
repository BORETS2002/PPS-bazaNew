import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import Kompyuterchi from "../../assets/imgs/kompyuterchi";
import "../BAZA-ADMIN/baza-admin.css";
function BazaAdmin({ setPPXbaza, PPxbaza }) {
  console.log(PPxbaza);
  const Familya = useRef();
  const ism = useRef();
  const Username = useRef();
  const Parolni = useRef();

  const postDataAdmin = async () => {
    try {
      const formData = new FormData();
      formData.append("name", ism.current.value);
      formData.append("lastName", Familya.current.value);
      formData.append("userName", Username.current.value);
      formData.append("password", Parolni.current.value);

      const res = await fetch("http://localhost:8081/api/auth/add", {
        method: "POST",
        headers: {
          Authorization: localStorage.getItem("tokenPPS"),
        },
        body: formData,
      });
    } catch (error) {
      console.log(error);
    }
  };

  function formADminSub(e) {
    e.preventDefault();
    postDataAdmin();
  }

  return (
    <>
      <div className='wrapperAdmin'>
        <div className='imgBox'>
          <Kompyuterchi />
        </div>
        <div className='inputBox'>
          <h2 className='TitleXodim'>Xodim qo'shish</h2>
          <form className='formAdmin' onSubmit={(e) => formADminSub(e)}>
            <input
              ref={ism}
              className='inputAdmin'
              type='text'
              placeholder='Ismni kiriting...'
            />
            <input
              ref={Familya}
              className='inputAdmin'
              type='text'
              placeholder='Familiyani kiriting...'
            />{" "}
            <input
              ref={Username}
              className='inputAdmin'
              type='text'
              placeholder='Username kiriting...'
            />{" "}
            <input
              ref={Parolni}
              className='inputAdmin'
              type='password'
              placeholder='Parolni kiriting...'
            />
            <button className='formYaratish' type='submit'>
              Yaratish
            </button>
          </form>
          <NavLink
            to={"BazaAdmin"}
            className='ppxBaza'
            onClick={() => setPPXbaza((PPxbaza = !PPxbaza))}
          >
            PPX BAZA
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default BazaAdmin;
