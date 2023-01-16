import React from 'react'
import { View } from 'react-native'

type MarginProps = {
	height: number
}

export const Margin: React.FC<MarginProps> = ({ height }) => {
	return <View style={{ height }} />
}
