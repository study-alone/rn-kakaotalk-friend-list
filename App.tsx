import React, { useCallback, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { FlatList, TouchableOpacity } from 'react-native'
import { Division, FriendSection, Header, Margin, Profile, TabBar } from '@/components'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

import data from '@/data.json'

const SafeArea = styled(SafeAreaView)({
	flex: 1,
	backgroundColor: 'white',
})

const TopArea = styled.View({
	backgroundColor: 'white',
	paddingHorizontal: 15,
})

const ItemSeparatorComponent: React.FC = () => <Margin height={13} />
const RenderItem: React.FC<{ item: FriendItem }> = ({ item }) => (
	<TouchableOpacity>
		<Profile {...item} />
	</TouchableOpacity>
)

const ListFooterComponent: React.FC = () => {
	return <Margin height={10} />
}

const App: React.FC = () => {
	const [selected, setSelected] = useState('')
	const [isOpen, setIsOpen] = useState(false)
	const paddingHorizontal = 15

	const handlePressArrow = useCallback(() => {
		setIsOpen((prev) => !prev)
	}, [])

	return (
		<SafeAreaProvider>
			<SafeArea mode="margin" edges={['left', 'right', 'top']}>
				<StatusBar style="auto" />
				<TopArea>
					<Header />
					<Margin height={10} />
					<Profile
						name={data.myProfile.name}
						uri={data.myProfile.uri}
						introduction={data.myProfile.introduction}
						size="big"
					/>
					<Margin height={15} />
					<Division />
					<Margin height={12} />
					<FriendSection
						length={data.friendProfiles.length}
						isOpen={isOpen}
						onPressArrow={handlePressArrow}
					/>
					<Margin height={5} />
				</TopArea>
				<FlatList
					data={isOpen ? data.friendProfiles : []}
					keyExtractor={(_, index) => `${index}`}
					contentContainerStyle={{ paddingHorizontal }}
					ItemSeparatorComponent={ItemSeparatorComponent}
					renderItem={RenderItem}
					ListFooterComponent={ListFooterComponent}
					showsVerticalScrollIndicator={false}
				/>
				<TabBar selected={selected} onSelect={(newSelected) => setSelected(newSelected)} />
			</SafeArea>
		</SafeAreaProvider>
	)
}

export default App
