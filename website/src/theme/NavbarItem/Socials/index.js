import React from 'react';
import { FaDiscord, FaInstagram, FaMastodon, FaGithub } from 'react-icons/fa';

export default function SocialsNavbarItem() {
  return (
    <div className="navbar-socials">
      <a className="iconBtn" href="https://discord.com/invite/QEjqnEy4aT" target="_blank" rel="noopener" aria-label="Discord"><FaDiscord /></a>
      <a className="iconBtn" href="https://www.instagram.com/coollab_art" target="_blank" rel="noopener" aria-label="Instagram"><FaInstagram /></a>
      <a className="iconBtn" href="https://mastodon.social/@Coollab" target="_blank" rel="noopener" aria-label="Mastodon"><FaMastodon /></a>
      <a className="iconBtn" href="https://github.com/Coollab-Art/Coollab" target="_blank" rel="noopener" aria-label="GitHub"><FaGithub /></a>
    </div>
  );
}
