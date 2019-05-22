import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import ExternalLink from '../components/ExternalLink';
import { Link } from 'gatsby';
import { theme, container } from '../lib/styles';
import { SponsorIcon, TwitterIcon, EmailIcon } from '../icons';

export default function HomePage() {
  const styles = {
    cardContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    card: {
      margin: '2rem',
      boxShadow: '4px 4px 8px rgba(0,0,0,0.2)',
      minWidth: '300px',
    },
    cardHeader: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '250px',
      img: {
        width: '40%',
      },
    },
    cardBody: {
      padding: '2rem',
    },
    ticketsCTA: {
      fontSize: '3rem',
      padding: '1rem',
      margin: '.5rem',
      color: '#111 !important',
      backgroundColor: theme.colors.orange,
      textDecoration: 'none !important',
    },
  };

  return (
    <Layout>
      <SEO title="Home" />
      <main css={[container, { fontSize: '1.4rem' }]}>
        <h3 css={{ margin: '2rem 0', textAlign: 'center' }}>
          Date: August 2nd, 2019
        </h3>

        <h3 css={{ margin: '2rem 0', textAlign: 'center' }}>
          <p>
            Location:{' '}
            <ExternalLink to="https://www.rocketown.com/">
              Rocketown
            </ExternalLink>
          </p>
          <span>
            601 Fourth Ave South
            <br />
            Nashville, TN 37210
          </span>
        </h3>

        <div css={{ display: 'flex', justifyContent: 'center' }}>
          <ExternalLink
            to="https://www.eventbrite.com/e/undergroundjs-tickets-61081666910?aff=website"
            css={styles.ticketsCTA}
          >
            Buy Tickets Now!
          </ExternalLink>
        </div>
        <p>
          Underground JS is a community-driven single day conference in
          Nashville focused on JavaScript and the its ecosystem, but more
          importantly our Nashville community.
        </p>

        <p>
          <Link to="about">
            Read more about our mission and the team on our about page
          </Link>
        </p>

        <div css={styles.cardContainer}>
          <div css={styles.card}>
            <div
              css={[
                styles.cardHeader,
                { backgroundColor: theme.colors.yellow },
              ]}
            >
              <img src={EmailIcon} alt="" />
            </div>
            <div css={styles.cardBody}>
              <h3>Join our newsletter</h3>
              <ExternalLink
                to="https://mailchi.mp/965a090c40cc/undergroundjs"
                css={styles.cardCTA}
              >
                Subscribe
              </ExternalLink>
            </div>
          </div>
          <div css={styles.card}>
            <div
              css={[
                styles.cardHeader,
                { backgroundColor: theme.colors.orange },
              ]}
            >
              <img src={SponsorIcon} alt="" />
            </div>
            <div css={styles.cardBody}>
              <h3>Become a Sponsor?</h3>
              <Link to="/become-a-sponsor" css={styles.cardCTA}>
                Sponsorship
              </Link>
            </div>
          </div>
          <div css={styles.card}>
            <div
              css={[
                styles.cardHeader,
                { backgroundColor: theme.colors.burntOrange },
              ]}
            >
              <img src={TwitterIcon} alt="" />
            </div>
            <div css={styles.cardBody}>
              <h3>Twitter</h3>
              <ExternalLink
                to="https://twitter.com/undergroundjs"
                css={styles.cardCTA}
              >
                Follow
              </ExternalLink>
            </div>
          </div>
        </div>

        <p>
          Underground JS is dedicated to a harassment-free conference experience
          for everyone.
          <br />
          <Link to="/conduct">Code of Conduct</Link>
        </p>
      </main>
    </Layout>
  );
}
