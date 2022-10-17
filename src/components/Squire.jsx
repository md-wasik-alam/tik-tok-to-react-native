import React from 'react'
import { View,Text, Pressable } from 'react-native'

const Squire = ({value,handleClick}) => {
  return (
   <Pressable className=" w-28 h-36 border-4 justify-center border-sky-500" onPress={()=>handleClick()} >
    <Text className="text-8xl text-sky-500 text-center items-center" >{value}</Text>
   </Pressable>
  )
}

export default Squire
