
import AceEditor from "react-ace";
import { useState } from "react";
import React from "react";
import "ace-builds/src-noconflict/theme-twilight";
import 'brace/mode/c_cpp'
import "ace-builds/src-noconflict/ext-language_tools"
import './compiler.css';
import axios from 'axios';

function Compiler(){
  var code="";
    function onChange(newValue) {
      code=newValue;
       
      }

      const Compile=()=>{
        console.log(code);
        var request={
          code:code,
          language:"cpp",
          input:""
         
      };
      axios.post('http://localhost:8070/user/compile',request).then
      (resp=>{
        console.log(resp.data.output);
        document.getElementById("result").innerHTML=resp.data.output;
      }).catch(err=>{
          console.log(err);
      })


      }
    return (
      
        <div className="bor">
          <div className="code">
          <AceEditor
          id="code"
     mode="c_cpp"
     theme="twilight"
     width="500px"
    fontSize={16}
    readOnly={false}
    className="aceEditor"
    value='#include <iostream>
    
    using namespace std;
    

    int main() {
        
    
      
        return 0;
    }'
    onChange={onChange}
    name="UNIQUE_ID_OF_DIV"
    editorProps={{ $blockScrolling: true }}
    setOptions={{
      enableBasicAutocompletion: true,
      enableLiveAutocompletion: true,
      enableSnippets: true
    }}
  />
          </div>
          <button onClick={Compile}>Compile</button>
          <div className="result" id="result">
            
          </div>
  
    </div>
    )
}
export default Compiler;