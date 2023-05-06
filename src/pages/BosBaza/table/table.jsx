import "../table/table.css";

import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditQalam from "../../../assets/imgs/editQalam";
const TableHeadQulda = [
  {
    id: 1,
    familya: "familya",
    ism: "ism",
    otasini_ismi: "otasini ismi",
    telefon: "telefon raqami",
    barmoqIzi: "barmoq izi",
    rasm: "rasm",
    TugilganSana: "tug'ilgan sana",
    voqeaJoyT: "voqea joyi shahar",
    voqeaJoyM: "voqea joyi mahalla",
    voqeaJoyTM: "voqea joyi",
    olibkelinganJoy: "olib kelingan joy",
    voqeaSababi: "voqea sababi",
    familyaG: "guvoh familyasi",
    ismG: "guvoh ismi",
    otasini_ismiG: "guvoh otasini ismi",
    telefonG: "guvoh telefon raqami",
    barmoqIziG: "guvoh barmoq izi",
    rasmG: "guvoh rasmi",
    Hulosa: "hodim hulosasi",
  },
  {
    id: 2,
    familya: "familya",
    ism: "ism",
    otasini_ismi: "otasini ismi",
    telefon: "telefon raqami",
    barmoqIzi: "barmoq izi",
    rasm: "rasm",
    TugilganSana: "tug'ilgan sana",
    olibkelinganJoy: "olib kelingan joy",
    tuzilganBayonnoma: "tuzilgan bayonnoma",
    Hulosa: "hodim hulosasi",
  },
  {
    id: 3,
    familya: "familya",
    ism: "ism",
    otasini_ismi: "otasini ismi",
    voqeaJoyT: "voqea joyi shahar",
    voqeaJoyM: "voqea joyi mahalla",
    voqeaJoyTM: "voqea joyi",
    telefon: "telefon raqami",

    Prof: "PROF da turuvchilar",
    Hulosa: "hodim hulosasi",
  },
  {
    id: 4,
    familya: "familya",
    ism: "ism",
    otasini_ismi: "otasini ismi",
    telefon: "telefon raqami",
    barmoqIzi: "barmoq izi",
    rasm: "rasm",
    voqeaJoyT: "voqea joyi shahar",
    voqeaJoyM: "voqea joyi mahalla",
    voqeaJoyTM: "voqea joyi",

    Hulosa: "hodim hulosasi",
  },
  {
    id: 5,
    familya: "familya",
    ism: "ism",
    otasini_ismi: "otasini ismi",
    telefon: "telefon raqami",
    barmoqIzi: "barmoq izi",
    rasm: "rasm",
    voqeaJoyT: "voqea joyi shahar",
    voqeaJoyM: "voqea joyi mahalla",
    voqeaJoyTM: "voqea joyi",
    Hulosa: "hodim hulosasi",
  },
  {
    id: 6,
    familya: "familya",
    ism: "ism",
    otasini_ismi: "otasini ismi",

    voqeaJoyT: "voqea joyi shahar",
    voqeaJoyM: "voqea joyi mahalla",
    voqeaJoyTM: "voqea joyi",
    telefon: "telefon raqami",

    Hulosa: "hodim hulosasi",
  },

  {
    id: 7,
    familya: "familya",
    ism: "ism",
    otasini_ismi: "otasini ismi",

    ovqurolMarkasi: "ov quroli markasi",
    telefon: "telefon raqami",
    qurolRaqami: "qurol raqami",
    voqeaJoyTM: "voqea joyi",

    Hulosa: "hodim hulosasi",
  },
];
const arry = [
  {
    id: 1,
    familya: "familya",
    ism: "ism",
    otasini_ismi: "otasini ismi",
    telefon: "telefon raqami",
    barmoqIzi: "barmoq izi",
    rasm: "rasm",
    TugilganSana: "tug'ilgan sana",
    voqeaJoyT: "voqea joyi shahar",
    voqeaJoyM: "voqea joyi mahalla",
    voqeaJoyTM: "voqea joyi",
    olibkelinganJoy: "olib kelingan joy",
    voqeaSababi: "voqea sababi",
    familyaG: "guvoh familyasi",
    ismG: "guvoh ismi",
    otasini_ismiG: "guvoh otasini ismi",
    telefonG: "guvoh telefon raqami",
    barmoqIziG: "guvoh barmoq izi",
    rasmG: "guvoh rasmi",
    Hulosa:
      "Men kim umid hulosani yozar ekanman bu ishni oz hohishm bilan bajarganimni tan olaman va bunga uzm rozi bo'lganman",
  },
  {
    id: 1,
    familya: "familya",
    ism: "ism",
    otasini_ismi: "otasini ismi",
    telefon: "telefon raqami",
    barmoqIzi: "barmoq izi",
    rasm: "rasm",
    TugilganSana: "tug'ilgan sana",
    voqeaJoyT: "voqea joyi shahar",
    voqeaJoyM: "voqea joyi mahalla",
    voqeaJoyTM: "voqea joyi",
    olibkelinganJoy: "olib kelingan joy",
    voqeaSababi: "voqea sababi",
    familyaG: "guvoh familyasi",
    ismG: "guvoh ismi",
    otasini_ismiG: "guvoh otasini ismi",
    telefonG: "guvoh telefon raqami",
    barmoqIziG: "guvoh barmoq izi",
    rasmG: "guvoh rasmi",
    Hulosa:
      "Men kim umid hulosani yozar ekanman bu ishni oz hohishm bilan bajarganimni tan olaman va bunga uzm rozi bo'lganman",
  },
  {
    id: 1,
    familya: "familya",
    ism: "ism",
    otasini_ismi: "otasini ismi",
    telefon: "telefon raqami",
    barmoqIzi: "barmoq izi",
    rasm: "rasm",
    TugilganSana: "tug'ilgan sana",
    voqeaJoyT: "voqea joyi shahar",
    voqeaJoyM: "voqea joyi mahalla",
    voqeaJoyTM: "voqea joyi",
    olibkelinganJoy: "olib kelingan joy",
    voqeaSababi: "voqea sababi",
    familyaG: "guvoh familyasi",
    ismG: "guvoh ismi",
    otasini_ismiG: "guvoh otasini ismi",
    telefonG: "guvoh telefon raqami",
    barmoqIziG: "guvoh barmoq izi",
    rasmG: "guvoh rasmi",
    Hulosa:
      "Men kim umid hulosani yozar ekanman bu ishni oz hohishm bilan bajarganimni tan olaman va bunga uzm rozi bo'lganman",
  },
  {
    id: 1,
    familya: "familya",
    ism: "ism",
    otasini_ismi: "otasini ismi",
    telefon: "telefon raqami",
    barmoqIzi: "barmoq izi",
    rasm: "rasm",
    TugilganSana: "tug'ilgan sana",
    voqeaJoyT: "voqea joyi shahar",
    voqeaJoyM: "voqea joyi mahalla",
    voqeaJoyTM: "voqea joyi",
    olibkelinganJoy: "olib kelingan joy",
    voqeaSababi: "voqea sababi",
    familyaG: "guvoh familyasi",
    ismG: "guvoh ismi",
    otasini_ismiG: "guvoh otasini ismi",
    telefonG: "guvoh telefon raqami",
    barmoqIziG: "guvoh barmoq izi",
    rasmG: "guvoh rasmi",
    Hulosa:
      "Men kim umid hulosani yozar ekanman bu ishni oz hohishm bilan bajarganimni tan olaman va bunga uzm rozi bo'lganman",
  },
  {
    id: 1,
    familya: "familya",
    ism: "ism",
    otasini_ismi: "otasini ismi",
    telefon: "telefon raqami",
    barmoqIzi: "barmoq izi",
    rasm: "rasm",
    TugilganSana: "tug'ilgan sana",
    voqeaJoyT: "voqea joyi shahar",
    voqeaJoyM: "voqea joyi mahalla",
    voqeaJoyTM: "voqea joyi",
    olibkelinganJoy: "olib kelingan joy",
    voqeaSababi: "voqea sababi",
    familyaG: "guvoh familyasi",
    ismG: "guvoh ismi",
    otasini_ismiG: "guvoh otasini ismi",
    telefonG: "guvoh telefon raqami",
    barmoqIziG: "guvoh barmoq izi",
    rasmG: "guvoh rasmi",
    Hulosa:
      "Men kim umid hulosani yozar ekanman bu ishni oz hohishm bilan bajarganimni tan olaman va bunga uzm rozi bo'lganman",
  },
  {
    id: 1,
    familya: "familya",
    ism: "ism",
    otasini_ismi: "otasini ismi",
    telefon: "telefon raqami",
    barmoqIzi: "barmoq izi",
    rasm: "rasm",
    TugilganSana: "tug'ilgan sana",
    voqeaJoyT: "voqea joyi shahar",
    voqeaJoyM: "voqea joyi mahalla",
    voqeaJoyTM: "voqea joyi",
    olibkelinganJoy: "olib kelingan joy",
    voqeaSababi: "voqea sababi",
    familyaG: "guvoh familyasi",
    ismG: "guvoh ismi",
    otasini_ismiG: "guvoh otasini ismi",
    telefonG: "guvoh telefon raqami",
    barmoqIziG: "guvoh barmoq izi",
    rasmG: "guvoh rasmi",
    Hulosa:
      "Men kim umid hulosani yozar ekanman bu ishni oz hohishm bilan bajarganimni tan olaman va bunga uzm rozi bo'lganman",
  },
  {
    id: 1,
    familya: "familya",
    ism: "ism",
    otasini_ismi: "otasini ismi",
    telefon: "telefon raqami",
    barmoqIzi: "barmoq izi",
    rasm: "rasm",
    TugilganSana: "tug'ilgan sana",
    voqeaJoyT: "voqea joyi shahar",
    voqeaJoyM: "voqea joyi mahalla",
    voqeaJoyTM: "voqea joyi",
    olibkelinganJoy: "olib kelingan joy",
    voqeaSababi: "voqea sababi",
    familyaG: "guvoh familyasi",
    ismG: "guvoh ismi",
    otasini_ismiG: "guvoh otasini ismi",
    telefonG: "guvoh telefon raqami",
    barmoqIziG: "guvoh barmoq izi",
    rasmG: "guvoh rasmi",
    Hulosa:
      "Men kim umid hulosani yozar ekanman bu ishni oz hohishm bilan bajarganimni tan olaman va bunga uzm rozi bo'lganman",
  },
  {
    id: 1,
    familya: "familya",
    ism: "ism",
    otasini_ismi: "otasini ismi",
    telefon: "telefon raqami",
    barmoqIzi: "barmoq izi",
    rasm: "rasm",
    TugilganSana: "tug'ilgan sana",
    voqeaJoyT: "voqea joyi shahar",
    voqeaJoyM: "voqea joyi mahalla",
    voqeaJoyTM: "voqea joyi",
    olibkelinganJoy: "olib kelingan joy",
    voqeaSababi: "voqea sababi",
    familyaG: "guvoh familyasi",
    ismG: "guvoh ismi",
    otasini_ismiG: "guvoh otasini ismi",
    telefonG: "guvoh telefon raqami",
    barmoqIziG: "guvoh barmoq izi",
    rasmG: "guvoh rasmi",
    Hulosa:
      "Men kim umid hulosani yozar ekanman bu ishni oz hohishm bilan bajarganimni tan olaman va bunga uzm rozi bo'lganman",
  },

  {
    id: 1,
    familya: "familya",
    ism: "ism",
    otasini_ismi: "otasini ismi",
    telefon: "telefon raqami",
    barmoqIzi: "barmoq izi",
    rasm: "rasm",
    TugilganSana: "tug'ilgan sana",
    voqeaJoyT: "voqea joyi shahar",
    voqeaJoyM: "voqea joyi mahalla",
    voqeaJoyTM: "voqea joyi",
    olibkelinganJoy: "olib kelingan joy",
    voqeaSababi: "voqea sababi",
    familyaG: "guvoh familyasi",
    ismG: "guvoh ismi",
    otasini_ismiG: "guvoh otasini ismi",
    telefonG: "guvoh telefon raqami",
    barmoqIziG: "guvoh barmoq izi",
    rasmG: "guvoh rasmi",
    Hulosa:
      "Men kim umid hulosani yozar ekanman bu ishni oz hohishm bilan bajarganimni tan olaman va bunga uzm rozi bo'lganman",
  },
  {
    id: 1,
    familya: "familya",
    ism: "ism",
    otasini_ismi: "otasini ismi",
    telefon: "telefon raqami",
    barmoqIzi: "barmoq izi",
    rasm: "rasm",
    TugilganSana: "tug'ilgan sana",
    voqeaJoyT: "voqea joyi shahar",
    voqeaJoyM: "voqea joyi mahalla",
    voqeaJoyTM: "voqea joyi",
    olibkelinganJoy: "olib kelingan joy",
    voqeaSababi: "voqea sababi",
    familyaG: "guvoh familyasi",
    ismG: "guvoh ismi",
    otasini_ismiG: "guvoh otasini ismi",
    telefonG: "guvoh telefon raqami",
    barmoqIziG: "guvoh barmoq izi",
    rasmG: "guvoh rasmi",
    Hulosa:
      "Men kim umid hulosani yozar ekanman bu ishni oz hohishm bilan bajarganimni tan olaman va bunga uzm rozi bo'lganman",
  },
  {
    id: 1,
    familya: "familya",
    ism: "ism",
    otasini_ismi: "otasini ismi",
    telefon: "telefon raqami",
    barmoqIzi: "barmoq izi",
    rasm: "rasm",
    TugilganSana: "tug'ilgan sana",
    voqeaJoyT: "voqea joyi shahar",
    voqeaJoyM: "voqea joyi mahalla",
    voqeaJoyTM: "voqea joyi",
    olibkelinganJoy: "olib kelingan joy",
    voqeaSababi: "voqea sababi",
    familyaG: "guvoh familyasi",
    ismG: "guvoh ismi",
    otasini_ismiG: "guvoh otasini ismi",
    telefonG: "guvoh telefon raqami",
    barmoqIziG: "guvoh barmoq izi",
    rasmG: "guvoh rasmi",
    Hulosa:
      "Men kim umid hulosani yozar ekanman bu ishni oz hohishm bilan bajarganimni tan olaman va bunga uzm rozi bo'lganman",
  },
  {
    id: 1,
    familya: "familya",
    ism: "ism",
    otasini_ismi: "otasini ismi",
    telefon: "telefon raqami",
    barmoqIzi: "barmoq izi",
    rasm: "rasm",
    TugilganSana: "tug'ilgan sana",
    voqeaJoyT: "voqea joyi shahar",
    voqeaJoyM: "voqea joyi mahalla",
    voqeaJoyTM: "voqea joyi",
    olibkelinganJoy: "olib kelingan joy",
    voqeaSababi: "voqea sababi",
    familyaG: "guvoh familyasi",
    ismG: "guvoh ismi",
    otasini_ismiG: "guvoh otasini ismi",
    telefonG: "guvoh telefon raqami",
    barmoqIziG: "guvoh barmoq izi",
    rasmG: "guvoh rasmi",
    Hulosa:
      "Men kim umid hulosani yozar ekanman bu ishni oz hohishm bilan bajarganimni tan olaman va bunga uzm rozi bo'lganman",
  },
];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    minWidth: "180px",
    backgroundColor: "#61A6F0",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    // fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    // backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child  , &:last-child  ": {
    border: 0,
  },
}));

function functionModal() {
  console.log("aaa");
}

function Tables({ SelectKategory }) {
  console.log(SelectKategory);

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 1700 }} aria-label='customized table'>
          <TableHead>
            <TableRow>
              {TableHeadQulda.map((item) => {
                if (SelectKategory == 1 && SelectKategory == item.id) {
                  return (
                    <>
                      <StyledTableCell className='editHeader'>
                        edite
                      </StyledTableCell>
                      <StyledTableCell align='center'>
                        {" "}
                        {item.familya}
                      </StyledTableCell>
                      <StyledTableCell align='center'>
                        {" "}
                        {item?.ism}
                      </StyledTableCell>
                      <StyledTableCell align='center'>
                        {item?.otasini_ismi}
                      </StyledTableCell>
                      <StyledTableCell align='center'>
                        {item?.barmoqIzi}
                      </StyledTableCell>
                      <StyledTableCell align='center'>
                        {item?.rasm}{" "}
                      </StyledTableCell>
                      <StyledTableCell align='center'>
                        {item?.TugilganSana}{" "}
                      </StyledTableCell>
                      <StyledTableCell align='center'>
                        {item?.voqeaJoyT}
                      </StyledTableCell>
                      <StyledTableCell align='center'>
                        {item?.voqeaJoyM}{" "}
                      </StyledTableCell>
                      <StyledTableCell align='center'>
                        {item?.voqeaJoyTM}{" "}
                      </StyledTableCell>
                      <StyledTableCell align='center'>
                        {item?.olibkelinganJoy}{" "}
                      </StyledTableCell>

                      <StyledTableCell align='center'>
                        {item?.familyaG}{" "}
                      </StyledTableCell>

                      <StyledTableCell align='center'>
                        {item?.ismG}
                      </StyledTableCell>
                      <StyledTableCell align='center'>
                        {item?.otasini_ismiG}
                      </StyledTableCell>
                      <StyledTableCell align='center'>
                        {item?.telefonG}
                      </StyledTableCell>
                      <StyledTableCell align='center'>
                        {item?.barmoqIziG}
                      </StyledTableCell>
                      <StyledTableCell align='center'>
                        {item?.rasmG}
                      </StyledTableCell>
                      <StyledTableCell align='center'>
                        {item?.Hulosa}
                      </StyledTableCell>
                    </>
                  );
                }
              })}
            </TableRow>
          </TableHead>
          <TableBody className='TableRowScrol'>
            {arry.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell align='center'>
                  <button onClick={() => functionModal()} className='editBaza'>
                    <EditQalam />
                  </button>
                </StyledTableCell>
                <StyledTableCell align='center'>{row.ism}</StyledTableCell>
                <StyledTableCell align='center'>
                  {" "}
                  {row.otasini_ismi}{" "}
                </StyledTableCell>
                <StyledTableCell align='center'>{row.telefon}</StyledTableCell>
                <StyledTableCell align='center'>
                  {/* {row.rasm} */}
                  <a className=' DounloadFile' href='fileLink' download>
                    yuklash
                  </a>{" "}
                </StyledTableCell>
                <StyledTableCell align='center'>
                  {" "}
                  <a className=' DounloadFile' href='fileLink' download>
                    yuklash
                  </a>{" "}
                  {/* {row.barmoqIzi}{" "} */}
                </StyledTableCell>
                <StyledTableCell align='center'>
                  {" "}
                  {row.voqeaJoyT}{" "}
                </StyledTableCell>
                <StyledTableCell align='center'>
                  {" "}
                  {row.voqeaJoyM}{" "}
                </StyledTableCell>
                <StyledTableCell align='center'>
                  {" "}
                  {row.voqeaJoyTM}
                </StyledTableCell>{" "}
                <StyledTableCell align='center'>
                  {" "}
                  {row.olibkelinganJoy}{" "}
                </StyledTableCell>{" "}
                <StyledTableCell align='center'>
                  {row.voqeaSababi}{" "}
                </StyledTableCell>{" "}
                <StyledTableCell align='center'>{row.familyaG}</StyledTableCell>{" "}
                <StyledTableCell align='center'>{row.ismG}</StyledTableCell>{" "}
                <StyledTableCell align='center'>
                  {" "}
                  {row.otasini_ismiG}{" "}
                </StyledTableCell>{" "}
                <StyledTableCell align='center'>{row.telefonG}</StyledTableCell>{" "}
                <StyledTableCell align='center'>
                  {/* {row.barmoqIziG}{" "} */}
                  <a className=' DounloadFile' href='fileLink' download>
                    yuklash
                  </a>{" "}
                </StyledTableCell>
                <StyledTableCell align='center'>
                  {" "}
                  <a className=' DounloadFile' href='fileLink' download>
                    yuklash
                  </a>{" "}
                </StyledTableCell>
                <StyledTableCell align='center'>
                  <span className='HodimHulosaspan'> {row.Hulosa}</span>{" "}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );

  // if (SelectKategory == 1) {
  //   const Tab = document.querySelector(".tables");
  //   // Tab.classList.add("tablesGuvoh");
  //   console.log(Tab);
  // } else {
  //   const Tab = document.querySelector(".tables");

  //   // Tab.classList.remove("tablesGuvoh");
  // }

  // return (
  //   <div className='base-table'>
  //     <div className='bodyHead'>
  //       <div className='list-unstyled p-0 m-0 d-flex mt-5'>
  //         <table className='tables '>
  //           {TableHead.map((item) => {
  //             if (SelectKategory == 1 && SelectKategory == item.id) {
  //               return (
  //                 <>
  //                   <thead>
  //                     <tr>
  //                       <th className='headerTableTitle'>edite</th>

  //                       <th className='headerTableTitle'>{item?.familya}</th>
  //                       <th className='headerTableTitle'>{item?.ism}</th>
  //                       <th className='headerTableTitle'>
  //                         {item?.otasini_ismi}
  //                       </th>
  //                       <th className='headerTableTitle'>{item?.otasini_ismi}{item?.otasini_ismi}</th>
  //                       <th className='headerTableTitle'>{item?.barmoqIzi}</th>
  //                       <th className='headerTableTitle'>{item?.rasm}</th>

  //                       <th className='headerTableTitle'>
  //                         {item?.TugilganSana}
  //                       </th>
  //                       <th className='headerTableTitle'>{item?.voqeaJoyT}</th>
  //                       <th className='headerTableTitle'>{item?.voqeaJoyM}</th>
  //                       <th className='headerTableTitle'>{item?.voqeaJoyTM}</th>
  //                       <th className='headerTableTitle'>
  //                         {item?.olibkelinganJoy}
  //                       </th>
  //                       <th className='headerTableTitle'>{item?.familyaG}</th>
  //                       <th className='headerTableTitle'>{item?.ismG}</th>
  //                       <th className='headerTableTitle'>
  //                         {item?.otasini_ismiG}
  //                       </th>
  //                       <th className='headerTableTitle'>{item?.telefonG}</th>
  //                       <th className='headerTableTitle'>{item?.barmoqIziG}</th>
  //                       <th className='headerTableTitle'>{item?.barmoqIziG}{item?.barmoqIziG}</th>

  //                       <th className='headerTableTitle'>{item?.Hulosa}</th>
  //                     </tr>
  //                   </thead>
  //                 </>
  //               );
  //             }

  //             if (SelectKategory == 2 && SelectKategory == item.id) {
  //               return (
  //                 <>
  //                   <tr>
  //                     <th className='headerTableTitle'>edite</th>

  //                     <th className='headerTableTitle'>{item?.familya}</th>
  //                     <th className='headerTableTitle'>{item?.ism}</th>
  //                     <th className='headerTableTitle'>{item?.otasini_ismi}</th>
  //                     <th className='headerTableTitle'>{item?.telefon}</th>
  //                     <th className='headerTableTitle'>{item?.barmoqIzi}</th>
  //                     <th className='headerTableTitle'>{item?.rasm}</th>
  //                     <th className='headerTableTitle'>{item?.TugilganSana}</th>
  //                     <th className='headerTableTitle'>
  //                       {item?.tuzilganBayonnoma}
  //                     </th>

  //                     <th className='headerTableTitle'>{item?.Hulosa}</th>
  //                   </tr>
  //                 </>
  //               );
  //             }
  //             if (SelectKategory == 3 && SelectKategory == item.id) {
  //               return (
  //                 <>
  //                   <tr>
  //                     <th className='headerTableTitle'>edite</th>

  //                     <th className='headerTableTitle'>{item?.familya}</th>
  //                     <th className='headerTableTitle'>{item?.ism}</th>
  //                     <th className='headerTableTitle'>{item?.otasini_ismi}</th>
  //                     <th className='headerTableTitle'>{item?.voqeaJoyT}</th>
  //                     <th className='headerTableTitle'>{item?.voqeaJoyM}</th>
  //                     <th className='headerTableTitle'>{item?.voqeaJoyTM}</th>
  //                     <th className='headerTableTitle'>{item?.telefon}</th>
  //                     <th className='headerTableTitle'>{item?.Prof}</th>

  //                     <th className='headerTableTitle'>{item?.Hulosa}</th>
  //                   </tr>
  //                 </>
  //               );
  //             }
  //             if (SelectKategory == 4 && SelectKategory == item.id) {
  //               return (
  //                 <>
  //                   <tr>
  //                     <th className='headerTableTitle'>edite</th>

  //                     <th className='headerTableTitle'>{item?.familya}</th>
  //                     <th className='headerTableTitle'>{item?.ism}</th>
  //                     <th className='headerTableTitle'>{item?.otasini_ismi}</th>
  //                     <th className='headerTableTitle'>{item?.barmoqIzi}</th>
  //                     <th className='headerTableTitle'>{item?.rasm}</th>
  //                     <th className='headerTableTitle'>{item?.voqeaJoyT}</th>
  //                     <th className='headerTableTitle'>{item?.voqeaJoyM}</th>
  //                     <th className='headerTableTitle'>{item?.voqeaJoyTM}</th>

  //                     <th className='headerTableTitle'>{item?.Hulosa}</th>
  //                   </tr>
  //                 </>
  //               );
  //             }

  //             if (SelectKategory == 5 && SelectKategory == item.id) {
  //               return (
  //                 <>
  //                   <tr>
  //                     <th className='headerTableTitle'>edite</th>

  //                     <th className='headerTableTitle'>{item?.familya}</th>
  //                     <th className='headerTableTitle'>{item?.ism}</th>
  //                     <th className='headerTableTitle'>{item?.otasini_ismi}</th>
  //                     <th className='headerTableTitle'>{item?.barmoqIzi}</th>
  //                     <th className='headerTableTitle'>{item?.rasm}</th>
  //                     <th className='headerTableTitle'>{item?.voqeaJoyT}</th>
  //                     <th className='headerTableTitle'>{item?.voqeaJoyM}</th>
  //                     <th className='headerTableTitle'>{item?.voqeaJoyTM}</th>

  //                     <th className='headerTableTitle'>{item?.Hulosa}</th>
  //                   </tr>
  //                 </>
  //               );
  //             }
  //             if (SelectKategory == 6 && SelectKategory == item.id) {
  //               return (
  //                 <>
  //                   <tr>
  //                     <th className='headerTableTitle'>edite</th>

  //                     <th className='headerTableTitle'>{item?.familya}</th>
  //                     <th className='headerTableTitle'>{item?.ism}</th>
  //                     <th className='headerTableTitle'>{item?.otasini_ismi}</th>

  //                     <th className='headerTableTitle'>{item?.voqeaJoyT}</th>
  //                     <th className='headerTableTitle'>{item?.voqeaJoyM}</th>
  //                     <th className='headerTableTitle'>{item?.voqeaJoyTM}</th>
  //                     <th className='headerTableTitle'>{item?.telefon}</th>

  //                     <th className='headerTableTitle'>{item?.Hulosa}</th>
  //                   </tr>
  //                 </>
  //               );
  //             }
  //             if (SelectKategory == 7 && SelectKategory == item.id) {
  //               return (
  //                 <>
  //                   <tr>
  //                     <th className='headerTableTitle'>edite</th>

  //                     <th className='headerTableTitle'>{item?.familya}</th>
  //                     <th className='headerTableTitle'>{item?.ism}</th>
  //                     <th className='headerTableTitle'>{item?.otasini_ismi}</th>

  //                     <th className='headerTableTitle'>{item?.telefon}</th>
  //                     <th className='headerTableTitle'>
  //                       {item?.ovqurolMarkasi}
  //                     </th>
  //                     <th className='headerTableTitle'>{item?.qurolRaqami}</th>

  //                     <th className='headerTableTitle'>{item?.Hulosa}</th>
  //                   </tr>
  //                 </>
  //               );
  //             }
  //           })}

  //           {arry.map((item) => {
  //             if (SelectKategory == 1) {
  //               return (
  //                 <>
  //                   <tbody>
  //                     <tr>
  //                       <td className='BodyTableTitle'>edite</td>

  //                       <td className='BodyTableTitle'>{item?.familya}</td>
  //                       <td className='BodyTableTitle'>{item?.ism}</td>
  //                       <td className='BodyTableTitle'>{item?.otasini_ismi}</td>
  //                       <td className='BodyTableTitle'>{item?.telefon}</td>
  //                       <td className='BodyTableTitle'>{item?.barmoqIzi}</td>
  //                       <td className='BodyTableTitle'>{item?.rasm}</td>
  //                       <td className='BodyTableTitle'>{item?.TugilganSana}</td>
  //                       <td className='BodyTableTitle'>{item?.voqeaJoyT}</td>
  //                       <td className='BodyTableTitle'>{item?.voqeaJoyM}</td>
  //                       <td className='BodyTableTitle'>{item?.voqeaJoyTM}</td>
  //                       <td className='BodyTableTitle'>
  //                         {item?.olibkelinganJoy}
  //                       </td>
  //                       <td className='BodyTableTitle'>{item?.familyaG}</td>
  //                       <td className='BodyTableTitle'>{item?.ismG}</td>
  //                       <td className='BodyTableTitle'>
  //                         {item?.otasini_ismiG}
  //                       </td>
  //                       <td className='BodyTableTitle'>{item?.telefonG}</td>
  //                       <td className='BodyTableTitle'>{item?.barmoqIziG}</td>
  //                       <td className='BodyTableTitle'>{item?.rasmG}</td>
  //                       <td className='BodyTableTitle'>{item?.Hulosa}</td>
  //                     </tr>
  //                   </tbody>
  //                 </>
  //               );
  //             }
  //           })}
  //         </table>
  //       </div>
  //     </div>
  //   </div>
  // );
}
export default Tables;
