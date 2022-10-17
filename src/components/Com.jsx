import React, { useEffect, useState } from 'react'
import { View,  Text,  TouchableOpacity } from 'react-native'
import Squire from './Squire'
const initValues = ["", "", "", "", "", "", "", "", ""]

const Com = ({setShowform,player1,player2}) => {
  const [tttState, setTttState] = useState(initValues)
  const [isPlayer1Chance, setIsPlayer1Chance] = useState(true)
  const [isGameOver, setIsGameOver] = useState(false);
  const [winnerMsg, setWinnerMsg] = useState("");
  

  //fill all boxes
  const onBoxClickHandle = (index) => {

    let str = Array.from(tttState);
    if (str[index] === "") {
      str[index] = isPlayer1Chance ? "X" : "O";
      setTttState(str)
      setIsPlayer1Chance(!isPlayer1Chance)
    }
  }

  useEffect(() => {
    let winner = checkGameWinner();
    if (winner) {
      (winner === 'X') ? setWinnerMsg(`  ${player1} जित गया  `) : setWinnerMsg(` ${player2} जित गया `)
      setIsGameOver(true)

    }
  }, [tttState])

  //chaeck winner 
  const checkGameWinner = () => {
    const winnerArrayList = [
      [0, 1, 2],
      [1, 4, 7],
      [0, 3, 6],
      [0, 4, 8],
      [3, 4, 5],
      [6, 7, 8],
      [2, 5, 8],
      [2, 4, 6]
    ]

    for (let x = 0; x < winnerArrayList.length; x++) {
      const [a, b, c] = winnerArrayList[x];
      if (tttState[a] && tttState[a] === tttState[b] && tttState[b] === tttState[c]) {
        return tttState[a];
      }
    }
    return null

  }
  // clear all boxes
  const handleClear = () => {
    setTttState(initValues)
    setIsPlayer1Chance(true)
  }
//game start again button
  const handleStartAgain = () => {
    setIsGameOver(false)
    setTttState(initValues);
    setIsPlayer1Chance(true)
  }

  return (
    <>
      <View className="flex flex-row px-24" >


        {
          isGameOver ? <>
            <Text className=" text-3xl text-red-500 flex-col">Game over</Text>
            <Text className="text-4xl text-green-800 flex-col p-1"> {winnerMsg}</Text>

          </> :
            <>
              <View >
                <Squire value={tttState[0]} handleClick={() => onBoxClickHandle(0)} />
                <Squire value={tttState[1]} handleClick={() => onBoxClickHandle(1)} />
                <Squire value={tttState[2]} handleClick={() => onBoxClickHandle(2)} />
              </View>

              <View>
                <Squire value={tttState[3]} handleClick={() => onBoxClickHandle(3)} />
                <Squire value={tttState[4]} handleClick={() => onBoxClickHandle(4)} />
                <Squire value={tttState[5]} handleClick={() => onBoxClickHandle(5)} />
              </View>

              <View>
                <Squire value={tttState[6]} handleClick={() => onBoxClickHandle(6)} />
                <Squire value={tttState[7]} handleClick={() => onBoxClickHandle(7)} />
                <Squire value={tttState[8]} handleClick={() => onBoxClickHandle(8)} />
              </View>
            </>
        }


      </View>
      {
        isGameOver ? <TouchableOpacity onPress={handleStartAgain} className="button mt-12 text-3xl bg-red-800 rounded-md px-3 py-2">
          <Text className="text-3xl">Start Again</Text>
        </TouchableOpacity> : <TouchableOpacity onLongPress={()=>setShowform(true)} onPress={handleClear} className="button mt-10  text-3xl bg-red-800 rounded-md px-3 py-2 hover:bg-red-900">
          <Text className="text-3xl text-center text-teal-200">Clear &</Text>
          <Text className="text-3xl text-center text-teal-200">long press home</Text>
        </TouchableOpacity>
      }
      <View>
         <Text className=" text-sm mt-4">@ Created by Wasik</Text>
      </View>
    </>
  )
}

export default Com
