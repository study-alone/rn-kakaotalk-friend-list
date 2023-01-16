import React from 'react'
import { TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import styled from 'styled-components/native'

type FriendSectionProps = {
	length: number
	onPressArrow(): void
	isOpen: boolean
}

const Container = styled.View({
	flexDirection: 'row',
	justifyContent: 'space-between',
})

const Text = styled.Text({
	color: 'grey',
})

export const FriendSection: React.FC<FriendSectionProps> = ({ length, onPressArrow, isOpen }) => {
	return (
		<Container>
			<Text>친구 {length}</Text>
			<TouchableOpacity onPress={onPressArrow}>
				<MaterialIcons
					name={isOpen ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
					size={24}
					color="lightgrey"
				/>
			</TouchableOpacity>
		</Container>
	)
}
