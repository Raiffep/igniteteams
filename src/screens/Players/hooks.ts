import { Key, useCallback, useMemo, useState } from "react";

export type TPlayer = {
  id: Key;
  name: string;
};

export type TTeam = {
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

export const usePlayers = () => {
  const [teams, setTeams] = useState<Array<TTeam>>(initialTeams);
  const [newPlayer, setNewPlayer] = useState<string>("");
  const [selectedTeam, setSelectedTeam] = useState<TTeam>(initialTeams[0]);

  const handleNewPlayerChangeText = useCallback(
    (playerName: string) => setNewPlayer(playerName),
    []
  );

  const handleSelectTeam = useCallback(
    (team: TTeam) => setSelectedTeam(team),
    []
  );

  const handleAddNewPlayer = useCallback(() => {
    const player = {
      id: Math.floor(Date.now() * Math.random()).toString(36),
      name: newPlayer,
    };

    const newTeams = teams?.map((team) => {
      if (selectedTeam?.id === team?.id) team?.players?.push(player);

      return team;
    });

    setNewPlayer("");
    setTeams(newTeams);
  }, [newPlayer]);

  const handleRemoveTeam = useCallback((teamId: Key) => {
    const newTeams = teams?.filter((team) => team?.id !== teamId);

    setSelectedTeam(newTeams[0]);
    setTeams(newTeams);
  }, [teams]);

  const handleRemovePlayer = useCallback((player: TPlayer) => {
    const newTeams = teams?.map((team) => {
      if (team?.id === selectedTeam?.id) {
        const playerIndex = team?.players?.indexOf(player);
        team?.players?.splice(playerIndex, 1);
      }

      return team;
    });

    setTeams(newTeams);
  }, [teams]);

  return {
    teams,
    newPlayer,
    selectedTeam,
    handleRemoveTeam,
    handleSelectTeam,
    handleAddNewPlayer,
    handleRemovePlayer,
		handleNewPlayerChangeText,
  };
};
