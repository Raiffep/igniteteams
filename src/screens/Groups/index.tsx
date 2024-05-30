import { FlatList } from "react-native";
import { useGroups } from "./hooks";
import {
  Header,
  Highlight,
  GroupCard,
  ListEmpty,
  Button,
} from "@components/index";
import { Container } from "./styles";
import { groupsStrings } from "./strings";

export const Groups = () => {
  const { groups } = useGroups();

  return (
    <Container>
      <Header />
      <Highlight
        title={groupsStrings.highlightTitle}
        subtitle={groupsStrings.highlightSubtitle}
      />
      <FlatList
        data={groups}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <GroupCard title={item.title} />}
        contentContainerStyle={groups?.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message={groupsStrings.listEmptyMessage} />
        )}
      />
      <Button title={groupsStrings.buttonTitle} />
    </Container>
  );
};
