import React, { useState } from 'react';
import './App.css'
const App = () => {



const jogoInicial = [['','',''],['','',''],['','','']]
const [jogo, setJogo ] = useState(jogoInicial)
const [simboloAtual, setSimboloAtual ] = useState('X')
const [jogando, setJogando] = useState(true)

const tabuleiro = (j) => {
  console.log('começand  tabuleiro', j)
  return(
    
    <div className='tabu'>
        <div className='tabuLinha'>
          <div className='casa' data-pos='00' onClick={(e)=>joga(e)}>{j[0]}</div>
         <div className='casa' data-pos='01' onClick={(e)=>joga(e)}>{j[0][1]}</div>
          <div className='casa' data-pos='02' onClick={(e)=>joga(e)}>{j[0][2]}</div>
        </div>
        <div className='tabuLinha'>
          <div className='casa' data-pos='10' onClick={(e)=>joga(e)}>{j[1][0]}</div>
          <div className='casa' data-pos='11' onClick={(e)=>joga(e)}>{j[1][1]}</div>
          <div className='casa' data-pos='12' onClick={(e)=>joga(e)}>{j[1][2]}</div>
        </div>
        <div className='tabuLinha'>
          <div className='casa' data-pos='20' onClick={(e)=>joga(e)}>{j[2][0]}</div>
          <div className='casa' data-pos='21' onClick={(e)=>joga(e)}>{j[2][1]}</div>
          <div className='casa' data-pos='22' onClick={(e)=>joga(e)}>{j[2][2]}</div> 
        </div>

    </div>
    
  )
}

const btnJogarNovamente = () => {
  if(!jogando){
    return <button onClick={()=>reiniciar()}>Jogar Novamente</button>
  }
}

   //FUNÇÔES


   const verificarVitoria = () => {
      let pontos = 0
      let vitoria = false
      
//LINHAS
      for(let l=0;l<3;l++){
        pontos=0
        for(let c=0;c<3;c++){
          if(jogo[l][c]===simboloAtual){
            pontos++
          }
        }
        if(pontos>=3){
          vitoria = true
          break
        }
      }
//COLUNAS
      for(let c=0;c<3;c++){
        pontos=0
        for(let l=0;l<3;l++){
          if(jogo[l][c]===simboloAtual){
            pontos++
            
          }
        }
        if(pontos>=3){
          vitoria = true
          break
        }
      }
//DIAGONAIS
      pontos=0
      for(let d=0;d<3;d++){
        if(jogo[d][d]===simboloAtual){
          pontos++
        }
        if(pontos>=3){
          vitoria = true
          break
        }
      }
      pontos=0
      let l=0
      for(let c=2;c>0;c--){
        if(jogo[l][c]===simboloAtual){
          pontos++
        }
        l++
      }
     return vitoria
   }



   const trocaJogador = () => {
    simboloAtual==='X'?setSimboloAtual('O'): setSimboloAtual('X')
   }

   const retPos = (e) => {
      const p=e.target.getAttribute('data-pos')
      const pos=[parseInt(p.substring(0,1)), parseInt(p.substring(1,2))]
      return pos
  }

  const verificaVazio = (e) => {
    if(jogo[retPos(e)[0]][retPos(e)[1]]===''){
      return true
    }else{
      return false
    }
  }

  const joga = (e)=> {
    console.log('entrou na função joga')
     if(jogando){
      if(verificaVazio(e)){
        jogo[retPos(e)[0]][retPos(e)[1]]=simboloAtual
        trocaJogador()
        if(verificarVitoria()){
          trocaJogador()
          alert('Jogador ' + simboloAtual + 'Venceu')
          setJogando(false)
        }
      }else{
        alert('Este espaço não está disponivel, escolha outro')
      }
     } 
  }

   const reiniciar = () => {
    setJogando(true)
    setJogo(jogoInicial)
    setSimboloAtual('X')
   }

  return ( 
    <>
      <div>
        <h1>Quem joga: {simboloAtual}</h1>
      </div>
      <div>
        {tabuleiro(joga)} 
      </div>
      <div>
       {/* {btnJogarNovamente} */}
      </div>
    </>
   );
}
 
export default App;