import { Text, Grid, Link, Flex, Spacer, Box, Heading, useColorModeValue, Img } from '@chakra-ui/react';
import { Container, Card } from '@components/containers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { ErrorOrRepo } from '../../../pages/index';

interface ProjectsProps {
  readonly projects: ErrorOrRepo;
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => (
  <Container id="projects" header="My Github projects">
    <Grid templateColumns={['repeat(1, 1fr)', 'repeat(1,1fr)', 'repeat(2, 1fr)']} gap={4}>
      {typeof projects !== 'string' ? (
        projects.map((proj, index) => (
          <Card hover={{ scale: 1.025 }} key={index.toString()}>
            <Link href={proj.link} isExternal>
              <Flex flexDirection="column" py="2" px="4">
                <Flex alignItems="center">
                  <Heading as="h3" fontSize="lg" color="blue.500" fontWeight="medium">
                    {proj.name}
                  </Heading>
                  <Spacer />
                  <FontAwesomeIcon icon={['fab', 'github']} />
                </Flex>
                <Text noOfLines={2} color={useColorModeValue('gray.600', 'gray.300')}>
                  {proj.desc}
                </Text>
                <Spacer />
                <Flex mt="4" alignItems="center">
                  <Img
                    boxSize="18px"
                    src={`/logos/${proj.lang?.toLowerCase()}.svg`}
                    mr="2"
                    display="inline-flex"
                    alt={proj.lang?.toLowerCase()}
                  />
                  <Text>{proj.lang}</Text>
                  <Spacer />
                  {/* {proj.fork && <FontAwesomeIcon icon={['fas', 'code-branch']} />} */}
                  <Text as="span" display="inline-block" px="2">
                    {proj.fork_count}
                  </Text>
                  <FontAwesomeIcon icon={['fas', 'code-branch']} />

                  <Text as="span" display="inline-block" px="2">
                    {proj.star}
                  </Text>
                  <FontAwesomeIcon icon={['fas', 'star']} />
                </Flex>
              </Flex>
            </Link>
          </Card>
        ))
      ) : (
        <Box textAlign="center">{projects}</Box>
      )}
    </Grid>
  </Container>
);

export default Projects;
