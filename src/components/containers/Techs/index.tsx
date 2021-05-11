import { Text, Grid, GridItem } from '@chakra-ui/react';
import Tooltip from '@components/common/tooltip';
import siteConfig from '@config/site-config.json';
import useMotion from '@hooks/use-motion';
import { Color } from '@hooks/use-color-map';
import { useContext } from 'react';
import { Container } from '@components/containers';

const index: React.FC = () => {
  const MotionGridItem = useMotion(GridItem);
  const { cardBg } = useContext(Color);

  return (
    <Container header="Technologies I use">
      <Grid templateColumns={['repeat(2,1fr)', 'repeat(3,1fr)', 'repeat(5,1fr)']} gap={4}>
        {/* eslint-disable-next-line @typescript-eslint/no-shadow */}
        {siteConfig.author.techs.map((tech, index) => (
          <Tooltip content={tech.name} place="top" key={index.toString()}>
            <MotionGridItem
              whileHover={{ scale: 1.05 }}
              py="2"
              px="4"
              cursor="pointer"
              minW="120px"
              boxShadow="md"
              backgroundColor={cardBg}
              borderRadius="md"
              userSelect="none"
            >
              <i
                className={`devicon-${tech.name.toLowerCase()}-plain colored`}
                style={{
                  paddingRight: 'var(--theme-space-2)',
                  textAlign: 'center',
                  display: 'inline-flex',
                  alignItems: 'center',
                }}
              />
              <Text as="span" textAlign="center" fontWeight="semibold">
                {tech.name}
              </Text>
            </MotionGridItem>
          </Tooltip>
        ))}
      </Grid>
    </Container>
  );
};

export default index;
