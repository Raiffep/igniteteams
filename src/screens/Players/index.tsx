import React, { Key, useState } from "react";

import {
  Input,
  Filter,
  Header,
  Highlight,
  ButtonIcon,
  ListEmpty,
} from "@components/index";
import { playaresStrings } from "./strings";

import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";
import { FlatList } from "react-native";
import { PlayerCard } from "@components/PlayerCard";
import { usePlayers } from "./hooks";

export const Players = () => {
  const {
    teams,
    newPlayer,
    selectedTeam,
    handleSelectTeam,
    handleAddNewPlayer,
    handleRemovePlayer,
    handleNewPlayerChangeText,
  } = usePlayers();
  return (
    <Container>
      <Header showBackButton />
      <Highlight
        title={playaresStrings.title}
        subtitle={playaresStrings.subtitle}
      />
      <Form>
        <Input
          value={newPlayer}
          placeholder={playaresStrings.placeholder}
          autoCorrect={false}
          onChangeText={handleNewPlayerChangeText}
        />
        <ButtonIcon
          name="add"
          type="PRIMARY"
          size={32}
          onPress={handleAddNewPlayer}
        />
      </Form>
      <HeaderList>
        <FlatList
          horizontal
          data={teams}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => String(item?.id)}
          contentContainerStyle={{ gap: 10 }}
          renderItem={({ item }) => (
            <Filter
              title={item?.title}
              onPress={() => handleSelectTeam(item)}
              isActive={item?.id === selectedTeam?.id}
            />
          )}
        />
        <NumberOfPlayers>{selectedTeam?.players?.length}</NumberOfPlayers>
      </HeaderList>
      <FlatList
        data={selectedTeam?.players}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => String(item?.id)}
        contentContainerStyle={{ gap: 16, marginTop: 20 }}
        ListEmptyComponent={() => (
          <ListEmpty message={playaresStrings.listEmptyMessage} />
        )}
        renderItem={({ item }) => (
          <PlayerCard
            name={item?.name}
            id={String(item?.id)}
            onPress={() => handleRemovePlayer(item)}
          />
        )}
      />
    </Container>
  );
};
