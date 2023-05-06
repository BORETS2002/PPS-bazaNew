// import ".// App.css";
import React, { useRef, useState } from "react";
import vektor from "../../assets/imgs/Vector.png";
import { Link, NavLink } from "react-router-dom";
export function UserPolis() {
  const ProfilName = useRef();
  const [file, setFile] = useState();
  const handleFileChange = (e) => {
    e.preventDefault();
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const postDataProfil = async () => {
    try {
      const formData = new FormData();
      formData.append("firstName", ProfilName.current.value);
      formData.append("file", file);

      const res = await fetch("", {
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

  const HandleOnClick = (e) => {
    e.preventDefault();
    postDataProfil();
  };

  return (
    <>
      <div className='section-one'>
        <div className='container'>
          <div className='section-one-nav'>
            <form className='userBox' onSubmit={(e) => HandleOnClick(e)}>
              <div className='file ms-2 me-2'>
                <img className='camera pe-5' src={vektor} alt='logo' />
                <label htmlFor='file'>
                  <input
                    accept='.jpg , .png'
                    className='file-import  '
                    name='file'
                    onChange={handleFileChange}
                    type='file'
                    required
                  />
                </label>
                <div className='text-center'>{file && `Yuklandi`}</div>
              </div>

              <input
                ref={ProfilName}
                required
                className='user-name'
                type='text'
                placeholder='ism familyangizni yozing'
              />
              <button className='Polisbutton' type='submit'>
                Yuborish
              </button>
            </form>
            {/* <NavLink className=' PolisExitLink  ' to='/'>
              <div className='exit'>
                <span className='text-center m-0 polisExitSpan'>X</span>
              </div>
            </NavLink> */}
          </div>
        </div>
      </div>
      <div className='section-two'>
        <div className='row mt-5'>
          <div className='points'>
            <div className='col-6'>
              <div className='point'>
                <h3 className='point-title'>0</h3>
              </div>
              <h3 className='text-center d-block mt-5 '>
                Bir kunlik to'plangan ball
              </h3>
            </div>
            <div className='col-6 '>
              <div className='point'>
                <h3 className='point-title'>1212</h3>
              </div>
              <h3 className='text-center d-block mt-5 '>
                Bir oylik to'plangan ball
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className='section-three'>
        <NavLink className='nav-link' href='##'>
          Bajarilgan ishlar
        </NavLink>
      </div>
    </>
  );
}
