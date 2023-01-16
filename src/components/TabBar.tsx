import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

type IconName = keyof typeof Ionicons.glyphMap

type TabButtonProps = {
	isSelect: boolean
	onPress(): void
	activeIcon: IconName
	inactiveIcon: IconName
}

type TabBarProps = {
	selected: string
	onSelect(selected: string): void
}

const TouchableOpacityButton = styled.TouchableOpacity({
	flex: 1,
	justifyContent: 'center',
	alignItems: 'center',
	paddingVertical: 10,
})

const TabBarContainer = styled.View<{ bottomSpace: number }>(({ bottomSpace }) => {
	return {
		width: '100%',
		flexDirection: 'row',
		paddingBottom: bottomSpace,
		borderTopWidth: 0.5,
		borderTopColor: 'grey',
	}
})

const TabButton: React.FC<TabButtonProps> = ({ isSelect, onPress, activeIcon, inactiveIcon }) => {
	return (
		<TouchableOpacityButton onPress={onPress}>
			<Ionicons size={24} name={isSelect ? activeIcon : inactiveIcon} color="black" />
		</TouchableOpacityButton>
	)
}

export const TabBar: React.FC<TabBarProps> = ({ selected, onSelect }) => {
	const [buttons] = useState<IconName[]>(['person', 'chatbox', 'flag', 'albums'])
	const { bottom } = useSafeAreaInsets()

	return (
		<TabBarContainer bottomSpace={bottom}>
			{buttons.map((item, index) => (
				<TabButton
					key={index}
					isSelect={selected === item}
					onPress={() => onSelect(item)}
					activeIcon={item}
					inactiveIcon={`${item}-outline` as IconName}
				/>
			))}
		</TabBarContainer>
	)
}
