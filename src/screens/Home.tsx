import { Group } from "@components/Group";
import { HomeHeader } from "@components/HomeHeader";
import { FlatList, VStack } from "native-base";
import { useState } from "react";

export function Home() {
    const [groups, setGroups] = useState(["costa", "perna", "biceps", "ombro", "peito"])

    const [groupSelected, setGroupSelected] = useState("ombro")
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
        </VStack>
    )
}