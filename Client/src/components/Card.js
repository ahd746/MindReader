import React, { useState, useContext } from 'react'
import cardContext from '../context/cardContext'

export default function Card({ binaryNumber }) {
  const { sum, setSum, setToggle } = useContext(cardContext)
  const [checked, setChecked] = useState(true);
  const [selected, setSelected] = useState(true);

  let numbers = [];
  for (let i = 1; i < 64; i++) {
    let k = i.toString(2);
    if (k[k.length - binaryNumber] === '1') {
      numbers.push(i);
    }
  }
  let row1 = numbers.slice(0, 5);
  let row2 = numbers.slice(5, 10);
  let row3 = numbers.slice(10, 15);
  let row4 = numbers.slice(15, 20);
  let row5 = numbers.slice(20, 25);
  let row6 = numbers.slice(25, 30);

  var tableClass = '';
  selected ? tableClass = "table table-bordered table-dark" : tableClass = "table table-bordered table-dark selectedTable";

  return (
    <table
      id="table"
      className={tableClass}
      onClick={() => {
        setToggle(false)
        setChecked(!checked)
        setSelected(!selected)
        checked ? setSum(sum + row1[0]) : setSum(sum - row1[0])
      }} >
      <tbody>
        <tr>{row1.map(item => <th key={item}> {item} </th>)}</tr>
        <tr>{row2.map(item => <th key={item}> {item} </th>)}</tr>
        <tr>{row3.map(item => <th key={item}> {item} </th>)}</tr>
        <tr>{row4.map(item => <th key={item}> {item} </th>)}</tr>
        <tr>{row5.map(item => <th key={item}> {item} </th>)}</tr>
        <tr>{row6.map(item => <th key={item}> {item} </th>)}</tr>
      </tbody>
    </table >
  )
}