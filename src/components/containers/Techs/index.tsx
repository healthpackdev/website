import { Text, Grid, Img } from '@chakra-ui/react';
import siteConfig from '@config/site-config.json';
import { Container, Card } from '@components/containers';

const index: React.FC = () => (
  <Container header="Technologies I use">
    <Grid templateColumns={['repeat(2,1fr)', 'repeat(3,1fr)', 'repeat(5,1fr)']} gap={4}>
      {siteConfig.author.techs.map((tech, index) => (
        <Card
          display="flex"
          alignItems="center"
          py="2"
          px="4"
          hover={{ scale: 1.05 }}
          minW="120px"
          userSelect="none"
          key={index.toString()}
        >
          <Img
            src={`/logos/${tech.name.toLowerCase()}.svg`}
            alt={tech.name.toLowerCase()}
            boxSize="18px"
            display="inline-block"
            mr="2"
            alignSelf="center"
          />
          <Text as="span" textAlign="center" fontWeight="semibold">
            {tech.name}
          </Text>
        </Card>
      ))}
    </Grid>
  </Container>
);

export default index;
