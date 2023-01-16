import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import styled from 'styled-components/native'

type IconButtonProps = {
	name: keyof typeof Ionicons.glyphMap
}

const Container = styled.View({
	paddingVertical: 10,
	flexDirection: 'row',
	justifyContent: 'space-between',
})

const StyledText = styled.Text<{ name: string }>({
	fontSize: 22,
	fontWeight: 'bold',
})

const IconList = styled.View({
	flexDirection: 'row',
})

const ButtonWrapper = styled.View({
	paddingHorizontal: 6,
})

const IconButton: React.FC<IconButtonProps> = ({ name }) => {
	return (
		<ButtonWrapper>
			<Ionicons name={name} size={24} color="black" />
		</ButtonWrapper>
	)
}

export const Header: React.FC = () => {
	const [icons, _] = useState<IconButtonProps['name'][]>([
		'search-outline',
		'person-add-outline',
		'md-musical-notes-outline',
		'ios-settings-outline',
	])

	return (
		<Container>
			<StyledText name="title">친구</StyledText>
			<IconList>
				{icons.map((name, index) => (
					<IconButton key={index} name={name} />
				))}
			</IconList>
		</Container>
	)
}
