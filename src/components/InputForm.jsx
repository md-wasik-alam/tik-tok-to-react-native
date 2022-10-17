import React from 'react'
import { SafeAreaView, TextInput, Text, TouchableOpacity } from 'react-native'

const InputForm = ({ setPlayer1, setPlayer2, setShowform, player1, player2 }) => {
  return (
    <SafeAreaView>
      <Text  className=" w-full text-white text-2xl" > Enter Player 1 Name</Text>
      <TextInput autoComplete='name' className="placeholder:italic placeholder:text-slate-100 w-full px-3 py-2 mt-2 text-white text-2xl border-gray-400 border-2 rounded-md " placeholder='Enter Player 1 Name' onChangeText={(e) => setPlayer1(e)} />
      <Text className=" w-full text-white text-2xl mt-8" > Enter Player 2 Name</Text>
      <TextInput autoComplete='name' className="placeholder:italic placeholder:text-slate-100 w-full px-3 py-2 mt-2 text-white text-2xl border-gray-400 border-2 rounded-md " placeholder='Enter Player 2 Name' onChangeText={(e) => setPlayer2(e)} />

      {
        player1 !== "" && player2 !== "" ? <TouchableOpacity onPress={() => setShowform(false)} className=" items-center mt-8 bg-teal-600 py-2 rounded-lg">
          <Text className="text-white text-2xl">Submit</Text>
        </TouchableOpacity> : <TouchableOpacity disabled className=" items-center mt-8 bg-teal-900 py-2 rounded-lg">
          <Text className="text-white text-2xl">Submit</Text>
        </TouchableOpacity>
      }
    </SafeAreaView>
  )
}

export default InputForm
