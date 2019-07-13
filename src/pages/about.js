import React from 'react';
import { Styled } from 'theme-ui';
import { Container } from 'theme-ui/layout';
import Layout from 'gatsby-theme-conference/src/components/layout';
import { graphql, useStaticQuery } from 'gatsby';
import Button from 'gatsby-theme-conference/src/components/button';

const OrganizerCard = ({ name, bio, image }) => {
  const styles = {
    organizerCard: {
      background: 'lightGrey',
      padding: '1.25rem',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      margin: '.25rem',
    },
    organizerImage: {
      width: '100px',
      height: '100px',
      borderRadius: '50%',
      marginRight: '1rem',
    },
    organizerName: { fontWeight: 'bold' },
    organizerBio: { fontSize: '1.2rem' },
  };

  return (
    <div css={styles.organizerCard}>
      <img src={image.src} css={styles.organizerImage} alt={image.alt} />
      <div>
        <span css={styles.organizerName}>{name}</span>
        <p css={styles.organizerBio}>{bio}</p>
      </div>
    </div>
  );
};

export default () => {
  const styles = {
    organizerList: {
      display: 'grid',
      gridAutoRows: 'minmax(200px, auto)',
      gridGap: '1rem',
      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
      margin: '2rem',
    },
  };

  const {
    allOrganizersYaml: { nodes: organizers },
  } = useStaticQuery(graphql`
    query OrganizerQuery {
      allOrganizersYaml {
        nodes {
          id
          name
          bio
          image {
            src
            alt
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <Container>
        <Styled.h2>About</Styled.h2>
        <Styled.p>
          UndergroundJS was founded to highlight and level up our local
          community. By being community focused, our goal is to share different
          amazing projects, companies, and people in the Nashville community.
        </Styled.p>
        <Styled.p>
          Underground JS is a nonprofit event facilitated by TechFed Nashville,
          a Tennessee nonprofit organization whose mission is to support and
          grow the grassroots tech talent in Middle Tennessee through
          educational events and groups. TechFed provides financial stewardship,
          risk management and volunteer leadership development for
          Nashville-area technology events.
        </Styled.p>
        <h4>
          Join us as we celebrate our accomplishments and failures while
          inspiring and empowering our future.
        </h4>
        <Button href="mailto:chair@undergroundjs.com?subject=About">
          Contact Us
        </Button>
        <Styled.h2>Organizers</Styled.h2>
        <div css={styles.organizerList}>
          {organizers.map((organizer, i) => (
            <OrganizerCard key={i} {...organizer} />
          ))}
        </div>
      </Container>
    </Layout>
  );
};
