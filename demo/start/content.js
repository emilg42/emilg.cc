/**
 * Shared content of the start page versions. Projects and languages come from
 * github.com/emilg42; the short texts marked "placeholder" are mine — edit freely.
 */
export const links = {
  github: 'https://github.com/emilg42',
  twitter: 'https://twitter.com/emilg42',
  instagram: 'https://www.instagram.com/emil.g42',
  mail: 'contact@emilg.cc',
};

// sections the header links to, in page order
export const sections = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

// typewriter lines, from the old About section (demo 1); 1a–1c type the tagline once
export const typed = ['I develop software.', 'I build things.'];
export const tagline = 'I like to build things.';

// placeholders
export const lead = 'Developer from Germany, into C, Python, Linux and event-based vision.';
export const about = 'I like small, fast tools and software that meets the real world — from window managers to event cameras.';
export const contact = 'Have a project, a question or just want to say hi? My inbox is open.';

export const highlights = [
  { icon: 'terminal', title: 'Systems', text: 'C · dwm · dmenu' },
  { icon: 'aperture', title: 'Vision', text: 'Event-based cameras' },
  { icon: 'code', title: 'Web', text: 'Astro · this site' },
  { icon: 'pin', title: 'Germany', text: 'Where I live' },
];

export const projects = [
  { name: 'mvu', art: 'events', lang: 'Python', stars: 2, text: 'Cut and export event-based camera streams.', tags: ['Python', 'Event cameras'] },
  { name: 'dmenu', art: 'menu', lang: 'C', stars: 3, text: 'My build of dmenu, the fast keyboard menu.', tags: ['C', 'X11', 'suckless'] },
  { name: 'dwm', art: 'tiles', lang: 'C', stars: 2, text: 'My build of dwm, the tiling window manager.', tags: ['C', 'X11', 'suckless'] },
  { name: 'cpong', art: 'pong', lang: 'C', stars: 1, text: 'Pong, written in plain C.', tags: ['C', 'Game'] },
].map((project) => ({ ...project, url: `https://github.com/emilg42/${project.name}` }));

export const skills = [
  { name: 'C', note: 'systems & tools' },
  { name: 'Python', note: 'tools & data' },
  { name: 'C++', note: 'vision SDKs' },
  { name: 'JavaScript', note: 'the web' },
  { name: 'Linux', note: 'daily driver' },
  { name: 'Vim', note: 'editor' },
  { name: 'Git', note: 'version control' },
  { name: 'Astro', note: 'this site' },
];

// demo: what the dots behind the 1a photo do on hover (Portrait.astro)
export const dotHovers = [
  { id: 'still', name: 'Still', text: 'The dots stay where they are; only the photo lifts a little.' },
  { id: 'drift', name: 'Drift', text: 'The dots lean a few pixels away from the pointer, like a layer further back.' },
  { id: 'ripple', name: 'Ripple', text: 'One soft wave runs out through the dots, nudging them and lighting them up for a moment.' },
  { id: 'repel', name: 'Repel', text: 'Dots near the pointer slide a few pixels out of its way and spring back, around the photo too.' },
  { id: 'soft', name: 'Soft ripple', text: 'The ripple at half the height, much fainter and slower.' },
];

// language dots, in the site's palette
export const langColor = { C: '#41a0ae', Python: '#3ec995', 'C++': '#36669c', JavaScript: '#8fcb76' };
