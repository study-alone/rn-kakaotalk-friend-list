import React, { useMemo } from 'react'
// import { Image, Text, View } from 'react-native'
import styled from 'styled-components/native'

interface ProfileProps {
	uri: string
	name: string
	introduction: string
	size?: 'big' | 'default'
}

const Container = styled.View({
	flexDirection: 'row',
})

const Image = styled.Image<{ isBig?: boolean }>(({ isBig }) => {
	const rect = isBig ? 50 : 40

	return {
		width: rect,
		height: rect,
		borderRadius: rect * 0.4,
	}
})

const TextGroup = styled.View({
	flexDirection: 'column',
	justifyContent: 'space-around',
	marginLeft: 10,
})

const NameText = styled.Text<{ isBig?: boolean }>(({ isBig }) => {
	return {
		fontWeight: isBig ? 'bold' : undefined,
		fontSize: isBig ? 24 : 16,
	}
})
const IntroText = styled.Text<{ isBig?: boolean }>(({ isBig }) => {
	return {
		fontSize: isBig ? 18 : 12,
		color: 'grey',
	}
})

export const Profile: React.FC<ProfileProps> = ({ name, uri, introduction, size = 'default' }) => {
	const isBig = useMemo(() => size === 'big', [size])

	return (
		<Container>
			<Image resizeMode="cover" source={{ uri }} isBig={isBig} />
			<TextGroup>
				<NameText isBig={isBig}>{name}</NameText>
				{!!introduction && <IntroText>{introduction}</IntroText>}
			</TextGroup>
		</Container>
	)
}
