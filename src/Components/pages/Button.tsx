
import React from "react";
import {useState} from "react";
function Pics(){
    const [Val,SetVal] = useState(0);
    const [Ram,SetRam]=useState(10);
    const [Res,SetRes]=useState("Safe");
    const [Sco,SetSco]=useState(0);
    const [Tar,SetTar]=useState("After one inings");
    const [Ining,SetIning]=useState(1);
    const [Win,SetWin]=useState(0);
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
    function change1(){
        SetVal(1);
        SetRam(getRandomInt(7));
    }
    function change2(){
        SetVal(2);
        SetRam(getRandomInt(7));
    }
    function change3(){
        SetVal(3);
        SetRam(getRandomInt(7));
    }
    function change4(){
        SetVal(4);
        SetRam(getRandomInt(7));
    }
    function change5(){
        SetVal(5);
        SetRam(getRandomInt(7));
    }
    function change6(){
        SetVal(6);
        SetRam(getRandomInt(7));
    }
    function check(){
        if(Win===0){
        if (Val===Ram && Ining===1){
            SetRes("OUT");
            SetTar(String(Sco+1));
            SetVal(0);
            SetRam(10);
            SetSco(0);
            SetIning(2);
        }else if (Res==="OUT" && Val!==Ram){
            SetRes("Safe");
        }else if(Ining===1){
            SetSco(Sco+Val);
        }
        else if(Ining===2){
            SetSco(Sco+Ram);
        }
        if (Ining===2 ){
           if ((Sco)>parseInt(Tar)){
            SetWin(2)
            SetRes("Player 2 Wins");
           }else if(parseInt(Tar)>(Sco) && Val===Ram){
            SetWin(1);
            SetRes("Player 1 Wins");

        }else if((Sco)===parseInt(Tar) && Val===Ram){
            SetWin(3);
            SetRes("It's a draw");
        }
        }
    }
    else{
        SetRes("Safe");
        SetVal(0);
        SetRam(10);
        SetSco(0);
        SetIning(1);
        SetTar("After one inings");
        SetWin(0);
    }
    }
    
    return(
        <>
        <br/>
        <h1 className="text-primary d-flex justify-content-center">GAME IS ON</h1>
        <br/>
        <br/>
        <div className="d-flex justify-content-center ">
        <button type="button" onClick={()=>{change1();check();}} className="btn btn-outline-secondary me-3">1</button>
        <button type="button" onClick={()=>{change2();check();}} className="btn btn-outline-success me-3">2</button>
        <button type="button" onClick={()=>{change3();check();}} className="btn btn-outline-danger me-3">3</button>
        <button type="button" onClick={()=>{change4();check();}} className="btn btn-outline-warning me-3" >4</button>
        <button type="button" onClick={()=>{change5();check();}} className="btn btn-outline-info me-3">5</button>
        <button type="button" onClick={()=>{change6();check();}} className="btn btn-outline-dark me-3">6</button>
        </div>
        <br/>
        <br/>
        <div className="card w-25  mx-auto" >
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Player 1:{Val}</li>
                <li className="list-group-item">Player 2:{Ram}</li>
                <li className="list-group-item">Score : {Sco}</li>
                <li className="list-group-item">Result : {Res}</li>
                <li className="list-group-item">Target : {Tar}</li>
  </ul>
</div>
        </>
    )
}


export default Pics;