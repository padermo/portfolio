const CV = process.env.NEXT_PUBLIC_CV;
const LinkedIn = 'https://www.linkedin.com/in/fabioestevezeh/';
const GitHub = 'https://github.com/padermo';

export const viewCV = () => {
  window.open(CV, '_blank');
}

export const viewLinkedIn = () => {
  window.open(LinkedIn, '_blank');
}

export const viewGitHub = () => {
  window.open(GitHub, '_blank');
}