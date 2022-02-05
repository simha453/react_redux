import React from 'react';
import { useState } from 'react';

const EmpForm = () => {
    const [formdata,Setformdata]=useState({
        firstname:'',
        lastname:'',
        mail:''

    })
    const handlechnage = (e) => {
        const {name,value} =e.target;
// console.log({...formdata,[name]:value},'ss');
        Setformdata({...formdata,[name]:value});

    }
    console.log(formdata);
  return <div>
      <center>
          <form>
              <label>Firstname:</label>
              <input type='text' name='firstname' id='firstname' onChange={handlechnage}></input><br/><br/>
              <label>Lastname:</label>
              <input type='text' name='lastname' id='lastname' onChange={handlechnage}></input>
              <label>Mail:</label>
              <input type='text' name='mail' id='mail' onChange={handlechnage} ></input>
          </form>
      </center>
  </div>;
};

export default EmpForm;
