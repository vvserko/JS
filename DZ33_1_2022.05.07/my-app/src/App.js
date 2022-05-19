//import _ from "lodash"
import InputText from "./InputText";
import React, { useState } from 'react';
import Li from "./Li";

function App(props) {
  const [text, setText] = useState('');
  return (
    <div >
      <Li textLi = 'ывкпмивыкивык'/>
      <Li textLi = 'вмиа'/>
      <Li textLi = 'фсыу'/>
      <Li textLi = 'фцус'/>
      <Li textLi = 'цмыукпм'/>
      <Li textLi = 'ывкпмыукпмвкивыкивык'/>
      <Li textLi = 'вмиа'/>
      <Li textLi = 'фсыу'/>
      <Li textLi = 'фцус'/>
      <Li textLi = 'цмыукпм'/>
      <Li textLi = 'гнлгн'/>
      <Li textLi = 'вмиа'/>
      <Li textLi = 'укмвкр'/>
      <Li textLi = 'фцус'/>
      <Li textLi = 'мцунц'/>
      <InputText text = {props.text}/>     
    </div>
  );
}
export default App;
