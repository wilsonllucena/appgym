import { Group } from "@components/Group";
import { HomeHeader } from "@components/HomeHeader";
import { FlatList, Heading, HStack, Text, VStack } from "native-base";
import { useState } from "react";

export function Home() {
    const [groups, setGroups] = useState(["costa", "perna", "biceps", "ombro", "peito"])

    const [groupSelected, setGroupSelected] = useState("costa")
    return (
        <VStack flex={1}>
            <HomeHeader />
            <FlatList
                data={groups}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Group
                        key={item}
                        name={item}
                        isActive={item === groupSelected}
                        onPress={() => setGroupSelected(item)}
                    />
                )}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                _contentContainerStyle={{px: 8}}
                my={10}
                maxH={10}
            />
            <VStack flex={1} px={8} >
                <HStack justifyContent="space-between" mb={5}>
                    <Heading color="gray.200" fontSize="md">
                        Exercícios
                    </Heading>
                    <Text color="gray.200" fontSize="sm">
                        4
                    </Text>
                </HStack>
            </VStack>
     
        </VStack>
    )
}