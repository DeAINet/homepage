import {
  IconTwitter, IconHome, IconGithubLogo, IconSend, IconMail,
} from '@douyinfe/semi-icons';
import classNames from 'classnames';
import { Box } from './styled';

export const email_link = 'mailto:contact@saas3.io';
export const twitter_link = 'https://twitter.com/SaaS3Lab';
export const telegram_link = 'https://t.me/saas3dao';
export const github_link = 'https://github.com/SaaS3-Foundation';
export const map_link = 'https://goo.gl/maps/L4vicaLurYULHQ8Z6';
export const discord_link = 'https://discord.gg/dNENvenx';

function ContactBar({ className }) {
  const contacts = [
    { title: 'contact@saas3.io', href: email_link, icon: <IconMail /> },
    { title: '@SaaS3Lab', href: twitter_link, icon: <IconTwitter /> },
    { title: '@SaaS3DAO', href: telegram_link, icon: <IconSend /> },
    { title: 'SaaS3-Foundation', href: github_link, icon: <IconGithubLogo /> },
    { title: 'Singapore', href: map_link, icon: <IconHome /> },
  ];

  function getContactsNode() {
    return contacts.map((con, i) => (
      <a
        className="contact-unfold flex items-center text-white overflow-hidden cursor-pointer whitespace-nowrap"
        href={con.href}
        target="_blank"
        rel="noreferrer"
        key={i}
      >
        {con.icon}
        <div className="contact-unfold-text align-middle">{con.title}</div>
      </a>
    ));
  }

  return (
    <Box className={classNames('contact-bar flex items-center justify-center', className)}>
      {getContactsNode()}
      <a className="contact-unfold discord fill-white" href={discord_link} target="_blank" rel="noreferrer">
        <svg
          t="1662348174451"
          className="icon"
          viewBox="0 0 1280 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2201"
        >
          <path
            // eslint-disable-next-line max-len
            d="M1049.062 139.672a3 3 0 0 0-1.528-1.4A970.13 970.13 0 0 0 808.162 64.06a3.632 3.632 0 0 0-3.846 1.82 674.922 674.922 0 0 0-29.8 61.2 895.696 895.696 0 0 0-268.852 0 619.082 619.082 0 0 0-30.27-61.2 3.78 3.78 0 0 0-3.848-1.82 967.378 967.378 0 0 0-239.376 74.214 3.424 3.424 0 0 0-1.576 1.352C78.136 367.302 36.372 589.38 56.86 808.708a4.032 4.032 0 0 0 1.53 2.75 975.332 975.332 0 0 0 293.65 148.378 3.8 3.8 0 0 0 4.126-1.352A696.4 696.4 0 0 0 416.24 860.8a3.72 3.72 0 0 0-2.038-5.176 642.346 642.346 0 0 1-91.736-43.706 3.77 3.77 0 0 1-0.37-6.252 502.094 502.094 0 0 0 18.218-14.274 3.638 3.638 0 0 1 3.8-0.512c192.458 87.834 400.82 87.834 591 0a3.624 3.624 0 0 1 3.848 0.466 469.066 469.066 0 0 0 18.264 14.32 3.768 3.768 0 0 1-0.324 6.252 602.814 602.814 0 0 1-91.78 43.66 3.75 3.75 0 0 0-2 5.222 782.11 782.11 0 0 0 60.028 97.63 3.728 3.728 0 0 0 4.126 1.4A972.096 972.096 0 0 0 1221.4 811.458a3.764 3.764 0 0 0 1.53-2.704c24.528-253.566-41.064-473.824-173.868-669.082zM444.982 675.16c-57.944 0-105.688-53.174-105.688-118.478s46.818-118.482 105.688-118.482c59.33 0 106.612 53.64 105.686 118.478 0 65.308-46.82 118.482-105.686 118.482z m390.76 0c-57.942 0-105.686-53.174-105.686-118.478s46.818-118.482 105.686-118.482c59.334 0 106.614 53.64 105.688 118.478 0 65.308-46.354 118.482-105.688 118.482z"
            p-id="2202"
          />
        </svg>
      </a>
    </Box>
  );
}

export default ContactBar;
