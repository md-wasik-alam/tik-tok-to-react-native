import React, { useState } from 'react'
import { SafeAreaView,Text } from 'react-native'
import Com from './src/components/Com'
import InputForm from './src/components/InputForm'

const App = () => {
  const [player1,setPlayer1]=useState("");
  const [player2,setPlayer2]=useState("");
  const [showform,setShowform]=useState(true)
  return (
    <SafeAreaView className="h-screen justify-center items-center bg-slate-800">

      {
        showform?<InputForm player1={player1} player2={player2} setPlayer1={setPlayer1} setPlayer2={setPlayer2} setShowform={setShowform} /> :<>
        <Text className="text-4xl text-white mb-20">Tik Tok To Game</Text>
        <Com player1={player1} player2={player2} setShowform={setShowform} />
        </>
      }
    </SafeAreaView>
  )
}

export default App
