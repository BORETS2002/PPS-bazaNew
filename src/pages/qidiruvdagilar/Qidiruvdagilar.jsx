import React from "react";

import {
  Inputs,
  Selects,
  Textareas,
  Title,
} from "../../components/style/styleComponent";
import { useState, useRef } from "react";
import { Options } from "../../components/imputs/Imputs";

export default function Qidiruvdagilar() {
  function inputClickTwoo() {
    let eliNput = document.getElementById("organization_phones");
    eliNput.addEventListener("input", function (e) {
      let x = e.target.value
        .replace(/\D/g, "")
        .match(/(\d{0,3})(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})/);

      e.target.value =
        "+(" + x[1] + ") " + x[2] + "-" + x[3] + "-" + x[4] + "-" + x[5];
    });
  }
  const [PolisfingerBayonnomaQ, setPolisfingerBayonnomaQ] = useState();
  const [PolisFotosBayonnomaQ, setPolisFotosBayonnomaQ] = useState();

  function handleFilePolisFIngerQ(ev) {
    setPolisfingerBayonnomaQ(ev.target.files[0]);
  }
  function handleFilePolisFotoQ(etsa) {
    setPolisFotosBayonnomaQ(etsa.target.files[0]);
  }
  let PolisNameQidiruv = useRef();
  let PolisFirstNameQidir = useRef();
  let familyNameQidir = useRef();
  let phoneNumberQidir = useRef();
  let townQidir = useRef();
  let maxallaQidir = useRef();
  let locationQidir = useRef();
  let comment = useRef();

  const postDataQidiruv = async () => {
    try {
      const formData = new FormData();
      formData.append("firstName", PolisNameQidiruv.current.value);
      formData.append("lastName", PolisFirstNameQidir.current.value);
      formData.append("familyName", familyNameQidir.current.value);
      formData.append("phoneNumber", phoneNumberQidir.current.value);
      formData.append("town", townQidir.current.value);
      formData.append("maxalla", maxallaQidir.current.value);
      formData.append("location", locationQidir.current.value);
      formData.append("identifyMissingImages", PolisFotosBayonnomaQ);
      formData.append("identifyFingerPrint", PolisfingerBayonnomaQ);
      formData.append("comment", comment.current.value);

      const res = await fetch("http://localhost:8081/api/v1/addIdentify", {
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

  function ClickBotton(e) {
    e.preventDefault();
    postDataQidiruv();
    e.target.reset();
  }
  return (
    <div>
      <Title>
        <h2 className='pb-1 m-0 mb-3 mt-4'>Ushlangan qidiruvdagilar</h2>
      </Title>
      <div>
        <form onSubmit={(e) => ClickBotton(e)}>
          <div className='row'>
            <label className='col-4'>
              <span className='d-block pb-1'>Familiya</span>
              <Inputs
                ref={PolisFirstNameQidir}
                name='inputTextFirstName'
                required
              />
            </label>
            <label className='col-4'>
              <span className='d-block pb-1'>Ismi</span>
              <Inputs
                ref={PolisNameQidiruv}
                name='inputTextName'
                required
              ></Inputs>
            </label>
            <label className='col-4'>
              <span className='d-block pb-1  '>Otasini ismi</span>
              <Inputs
                required
                name='inputTextPolisPapa'
                ref={familyNameQidir}
              />
            </label>
          </div>

          <div className='mt-3 row'>
            <label className='col-4   '>
              <span className='d-block pb-1  '>Telefon raqami</span>
              <Inputs
                ref={phoneNumberQidir}
                onClick={() => inputClickTwoo()}
                className='input-heroTwoo '
                id='organization_phones'
                name='organization_phones'
                placeholder='(+998) 99-000-00-00'
                defaultValue='+998'
                minLength={7}
                type='tell'
                required
              />
            </label>

            <label className='col-2 pe-1 ' htmlFor='file-cvBarmoq'>
              <span className='d-block pb-1   '>Barmoq izi</span>

              <input
                onChange={(ev) => handleFilePolisFIngerQ(ev)}
                className='input-file-adminka'
                id='file-cvBarmoq'
                name='fileBarmoqQidiruv'
                type='file'
                // placeholder='file yuklang'
                style={{
                  display: "none",
                  width: "0",
                  height: "0",
                  fontSize: "14px",

                  padding: "0px",
                }}
              />

              <div
                className='Fayl-text '
                style={{
                  display: "block",
                  width: "100%",
                  textAlign: "center",
                  backgroundColor: "#F2F2F2",
                  border: "1px solid green",
                  borderRadius: "6px",
                  outline: "none",
                  padding: "8px 1px",
                  fontSize: "14px",
                }}
              >
                file yuklash
              </div>
            </label>
            <label className='col-2 ps-1 ' htmlFor='file-cvQidiruvFoto'>
              <span className='d-block pb-1  '>Rasm</span>
              <input
                onChange={(etsa) => handleFilePolisFotoQ(etsa)}
                className='input-file-adminka'
                id='file-cvQidiruvFoto'
                name='fileFotoQidiruv'
                type='file'
                // placeholder='file yuklang'
                style={{
                  display: "none",
                  width: "0",
                  height: "0",
                  fontSize: "14px",

                  padding: "0px",
                }}
              />

              <div
                className='Fayl-text '
                style={{
                  display: "block",
                  width: "100%",
                  textAlign: "center",
                  backgroundColor: "#F2F2F2",
                  border: "1px solid green",
                  borderRadius: "6px",
                  outline: "none",
                  padding: "8px 1px",
                  fontSize: "14px",
                }}
              >
                file yuklash
              </div>
            </label>
          </div>

          <div className='row mt-4'>
            <label className='col-4'>
              <span className='d-block pb-1  '>Voqea Joyi (tuman)</span>

              <Selects ref={townQidir} name='rental-option'>
                <option selected={true}>Jizzax sh</option>
              </Selects>
            </label>

            <label className='col-4'>
              <span className='d-block pb-1  '>Voqea Joyi (mahalla) </span>

              <Selects ref={maxallaQidir} name='rental-option'>
                <Options></Options>
              </Selects>
            </label>

            <label className='col-4'>
              <span className='d-block pb-1 '>
                Hudud haqida to'liq ma'lumot
              </span>

              <Inputs ref={locationQidir} required name='uy_manzil' />
            </label>
          </div>

          <div className='row mt-5 justify-content-center   align-items-center'>
            <label className='col-8'>
              <span className='d-block pb-1   '>Hodim xulosasi</span>
              <Textareas
                name='textAreaHulosa'
                ref={comment}
                required
              ></Textareas>
            </label>
            <button
              className='col-2'
              type='submit'
              style={{
                width: "120px",
                height: "40px",
                backgroundColor: "#F2F2F2",
                border: "1px solid green",
                borderRadius: "6px",
                outline: "none",
                fontSize: "14px",
                padding: "8px 2px",
              }}
            >
              <strong>Yuborish</strong>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
