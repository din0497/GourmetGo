import { Pressable, Text, View } from 'react-native'
import React, { Component } from 'react'

export default function CategoryGridTile ({title, category}) {
  
    return (
      <View>
        <Pressable>
            <View>
                <Text>{title}</Text>
            </View>
        </Pressable>
      </View>
    )
 
}