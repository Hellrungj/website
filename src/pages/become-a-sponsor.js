import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { container } from '../lib/styles';
import { lighten } from 'polished';

export default function Prospectus() {
  const theme = Layout.getTheme();
  const styles = {
    main: {
      h2: {
        margin: '2rem auto',
      },
      h3: {
        margin: '2rem auto 1rem',
      },
      table: {
        width: '100%',
        borderCollapse: 'collapse',
        td: {
          padding: '.5rem .2rem',
        },
        tbody: {
          tr: {
            '&:nth-child(even)': {
              td: {
                backgroundColor: lighten(0.1, theme.colors.light),
              },
            },
            td: {
              textAlign: 'center',
              '&:first-of-type': {
                textAlign: 'left',
              },
            },
          },
        },
      },
      ul: {
        marginLeft: '3rem',
      },
    },
  };

  return (
    <Layout>
      <SEO
        title="Sponsoring"
        description="Contact us about sponsoring today!"
      />
      <main css={[container, { fontSize: '1.4rem' }, styles.main]}>
        <h2>Sponsoring</h2>

        <p>
          UndergroundJS will bring together 250 of Nashville's talented
          developer market to share with them some of most amazing things
          happening in our community. From side project and multi-team efforts
          to community involvement and personal growth.
        </p>

        <p>
          We will be hosting multiple session and long breaks during our single
          day event to promote a learning and social environment.
        </p>

        <h3>Here are a list of our sponsorship offerings:</h3>

        <ul>
          <li>Booth (high-top, 4' or 6')</li>
          <li>Branding on T Shirt</li>
          <li>Branding on Banners</li>
          <li>Branding on Printed Media</li>
          <li>Branding on Website</li>
          <li>Conference Tickets</li>
        </ul>

        <h3>Exclusive Sponsorship Options:</h3>
        <ul>
          <li>After party host</li>
          <li>Lunch or Breakfast</li>
          <li>Coffee</li>
          <li>Lanyard</li>
          <li>Badges</li>
          <li>Swag Bag</li>
          <li>VIP Dinner (Speakers and Volunteers)</li>
          <li>Address attendees during opening remarks</li>
        </ul>

        <p>
          We want to provide you with the best sponsoring experience custom for
          your business. To find out more email us.
        </p>

        <a href="mailto:sponsorships@undergroundjs.com">Contact us!</a>
      </main>
    </Layout>
  );
}
