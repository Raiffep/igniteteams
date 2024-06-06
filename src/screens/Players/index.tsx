import React, { Key, useState } from "react";

import {
  Input,
  Filter,
  Header,
  Highlight,
  ButtonIcon,
} from "@components/index";
import { playaresStrings } from "./strings";

import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";
import { FlatList } from "react-native";
import { PlayerCard } from "@components/PlayerCard";

export type TPlayer = {
  id: Key;
  name: string;
};

type TTeam = {
  id: Key;
  title: string;
  players: Array<TPlayer>;
};

const initialTeams: Array<TTeam> = [
  {
    id: Math.floor(Date.now() * Math.random()).toString(36),
    title: "Time A",
    players: [
      {
        id: Math.floor(Date.now() * Math.random()).toString(36),
        name: "Raiffe",
      },
      {
        id: Math.floor(Date.now() * Math.random()).toString(36),
        name: "Nicolas",
      },
    ],
  },
  {
    id: Math.floor(Date.now() * Math.random()).toString(36),
    title: "Time B",
    players: [
      {
        id: Math.floor(Date.now() * Math.random()).toString(36),
        name: "Dinalva",
      },
    ],
  },
];

export const Players = () => {
  const [teams, setTeams] = useState<Array<TTeam>>(initialTeams);
  const [selectedTeam, setSelectedTeam] = useState<TTeam>(initialTeams[0]);

  console.log(selectedTeam)

  return (
    <Container>
      <Header showBackButton />
      <Highlight
        title={playaresStrings.title}
        subtitle={playaresStrings.subtitle}
      />
      <Form>
        <Input placeholder={playaresStrings.placeholder} autoCorrect={false} />
        <ButtonIcon name="add" type="PRIMARY" size={32} />
      </Form>
      <HeaderList>
        <FlatList
          horizontal
          data={teams}
          keyExtractor={item => String(item?.id)}
          contentContainerStyle={{ gap: 10 }}
          renderItem={({ item }) => (
            <Filter
              title={item?.title}
              onPress={() => setSelectedTeam(item)}
              isActive={item?.id === selectedTeam?.id}
            />
          )}
        />
        <NumberOfPlayers>{selectedTeam?.players?.length}</NumberOfPlayers>
      </HeaderList>
      <FlatList 
        data={selectedTeam?.players}
        keyExtractor={item => String(item?.id)}
        contentContainerStyle={{ gap: 16, marginTop: 20 }}
        renderItem={({ item }) => <PlayerCard id={item?.id} name={item?.name} />}
      />
    </Container>
  );
};
