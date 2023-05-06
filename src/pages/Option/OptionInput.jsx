import React from "react";
import Colleps from "../../components/colleps/Colleps";
import { Container } from "../../components/style/styleComponent";
import { Route, Routes } from "react-router-dom";
import { UserPolis } from "../PolisName/UserPolis";
import { RoyxatgaOlish } from "../../components/main/RoyxatgaOlish";
import Bayonamalar from "../bayonnomalar/Bayonamalar";
import Prof from "../prof/Prof";
import Qidiruvdagilar from "../qidiruvdagilar/Qidiruvdagilar";
import Qorovullari from "../qorovullari/Qorovullari";
import Bedaraklar from "../bedaraklar/Bedaraklar";
import Qurollar from "../qurollar/Qurollar";

const OptionInput = ({ setPPXbaza, PPxbaza }) => {
  return (
    <>
      <Container>
        <div className='d-flex'>
          <Colleps />

          <div className='w-100'>
            <Routes>
              <Route
                path='Polis-Name'
                element={
                  <UserPolis setPPXbaza={setPPXbaza} PPxbaza={PPxbaza} />
                }
              />
              <Route index path='/' element={<RoyxatgaOlish />} />
              <Route path='bayonnomalar' element={<Bayonamalar />} />
              <Route path='PROF' element={<Prof />} />
              <Route path='qidiruvdagilar' element={<Qidiruvdagilar />} />
              <Route path='bedaraklar' element={<Bedaraklar />} />
              <Route path='qorovullari' element={<Qorovullari />} />
              <Route path='qurollar' element={<Qurollar />} />
            </Routes>
          </div>
        </div>
      </Container>
    </>
  );
};

export default OptionInput;
