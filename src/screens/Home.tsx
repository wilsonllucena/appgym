import { useState } from "react";
import { FlatList, Heading, HStack, Text, VStack } from "native-base";
import { ExerciseCard } from "@components/ExerciseCard";
import { Group } from "@components/Group";
import { HomeHeader } from "@components/HomeHeader";

export function Home() {
    const [groups, setGroups] = useState(["costa", "perna", "biceps", "ombro", "peito"])
    const [groupSelected, setGroupSelected] = useState("costa")
    const [exercises, setExercises] = useState(["Puxada frontal", "Cadeira Extensora", "Panturrilha Sentado"])
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
                        isActive={item.toLocaleUpperCase() === groupSelected.toLocaleUpperCase()}
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
                        {exercises.length}
                    </Text>
                </HStack>
                <FlatList
                    data={exercises}
                    keyExtractor={item => item}
                    renderItem ={({item }) => (
                        <ExerciseCard name={item} />
                    )}
                    showsVerticalScrollIndicator={false}
                    _contentContainerStyle={{ paddingBottom: 20}}
                />

            </VStack>
     
        </VStack>
    )
}