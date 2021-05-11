import { Text, Grid, GridItem, Link, Flex, Spacer, Box, Heading } from '@chakra-ui/react';
import { Container } from '@components/containers';
import useMotion from '@hooks/use-motion';
import { Color } from '@hooks/use-color-map';
import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IRepo {
  link: string;
  name: string;
  star: number;
  desc: string;
}
interface IError {
  readonly msg: string;
  readonly error: Boolean;
}
type ErrorOrRepo = Array<IRepo> & IError;

interface ProjectsProps {
  readonly projects: ErrorOrRepo;
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  // made with types
  const MotionGridItem = useMotion(GridItem);
  const { cardBg, mutedText } = useContext(Color);

  return (
    <Container id="projects" header="My Github projects">
      <Grid templateColumns={['repeat(1, 1fr)', 'repeat(1,1fr)', 'repeat(2, 1fr)']} gap={4}>
        {/* // eslint-disable-next-line no-constant-condition */}
        {!projects.error ? (
          projects.map((proj, index) => (
            <MotionGridItem
              whileHover={{ scale: 1.025 }}
              backgroundColor={cardBg}
              boxShadow="md"
              key={index.toString()}
              borderRadius="lg"
            >
              <Link href={proj.link}>
                <Flex flexDirection="column" py="2" px="4">
                  <Flex alignItems="center">
                    <Heading as="h3" fontSize="lg" color="blue.500">
                      {proj.name}
                    </Heading>
                    <Spacer />
                    <Box>
                      <Text as="span" display="inline-block" px="2">
                        {proj.star}
                      </Text>
                      <FontAwesomeIcon icon={['fas', 'star']} color="orange" />
                    </Box>
                  </Flex>
                  <Text noOfLines={2} color={mutedText}>
                    {proj.desc}
                  </Text>
                  <Spacer />
                  <Flex mt="4">
                    <i
                      className={`devicon-${proj.lang.toLowerCase()}-plain colored`}
                      style={{ paddingRight: 'var(--theme-space-2)', display: 'inline-flex', alignItems: 'center' }}
                    />
                    <Text>{proj.lang}</Text>
                    <Spacer />
                    {proj.fork && <FontAwesomeIcon icon={['fas', 'code-branch']} />}
                  </Flex>
                </Flex>
              </Link>
            </MotionGridItem>
          ))
        ) : (
          <Box textAlign="center">{projects.msg}</Box>
        )}
      </Grid>
    </Container>
  );
};

export default Projects;
