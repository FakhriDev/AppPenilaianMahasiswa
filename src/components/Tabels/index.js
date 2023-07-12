import React, { useState } from 'react';
import { User, UserPlus, UserMinus } from '@phosphor-icons/react';
const Tabel = () => {
  const [students, setStudents] = useState([
    {
      name: 'Mahasiswa',
      asp1: 0,
      asp2: 0,
      asp3: 0,
      asp4: 0,
    },
  ]);
  const addStudents = () => {
    setStudents([
      ...students,
      { name: 'Mahasiswa', asp1: 0, asp2: 0, asp3: 0, asp4: 0 },
    ]);
  };
  const asp1 = (index) => (e) => {
    const value = parseInt(e.target.value);
    const getStudent = students.map((student, i) => {
      if (index === i) {
        return { ...student, asp1: (student.asp1 = value) };
      } else {
        return student;
      }
    });
    setStudents(getStudent);
    console.log(students);
  };
  const asp2 = (index) => (e) => {
    const value = parseInt(e.target.value);
    const getStudent = students.map((student, i) => {
      if (index === i) {
        return { ...student, asp2: (student.asp2 = value) };
      } else {
        return student;
      }
    });
    setStudents(getStudent);
  };
  const asp3 = (index) => (e) => {
    const value = parseInt(e.target.value);
    const getStudent = students.map((student, i) => {
      if (index === i) {
        return { ...student, asp3: (student.asp3 = value) };
      } else {
        return student;
      }
    });
    setStudents(getStudent);
  };
  const asp4 = (index) => (e) => {
    const value = parseInt(e.target.value);
    const getStudent = students.map((student, i) => {
      if (index === i) {
        return { ...student, asp4: (student.asp4 = value) };
      } else {
        return student;
      }
    });
    setStudents(getStudent);
  };

  return (
    <>
      <div className="flex relative max-w-[800px] mx-auto justify-end mb-10 gap-2">
        <button className="text-sm uppercase px-2 py-2 border-2 bg-black text-white border-transparent hover:border-black hover:bg-gray-50 hover:text-black">
          <UserPlus size={21} weight="fill" onClick={addStudents} />
        </button>
      </div>
      <table className="w-full text-sm text-left mb-10">
        <thead className="text-xs text-gray-700 uppercase  text-center">
          <tr>
            <th scope="col" className="px-6 py-3">
              Nama Mahasiswa
            </th>
            <th scope="col" className="px-6 py-3">
              Aspek Penilaian 1
            </th>
            <th scope="col" className="px-6 py-3">
              Aspek Penilaian 2
            </th>
            <th scope="col" className="px-6 py-3">
              Aspek Penilaian 3
            </th>
            <th scope="col" className="px-6 py-3">
              Aspek Penilaian 4
            </th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr className="bg-gray-50 border-2 border-gray " key={index}>
              <th scope="row" className="px-4 py-2 font-medium">
                <div className="flex row gap-1">
                  <div className="relative w-8 h-8 rounded-full bg-slate-200">
                    <User
                      size={23}
                      weight="fill"
                      className="absolute left-1 top-1 text-gray-600"
                    />
                  </div>
                  <span className="mt-1">{student.name}</span>
                </div>
              </th>
              <td className="px-6 py-2">
                <select
                  onChange={asp1(index)}
                  required
                  id="asp1"
                  name="asp1"
                  className="w-full border-2 border-gray"
                >
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </td>
              <td className="px-6 py-2">
                <select
                  //value={asp2}
                  onChange={asp2(index)}
                  required
                  id="asp2"
                  name="asp2"
                  className="w-full border-2 border-gray"
                >
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </td>
              <td className="px-6 py-2">
                <select
                  onChange={asp3(index)}
                  required
                  id="asp3"
                  name="asp3"
                  className="w-full border-2 border-gray"
                >
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </td>
              <td className="px-6 py-2">
                <select
                  onChange={asp4(index)}
                  required
                  id="asp4"
                  name="asp4"
                  className="w-full border-2 border-gray"
                >
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="max-w-[800px] mx-auto mb-10">
        <h4 className="text-[24px] mx-auto text-center mb-10 uppercase">
          Report Nilai
        </h4>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left mb-10">
            <thead className="text-xs text-gray-700 uppercase  text-center">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Nama Mahasiswa
                </th>
                <th scope="col" className="px-6 py-3">
                  Aspek Penilaian 1
                </th>
                <th scope="col" className="px-6 py-3">
                  Aspek Penilaian 2
                </th>
                <th scope="col" className="px-6 py-3">
                  Aspek Penilaian 3
                </th>
                <th scope="col" className="px-6 py-3">
                  Aspek Penilaian 4
                </th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr
                  className="bg-gray-50 border-2 border-gray text-center"
                  key={index}
                >
                  <th scope="row" className="px-4 py-2 font-medium">
                    <div className="flex row gap-1">
                      <div className="relative w-8 h-8 rounded-full bg-slate-200">
                        <User
                          size={23}
                          weight="fill"
                          className="absolute left-1 top-1 text-gray-600"
                        />
                      </div>
                      <span className="mt-1">{student.name}</span>
                    </div>
                  </th>
                  <td className="px-6 py-2">
                    <p>{student.asp1}</p>
                  </td>
                  <td className="px-6 py-2">
                    <p>{student.asp2}</p>
                  </td>
                  <td className="px-6 py-2">
                    <p>{student.asp3}</p>
                  </td>
                  <td className="px-6 py-2">
                    <p>{student.asp4}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default Tabel;
