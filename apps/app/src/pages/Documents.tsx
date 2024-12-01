import useGetDocumentsQuery from '@/hooks/query/useGetDocuments';
import { Text } from '@chakra-ui/react';

function Documents() {
  const { data, isLoading, error } = useGetDocumentsQuery();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Une erreur est survenue...</Text>;
  }

  if (data) {
    return <Text>Data to displauy</Text>;
  }

  return <></>;
}

export default Documents;
