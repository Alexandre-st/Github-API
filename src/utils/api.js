/* eslint-disable import/prefer-default-export */
// Ici on va gérer la transformation des données de l'API
export const realData = (list) => list.map((repo) => ({
  id: repo.id,
  image: repo.owner.avatar_url,
  title: repo.name,
  organization: repo.owner.login,
  description: repo.description || 'No description provided :(',
  private: repo.private,
}));
